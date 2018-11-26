'use strict'

function move(attackType) {
  let result = (compHero.getBoundingClientRect().left - userHero.getBoundingClientRect().right) / 2 + 20;
  moveCharacter(result, userHero, globalObj.userCharacter, 'left', attackType)
}

function compMove(attackType) {
    let result = (compHero.getBoundingClientRect().left - userHero.getBoundingClientRect().right) / 2 + 20;
    moveCharacter(result, compHero, globalObj.compCharacter, 'right', attackType)
}

function moveCharacter(result, hero, character, side, attackType) {
  hero.style[side] = `${result}px`;
  hero.style.backgroundImage = `url(../img/hero/${character}/user-${character}_run.gif)`;
  setTimeout(() => {
    console.log('attack USER', attackType);
    hero.style.backgroundImage = `url(${attackType})`;
    kickFunction();
  }, 1000)
  setTimeout(() => {
    hero.style.backgroundImage = `url(../img/hero/${character}/user-${character}_run.gif)`;
    hero.style.transform = side === 'left' ? 'scaleX(-1)' : 'scaleX(1)';

    hero.style[side] = '0';

  }, 2000)
  setTimeout(() => {
    hero.style.backgroundImage = `url(../img/hero/user-${character}.gif)`;
    hero.style.transform = side === 'left' ? 'scaleX(1)' : 'scaleX(-1)';
  }, 3000)
}

// animation
// создать кнопку при клику навішать функцию которая 
// будет актив анимация передвежения 2 персонажих через таймаут 3 секи 
// активируеться анимация на удар и потом через пол секит возврат на свои
// позиции
