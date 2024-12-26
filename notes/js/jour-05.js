// exo 1
/*
let str = "";
let numberDieses = 1;

do {
  str += "#";
  console.log(str);
  numberDieses++;
} while (numberDieses < 8);
*/

//exo 2
/*
const boucle = (i) => {
  if (!(i % 3) && !(i % 5)) return "FizzBuzz";
  if (!(i % 3) && i % 5) return "Fizz";
  if (i % 3 && !(i % 5)) return "Buzz";
  return i;
};

for (i = 1; i <= 100; i++) {
  console.log(boucle(i));
}
*/

//exo 3
/*
let isEmpty = true;

for (i = 0; i < 8; i++) {
  let row = "";
  for (j = 0; j < 8; j++) {
    row += isEmpty ? " " : "#";
    isEmpty = !isEmpty;
  }
  isEmpty = !isEmpty;
  console.log(row);
}
*/

// exo 4
/*
const min = (a, b) => {
  return a > b ? b : a;
};

console.log(min(-3, -1));
*/

//exo 5
/*
const recursiveIsEven = (num) => {
  if (num < 0) num = -num;
  if (num == 0) return true;
  else if (num == 1) return false;
  console.log("récursivité, num : ", num);

  return recursiveIsEven(num - 2);
};

console.log(recursiveIsEven(-26));
*/

//exo 6
/*
const countBs = (str) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "B") counter++;
  }
  return counter;
};
let input = "BBCbbbBBbb";
console.log("nombre de B dans ", input, " : ", countBs(input));
*/
/*
const countChar = (str, char) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == char) counter++;
  }
  return counter;
};

console.log(countChar("kakkerlak", "k"));
*/

// exo 7
/*
const range = (start, end, step = 1) => {
  let newArray = [];
  if (start > end) {
    for (let i = start; i > end - 1; i += step) {
      newArray.push(i);
    }
  } else {
    for (let i = start; i < end + 1; i += step) {
      newArray.push(i);
    }
  }
  return newArray;
};

const rangeUpgraded = (start, end, step = 1) => {
  let newArray = [];
  for (let i = start; start > end ? i > end - 1 : i < end + 1; i += step) {
    newArray.push(i);
  }
  return newArray;
};

console.log(rangeUpgraded(1, 10, 2));

const sum = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

console.log(sum(range(1, 5)));
*/

// exo 8
/*
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
*/
const josephusProblem = (n, k) => {
  //Créer l'array
  let array = [];
  for (let i = 0; i < n; i++) array.push(i);

  let i = k - 1; //ex : k = 2, i commence par kill le prisonnier n = 1 à l'index i = 1
  console.log("array de base: ", array);
  while (array.length > 1) {
    console.log("i=", i, "prisoner to kill=", array[i]);
    array.splice(i, 1);
    // array[i] = undefined;
    i += k - 1; //avance du step
    i = i >= array.length ? i % array.length : i; //check si i dépasse du tableau, le renvoie au début + sa longueur dépassée le cas échéant
    console.log("nouvel array : ", array);
    if (i > 100) break; //sécurité
  }
};

console.log(josephusProblem(6, 2));
