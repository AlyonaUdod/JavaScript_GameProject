'use strict';

var music = document.querySelector('#play');
var mstart = document.querySelector('#music_start');
var mwinner = document.querySelector('#winner');
var mlooser = document.querySelector('#looser');
function audio() {
  music.play();
  window.removeEventListener('mousemove', audio);
}

window.addEventListener('mousemove', audio);

function audioStart() {
  music.pause();
  mstart.play();
}

function mwin() {
  mwinner.play();
}

function mlooser() {
  mlooser.play();
}

var firstPageButtonStart = document.querySelector('.start');
firstPageButtonStart.addEventListener('click', audioStart);