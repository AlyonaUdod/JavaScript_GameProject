'use strict'

const modal = document.querySelector('.fw-js-modal-backdrop');
const title = document.querySelector('.fw-modal-title');
const content = document.querySelector('.fw-modal-content');

const modalClose = document.querySelector('.fw-btn')
modalClose.addEventListener('click', activeTwoPageAndHideTreePage);

function won(won) {
  if(won === 1) {
    title.textContent = 'YOU WON!!!';
    content.style.backgroundImage = "url('./img/won.gif')";
  } else if(won === 2) {
    title.textContent = 'YOU LOSE';
    content.style.backgroundImage = "url('./img/lose.gif')";
  } else if (won === 3) {
    title.textContent = 'DRAW';
    content.style.backgroundImage = "url('./img/lose.gif')";
  }
}

function modalWindow({target}) {
  const valid = (name) => target.className.indexOf(name) > 0 ? true : false;
  if(valid('fw-js-close-modal')) {
    modal.classList.toggle('fw-modal-hidden');

  }
}

function showFinalWindow() {
  modal.classList.toggle('fw-modal-hidden');
}

function winOrLose() {
   clearInterval(globalObj.intervalTimer);
    if(parseInt(globalObj.lifeUser) <= 0 && parseInt(globalObj.lifeComputer) <= 0) {
      showFinalWindow();
      won(3);
     
    } else if(parseInt(globalObj.lifeUser) <= 0){
      showFinalWindow();
      won(2);

    } else if(parseInt(globalObj.lifeComputer) <= 0) {
      showFinalWindow();
      won(1);

    }
}

function activeTwoPageAndHideTreePage(){
  main.classList.add('hide');
  secondPageWrap.classList.remove('hide');
  modal.classList.toggle('fw-modal-hidden');
  
  globalObj = {
    lifeUser: 100,
    lifeComputer: 100,
    round: 1,
    intervalTimer: null,
    userName: globalObj.userName,

    user: {
        atack: null,
        defence: null,
        damage: null
    },
  
    computer: {
        atack: null,
        defence: null,
        damage: null
    },
  
    userHero: null,
    compHero: null,
    arena: null,
  };

  consoleDiv.innerHTML = '';

  playerHealth.pain(100);
  playerHealth.changeColor(100);
  compHealth.pain(100);
  compHealth.changeColor(100);

  form.reset();

  displayRound.textContent = `ROUND ${globalObj.round}`;

  removeOrangeBorderPageTwo ()
}

