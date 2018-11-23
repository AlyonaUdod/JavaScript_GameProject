'use strict';
let music = document.querySelector('#play');
let mstart = document.querySelector('#music_start');
let fight = document.querySelector('#figth-sound')
let mwinner = document.querySelector('#winner');
let mlooser = document.querySelector('#looser');
let soundOn = document.querySelector('#soundOn')
function audio(){
   music.play();
  //  window.removeEventListener('mousemove', audio);
}

soundOn.addEventListener('click',audio);

function audioStart(){
  music.pause();
  mstart.play();
}

function fightStart(){
  mstart.pause();
  fight.play();
}

function mwin(){
  fight.pause();
  mwinner.play();
}

function mLoose(){
  console.log('aaaaaaaaaaa');
  fight.pause();
  mlooser.play();
}
firstPageButtonStart.addEventListener('click', audioStart);
secondPageLink.addEventListener('click', fightStart);

