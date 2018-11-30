'use strict';

// глобальный основной объект
let globalObj = {
  lifeUser: 100,
  lifeComputer: 100,
  round: 1,
  userName: null,
  intervalTimer: null,

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
  userCharacter:null,
  compCharacter:null
};

const firstPageInput = document.querySelector ('#firstPage-input');
const firstPageButtonStart = document.querySelector ('#firstPage-buttonStart');
const firstPage = document.querySelector('.firstPage');
const secondPageWrap = document.querySelector('.secondPage-wrap');
const formStart = document.querySelector('.firstPage-form');
const main = document.querySelector('.main');
const choiceHero = document.querySelector('.secondPage-hero');
const choiceArena = document.querySelector('.secondPage-field');
const secondPageLink = document.querySelector('.secondPage-link');
const sectionFight = document.querySelector('.section-fight');
const userHero = document.querySelector('.userHero');
const compHero = document.querySelector('.compHero');

firstPageInput.addEventListener ('input', activeStart);
firstPageButtonStart.disabled = true;

// функция изменения цвета кнопки на первой странице
function activeStart(){
    if (firstPageInput.value.length > 0) {
        firstPageButtonStart.style.color = 'orangered';
        firstPageButtonStart.disabled = false;
    }
}

// функция перехода с первой страницы на вторую
function activePage (event) {
    event.preventDefault();
    firstPage.classList.add('hide');
    secondPageWrap.classList.remove('hide');
    globalObj.userName = firstPageInput.value;
    formStart.reset();
}

formStart.addEventListener('submit', activePage);