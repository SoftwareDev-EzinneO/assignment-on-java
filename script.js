// Function 1: Change Text
function changeText() {
    document.getElementById('text1').textContent = 'The text has changed!';
}

// Function 2: Change Background Color
function changeColor() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
}

// Function 3: Show/Hide Text
let isVisible = true;
function toggleText() {
    const text = document.getElementById('hiddenText');
    if (isVisible) {
        text.style.display = 'none';
        isVisible = false;
    } else {
        text.style.display = 'block';
        isVisible = true;
    }
}

// Function 4: Counter
let count = 0;
function increaseCounter() {
    count = count + 1;
    document.getElementById('counter').textContent = count;
}

// Function 5: Show Alert
function showAlert() {
    alert('Hello! This is a JavaScript alert!');
}

// Function 6: Show Current Time
function showTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('timeDisplay').textContent = 'Current time: ' + timeString;
}

// Function 7: Add Two Numbers
function addNumbers() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const sum = Number(num1) + Number(num2);
    document.getElementById('result').textContent = 'Result: ' + sum;
}

// Function 8: Make Box Bigger
let boxSize = 100;
function makeBoxBigger() {
    boxSize = boxSize + 20;
    document.getElementById('box').style.width = boxSize + 'px';
    document.getElementById('box').style.height = boxSize + 'px';
}

// Function 9: Generate Random Number
function generateRandom() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('randomNum').textContent = 'Your random number is: ' + randomNumber;
}

// Function 10: Greet User
function greetUser() {
    const name = document.getElementById('nameInput').value;
    if (name === '') {
        document.getElementById('greeting').textContent = 'Please enter your name!';
    } else {
        document.getElementById('greeting').textContent = 'Hello, ' + name + '! Welcome!';
    }
}