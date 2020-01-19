const timerElement = document.querySelector(".timer");
const inputMinutes = document.querySelector(".inputTime");
const progressBar = document.querySelector(".progress");
const plusMinute = document.querySelector(".plus");
const minusMinute = document.querySelector(".minus");
const alarm = document.getElementById("alarm");

var seconds, minutes, time;
var timer;
const finishTime = 4*60;
time = (parseInt(inputMinutes.value) * 60);
minutes = Math.round(time / 60);
seconds = Math.round(time % 60);
let totalTimeLeft;



function setTimer(minutes, seconds) {
    timerElement.textContent = `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}`: seconds}`;
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(run, 1000);
}

function run() {
    let totalTime = seconds + (minutes*60);
    let percentOfTime = ((totalTime / finishTime)*100).toFixed(0);
    totalTimeLeft = finishTime - totalTime;
    setTimer(minutes, seconds);
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
        alarm.play();
    };

    if (finishTime === totalTime) {
        progressBar.style.setProperty("width", `100%`);
        stopTimer();

    };
    progressBar.style.setProperty("width", `${percentOfTime}%`);
    document.querySelector(".percent").textContent = `${percentOfTime}%`;

}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();  
    minutes = Math.round(time / 60);
    seconds = Math.round(time % 60);
    setTimer(minutes, seconds);
    progressBar.style.setProperty("width", `0%`)
}

function addMinute() {
    if (totalTimeLeft > 60) {
        minutes++;
        setTimer(minutes, seconds);
    };
};
function subMinute() {
    if (minutes >= 1){
        minutes--;
        setTimer(minutes, seconds);
    };
};
