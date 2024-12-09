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
