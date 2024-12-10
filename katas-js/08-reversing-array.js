// exo 8

const reverseArray = (arrayToReverse) => {
  const newArray = [];
  for (let i = arrayToReverse.length - 1; i >= 0; i--) {
    newArray.push(arrayToReverse[i]);
  }
  return newArray;
};

let arrayValue = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(reverseArray(arrayValue));

const reverseArrayInPlace = (arrayToReverse) => {
  for (let i = 0; i < Math.floor(arrayToReverse.length / 2); i++) {
    let iPrime = arrayToReverse.length - 1 - i; //i opposé
    if (iPrime === i) break;
    let temp = arrayToReverse[i];
    arrayToReverse[i] = arrayToReverse[iPrime];
    arrayToReverse[iPrime] = temp;
  }
  return arrayToReverse;
};

console.log(reverseArrayInPlace(arrayValue));
