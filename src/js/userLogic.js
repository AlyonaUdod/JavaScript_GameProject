'use strict'

let form = document.querySelector('#attack-defense');
let but = document.querySelector('#submit');
let damage;

// функция удара пользователя. 
function atack(event) {
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

// функция подсчета удара/защиты, вывод анимации. 
function userCompair() {
    if (globalObj.user.atack === 'head' && globalObj.computer.defence !== 'head') {
        globalObj.lifeComputer -= globalObj.user.damage;
        move(`./img/hero/${globalObj.userCharacter}/user-${globalObj.userCharacter}_jump.gif`);
    } else if (globalObj.user.atack === 'body' && globalObj.computer.defence !== 'body') {
        globalObj.lifeComputer -= globalObj.user.damage;
        move(`./img/hero/${globalObj.userCharacter}/user-${globalObj.userCharacter}_attack.gif`);
    } else if (globalObj.user.atack === 'legs' && globalObj.computer.defence !== 'legs') {
        globalObj.lifeComputer -= globalObj.user.damage;
        move(`./img/hero/${globalObj.userCharacter}/user-${globalObj.userCharacter}_attack2.gif`);
    } else {
        globalObj.user.damage = 0;
        globalObj.lifeComputer -= 0;
        compMove(`./img/hero/${globalObj.compCharacter}/user-${globalObj.compCharacter}_block.gif`);
        move(`./img/hero/${globalObj.userCharacter}/user-${globalObj.userCharacter}_attack.gif`);
        console.log('Comp');
    }
    if (globalObj.computer.atack === 'head' && globalObj.user.defence !== 'head') {
        globalObj.lifeUser -= globalObj.computer.damage;
        compMove(`./img/hero/${globalObj.compCharacter}/user-${globalObj.compCharacter}_jump.gif`);
    } else if (globalObj.computer.atack === 'body' && globalObj.user.defence !== 'body') {
        globalObj.lifeUser -= globalObj.computer.damage;
        compMove(`./img/hero/${globalObj.compCharacter}/user-${globalObj.compCharacter}_attack.gif`);
    } else if (globalObj.computer.atack === 'legs' && globalObj.user.defence !== 'legs') {
        globalObj.lifeUser -= globalObj.computer.damage;
        compMove(`./img/hero/${globalObj.compCharacter}/user-${globalObj.compCharacter}_attack2.gif`);
    } else {
        globalObj.computer.damage = 0;
        globalObj.lifeUser -= 0;
        move(`./img/hero/${globalObj.userCharacter}/user-${globalObj.userCharacter}_block.gif`);
        compMove(`./img/hero/${globalObj.compCharacter}/user-${globalObj.compCharacter}_attack.gif`);
        console.log('User');
    }
    console.log(globalObj)
    return globalObj;
};


// при нажатии на кнопку Let's Hit! если не выбраны удар и защита - в консоль выводит текст - сделай выбор.
function makeaChoise (event) {
    event.preventDefault()
    let def = document.querySelector('[name="defense"]:checked')
    let at = document.querySelector('[name="attack"]:checked')
    if (def && at) {
        letHit(event)
    } else {
        addTextToConsole()
    }
}

// основная функция удара. Запускает просчеты рандома, консоль, изменения уровня жизни.
function letHit (event){
        event.preventDefault();
        atack(event);
        pcAction();
        userCompair();
        describeFight();
        playerHealth.addDamage(globalObj.lifeUser);
        compHealth.addDamage(globalObj.lifeComputer);
        if (globalObj.lifeUser > 0 && globalObj.lifeComputer > 0) {
            timerStop();
        } else {
            setTimeout(winOrLose, 1500);
        }  
        form.reset()
        globalObj.user.atack = null;
        globalObj.user.defence = null;
        // console.log(globalObj.lifeUser);
        // console.log(globalObj.lifeComputer); 
}
but.addEventListener('click', makeaChoise);

// функция выводит в консоль подсказку - сделай выбор.
function addTextToConsole() {
    let H2 = document.createElement('h2');
    H2.textContent= 'Make a choise!'
    H2.classList.add('makeAChoise')
    consoleDiv.prepend(H2)
}

// функция отвечает за остановку таймера и его запуск после окончания анимации.
function timerStop () {
  but.disabled = true;
  but.style.opacity = .2;
  clearInterval(globalObj.intervalTimer);
  setTimeout(timer, 3000);
}

// функция запускает основную цепочку событий если игрок не успел нанести удар. 
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