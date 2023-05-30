//callback hell task:
//-------------------

let countTimer = (seconds, callback) => {
  callback(seconds);
}

let countdown = (seconds) => {
  if (seconds > 0) {
    console.log(seconds);
    seconds--;
    setTimeout(() => countdown(seconds), 1000);
  } else {
    console.log("Happy Independence Day");
  }
}

countTimer(10, countdown);





 




