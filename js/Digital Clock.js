function time() {
  let hours = document.querySelector(".hours");
  let minutes = document.querySelector(".minutes");
  let seconds = document.querySelector(".seconds");

  hours.innerHTML = new Date().getHours();
  minutes.innerHTML = new Date().getMinutes();
  seconds.innerHTML = new Date().getSeconds();
}
var interval = setInterval(time, 500);
