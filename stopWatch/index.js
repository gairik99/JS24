let para = document.querySelector(".para");
let btnContent = document.querySelector(".btn-container");

let sec = 0,
  min = 0,
  hr = 0,
  eventStart = 1;
let idTime;

function showTime(sec, min, hr) {
  para.innerHTML = `${hr > 9 ? hr : `0${hr}`} : ${
    min > 9 ? min : `0${min}`
  } : ${sec > 9 ? sec : `0${sec}`}`;
}

btnContent.addEventListener("click", (event) => {
  //   console.log(event.target.name);
  let eventName = event.target.name;
  if (eventName === "start") {
    clearInterval(idTime);
    idTime = setInterval(() => {
      eventStart = 0;
      sec++;
      if (sec > 59) {
        min++;
        sec = 0;
        if (min > 59) {
          hr++;
          min = 0;
        }
      }
      showTime(sec, min, hr);
    }, 1000);
  } else if (eventName === "stop") {
    clearInterval(idTime);
  } else {
    clearInterval(idTime);
    sec = min = hour = 0;
    showTime(sec, min, hr);
  }
});
