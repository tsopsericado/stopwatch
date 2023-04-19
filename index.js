let hour, timer, minute, seconds, interval;

let getSeconds = 0,
  getMinutes = 0,
  getHours = 0;

function objectStart() {
  hour = document.getElementById("hour");
  minute = document.getElementById("minute");
  seconds = document.getElementById("seconds");

  if (getSeconds >= 0) {
    getSeconds++;
    seconds.innerHTML = getSeconds;
  }
  if (getSeconds < 10) {
    seconds.innerHTML = "0" + getSeconds;
  }
  if (getSeconds >= 60) {
    getSeconds = 0;
    getMinutes++;
    minute.innerHTML = getMinutes;
  }
  if (getMinutes < 10) {
    minute.innerHTML = "0" + getMinutes + ":";
  }
  if (getMinutes >= 60) {
    getMinutes = 0;
    getHours++;
    hour.innerHTML = getHours;
  }
  if (getHours < 10) {
    hour.innerHTML = "0" + getHours + ":";
  }
  interval = setTimeout(objectStart, 1000);
}
function objectStop() {
  clearTimeout(interval);
} //stop the watch
function objectReset() {
  if (getSeconds >= 0) {
    getSeconds = 0;
    getHours = 0;
    getMinutes = 0;

    seconds.innerHTML = "0" + getSeconds;
    minute.innerHTML = "0" + getMinutes + ":";
    hour.innerHTML = "0" + getHours + ":";
    clearTimeout(interval);
  }
}
