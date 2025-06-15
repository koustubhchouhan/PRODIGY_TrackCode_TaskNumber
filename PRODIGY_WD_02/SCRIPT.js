let seconds = 0,
  minutes = 0,
  hours = 0;
let timer = null;

window.onload = function () {
  const display = document.getElementById("display");
  const lapsList = document.getElementById("laps");

  function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = `${h}:${m}:${s}`;
  }

  function stopwatch() {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
    updateDisplay();
  }

  window.startStop = function () {
    if (timer !== null) return;
    timer = setInterval(stopwatch, 1000);
  };

  window.pause = function () {
    clearInterval(timer);
    timer = null;
  };

  window.reset = function () {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    lapsList.innerHTML = "";
  };

  window.lap = function () {
    const li = document.createElement("li");
    li.textContent = display.textContent;
    lapsList.appendChild(li);
  };

  updateDisplay();
};
