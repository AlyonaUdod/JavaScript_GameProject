'use strict';

function move(attackType) {
  var result = (compHero.getBoundingClientRect().left - userHero.getBoundingClientRect().right) / 2 + 40;
  moveCharacter(result, userHero, globalObj.userCharacter, 'left', attackType);
}

function compMove(attackType) {
  var result = (compHero.getBoundingClientRect().left - userHero.getBoundingClientRect().right) / 2 + 40;
  moveCharacter(result, compHero, globalObj.compCharacter, 'right', attackType);
}

function moveCharacter(result, hero, character, side, attackType) {
  hero.style[side] = result + 'px';
  hero.style.backgroundImage = 'url(./img/hero/' + character + '/user-' + character + '_run.gif)';
  hero.style.width = '20vh';
  hero.style.height = '20vh';
  hero.style.marginTop = '2vh';

  setTimeout(function () {
    console.log('attack USER', attackType);
    hero.style.backgroundImage = 'url(' + attackType + ')';
    hero.style.width = '20vh';
    hero.style.height = '20vh';
    hero.style.marginTop = '2vh';

    kickFunction();
  }, 1000);
  setTimeout(function () {
    hero.style.backgroundImage = 'url(./img/hero/' + character + '/user-' + character + '_run.gif)';
    hero.style.transform = side === 'left' ? 'scaleX(-1)' : 'scaleX(1)';
    hero.style.width = '20vh';
    hero.style.height = '20vh';
    hero.style.marginTop = '2vh';
    hero.style[side] = '0';
  }, 2000);
  setTimeout(function () {
    hero.style.backgroundImage = 'url(./img/hero/user-' + character + '.gif)';
    hero.style.transform = side === 'left' ? 'scaleX(1)' : 'scaleX(-1)';
    hero.style.width = '24vh';
    hero.style.height = '24vh';
    hero.style.marginTop = '0vh';
  }, 3000);
}

// animation
// создать кнопку при клику навішать функцию которая 
// будет актив анимация передвежения 2 персонажих через таймаут 3 секи 
// активируеться анимация на удар и потом через пол секит возврат на свои
// позиции
'use strict';

var btn = document.querySelector('#submit');

// функция атаки и защиты компьютера. 
function pcAction() {
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

// btn.addEventListener('click', pcAction);
'use strict';

var btn = document.querySelector('#submit'); //стучим к кнопке
var consoleDiv = document.querySelector('.console-log'); //стучим в div

// функция вывода информации о раунде в консоль
function describeFight() {
    var attackUser = null;
    var defenceUser = null;
    var attackComp = null;
    var defenceComp = null;
    var demageUser = void 0;
    var demageComp = void 0;
    if (globalObj.computer.damage === 0) {
        demageUser = '\u0423\u0440\u043E\u043D \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D.';
    } else {
        demageUser = ' \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u0439 \u0443\u0440\u043E\u043D \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442: ' + globalObj.computer.damage;
    };

    if (globalObj.user.damage === 0) {
        demageComp = '\u0423\u0440\u043E\u043D \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D.';
    } else {
        demageComp = '\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u0439 \u0443\u0440\u043E\u043D \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442: ' + globalObj.user.damage;
    };

    if (globalObj.user.atack === 'head') {
        attackUser = 'атаковал голову,';
    } else if (globalObj.user.atack === 'body') {
        attackUser = 'атаковал живот,';
    } else if (globalObj.user.atack === 'legs') {
        attackUser = 'атаковал ноги,';
    } else {
        attackUser = 'не атаковал';
    }

    if (globalObj.user.defence === 'head') {
        defenceUser = 'защитил голову';
    } else if (globalObj.user.defence === 'body') {
        defenceUser = 'защитил живот';
    } else if (globalObj.user.defence === 'legs') {
        defenceUser = 'защитил ноги';
    } else {
        defenceUser = 'и пропустил удар';
    }

    if (globalObj.computer.atack === 'head') {
        attackComp = 'атаковал голову,';
    } else if (globalObj.computer.atack === 'body') {
        attackComp = 'атаковал живот,';
    } else if (globalObj.computer.atack === 'legs') {
        attackComp = 'атаковал ноги,';
    } else {
        attackComp = 'не атаковал';
    }

    if (globalObj.computer.defence === 'head') {
        defenceComp = 'защитил голову';
    } else if (globalObj.computer.defence === 'body') {
        defenceComp = 'защитил живот';
    } else if (globalObj.computer.defence === 'legs') {
        defenceComp = 'защитил ноги';
    } else {
        defenceComp = 'и пропустил удар';
    }
    var wrapDiv = document.createElement('div');
    wrapDiv.classList.add('console_pDiv-style');

    var pRound = document.createElement('p');
    pRound.classList.add('console_pRound-style');
    pRound.textContent = 'Round: ' + (globalObj.round - 1);

    var pUser = document.createElement('p');
    pUser.classList.add('console_pUser-style');
    pUser.textContent = globalObj.userName + ' ' + attackUser + ' ' + defenceUser + '. ' + demageUser;

    var pComp = document.createElement('p');
    pComp.classList.add('console_pComp-style');
    pComp.textContent = '\u0421\u043E\u043F\u0435\u0440\u043D\u0438\u043A ' + attackComp + ' ' + defenceComp + '. ' + demageComp;

    var pImg = document.createElement('p');
    pImg.classList.add('console_pImg-style');
    pImg.textContent = '***';

    wrapDiv.prepend(pRound, pUser, pComp, pImg);
    consoleDiv.prepend(wrapDiv);
}
'use strict';

var modal = document.querySelector('.fw-js-modal-backdrop');
var title = document.querySelector('.fw-modal-title');
var content = document.querySelector('.fw-modal-content');

var modalClose = document.querySelector('.fw-btn');
modalClose.addEventListener('click', activeTwoPageAndHideTreePage);

// функция отвечает за вывод текста и фоновой картинки в модальном окне
function won(won) {
  if (won === 1) {
    title.textContent = 'YOU WON!';
    content.style.backgroundImage = "url('./img/won.gif')";
    mwin();
  } else if (won === 2) {
    title.textContent = 'YOU LOST';
    content.style.backgroundImage = "url('./img/lose.gif')";
    mLoose();
  } else if (won === 3) {
    title.textContent = 'DRAW';
    content.style.backgroundImage = "url('./img/lose.gif')";
    drawFunction();
  }
}

// функция запускает модальное окно
function showFinalWindow() {
  modal.classList.toggle('fw-modal-hidden');
}

// функция запускается когда кто-то из игроков потерял всю жизнь.
function winOrLose() {
  clearInterval(globalObj.intervalTimer);
  if (parseInt(globalObj.lifeUser) <= 0 && parseInt(globalObj.lifeComputer) <= 0) {
    showFinalWindow();
    won(3);
  } else if (parseInt(globalObj.lifeUser) <= 0) {
    showFinalWindow();
    won(2);
  } else if (parseInt(globalObj.lifeComputer) <= 0) {
    showFinalWindow();
    won(1);
  }
}

// функия срабатывает при нажатии кнопки New Fight. Обновления всех полей всего для начала новой игры. Остается только имя игрока. 
function activeTwoPageAndHideTreePage() {
  main.classList.add('hide');
  secondPageWrap.classList.remove('hide');
  modal.classList.toggle('fw-modal-hidden');

  globalObj = {
    lifeUser: 100,
    lifeComputer: 100,
    round: 1,
    intervalTimer: null,
    userName: globalObj.userName,
    user: {
      atack: null,
      defence: null,
      damage: null
    },
    computer: {
      atack: null,
      defence: null,
      damage: null
    },
    userHero: null,
    compHero: null,
    arena: null
  };
  consoleDiv.innerHTML = '<h1 class="makeAChoise"> Make a choise! </h1>';
  healthRefresh();
  form.reset();
  displayRound.textContent = 'ROUND ' + globalObj.round;
  removeOrangeBorderPageTwo();
  music.play();
}
'use strict';

// глобальный основной объект

var globalObj = {
    lifeUser: 100,
    lifeComputer: 100,
    round: 1,
    userName: null,
    intervalTimer: null,

    user: {
        atack: null,
        defence: null,
        damage: null
    },

    computer: {
        atack: null,
        defence: null,
        damage: null
    },

    userHero: null,
    compHero: null,
    arena: null,
    userCharacter: null,
    compCharacter: null
};

var firstPageInput = document.querySelector('#firstPage-input');
var firstPageButtonStart = document.querySelector('#firstPage-buttonStart');
var firstPage = document.querySelector('.firstPage');
var secondPageWrap = document.querySelector('.secondPage-wrap');
var formStart = document.querySelector('.firstPage-form');
var main = document.querySelector('.main');
var choiceHero = document.querySelector('.secondPage-hero');
var choiceArena = document.querySelector('.secondPage-field');
var secondPageLink = document.querySelector('.secondPage-link');
var sectionFight = document.querySelector('.section-fight');
var userHero = document.querySelector('.userHero');
var compHero = document.querySelector('.compHero');

firstPageInput.addEventListener('input', activeStart);
firstPageButtonStart.disabled = true;

// функция изменения цвета кнопки на первой странице
function activeStart() {
    if (firstPageInput.value.length > 0) {
        firstPageButtonStart.style.color = 'orangered';
        firstPageButtonStart.disabled = false;
    }
}

// функция перехода с первой страницы на вторую
function activePage(event) {
    event.preventDefault();
    firstPage.classList.add('hide');
    secondPageWrap.classList.remove('hide');
    globalObj.userName = firstPageInput.value;
    formStart.reset();
}

formStart.addEventListener('submit', activePage);
'use strict';
// Player

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var healthValueP = document.querySelector('#valueP');

// Computer
var healthValueC = document.querySelector('#valueC');

// Класс шкал здоровья

var Health = function () {
  function Health(healthValue, health) {
    _classCallCheck(this, Health);

    this.healthValue = healthValue;
    this.health = health;
  }

  _createClass(Health, [{
    key: 'addDamage',
    value: function addDamage(input) {
      this.health = input;
      if (this.health <= 0) {
        this.health = 0;
      }
      this.pain(this.health);
      this.changeColor(this.health);
    }
  }, {
    key: 'pain',
    value: function pain(health) {
      this.healthValue.style.width = health + '%';
    }
  }, {
    key: 'changeColor',
    value: function changeColor(health) {
      var _this = this;

      if (health >= 60) {
        setTimeout(function () {
          _this.healthValue.style.backgroundImage = 'linear-gradient(to top, #ffffff 0%, #00db00 25%, #00db00 50%, #00db00 75%, #ffffff 100% )';
        }, 1500);
      } else if (health > 25 && health < 60) {
        setTimeout(function () {
          _this.healthValue.style.backgroundImage = 'linear-gradient(to top, #ffffff 0%, #FF6800 25%, #FF6800 50%, #FF6800 75%, #ffffff 100% ';
        }, 1500);
      } else {
        setTimeout(function () {
          _this.healthValue.style.backgroundImage = 'linear-gradient(to top, #ffffff 0%, #F80000 25%, #F80000 50%, #F80000 75%, #ffffff 100% ';
        }, 1500);
      }
    }
  }]);

  return Health;
}();

// создание двух шкал здоровья


var playerHealth = new Health(healthValueP, globalObj.lifeUser);
var compHealth = new Health(healthValueC, globalObj.lifeComputer);

// функция обновления шкал жизни после окончания первой игры. Активируется нажатием кнопки New Fight
function healthRefresh() {
  playerHealth.pain(100);
  playerHealth.changeColor(100);
  compHealth.pain(100);
  compHealth.changeColor(100);
}
'use strict';

var music = document.querySelector('#play');
var mstart = document.querySelector('#music_start');
var fight = document.querySelector('#figth-sound');
var mwinner = document.querySelector('#winner');
var mlooser = document.querySelector('#looser');
var soundOn = document.querySelector('#soundOn');
var kick = document.querySelector('#kick');
var draw = document.querySelector('#draw');

// теги лежат в index.html 
// Запуски музыки при переходе с первой страницы на вторую. Со второй на третью.
// При каждом ударе. 3 варианта исхода боя.  

function kickFunction() {
  kick.play();
}

function audio() {
  music.play();
}

function fightStart() {
  music.pause();
  fight.play();
}

function mwin() {
  fight.pause();
  mwinner.play();
}

function mLoose() {
  fight.pause();
  mlooser.play();
}

function drawFunction() {
  fight.pause();
  draw.play();
}

firstPageButtonStart.addEventListener('click', audio);
secondPageLink.addEventListener('click', fightStart);
'use strict';
'use script';

var heroActive = false;
var fieldActive = false;

var hero = document.querySelectorAll('.hero');
var heroWrapper = document.querySelector('.secondPage-hero');
heroWrapper.addEventListener('click', activeHero);

function activeHero(event) {
  hero.forEach(function (x) {
    x === event.target ? heroActive = true : null;
    heroActive === true && fieldActive === true ? secondPageLink.style.color = 'orangered' : null;
    return x === event.target ? x.classList.add('active') : x.classList.remove('active');
  });
}

var field = document.querySelectorAll('.field');
var fieldWrapper = document.querySelector('.secondPage-field');
fieldWrapper.addEventListener('click', activeField);

function activeField(event) {
  field.forEach(function (x) {
    x === event.target ? fieldActive = true : null;
    heroActive === true && fieldActive === true ? secondPageLink.style.color = 'orangered' : null;
    return x === event.target ? x.classList.add('active') : x.classList.remove('active');
  });
};

function activePage3() {
  if (globalObj.arena && globalObj.userHero) {
    secondPageWrap.classList.add('hide');
    main.classList.remove('hide');
    var arrCompHero = [{
      img: './img/hero/user-colossus.gif',
      character: 'colossus'
    }, {
      img: './img/hero/user-mystique.gif',
      character: 'mystique'
    }, {
      img: './img/hero/user-redskull.gif',
      character: 'redskull'
    }, {
      img: './img/hero/user-starlord.gif',
      character: 'starlord'
    }];
    var randomOfarrCompHero = Math.floor(Math.random() * arrCompHero.length);
    globalObj.compHero = arrCompHero[randomOfarrCompHero].img;
    globalObj.compCharacter = arrCompHero[randomOfarrCompHero].character;
    // console.log(globalObj);
    sectionFight.style.backgroundImage = 'url(' + globalObj.arena + ')';
    timer();
    userHero.style.backgroundImage = 'url(' + globalObj.userHero + ')';
    compHero.style.backgroundImage = 'url(' + globalObj.compHero + ')';
    var nameUser = document.querySelector('.name');
    nameUser.textContent = globalObj.userName;
  } else {
    alert('Select hero and arena both');
  }
};
secondPageLink.addEventListener('click', activePage3);

function selectHero(evt) {
  globalObj.userHero = evt.target.dataset.url;
  globalObj.userCharacter = evt.target.dataset.character;
  console.log(globalObj);
};
choiceHero.addEventListener('click', selectHero);

function selectArena(evt) {
  globalObj.arena = evt.target.dataset.url;
  console.log(globalObj);
};
choiceArena.addEventListener('click', selectArena);

//функция убирает оранжевую рамку выделения при нажатии кнопки New Fight в конце игры. 
function removeOrangeBorderPageTwo() {
  heroActive = false;
  fieldActive = false;
  removeOrange();
}
function removeOrange() {
  hero.forEach(function (el) {
    return el.classList.remove('active');
  });
  field.forEach(function (el) {
    return el.classList.remove('active');
  });
}
'use strict';

var progressBar = document.querySelector('.progrLine-progress'); // подключаем к прогресс лайну
var pointer = document.getElementById('e-pointer'); //подключаем к кружечку
var displayOutput = document.querySelector('.display-remain-time'); // подключаем доступ к таймеру в html
var displayRound = document.querySelector('.roundName');
var startTimer = document.querySelector('.startTimer');

var round = 1;
var length = Math.PI * 2 * 100; // формула для расчета закрашивания pi *2 *R для ого чтобы узнать длинну кпуга

progressBar.style.strokeDasharray = length; //изменение закраски пройднного времени через CSS
var intervalTimer = void 0; // время интервала
var timeLeft = void 0; // время которое прошло
var timeDuration = 11; // время

function update(timeDuration, timeStep) {
    var offset = -length * timeDuration / timeStep;
    progressBar.style.strokeDashoffset = offset; // проходимость синей линиии заполнения против часовой стрелки
    pointer.style.transform = 'rotate(' + 360 * timeDuration / timeStep + 'deg)'; // проходимость белого шарика
}; //функция отвечает за закрашивание таймера

update(timeDuration, timeDuration); //обновление закрашивания бреущаое

function timer() {
    // функция для расчета времени
    displayRound.textContent = 'ROUND ' + globalObj.round;
    globalObj.round++;
    but.disabled = false;
    but.style.opacity = 1;
    displayOutput.style.color = "white";
    var remainTime = Date.now() + timeDuration * 1000; // время старта (время сейчас +15) фиксируем
    displayRound.classList.add("bounceIn"); // анимация для объявления раунда
    displayOutput.classList.remove("shake"); // анимиция для последних 5 секунд
    globalObj.intervalTimer = setInterval(function () {
        //зарускаем интервал для отсчета от 15 до 0
        timeLeft = Math.round((remainTime - Date.now()) / 1000); //значение оставшегося времени при каждом интревале, которое мы выводим на экран

        if (timeLeft <= 0) {
            // действия при дохождении к 0
            clearInterval(globalObj.intervalTimer);
            displayOutput.style.color = "white";
            timerEnd();
        } else if (timeLeft <= 5 && timeLeft > 0) {
            displayOutput.style.color = "red";
            displayRound.classList.remove("bounceIn");
            displayOutput.classList.add("shake");
        }
        displayTimeLeft(timeLeft);
    }, 1000); // показывает результат каждую секунду
}

function displayTimeLeft(timeLeft) {
    // выводит обновленное время на экран
    var timeNow = timeLeft % 60;
    displayOutput.textContent = '00:' + (timeNow < 10 ? '0' : '') + timeNow;
    update(timeLeft, timeDuration); // выводит обновленное закрашивание на экран
}
'use strict';

var form = document.querySelector('#attack-defense');
var but = document.querySelector('#submit');
var damage = void 0;

// функция удара пользователя. 
function atack(event) {
    var max = 20;
    var headMin = 10;
    var bodyMin = 5;
    var legsMin = 8;
    var def = document.querySelector('[name="defense"]:checked');
    var at = document.querySelector('[name="attack"]:checked');
    event.preventDefault();
    globalObj.user.atack = at.value;
    globalObj.user.defence = def.value;

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

// функция подсчета удара/защиты, вывод анимации. 
function userCompair() {
    if (globalObj.user.atack === 'head' && globalObj.computer.defence !== 'head') {
        globalObj.lifeComputer -= globalObj.user.damage;
        move('./img/hero/' + globalObj.userCharacter + '/user-' + globalObj.userCharacter + '_jump.gif');
    } else if (globalObj.user.atack === 'body' && globalObj.computer.defence !== 'body') {
        globalObj.lifeComputer -= globalObj.user.damage;
        move('./img/hero/' + globalObj.userCharacter + '/user-' + globalObj.userCharacter + '_attack.gif');
    } else if (globalObj.user.atack === 'legs' && globalObj.computer.defence !== 'legs') {
        globalObj.lifeComputer -= globalObj.user.damage;
        move('./img/hero/' + globalObj.userCharacter + '/user-' + globalObj.userCharacter + '_attack2.gif');
    } else {
        globalObj.user.damage = 0;
        globalObj.lifeComputer -= 0;
        compMove('./img/hero/' + globalObj.compCharacter + '/user-' + globalObj.compCharacter + '_block.gif');
        move('./img/hero/' + globalObj.userCharacter + '/user-' + globalObj.userCharacter + '_attack.gif');
        console.log('Comp');
    }
    if (globalObj.computer.atack === 'head' && globalObj.user.defence !== 'head') {
        globalObj.lifeUser -= globalObj.computer.damage;
        compMove('./img/hero/' + globalObj.compCharacter + '/user-' + globalObj.compCharacter + '_jump.gif');
    } else if (globalObj.computer.atack === 'body' && globalObj.user.defence !== 'body') {
        globalObj.lifeUser -= globalObj.computer.damage;
        compMove('./img/hero/' + globalObj.compCharacter + '/user-' + globalObj.compCharacter + '_attack.gif');
    } else if (globalObj.computer.atack === 'legs' && globalObj.user.defence !== 'legs') {
        globalObj.lifeUser -= globalObj.computer.damage;
        compMove('./img/hero/' + globalObj.compCharacter + '/user-' + globalObj.compCharacter + '_attack2.gif');
    } else {
        globalObj.computer.damage = 0;
        globalObj.lifeUser -= 0;
        move('./img/hero/' + globalObj.userCharacter + '/user-' + globalObj.userCharacter + '_block.gif');
        compMove('./img/hero/' + globalObj.compCharacter + '/user-' + globalObj.compCharacter + '_attack.gif');
        console.log('User');
    }
    console.log(globalObj);
    return globalObj;
};

// при нажатии на кнопку Let's Hit! если не выбраны удар и защита - в консоль выводит текст - сделай выбор.
function makeaChoise(event) {
    event.preventDefault();
    var def = document.querySelector('[name="defense"]:checked');
    var at = document.querySelector('[name="attack"]:checked');
    if (def && at) {
        letHit(event);
    } else {
        addTextToConsole();
    }
}

// основная функция удара. Запускает просчеты рандома, консоль, изменения уровня жизни.
function letHit(event) {
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
    form.reset();
    globalObj.user.atack = null;
    globalObj.user.defence = null;
    // console.log(globalObj.lifeUser);
    // console.log(globalObj.lifeComputer); 
}
but.addEventListener('click', makeaChoise);

// функция выводит в консоль подсказку - сделай выбор.
function addTextToConsole() {
    var H2 = document.createElement('h2');
    H2.textContent = 'Make a choise!';
    H2.classList.add('makeAChoise');
    consoleDiv.prepend(H2);
}

// функция отвечает за остановку таймера и его запуск после окончания анимации.
function timerStop() {
    but.disabled = true;
    but.style.opacity = .2;
    clearInterval(globalObj.intervalTimer);
    setTimeout(timer, 3000);
}

// функция запускает основную цепочку событий если игрок не успел нанести удар. 
function timerEnd() {
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