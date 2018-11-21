'use strict';

var globalObject = {
    round: 1,
    userName: 'Ben',
    user: {
        atack: 'head',
        defence: 'legs',
        damage: 10
    },

    computer: {
        atack: 'legs',
        defence: 'body',
        damage: 20
    } //объект с глобальными переменными;

};var btn = document.querySelector('#submit'); //стучим к кнопке

var consoleDiv = document.querySelector('.console-log'); //стучим в div 


function describeFight() {
    event.preventDefault();

    //  let pRound = document.createElement('p');
    //  pRound.classList.add('console_pRound-style');
    //  pRound.textContent = `Round : ${globalObject.round}`;
    //  consoleDiv.append(pRound);

    var attackUser = null;
    var defenceUser = null;
    var attackComp = null;
    var defenceComp = null;

    if (globalObject.user.atack === 'head') {
        attackUser = 'голову';
    } else if (globalObject.user.atack === 'body') {
        attackUser = 'живот';
    } else {
        attackUser = 'ноги';
    }

    if (globalObject.user.defence === 'head') {
        defenceUser = 'голову';
    } else if (globalObject.user.defence === 'body') {
        defenceUser = 'живот';
    } else {
        defenceUser = 'ноги';
    }

    if (globalObject.computer.atack === 'head') {
        attackComp = 'голову';
    } else if (globalObject.user.atack === 'body') {
        attackComp = 'живот';
    } else {
        attackComp = 'ноги';
    }

    if (globalObject.computer.defence === 'head') {
        defenceComp = 'голову';
    } else if (globalObject.computer.defence === 'body') {
        defenceComp = 'живот';
    } else {
        defenceComp = 'ноги';
    }

    var pUser = document.createElement('p');
    pUser.classList.add('console_pUser-style');
    pUser.textContent = globalObject.userName + ' \u0430\u0442\u0430\u043A\u043E\u0432\u0430\u043B ' + attackUser + ', \u0437\u0430\u0449\u0438\u0442\u0438\u043B ' + defenceUser + ', \u0443\u0440\u043E\u043D \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442: ' + globalObject.user.damage;

    var pComp = document.createElement('p');
    pComp.classList.add('console_pComp-style');
    pComp.textContent = '\u0421\u043E\u043F\u0435\u0440\u043D\u0438\u043A \u0430\u0442\u0430\u043A\u043E\u0432\u0430\u043B ' + attackComp + ', \u0437\u0430\u0449\u0438\u0442\u0438\u043B ' + defenceComp + ', \u0443\u0440\u043E\u043D \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442: ' + globalObject.computer.damage;
    consoleDiv.prepend(pUser, pComp);
}

btn.addEventListener('click', describeFight);