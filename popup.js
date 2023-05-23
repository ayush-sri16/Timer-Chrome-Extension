// Text Fields
const timeField = document.getElementById("time");
const nameField = document.getElementById("name");
const timerField = document.getElementById("timer");

// BUTTONS
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

const updateTimer = () => {
    chrome.storage.local.get(["Timer"], (res) => {
        let time = res.Timer ?? 0;
        timerField.innerHTML = `${time} Seconds`;
    });
    const realTime = new Date().toLocaleTimeString();
    timeField.innerHTML = realTime;
};
updateTimer();
setInterval(updateTimer, 1000);

chrome.storage.sync.get(["yourName"], (result) => {
    nameField.innerHTML = `Your Task : ${result.yourName}` ?? "Enter Your Task: "
});

// BUTTONS
startBtn.addEventListener("click", () => {
    chrome.storage.local.set({
        isRunning: true,
    });
});
stopBtn.addEventListener("click", () => {
    chrome.storage.local.set({
        isRunning: false,
    });
});
resetBtn.addEventListener("click", () => {
    chrome.storage.local.set({
        Timer: 0,
        isRunning: false,
    });
});
