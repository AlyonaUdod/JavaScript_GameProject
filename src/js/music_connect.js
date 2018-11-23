'use strict';


let music = document.querySelector('#play');
let mstart = document.querySelector('#music_start');
let mwinner = document.querySelector('#winner');
let mlooser = document.querySelector('#looser');
function audio(){
   music.play();
   window.removeEventListener('mousemove', audio);

}

window.addEventListener('mousemove',audio);

function audioStart(){
  music.pause();
  mstart.play();
}

function mwin(){
  mwinner.play();
}

function mlooser(){
  mlooser.play();
}



let firstPageButtonStart = document.querySelector('.start');
firstPageButtonStart.addEventListener('click', audioStart);

