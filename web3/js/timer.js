let countdown; 
let timerDisplay = document.getElementById('timer'); 
let startButton = document.getElementById('startButton'); 
let stopButton = document.getElementById('stopButton'); 
let resetButton = document.getElementById('resetButton'); 
let duration = 30; 
let currentTime = 0; 
let running = false; 

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    if (!running) {
        countdown = setInterval(function () {
            if (currentTime <= 0) {
                clearInterval(countdown); 
                running = false; 
                startButton.disabled = false; 
                stopButton.disabled = true; 
                timerDisplay.textContent = 'Time is up!'; 
            } else {
                currentTime--;
                displayTimeLeft(currentTime); 
            }
        }, 1000);
        running = true; 
        startButton.disabled = true; 
        stopButton.disabled = false; 
    }
}

function stopTimer() {
    if (running) {
        clearInterval(countdown);
        running = false; 
        startButton.disabled = false; 
        stopButton.disabled = true; 
    }
}

function resetTimer() {
    currentTime = duration; 
    displayTimeLeft(currentTime); 
    running = false; 
    startButton.disabled = false; 
    stopButton.disabled = true; 
    timerDisplay.textContent = ''; 
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60); 
    const remainderSeconds = seconds % 60; 
    timerDisplay.textContent = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}