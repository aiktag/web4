const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const content = document.querySelector(".content");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active"); // Toggle the "active" class on the hamburger icon
    navMenu.classList.toggle("active"); // Toggle the "active" class on the navigation menu
    content.classList.toggle("active"); // Toggle the "active" class on the content area
});

// Close the menu when a navigation link is clicked
document.querySelectorAll(".nav-link").forEach(link => link.addEventListener("click", () => {
    hamburger.classList.remove("active"); // Remove the "active" class from the hamburger icon
    navMenu.classList.remove("active"); // Remove the "active" class from the navigation menu
    content.classList.remove("active"); // Remove the "active" class from the content area
}));

// Manage a list of tasks
const tasks = [];

// Add a new task to the list
function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter the race'); // Show an alert if the task text is empty
        return;
    }

    const task = {
        text: taskText,
        complete: false
    };

    tasks.push(task);
    displayTasks(); // Display the added list
    taskInput.value = '';
}

// Display the list of tasks
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" ${task.complete ? 'checked' : ''} onchange="toggleComplete(${index})">
            ${task.text}
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Toggle the completion status of a task
function toggleComplete(index) {
    tasks[index].complete = !tasks[index].complete;
    displayTasks(); // Display the updated list of tasks
}

// Delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks(); // Display the updated list of tasks
}

// Display tasks when the window is loaded
window.onload = displayTasks;

// Validate email input
const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Write correct e-mail address please");
    } else {
        email.setCustomValidity("");
    }
});

// Show tabs and manage their content
function showTab(event, tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    for (const tab of tabContents) {
        tab.style.display = "none"; // Hide all tab contents
    }
    const tabs = document.getElementsByClassName('tab-button');
    for (const tab of tabs) {
        tab.classList.remove('active'); // Remove the "active" class from all tab buttons
    }
    document.getElementById(tabName).style.display = "block"; // Show the selected tab content
    event.currentTarget.classList.add('active'); // Add the "active" class to the clicked tab button
}

// Make accordion items clickable to open and close
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item =>
    item.addEventListener("click", () => {
        const isItemOpen = item.classList.contains("open");
        accordionItems.forEach(item => item.classList.remove("open"));
        if (!isItemOpen) {
            item.classList.add("open"); // Toggle the "open" class on the clicked accordion item
        }
    })
);
 const audio = document.getElementById('background-audio');

    function playAudio() {
        audio.play();
    }

    function pauseAudio() {
        audio.pause();
    }

    function stopAudio() {
        audio.pause();
        audio.currentTime = 0;
    }
 const words = [ 
    "crusade", 
    "lichking", 
    "cataclysm", 
    "pandaria", 
    "azeroth", 
    "dragonflight", 
]; 
  
let randomIndex = Math.floor(Math.random() * words.length); 
let selectedWord = words[randomIndex]; 
console.log(selectedWord); 
  
let guessedlist = []; 
  
let displayWord = ""; 
for (let i = 0; i < selectedWord.length; i++) { 
    displayWord += "_ "; 
} 
document.getElementById("displayWord").textContent = displayWord; 
  
function guessLetter() { 
    let inputElement =  
        document.getElementById("letter-input"); 
  
    if (!inputElement.value) { 
        alert("Empty Input box. Please add input letter"); 
        return; 
    } 
  
    let letter = inputElement.value.toLowerCase(); 
  
    inputElement.value = ""; 
  
    if (guessedlist.includes(letter)) { 
        alert("You have already guessed that letter!"); 
        return; 
    } 
  
    guessedlist.push(letter); 
  
    let updatedDisplay = ""; 
    let allLettersGuessed = true; 
    for (let i = 0; i < selectedWord.length; i++) { 
        if (guessedlist.includes(selectedWord[i])) { 
            updatedDisplay += selectedWord[i] + " "; 
        } else { 
            updatedDisplay += "_ "; 
            allLettersGuessed = false; 
        } 
    } 
    document.getElementById("displayWord") 
        .textContent = updatedDisplay; 
  
    if (allLettersGuessed) { 
        alert("Congratulations! You guessed the word correctly!"); 
    } 
}