setInterval(setclock, 1000);
function setclock() {
  let Currentdate = new Date();
  let Hours = Currentdate.getHours();
  let Minutes = Currentdate.getMinutes();
  let Seconds = Currentdate.getSeconds();
  let time = document.querySelector(".clock");
  let ampm = "AM";
  if (Hours > 12) {
    Hours -= 12;
    ampm = "PM";
  }
  if (Hours < 10) {
    Hours = "0" + Hours;
  }
  if (Hours == 0) {
    Hours = 12;
    ampm = "AM";
  }
  if (Minutes < 10) {
    Minutes = "0" + Minutes;
  }
  if (Seconds < 10) {
    Seconds = "0" + Seconds;
  }
  time.innerHTML = Hours + ":" + Minutes + ":" + Seconds + " " + ampm;
}
