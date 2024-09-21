let parentContainer = document.getElementById("app");
let count = 5;

function showStars(count) {
  for (let i = 1; i <= count; i++) {
    let starElement = document.createElement("span");
    starElement.classList.add("material-icons-outlined", "star-ele");
    starElement.innerText = "star_border";
    starElement.dataset.key = i;
    parentContainer.appendChild(starElement);
  }
}

parentContainer.addEventListener("click", (event) => {
  let starValue = event.target.dataset.key;
  let arr = document.querySelectorAll(".star-ele");
  for (let i = 0; i < count; i++) {
    if (i < starValue) {
      arr[i].classList.add("star");
    } else {
      arr[i].classList.remove("star");
    }
  }
});

showStars(count);
