let btn = document.querySelector('#submit');

let globalObj = {
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

function pcAction() {
    event.preventDefault();

    // урон
    let maxValue = 20;
    let headValue = 10;
    let bodyValue = 5;
    let legsValue = 8;

    let damageHead = Math.floor(Math.random() * (maxValue - headValue + 1) + headValue);
    let damageBody = Math.floor(Math.random() * (maxValue - bodyValue + 1) + bodyValue);
    let damageLegs = Math.floor(Math.random() * (maxValue - legsValue + 1) + legsValue);

    // что будет атаковать пк
    let pcAttackArr = ['head', 'body', 'legs'];
    let pcAttack = pcAttackArr[Math.floor(Math.random() * pcAttackArr.length)];
    globalObj.computer.atack = pcAttack;
    console.log('computer.atack: ' + globalObj.computer.atack);

    // что будет дефить пк
    let pcDefArr = ['head', 'body', 'legs'];
    let pcDef = pcDefArr[Math.floor(Math.random() * pcDefArr.length)];
    globalObj.computer.defence = pcDef;
    console.log('computer.defence: ' + globalObj.computer.defence);

    if(globalObj.computer.atack === 'head'){
        globalObj.computer.damage = damageHead;
    }else if(globalObj.computer.atack === 'body'){
        globalObj.computer.damage = damageBody;
    }else if(globalObj.computer.atack === 'legs'){
        globalObj.computer.damage = damageLegs;
    }
}

btn.addEventListener('click', pcAction);