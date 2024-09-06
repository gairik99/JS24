const brands = ["Nike", "Adidas", "Puma", "Fila", "All Star"];
const selectedBrand = document.getElementById("select-brand");
const addButton = document.getElementById("btn-add");
const showBrands = document.getElementById("show-favourite");
let favouriteBrands = [];

// Populate the select options
brands.forEach((brand) => {
  const optionElement = document.createElement("option");
  optionElement.value = brand;
  optionElement.textContent = brand;
  selectedBrand.appendChild(optionElement);
});

function displaySelectedBrands() {
  showBrands.innerHTML = favouriteBrands
    .map((brand) => {
      return `<li>${brand}</li>`;
    })
    .join("");
}

// Add event listener for the button
addButton.addEventListener("click", () => {
  const brand = selectedBrand.value;
  if (brand && !favouriteBrands.includes(brand)) {
    favouriteBrands.push(brand);
    displaySelectedBrands();
  }
});
