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
     event.preventDefault();

    //  let pRound = document.createElement('p');
    //  pRound.classList.add('console_pRound-style');
    //  pRound.textContent = `Round : ${globalObject.round}`;
    //  consoleDiv.append(pRound);

    let attackUser = null;
    let defenceUser = null;
    let attackComp = null;
    let defenceComp = null;

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
        else if (globalObj.user.atack === 'body') {
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

    let pUser = document.createElement('p');
    pUser.classList.add('console_pUser-style');
    pUser.textContent = `${globalObj.userName} атаковал ${attackUser}, защитил ${defenceUser}, урон составляет: ${globalObj.user.damage}`;
    
    let pComp = document.createElement('p');
    pComp.classList.add('console_pComp-style');
    pComp.textContent = `Соперник атаковал ${attackComp}, защитил ${defenceComp}, урон составляет: ${globalObj.computer.damage}`;
    consoleDiv.prepend(pUser,pComp);
 }

//  btn.addEventListener('click',describeFight);