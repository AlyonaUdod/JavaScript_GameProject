'use strict'

// Player
const healthValueP = document.querySelector('#valueP');

// Computer
const healthValueC = document.querySelector('#valueC');

class Health {

  constructor(healthValue, health){
    this.healthValue = healthValue;
    this.health = health;
  }
  addDamage(input){
    event.preventDefault();
  //   const damage = input;
  //   // console.log(damage);
  //   if(this.health >= damage){
  //   this.health = this.health - damage;
  // } else {
  //   this.health = this.health - this.health;
  // }
    // console.log(this.health);
    this.health = input;
    if(this.health <= 0){
      this.health = 0;
    }
    this.pain(this.health);
    this.changeColor(this.health);

      // console.log('You lose');


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
const playerHealth = new Health(healthValueP, globalObj.lifeUser);
const compHealth = new Health(healthValueC, globalObj.lifeComputer);
// function startP(){
//   playerHealth.addDamage(inputP);
// }
// function startC(){
//   compHealth.addDamage(inputC);
// }

