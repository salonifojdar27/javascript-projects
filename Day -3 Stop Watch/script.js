
let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;

const hoursContainer = document.getElementById("hours");
const minutesContainer = document.getElementById("minutes");
const secondsContainer = document.getElementById("seconds");
const Start = document.getElementById("start");
const Stop = document.getElementById("stop");
const Reset = document.getElementById("reset");

const startTimer = () => {
    clearInterval(interval);
    interval = setInterval(startWatch, 800); 
};

const stopTimer = () => {
    clearInterval(interval);
};
const resetTimer = () => {
    seconds = 0;
    minutes = 0;
    hours = 0;
    hoursContainer.textContent = "00:";
    minutesContainer.textContent = "00:";
    secondsContainer.textContent = "00";
    clearInterval(interval);
};

function startWatch() {
    seconds++; // Increment seconds first

    // Format and update seconds display
    if (seconds < 10) {
        secondsContainer.textContent = `0${seconds}`;
    } else if (seconds > 59) {
        minutes++;
        seconds = 0;
        secondsContainer.textContent = "00:";
    } else {
        secondsContainer.textContent = seconds;
    }

    // Format and update minutes display
    if (minutes < 10) {
        minutesContainer.textContent = `0:${minutes}`;
    } else if (minutes > 59) {
        hours++;
        minutes = 0;
        minutesContainer.textContent = "00:";
    } else {
        minutesContainer.textContent = minutes;
    }

    // Format and update hours display
    if (hours < 10) {
        hoursContainer.textContent = `0:${hours}`;
    } else {
        hoursContainer.textContent = hours;
    }
}

// Event listeners
Start.addEventListener("click", startTimer);
Stop.addEventListener("click", stopTimer);
Reset.addEventListener("click", resetTimer);

