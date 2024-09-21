let incBtn = document.getElementById("inc");
let decBtn = document.getElementById("dec");
let count = document.getElementById("count");
let total = document.getElementById("total-price");
let newPrice = document.getElementById("new-price");

let itemCount = 1;

incBtn.addEventListener("click", () => {
  itemCount++;
  count.innerText = itemCount;
  total.innerText = `Rs. ${newPrice.innerText * itemCount}`;
  decBtn.removeAttribute("disabled");
});

decBtn.addEventListener("click", () => {
  if (itemCount === 1) {
    decBtn.setAttribute("disabled", true);
  } else {
    decBtn.removeAttribute("disabled");
    itemCount--;
    count.innerText = itemCount;
    total.innerText = `Rs. ${newPrice.innerText * itemCount}`;
  }
});
