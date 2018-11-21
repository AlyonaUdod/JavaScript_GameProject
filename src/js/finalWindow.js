'use strict'

const modal = document.querySelector('.fw-js-modal-backdrop');
const title = document.querySelector('.fw-modal-title');
const content = document.querySelector('.fw-modal-content');

modal.addEventListener('click', modalWindow);

function won(won) {
  if(won) {
    title.textContent = 'YOU WON!!!';
    content.style.backgroundImage = "url('./img/won.gif')";
  } else {
    title.textContent = 'YOU LOSE';
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

showFinalWindow();
won(false);

function winOrLose() {
  if(parseInt(globalObj.lifeUser) <= 0){
    showFinalWindow();
    won(false);
  } 
  if(parseInt(globalObj.lifeComputer) <= 0) {
    showFinalWindow();
    won(true);
  }
}
