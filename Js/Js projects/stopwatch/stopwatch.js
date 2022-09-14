let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let count = document.getElementById("count");
let outerdisplay = document.getElementById("outerdisplay");
let animationbg = document.getElementsByClassName('animation-bg');

let hr = 0;
let min = 0;
let sec = 0;
let counts = 0;

let condition = false;

function start() {
  if (condition == true) {
    return;
  }

  condition = true;
  stopwatch();

  outerdisplay.classList.add('animation-bg');
  outerdisplay.classList.remove('paused');
}

function stop() {
  condition = false;
  outerdisplay.classList.add('paused');
}

function reset() {
  condition = false;
  outerdisplay.classList.remove('animation-bg');
  hr = 0;
  min = 0;
  sec = 0;
  counts = 0;
  hours.innerHTML = `00`;
  minutes.innerHTML = `00`;
  seconds.innerHTML = `00`;
  count.innerHTML = `00`;
}

function stopwatch() {
  if (condition == true) {
    counts = counts + 1;
    count.innerHTML = counts;

    if (counts == 100) {
      sec = sec + 1;
      counts = 0;

      if(sec < 10){
        seconds.innerHTML = '0' + sec;
      }
      else{
          seconds.innerHTML = sec;
      }

      if (sec == 60) {
        min = min + 1;
        sec = 0;

        if(min < 10){
            minutes.innerHTML = '0' + min;
        }
        else{
            minutes.innerHTML = min;
        }

        if (min == 60) {
          hr = hr + 1;
          min = 0;

          if(hr < 10){
            hours.innerHTML = '0' + hr;
          }
          else{
            hours.innerHTML = hr;
          }
        }
      }
    }
    console.log("hi");
    setTimeout("stopwatch()", 10);
  }
}
