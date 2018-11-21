'use script';
let secondPageLink = document.querySelector('.secondPage-link');
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
}

function activePage3 () {
    secondPageWrap.classList.add('hide');
    main.classList.remove('hide');
}

secondPageLink.addEventListener('click', activePage3);