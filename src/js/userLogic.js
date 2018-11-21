'use strict'

let form = document.querySelector('form');
let but = document.querySelector('#submit');
let damage;
function atack() {
    let max = 20;
    let headMin = 10;
    let bodyMin = 5;
    let legsMin = 8;
    let def = document.querySelector('[name="defense"]:checked')
    let at = document.querySelector('[name="attack"]:checked')
    event.preventDefault();
    globalObj.user.atack = at.value;
    globalObj.user.defense = def.value;
    globalObj.round++;

    let damageHead = Math.floor(Math.random() * (max - headMin + 1) + headMin);
    let damageBody = Math.floor(Math.random() * (max - bodyMin + 1) + bodyMin);
    let damageLegs = Math.floor(Math.random() * (max - legsMin + 1) + legsMin);

    if (globalObj.user.atack === 'head') {
        globalObj.user.damage = damageHead;
    } else if (globalObj.user.atack === 'body') {
        globalObj.user.damage = damageBody;
    } else if (globalObj.user.atack === 'legs') {
        globalObj.user.damage = damageLegs;
    }
}

function userCompair() {
    if (globalObj.user.atack === 'head' && globalObj.computer.defense !== 'head') {
        globalObj.lifeComputer -= globalObj.user.damage;
    } else if (globalObj.user.atack === 'body' && globalObj.computer.defense !== 'body') {
        globalObj.lifeComputer -= globalObj.user.damage;
    } else if (globalObj.user.atack === 'legs' && globalObj.computer.defense !== 'legs') {
        globalObj.lifeComputer -= globalObj.user.damage;
    }
    if (globalObj.computer.atack === 'head' && globalObj.user.defense !== 'head') {
        globalObj.lifeUser -= globalObj.computer.damage;
    } else if (globalObj.computer.atack === 'body' && globalObj.user.defense !== 'body') {
        globalObj.lifeUser -= globalObj.computer.damage;
    } else if (globalObj.computer.atack === 'legs' && globalObj.user.defense !== 'legs') {
        globalObj.lifeUser -= globalObj.computer.damage;
    }
    console.log(globalObj)
    return globalObj;
};

function letHit (){
    atack();
    pcAction();
    userCompair();
    console.log(globalObj.lifeUser);
    console.log(globalObj.lifeComputer);
}
but.addEventListener('click', letHit);