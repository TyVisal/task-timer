let timer = null;
let seconds = 0;

function formatTime(sec) {
  let m = Math.floor(sec / 60)
    .toString()
    .padStart(2, "0");
  let s = (sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function start() {
  if (timer !== null) return;
  timer = setInterval(() => {
    seconds++;
    document.querySelector(".h1").textContent = formatTime(seconds);
  }, 1000);
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  document.querySelector(".h1").textContent = "00:00";
}
