'use strict'

let form = document.querySelector('#attack-defense');
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
    globalObj.user.defence = def.value;


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
    if (globalObj.user.atack === 'head' && globalObj.computer.defence !== 'head') {
        globalObj.lifeComputer -= globalObj.user.damage;
    } else if (globalObj.user.atack === 'body' && globalObj.computer.defence !== 'body') {
        globalObj.lifeComputer -= globalObj.user.damage;
    } else if (globalObj.user.atack === 'legs' && globalObj.computer.defence !== 'legs') {
        globalObj.lifeComputer -= globalObj.user.damage;
    } else {
        globalObj.user.damage = 0;
        globalObj.lifeComputer -= 0;
        console.log('Comp');
    }
    if (globalObj.computer.atack === 'head' && globalObj.user.defence !== 'head') {
        globalObj.lifeUser -= globalObj.computer.damage;
    } else if (globalObj.computer.atack === 'body' && globalObj.user.defence !== 'body') {
        globalObj.lifeUser -= globalObj.computer.damage;
    } else if (globalObj.computer.atack === 'legs' && globalObj.user.defence !== 'legs') {
        globalObj.lifeUser -= globalObj.computer.damage;
    } else {
        globalObj.computer.damage = 0;
        globalObj.lifeUser -= 0;
        console.log('User');
    }
    console.log(globalObj)
    return globalObj;
};


// при нажатии на кнопку Let's Hit! если не выбраны удар и защита - в консоль выводит текст - сделай выбор
function makeaChoise () {
    let def = document.querySelector('[name="defense"]:checked')
    let at = document.querySelector('[name="attack"]:checked')
    if (def && at) {
        letHit()
    } else {
        addH3()
    }
}

function letHit (){
        atack();
        pcAction();
        userCompair();
        describeFight();
        playerHealth.addDamage(globalObj.lifeUser);
        compHealth.addDamage(globalObj.lifeComputer);
        if (globalObj.lifeUser > 0 && globalObj.lifeComputer > 0) {
            timerStop();
        } else {
            winOrLose();
        }  
        console.log(globalObj.lifeUser);
        console.log(globalObj.lifeComputer); 
        form.reset()
        globalObj.user.atack = null;
        globalObj.user.defence = null;
}
but.addEventListener('click', makeaChoise);


function addH3 () {
    event.preventDefault();
    let H2 = document.createElement('h2');
    H2.textContent= 'Make a choise!'
    H2.classList.add('secondPage-subtitle')
    H2.style.fontSize ='66px';
    H2.style.color ='red';
    H2.style.textShadow ='4px 4px 5px black';
    consoleDiv.prepend(H2)
}

function timerStop () {
  but.disabled = true;
  but.style.opacity = .2;
  clearInterval(globalObj.intervalTimer);
  setTimeout(timer, 5000);
  displayRound.textContent = `ROUND ${globalObj.round}`;
}

function timerEnd () {
    globalObj.computer.damage = 0;
    globalObj.user.atack = 0;
    globalObj.user.defence = 0;
  pcAction();
  userCompair();
  describeFight();
  playerHealth.addDamage(globalObj.lifeUser);
  compHealth.addDamage(globalObj.lifeComputer);
  if (globalObj.lifeUser > 0 && globalObj.lifeComputer > 0) {
    timerStop();
    } else {
        winOrLose();
    }
}


