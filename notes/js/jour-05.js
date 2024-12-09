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

console.log(range(1, 5, 2));

const sum = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

console.log(sum(range(1, 5)));
