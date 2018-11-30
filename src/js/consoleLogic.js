 'use strict'

 const btn = document.querySelector('#submit');//стучим к кнопке
 const consoleDiv = document.querySelector('.console-log');//стучим в div

// функция вывода информации о раунде в консоль
 function describeFight () {
    let attackUser = null;
    let defenceUser = null;
    let attackComp = null;
    let defenceComp = null;
    let demageUser;
    let demageComp;
    if (globalObj.computer.damage===0) {
        demageUser = `Урон заблокирован.`;
    } else {
        demageUser =  ` Полученный урон составляет: ${globalObj.computer.damage}`;
    };

    if (globalObj.user.damage===0) {
        demageComp = `Урон заблокирован.`
    } else {
        demageComp = `Полученный урон составляет: ${globalObj.user.damage}`;
    };

    if (globalObj.user.atack === 'head') {
        attackUser = 'атаковал голову,';
    } else if (globalObj.user.atack === 'body'){
        attackUser = 'атаковал живот,';}
        else  if (globalObj.user.atack === 'legs') {
        attackUser = 'атаковал ноги,';
        }
        else  {
            attackUser = 'не атаковал'
            }

    if (globalObj.user.defence === 'head') {
            defenceUser = 'защитил голову';
        } else if (globalObj.user.defence === 'body') {
            defenceUser = 'защитил живот';}
            else if (globalObj.user.defence === 'legs'){
            defenceUser = 'защитил ноги'
            }
            else {defenceUser = 'и пропустил удар'}


     if (globalObj.computer.atack === 'head') {
            attackComp = 'атаковал голову,'}
        else if (globalObj.computer.atack === 'body') {
            attackComp = 'атаковал живот,';}
        else if (globalObj.computer.atack === 'legs'){
            attackComp = 'атаковал ноги,';}

        else {attackComp = 'не атаковал';}

    if (globalObj.computer.defence === 'head') {
        defenceComp = 'защитил голову'}
        else if (globalObj.computer.defence === 'body') {
            defenceComp = 'защитил живот';}
            else  if (globalObj.computer.defence === 'legs') {
                defenceComp = 'защитил ноги'
            }
            else {
                defenceComp = 'и пропустил удар'

            }
    let wrapDiv = document.createElement('div');
    wrapDiv.classList.add('console_pDiv-style');

    let pRound = document.createElement('p');
    pRound.classList.add('console_pRound-style');
    pRound.textContent = `Round: ${globalObj.round-1}`

    let pUser = document.createElement('p');
    pUser.classList.add('console_pUser-style');
    pUser.textContent = `${globalObj.userName} ${attackUser} ${defenceUser}. ${demageUser}`;

    let pComp = document.createElement('p');
    pComp.classList.add('console_pComp-style');
    pComp.textContent = `Соперник ${attackComp} ${defenceComp}. ${demageComp}`;

    let pImg = document.createElement('p');
    pImg.classList.add('console_pImg-style');
    pImg.textContent = '***';

    wrapDiv.prepend(pRound, pUser,pComp, pImg);
    consoleDiv.prepend(wrapDiv)
 }

