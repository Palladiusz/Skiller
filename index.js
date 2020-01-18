const timerElement = document.querySelector(".timer");
const inputMinutes = document.querySelector(".inputTime");
let seconds, minutes, time;
var timer;
time = (parseInt(inputMinutes.value) * 60);
minutes = Math.round(time / 60);
seconds = Math.round(time % 60);


function setTimer() {
    timerElement.textContent = `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}`: seconds}`;
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(run, 1000);
}

function run() {
    setTimer();
    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
    };
    if (minutes === 0 && seconds === 0) {
        resetTimer();
    }

}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    minutes = 0;
}


