'use strict';
let music = document.querySelector('#play');
let mstart = document.querySelector('#music_start');
let fight = document.querySelector('#figth-sound')
let mwinner = document.querySelector('#winner');
let mlooser = document.querySelector('#looser');
let soundOn = document.querySelector('#soundOn');
let kick = document.querySelector('#kick');
let draw = document.querySelector('#draw');


// теги лежат в index.html 
// Запуски музыки при переходе с первой страницы на вторую. Со второй на третью.
// При каждом ударе. 3 варианта исхода боя.  

function kickFunction(){
  kick.play();
}

function audio(){
  music.play();
}

function fightStart(){
  music.pause();
  fight.play();
}

function mwin(){
  fight.pause();
  mwinner.play();
}

function mLoose(){
  fight.pause();
  mlooser.play();
}

function drawFunction(){
  fight.pause();
  draw.play();
}

firstPageButtonStart.addEventListener('click', audio);
secondPageLink.addEventListener('click', fightStart);