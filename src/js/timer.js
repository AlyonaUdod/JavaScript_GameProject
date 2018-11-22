let progressBar = document.querySelector('.progrLine-progress'); // подключаем к прогресс лайну
let pointer = document.getElementById('e-pointer'); //подключаем к кружечку
const displayOutput = document.querySelector('.display-remain-time') // подключаем доступ к таймеру в html
const displayRound = document.querySelector('.roundName');
const startTimer = document.querySelector('.startTimer')

let round = 1;
let length = Math.PI * 2 * 100; // формула для расчета закрашивания pi *2 *R для ого чтобы узнать длинну кпуга

progressBar.style.strokeDasharray = length; //изменение закраски пройднного времени через CSS
let intervalTimer; // время интервала
let timeLeft; // время которое прошло
let timeDuration = 10; // время

function update(timeDuration, timeStep) {
    let offset = - length * timeDuration / (timeStep);
    progressBar.style.strokeDashoffset = offset; // проходимость синей линиии заполнения против часовой стрелки
    pointer.style.transform = `rotate(${360 * timeDuration / (timeStep)}deg)`; // проходимость белого шарика
}; //функция отвечает за закрашивание таймера

update(timeDuration, timeDuration); //обновление закрашивания бреущаое

function timer() { // функция для расчета времени
    globalObj.round++;
    but.disabled = false;
    but.style.opacity = 1;
    let remainTime = Date.now() + (timeDuration * 1000); // время старта (время сейчас +15) фиксируем
    displayRound.classList.add("bounceIn"); // анимация для объявления раунда
    displayOutput.classList.remove("shake"); // анимиция для последних 5 секунд
    intervalTimer = setInterval(function () { //зарускаем интервал для отсчета от 15 до 0
        timeLeft = Math.round((remainTime - Date.now()) / 1000); //значение оставшегося времени при каждом интревале, которое мы выводим на экран

        if (timeLeft <= 0) { // действия при дохождении к 0
            clearInterval(intervalTimer);
            displayOutput.style.color = "white";
            // round ++;
            // console.log(round);
            // console.log("GET READY TO THE NEXT ROUND!");
            timerEnd();

        } else if (timeLeft <= 5) {
            displayOutput.style.color = "red";
            displayRound.classList.remove("bounceIn");
            displayOutput.classList.add("shake");
        }
        displayTimeLeft(timeLeft);
    }, 1000); // показывает результат каждую секунду
}

function displayTimeLeft(timeLeft) { // выводит обновленное время на экран
    let timeNow = timeLeft % 60;
    displayOutput.textContent = `00:${timeNow < 10 ? '0' : ''}${timeNow}`;
    update(timeLeft, timeDuration); // выводит обновленное закрашивание на экран
}
// startTimer.addEventListener('click', timer);
