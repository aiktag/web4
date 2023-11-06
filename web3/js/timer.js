let countdown; 
let timerDisplay = document.getElementById('timer'); // Reference to the element displaying the timer
let startButton = document.getElementById('startButton'); // Reference to the start button
let stopButton = document.getElementById('stopButton'); // Reference to the stop button
let resetButton = document.getElementById('resetButton'); // Reference to the reset button
let duration = 30; // The initial duration of the countdown in seconds
let currentTime = 0; // The current time left in seconds
let running = false; // Flag to track whether the timer is running or paused

// Event listeners for button clicks
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

// Function to start the countdown timer
function startTimer() {
    if (!running) {
        countdown = setInterval(function () {
            if (currentTime <= 0) {
                clearInterval(countdown); // Clear the interval when time is up
                running = false; // Set the running flag to false
                startButton.disabled = false; // Enable the start button
                stopButton.disabled = true; // Disable the stop button
                timerDisplay.textContent = 'Time is up!'; // Display a message when time is up
            } else {
                currentTime--;
                displayTimeLeft(currentTime); // Update and display the time left
            }
        }, 1000); // Run the interval every second (1000 milliseconds)
        running = true; // Set the running flag to true
        startButton.disabled = true; // Disable the start button
        stopButton.disabled = false; // Enable the stop button
    }
}

// Function to stop the countdown timer
function stopTimer() {
    if (running) {
        clearInterval(countdown); // Clear the interval
        running = false; // Set the running flag to false
        startButton.disabled = false; // Enable the start button
        stopButton.disabled = true; // Disable the stop button
    }
}

// Function to reset the countdown timer
function resetTimer() {
    currentTime = duration; // Reset the current time to the initial duration
    displayTimeLeft(currentTime); // Display the initial time
    running = false; // Set the running flag to false
    startButton.disabled = false; // Enable the start button
    stopButton.disabled = true; // Disable the stop button
    timerDisplay.textContent = ''; // Clear any displayed message
}

// Function to display the time left in minutes and seconds
function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60); // Calculate minutes
    const remainderSeconds = seconds % 60; // Calculate seconds
    timerDisplay.textContent = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`; // Display the time
}