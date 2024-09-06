let paraElement = document.getElementById("para");
// function utility() {
//   let words = paraElement.innerText.split(" ");
//   paraElement.innerHTML = words
//     .map((word) =>
//       word.length > 5
//         ? `<span style="background-color:green;color:white">${word}</span>`
//         : word
//     )
//     .join(" ");
// }
function utility() {
  let words = paraElement.innerText.split(" ");
  paraElement.innerHTML = words
    .map((word) => {
      if (word.length > 5) {
        return `<span style="background-color:green;color:white">${word}</span>`;
      } else return word;
    })
    .join(" ");
}

utility();
