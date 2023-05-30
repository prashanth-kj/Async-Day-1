//callback hell task:
//-------------------

let countTimerEl = document.getElementById('countdown');

  let countTimer = (seconds, callback) => {
    countTimerEl.innerHTML = seconds;
    seconds--;

    if (seconds> 0) {
        setTimeout(() => countTimer(seconds,callback), 1000);
    } else {
          callback();
    }
  }

  let countdown = () => {
      countTimerEl.innerHTML="Happy Independence Day!";
  }

countTimer(10, countdown);




 




