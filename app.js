////// Digital Stop Watch Project ///////////

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let timer = null;
let startTime = Date.now();
let elapsedTime = 0;
let isRunning = false;

// Initialize stop watch
document.addEventListener("DOMContentLoaded", function () {
    startBtn.addEventListener("click", start);
    stopBtn.addEventListener("click", stop);
    resetBtn.addEventListener("click", reset);
});

// start stop watch 
function start() {
    if(!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

// pause stop watch
function stop() {
    if(isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;

    }
}

// reset stop watch
function reset() {
    clearInterval(timer);
    startTime = Date.now();
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
    
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliSeconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliSeconds = String(milliSeconds).padStart(2, "0"); 

    display.textContent = `${hours}:${minutes}:${seconds}:${milliSeconds}`;
}