let products = [
  {
    id: "1",
    item: "Shirt",
  },
  {
    id: "2",
    item: "Jeans",
  },
  {
    id: "3",
    item: "T-shirt",
  },
  {
    id: "4",
    item: "Denim Jacket",
  },
  {
    id: "5",
    item: "Casual Shoes",
  },
];

let appContainer = document.getElementById("app");

// function showProduct(products) {
//   appContainer.innerHTML = products
//     .map(({ id, item }) => {
//       return `<div>
//        <span>${item}</span>
//        <button data-key=${id}>remove</button>
//       </div>`;
//     })
//     .join("");
// }

function showProduct(products) {
  appContainer.innerHTML = products
    .map(({ id, item }) => {
      let container = document.createElement("div");
      let label = document.createElement("span");
      label.innerText = item;

      let button = document.createElement("button");
      button.setAttribute("data-key", id);
      button.innerText = "Remove";

      container.appendChild(label);
      container.appendChild(button);

      return container.outerHTML;
    })
    .join("");
}

// function showProduct(products) {
//   appContainer.innerHTML = "";
//   products.forEach(({ id, item }) => {
//     let container = document.createElement("div");
//     let lebel = document.createElement("span");
//     lebel.innerText = item;
//     let button = document.createElement("button");
//     button.innerText = "Remove";
//     button.setAttribute("data-key", id);
//     container.appendChild(lebel);
//     container.appendChild(button);
//     appContainer.appendChild(container);
//   });
// }

showProduct(products);

appContainer.addEventListener("click", (event) => {
  let itemKey = event.target.dataset.key;
  products = products.filter(({ id }) => id != itemKey);
  showProduct(products);
});
