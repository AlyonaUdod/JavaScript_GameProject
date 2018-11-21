'use strict';

var globalObj = {
    lifeUser: 100,
    lifeComputer: 100,
    round: 1,
    userName: 'Ben',

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
//  let globalObject = {
//       round: 1,
//       userName: 'Ben',
//       user: {
//           atack: 'head',
//           defence: 'legs',
//           damage: 10
//             },

//     computer: {
//           atack: 'legs',
//           defence: 'body',
//           damage: 20
//     }

//   }//объект с глобальными переменными;

var btn = document.querySelector('#submit'); //стучим к кнопке

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

    if (globalObj.user.atack === 'head') {
        attackUser = 'голову';
    } else if (globalObj.user.atack === 'body') {
        attackUser = 'живот';
    } else {
        attackUser = 'ноги';
    }

    if (globalObj.user.defence === 'head') {
        defenceUser = 'голову';
    } else if (globalObj.user.defence === 'body') {
        defenceUser = 'живот';
    } else {
        defenceUser = 'ноги';
    }

    if (globalObj.computer.atack === 'head') {
        attackComp = 'голову';
    } else if (globalObj.user.atack === 'body') {
        attackComp = 'живот';
    } else {
        attackComp = 'ноги';
    }

    if (globalObj.computer.defence === 'head') {
        defenceComp = 'голову';
    } else if (globalObj.computer.defence === 'body') {
        defenceComp = 'живот';
    } else {
        defenceComp = 'ноги';
    }

    var pUser = document.createElement('p');
    pUser.classList.add('console_pUser-style');
    pUser.textContent = globalObj.userName + ' \u0430\u0442\u0430\u043A\u043E\u0432\u0430\u043B ' + attackUser + ', \u0437\u0430\u0449\u0438\u0442\u0438\u043B ' + defenceUser + ', \u0443\u0440\u043E\u043D \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442: ' + globalObj.user.damage;

    var pComp = document.createElement('p');
    pComp.classList.add('console_pComp-style');
    pComp.textContent = '\u0421\u043E\u043F\u0435\u0440\u043D\u0438\u043A \u0430\u0442\u0430\u043A\u043E\u0432\u0430\u043B ' + attackComp + ', \u0437\u0430\u0449\u0438\u0442\u0438\u043B ' + defenceComp + ', \u0443\u0440\u043E\u043D \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442: ' + globalObj.computer.damage;
    consoleDiv.prepend(pUser, pComp);
}

//  btn.addEventListener('click',describeFight);
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
    globalObj.user.defence = def.value;
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
    describeFight();
    console.log(globalObj.lifeUser);
    console.log(globalObj.lifeComputer);
}
but.addEventListener('click', letHit);