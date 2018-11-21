'use strict';

var globalObj = {
    lifeUser: 100,
    lifeComputer: 100,
    round: 1,
    userName: null,

    user: {
        atack: null,
        defence: null,
        damage: null
    },

    computer: {
        atack: null,
        defence: null,
        damage: null
    }
};

var btn = document.querySelector('#submit');
function pcAction() {
    event.preventDefault();

    // урон
    var maxValue = 20;
    var headValue = 10;
    var bodyValue = 5;
    var legsValue = 8;

    var damageHead = Math.floor(Math.random() * (maxValue - headValue + 1) + headValue);
    var damageBody = Math.floor(Math.random() * (maxValue - bodyValue + 1) + bodyValue);
    var damageLegs = Math.floor(Math.random() * (maxValue - legsValue + 1) + legsValue);

    // что будет атаковать пк
    var pcAttackArr = ['head', 'body', 'legs'];
    var pcAttack = pcAttackArr[Math.floor(Math.random() * pcAttackArr.length)];
    globalObj.computer.atack = pcAttack;
    // console.log('computer.atack: ' + globalObj.computer.atack);

    // что будет дефить пк
    var pcDefArr = ['head', 'body', 'legs'];
    var pcDef = pcDefArr[Math.floor(Math.random() * pcDefArr.length)];
    globalObj.computer.defence = pcDef;
    // console.log('computer.defence: ' + globalObj.computer.defence);

    if (globalObj.computer.atack === 'head') {
        globalObj.computer.damage = damageHead;
    } else if (globalObj.computer.atack === 'body') {
        globalObj.computer.damage = damageBody;
    } else if (globalObj.computer.atack === 'legs') {
        globalObj.computer.damage = damageLegs;
    }
}

btn.addEventListener('click', pcAction);
'use strict';
'use strict';

var form = document.querySelector('#attack-defense');
var but = document.querySelector('#submit');
var damage = void 0;

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
    console.log(globalObj);
    return globalObj;
};

function letHit() {
    atack();
    pcAction();
    userCompair();
    console.log(globalObj.lifeUser);
    console.log(globalObj.lifeComputer);
}
but.addEventListener('click', letHit);