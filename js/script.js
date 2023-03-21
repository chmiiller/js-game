const hero = document.querySelector('.hero');
const pipe = document.querySelector('.pipe');

const jump = () => {
  hero.classList.add('jump');

  setTimeout(() => {
    hero.classList.remove('jump');
  }, 500);
}
document.addEventListener('keydown', jump);

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const heroPositionString = window.getComputedStyle(hero).bottom;
  const heroPosition = Number(heroPositionString.replace('px',''));

  if (pipePosition <= 120 && pipePosition > 10 &&  heroPosition <= 70) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    hero.style.animation = 'none';
    hero.style.bottom = `${heroPosition}px`;

    hero.src = './images/mario-hit.png';
    hero.style.width = '65px';
    hero.style.marginLeft = '40px';

    clearInterval(loop);
  }
}, 20);

