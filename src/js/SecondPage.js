'use script';

let heroActive = false;
let fieldActive = false;

let hero = document.querySelectorAll('.hero');
let heroWrapper = document.querySelector('.secondPage-hero');
heroWrapper.addEventListener('click', activeHero);

function activeHero(event) {
  hero.forEach(function (x) {
    x === event.target ? heroActive = true : null;
    heroActive === true && fieldActive === true ? secondPageLink.style.color = 'orangered' : null;
    return x === event.target ? x.classList.add('active') : x.classList.remove('active');
  });
}

let field = document.querySelectorAll('.field');
let fieldWrapper = document.querySelector('.secondPage-field');
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
    const arrCompHero = [{
      img: './img/hero/user-colossus.gif',
      character: 'colossus',
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
    const randomOfarrCompHero = Math.floor(Math.random() * arrCompHero.length);
    globalObj.compHero = arrCompHero[randomOfarrCompHero].img;
    globalObj.compCharacter = arrCompHero[randomOfarrCompHero].character;
    // console.log(globalObj);
    sectionFight.style.backgroundImage = `url(${globalObj.arena})`;
    timer();
    userHero.style.backgroundImage = `url(${globalObj.userHero})`;
    compHero.style.backgroundImage = `url(${globalObj.compHero})`;
    let nameUser = document.querySelector('.name');
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
  removeOrange()
}
function removeOrange() {
  hero.forEach(el => el.classList.remove('active'))
  field.forEach(el => el.classList.remove('active'))
}