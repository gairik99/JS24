const containerBox = document.querySelector(".showCars");
const app = document.querySelector("#app");
const button = document.querySelector(".button");
const inputs = document.querySelectorAll(".input");
let brand, model, year;

let initalData = [
  {
    id: 1,
    brand: "Toyota",
    model: "Corola",
    year: 2000,
  },
  {
    id: 2,
    brand: "Maruti Suzuki",
    model: "Omni",
    year: 2005,
  },
  {
    id: 3,
    brand: "Hyundai",
    model: "Santro",
    year: 1997,
  },
];

function showCars(initalData) {
  for (let data of initalData) {
    const container = document.createElement("div");
    container.classList.add("container");
    const model = document.createElement("p");
    model.innerText = `${data.brand} ${data.model}`;
    const year = document.createElement("p");
    year.innerText = `Year: ${data.year}`;
    container.appendChild(model);
    container.appendChild(year);
    containerBox.appendChild(container);
  }
}

app.addEventListener("keyup", (e) => {
  let type = e.target.name;
  if (type === "brand") {
    brand = e.target.value;
  }
  if (type === "model") {
    model = e.target.value;
  }
  if (type === "year") {
    year = e.target.value;
  }
});

button.addEventListener("click", () => {
  initalData = [...initalData, { brand, model, year }];
  containerBox.innerHTML = "";
  //   app.value = "";
  showCars(initalData);
  inputs.forEach((input) => (input.value = ""));
});

showCars(initalData);
