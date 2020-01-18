const timerElement = document.querySelector(".timer");
const inputMinutes = document.querySelector(".inputTime");
var seconds, minutes, time;
var timer;
time = (parseInt(inputMinutes.value) * 60);
minutes = Math.round(time / 60);
seconds = Math.round(time % 60);


function setTimer(minutes, seconds) {
    timerElement.textContent = `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}`: seconds}`;
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(run, 1000);
}

function run() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    };
    if (minutes === 1 && seconds === 00) {
        stopTimer();
    };
    setTimer(minutes, seconds);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();  
    minutes = Math.round(time / 60);
    seconds = Math.round(time % 60);
    setTimer(minutes, seconds);
}


