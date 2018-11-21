'use strict';
const firstPageInput = document.querySelector ('#firstPage-input');
const firstPageButtonStart = document.querySelector ('#firstPage-buttonStart');
const firstPage = document.querySelector('.firstPage');
const secondPageWrap = document.querySelector('.secondPage-wrap');
const form = document.querySelector('.firstPage-form')
const main = document.querySelector('.main')

firstPageInput.addEventListener ('input', activeStart);

function activeStart(){
    if (firstPageInput.value.length > 0) {
        firstPageButtonStart.style.color = 'orangered';
    }
}

function activePage () {
    firstPage.classList.add('hide');
    secondPageWrap.classList.remove('hide');
    globalObj.userName = firstPageInput.value;
}

firstPageButtonStart.addEventListener('click', activePage);