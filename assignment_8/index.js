let message = "     I am      a     Web    Developer   ";

function filterString(string) {
  let targetString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      targetString += string[i];
    }
  }
  return targetString;
}

const filteredString = filterString(message);
console.log(filteredString);
