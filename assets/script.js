let day = document.getElementById("day");
let hour = document.getElementById("hour");
let minu = document.getElementById("minute");
let sec = document.getElementById("seconds");

setInterval(function() {
    sec.textContent -= 1;
    if (sec.textContent === "0") {
        sec.textContent = 60;
        minu.textContent -= 1;
    }
    if (minu.textContent === "0") {
        minu.textContent = 60;
        hour.textContent -= 1;
    }
    if (hour.textContent === "0") {
        hour.textContent = 24;
        day.textContent -= 1;
    }
}, 1000);