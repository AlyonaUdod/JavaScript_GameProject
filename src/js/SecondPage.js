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

function activePage3 () {
  if (globalObj.arena && globalObj.userHero) {
    secondPageWrap.classList.add('hide');
    main.classList.remove('hide');
    const arrCompHero = ['../img/hero/comp-colossus.png', '../img/hero/comp-mystique.png', '../img/hero/comp-redskull.png', '../img/hero/comp-starlord.png'];
    const randomOfarrCompHero = Math.floor(Math.random()*arrCompHero.length);
    globalObj.compHero = arrCompHero[randomOfarrCompHero];
    console.log(globalObj);
    sectionFight.style.backgroundImage = `url(${globalObj.arena})`;
    timer();
    userHero.style.backgroundImage = `url(${globalObj.userHero})`;
    compHero.style.backgroundImage = `url(${globalObj.compHero})`;
  } else {
    alert('Select hero and arena both');
  }
};

secondPageLink.addEventListener('click', activePage3);

choiceHero.addEventListener('click', selectHero);
function selectHero (evt) {
  globalObj.userHero = evt.target.dataset.url;
  console.log(globalObj);
};
choiceArena.addEventListener('click', selectArena);
function selectArena (evt) {
  globalObj.arena = evt.target.dataset.url;
  console.log(globalObj);
};
