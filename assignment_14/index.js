const parentElement = document.getElementById("app");
const buttonEle = document.querySelector(".btn-container");

const initialData = [
  {
    id: 1,
    item: "shirt",
    price: 300,
  },
  {
    id: 2,
    item: "tshirt",
    price: 499,
  },
  {
    id: 3,
    item: "jeans",
    price: 500,
  },
  {
    id: 4,
    item: "trousers",
    price: 250,
  },
  {
    id: 5,
    item: "chinos",
    price: 300,
  },
];

function showItems(initialData) {
  for (let data of initialData) {
    const ele = document.createElement("li");
    ele.innerText = `${data.id} :: ${data.item}, Rs. ${data.price}`;
    parentElement.appendChild(ele);
  }
}

buttonEle.addEventListener("click", (e) => {
  const name = e.target.name;
  const sortedData = initialData.sort((a, b) =>
    name === "lth" ? a.price - b.price : b.price - a.price
  );
  parentElement.innerHTML = "";
  showItems(sortedData);
});

showItems(initialData);
