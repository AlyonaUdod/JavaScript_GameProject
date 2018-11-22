'use strict'

let button=document.querySelector('button')
let four=document.querySelector('#run4')
let five=document.querySelector('#run5')
// class Personag={


function move(){
    four.classList.remove('statikOneR');
    four.classList.add('runPrRight');

    five.classList.remove('statikTwoL');
    five.classList.add('runPrLeft');
    console.log('sdfghjkl;');
    const timer=setTimeout(()=>{
        four.classList.remove('runPrRight');
    five.classList.remove('runPrLeft');
        four.classList.add('blockRight');
    five.classList.add('kickOneL');
    },2000)
    const block = setTimeout(()=>{
        four.classList.add('kickLOneS');
        four.classList.remove('blockRight');

    },3700)
    const backt =setTimeout(()=>{
        // back1
        four.classList.remove('kickLOneS');
        four.classList.add('backOne');
        five.classList.remove('kickOneL');
        five.classList.add('backTwo');
    },4700)
    const ba =setTimeout(()=>{
        four.classList.remove('backOne');
        four.classList.add('statikOneR');
        five.classList.remove('backTwo');
        five.classList.add('statikTwoL');
},7701)
}

button.addEventListener('click',move)
// animation
// создать кнопку при клику навішать функцию которая 
// будет актив анимация передвежения 2 персонажих через таймаут 3 секи 
// активируеться анимация на удар и потом через пол секит возврат на свои
//  позиции 