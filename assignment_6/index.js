let table = document.getElementById("table");
let btn = document.getElementById("insert");
btn.addEventListener("click", () => {
  let row = table.insertRow(-1);
  for (let i = 0; i < 3; i++) {
    let x = row.insertCell(i);
    x.innerHTML = `CELL ${i + 1}`;
  }
});
