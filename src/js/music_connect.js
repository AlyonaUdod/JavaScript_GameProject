'use strict';
let music = document.querySelector('#play');
let mstart = document.querySelector('#music_start');
let fight = document.querySelector('#figth-sound')
let mwinner = document.querySelector('#winner');
let mlooser = document.querySelector('#looser');
let soundOn = document.querySelector('#soundOn');
let kick = document.querySelector('#kick');
let draw = document.querySelector('#draw');

// function audio(){
//    music.play();
//   //  window.removeEventListener('mousemove', audio);
// }

// soundOn.addEventListener('click', audio);
function drawFunction(){
  fight.pause();
  draw.play();
}

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
  console.log('aaaaaaaaaaa');
  fight.pause();
  mlooser.play();
}
firstPageButtonStart.addEventListener('click', audio);
secondPageLink.addEventListener('click', fightStart);

console.log(music);