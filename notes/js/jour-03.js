/*while (true) {
  let input = prompt("Ecrivez un nombre > a 100.");
  if (input > 100) {
    alert("bravo !!");
    break;
  }
}
alert("finito");
*/
/*
let num = 0;

while (num < 100) {
  num = prompt("Veuillez saisir un nombre > à 100");
}
*/
/*
let input;
do {
  input = prompt("Saisissez > 100 :");
} while (input <= 100);
*/

/* EXTRAIRE DES NOMBRES PREMIERS */
/*
let input = prompt("Saisir jusqu'à quel nombre nous irons : ");
let n = 1;
label: do {
  for (i = 2; i < n; i++) {
    // console.log(i, " % ", n, " = ", i % n);
    if (n % i == 0) {
      //   console.log(i, "%", n, " = ", 0, "! On STOP");
      n++;
      continue label;
    }
  }
  console.log(n, "est premier.");
  n++;
} while (n < input);
*/

const pow = (x, n) => {
  let result = x;
  if (n > 0) {
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  } else {
    return 1;
  }
  return result;
};

console.log(pow(3, 3));
