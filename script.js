const minutesInput = document.getElementById("minutes");
const setTimeButton = document.getElementById("set-time");
const timer = document.getElementById("timer");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");




let totalSeconds = 0;

function updateDisplay() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    timer.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

setTimeButton.addEventListener("click", () => {

    const minutes = Number(minutesInput.value);

    totalSeconds = minutes * 60;
    defaultSeconds = totalSeconds;

    moon.textContent = "🌕";
    document.querySelector(".moon-container").classList.remove("shine");
    
    if (currentAlarm) {
        currentAlarm.pause();
        currentAlarm.currentTime = 0;
    }

    updateDisplay();
})





let defaultSeconds = totalSeconds
let timerInterval = null;

let currentAlarm = null;


function startTimer() {

    if(timerInterval !== null)return;
    if(totalSeconds === 0) return;

    music.play();


    rocket.classList.add("flying");

    timerInterval = setInterval(() => {

        if (totalSeconds > 0) {
            totalSeconds--;
            updateDisplay();
            updateRocket();
        } else {

            clearInterval(timerInterval);
            timerInterval = null;

            music.pause();
            music.currentTime = 0;

            const randomIndex = Math.floor(Math.random() * alarms.length);

            currentAlarm = alarms[randomIndex];

            currentAlarm.currentTime = 0;
            currentAlarm.play();


            moon.textContent = "🌑";
            document.querySelector(".moon-container").classList.add("shine");

            rocket.classList.remove("flying");

        }
    }, 1000);
}

function stopTimer() {

    clearInterval(timerInterval);
    timerInterval = null;

    music.pause();

    rocket.classList.remove("flying");

    if (currentAlarm) {
    currentAlarm.pause();
    currentAlarm.currentTime = 0;
}
}

function resetTimer() {

    clearInterval(timerInterval);
    timerInterval = null;

    music.pause();
    music.currentTime = 0;

    moon.textContent = "🌕";
    document.querySelector(".moon-container").classList.remove("shine");

    rocket.classList.remove("flying");
    
    if (currentAlarm) {
    currentAlarm.pause();
    currentAlarm.currentTime = 0;
}

    totalSeconds = defaultSeconds;

    updateDisplay();
    updateRocket();
}

start.addEventListener("click", startTimer);

stop.addEventListener("click", stopTimer);

reset.addEventListener("click", resetTimer);




const rocket = document.querySelector(".rocket");

function updateRocket () {

    if(defaultSeconds <= 0) return;

    const progress = 1 - (totalSeconds / defaultSeconds);

    rocket.style.left = `${progress * 100}%`;
    rocket
}



const music = document.querySelector("#music");

const moon = document.querySelector(".moon");


const alarms = [

    document.getElementById("bell1"),
    document.getElementById("bell2"),
    document.getElementById("bell3"),
    document.getElementById("bell4"),
    document.getElementById("bell5"),
    document.getElementById("bell6"),
    document.getElementById("bell7"),
    document.getElementById("bell8"),
    document.getElementById("bell9"),
    document.getElementById("bell10"),
]