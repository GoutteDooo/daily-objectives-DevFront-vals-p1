//exo 6

const countBs = (str) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "B") counter++;
  }
  return counter;
};
let input = "BBCbbbBBbb";
console.log("nombre de B dans ", input, " : ", countBs(input));

const countChar = (str, char) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == char) counter++;
  }
  return counter;
};

console.log(countChar("kakkerlak", "k"));
