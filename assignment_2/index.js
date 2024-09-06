let input = document.getElementById("input");
let button = document.getElementById("button");
let mirroedValue = document.getElementById("mirror-value");
let value = "";
input.addEventListener("keyup", () => {
  value = input.value;
});

button.addEventListener("click", () => {
  if (value.length > 0) {
    mirroedValue.innerText = value.split("").reverse().join("");
  } else {
    mirroedValue.innerText = "";
  }
});
