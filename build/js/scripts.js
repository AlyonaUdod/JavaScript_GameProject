'use strict';

var form = document.querySelector('form');
var but = document.querySelector('#submit');
var damage = void 0;

var globalObj = {
    lifeUser: 100,
    lifeComputer: 100,
    round: 1,
    userName: null,
    user: {
        atack: null,
        defense: null,
        damage: null
    },
    computer: {
        atack: null,
        defense: null,
        damage: null
    }
};
function atack() {
    var max = 20;
    var headMin = 10;
    var bodyMin = 5;
    var legsMin = 8;
    var def = document.querySelector('[name="defense"]:checked');
    var at = document.querySelector('[name="attack"]:checked');
    event.preventDefault();
    globalObj.user.atack = at.value;
    globalObj.user.defense = def.value;
    globalObj.round++;

    var damageHead = Math.floor(Math.random() * (max - headMin + 1) + headMin);
    var damageBody = Math.floor(Math.random() * (max - bodyMin + 1) + bodyMin);
    var damageLegs = Math.floor(Math.random() * (max - legsMin + 1) + legsMin);

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

    return globalObj;
};

but.addEventListener('click', atack);