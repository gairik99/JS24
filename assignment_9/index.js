let obj = {
  name: "Prakash",
  age: 111,
  hairColor: "black",
  likes: "food",
};

function invertKeysAndValue(obj) {
  let targetObj = {};
  for (let [key, value] of Object.entries(obj)) {
    targetObj[value] = key;
  }

  return targetObj;
}

console.log(invertKeysAndValue(obj));
