'use strict'

const modal = document.querySelector('.fw-js-modal-backdrop');
const title = document.querySelector('.fw-modal-title');
const content = document.querySelector('.fw-modal-content');

const modalClose = document.querySelector('.fw-btn')
modalClose.addEventListener('click', activeTwoPageAndHideTreePage);

// функция отвечает за вывод текста и фоновой картинки в модальном окне
function won(won) {
  if(won === 1) {
    title.textContent = 'YOU WON!';
    content.style.backgroundImage = "url('./img/won.gif')";
    mwin();

  } else if(won === 2) {
    title.textContent = 'YOU LOST';
    content.style.backgroundImage = "url('./img/lose.gif')";
    mLoose();

  } else if (won === 3) {
    title.textContent = 'DRAW';
    content.style.backgroundImage = "url('./img/lose.gif')";
    drawFunction();
  }
}

// функция запускает модальное окно
function showFinalWindow() {
  modal.classList.toggle('fw-modal-hidden');
}

// функция запускается когда кто-то из игроков потерял всю жизнь.
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

// функия срабатывает при нажатии кнопки New Fight. Обновления всех полей всего для начала новой игры. Остается только имя игрока. 
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
  consoleDiv.innerHTML = '<h1 class="makeAChoise"> Make a choise! </h1>';
  healthRefresh();
  form.reset();
  displayRound.textContent = `ROUND ${globalObj.round}`;
  removeOrangeBorderPageTwo();
  music.play();
}