'use strict'

// Player
const healthValueP = document.querySelector('#valueP');
const inputP = document.querySelector('#inputP');
const submitP = document.querySelector('#submitP');
const formP = document.querySelector('#formP');

// Computer
const healthValueC = document.querySelector('#valueC');
const inputC = document.querySelector('#inputC');
const submitC = document.querySelector('#submitC');
const formC = document.querySelector('#formC');



class Health {
  
  constructor(healthValue, input, submit, form){
    this.healthValue = healthValue;
    this.input = input;
    this.submit = submit;
    this.form = form;
    this.health = 100;
  }
  addDamage(input){
    event.preventDefault();
    const damage = Number(input.value);
    console.log(damage);
    if(this.health >= damage){
    this.health = this.health - damage;
  } else {
    this.health = this.health - this.health;
  }
    console.log(this.health);
    this.pain(this.health);
    this.changeColor(this.health);
    if(this.health <= 0){
      this.health = 0;
      console.log('You lose');
    }
    
  }
  pain(health){
    this.healthValue.style.width = `${health}%`;
  }
  changeColor(health){
    if(health >= 60){
      this.healthValue.style.backgroundImage = 'linear-gradient(to top, #ffffff 0%, #00db00 25%, #00db00 50%, #00db00 75%, #ffffff 100% )'
    } else if(health >25 && health <60){
      this.healthValue.style.backgroundImage = 'linear-gradient(to top, #ffffff 0%, #FF6800 25%, #FF6800 50%, #FF6800 75%, #ffffff 100% '
    } else {
      this.healthValue.style.backgroundImage = 'linear-gradient(to top, #ffffff 0%, #F80000 25%, #F80000 50%, #F80000 75%, #ffffff 100% '
    }
  }
}
const playerHealth = new Health(healthValueP, inputP, submitP, formP);
const compHealth = new Health(healthValueC, inputC, submitC, formC);
function startP(){
  playerHealth.addDamage(inputP);
  formP.reset();
}
function startC(){
  compHealth.addDamage(inputC);
  formC.reset();
}
submitP.addEventListener('click', startP);
submitC.addEventListener('click', startC);
