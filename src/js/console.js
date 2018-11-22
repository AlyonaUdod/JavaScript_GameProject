 'use strict'
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

 const btn = document.querySelector('#submit');//стучим к кнопке

 const consoleDiv = document.querySelector('.console-log');//стучим в div


 function describeFight () {
    //  event.preventDefault();

    //  let pRound = document.createElement('p');
    //  pRound.classList.add('console_pRound-style');
    //  pRound.textContent = `Round : ${globalObject.round}`;
    //  consoleDiv.append(pRound);

    let attackUser = null;
    let defenceUser = null;
    let attackComp = null;
    let defenceComp = null;
    let demageUser;
    let demageComp;
    if (globalObj.computer.damage===0) {
        demageUser = `урон заблокирован`;
    } else {
        demageUser =  ` Полученный урон составляет: ${globalObj.computer.damage}`;
    };

    if (globalObj.user.damage===0) {
        demageComp = `урон заблокирован`
    } else {
        demageComp = `Полученный урон составляет: ${globalObj.user.damage}`;
    };


    if (globalObj.user.atack === 'head') {
        attackUser = 'голову';
    } else if (globalObj.user.atack === 'body'){
        attackUser = 'живот';}
        else {
        attackUser = 'ноги'
        }

    if (globalObj.user.defence === 'head') {
            defenceUser = 'голову';
        } else if (globalObj.user.defence === 'body') {
            defenceUser = 'живот';}
            else {
            defenceUser = 'ноги'
            }

     if (globalObj.computer.atack === 'head') {
        attackComp = 'голову'}
        else if (globalObj.computer.atack === 'body') {
        attackComp = 'живот';}
        else {
        attackComp = 'ноги';
        }

    if (globalObj.computer.defence === 'head') {
        defenceComp = 'голову'}
        else if (globalObj.computer.defence === 'body') {
            defenceComp = 'живот';}
            else {
                defenceComp = 'ноги'
            }
    let wrapDiv = document.createElement('div');
    wrapDiv.classList.add('console_pDiv-style');

    let pRound = document.createElement('p');
    pRound.classList.add('console_pRound-style');
    pRound.textContent = `Round: ${globalObj.round -1}`

    let pUser = document.createElement('p');
    pUser.classList.add('console_pUser-style');
    pUser.textContent = `${globalObj.userName} атаковал ${attackUser}, защитил ${defenceUser}. ${demageUser}`;

    let pComp = document.createElement('p');
    pComp.classList.add('console_pComp-style');
    pComp.textContent = `Соперник атаковал ${attackComp}, защитил ${defenceComp}. ${demageComp}`;

    let pImg = document.createElement('p');
    pImg.classList.add('console_pImg-style');
    pImg.textContent = '***';

    wrapDiv.prepend(pRound, pUser,pComp, pImg);
    consoleDiv.prepend(wrapDiv)
 }

//  btn.addEventListener('click',describeFight);
