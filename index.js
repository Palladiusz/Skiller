const timerElement = document.querySelector(".timer");
const inputMinutes = document.querySelector(".inputTime");
const progressBar = document.querySelector(".current-progress");
const plusMinute = document.querySelector(".plus");
const minusMinute = document.querySelector(".minus");
const alarm = document.getElementById("alarm");


const timer5 = {
    totalTime: (5*60),
    time: 0,
    minutes: function () {return Math.round(this.time / 60)},
    seconds: function () {return Math.round(this.time % 60)},

    run: function () {
        let currentTime = this.seconds() + ((this.minutes())*60);
        let percentOfTime = ((currentTime / this.totalTime)*100).toFixed(0);
        totalTimeLeft = this.totalTime - currentTime;
        setTimer(this.minutes(), this.seconds());
        (this.time)++;
    
        if (this.seconds() === 60) {
            this.seconds() = 0;
            this.minutes()++;
            alarm.play();
        };
    
        if (this.totalTime === currentTime) {
            progressBar.style.setProperty("width", `100%`);
            stopTimer();
    
        };
        progressBar.style.setProperty("width", `${percentOfTime}%`);
        document.querySelector(".current-percent").textContent = `${percentOfTime}%`;
    
    }
}

var seconds, minutes, time;
var timer;
const finishTime = 4*60;
const breakTime = 5*60;
time = (parseInt(inputMinutes.value) * 60);
minutes = Math.round(time / 60);
seconds = Math.round(time % 60);
let totalTimeLeft;



function setTimer(minutes, seconds) {
    timerElement.textContent = `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}`: seconds}`;
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval((timer5.run()), 1000);
}

// function run(totalTime, seconds, minutes) {
//     let currentTime = seconds + (minutes*60);
//     let percentOfTime = ((currentTime / totalTime)*100).toFixed(0);
//     totalTimeLeft = totalTime - currentTime;
//     setTimer(minutes, seconds);
//     seconds++;

//     if (seconds === 60) {
//         seconds = 0;
//         minutes++;
//         alarm.play();
//     };

//     if (totalTime === currentTime) {
//         progressBar.style.setProperty("width", `100%`);
//         stopTimer();

//     };
//     progressBar.style.setProperty("width", `${percentOfTime}%`);
//     document.querySelector(".current-percent").textContent = `${percentOfTime}%`;

// }

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
