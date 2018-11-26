'use strict'
// Player
const healthValueP = document.querySelector('#valueP');

// Computer
const healthValueC = document.querySelector('#valueC');

// Класс шкал здоровья
class Health {
  constructor(healthValue, health){
    this.healthValue = healthValue;
    this.health = health;
  }
  addDamage(input){
    this.health = input;
    if(this.health <= 0){
      this.health = 0;
    }
    this.pain(this.health);
    this.changeColor(this.health);
  }
  pain(health){
    this.healthValue.style.width = `${health}%`;
  }
  changeColor(health){
    if(health >= 60){
      setTimeout(()=>{
        this.healthValue.style.backgroundImage = 'linear-gradient(to top, #ffffff 0%, #00db00 25%, #00db00 50%, #00db00 75%, #ffffff 100% )'
      }, 1500)
    } else if(health >25 && health <60){
      setTimeout(()=>{
        this.healthValue.style.backgroundImage = 'linear-gradient(to top, #ffffff 0%, #FF6800 25%, #FF6800 50%, #FF6800 75%, #ffffff 100% '
      }, 1500)
    } else {
      setTimeout(()=>{
        this.healthValue.style.backgroundImage = 'linear-gradient(to top, #ffffff 0%, #F80000 25%, #F80000 50%, #F80000 75%, #ffffff 100% '
      }, 1500)
    }
  }
}

// создание двух шкал здоровья
const playerHealth = new Health(healthValueP, globalObj.lifeUser);
const compHealth = new Health(healthValueC, globalObj.lifeComputer);

// функция обновления шкал жизни после окончания первой игры. Активируется нажатием кнопки New Fight
function healthRefresh() {
  playerHealth.pain(100);
  playerHealth.changeColor(100);
  compHealth.pain(100);
  compHealth.changeColor(100);
}