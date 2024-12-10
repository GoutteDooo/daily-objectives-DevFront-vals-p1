//exo 2

const boucle = (i) => {
  if (!(i % 3) && !(i % 5)) return "FizzBuzz";
  if (!(i % 3) && i % 5) return "Fizz";
  if (i % 3 && !(i % 5)) return "Buzz";
  return i;
};

for (i = 1; i <= 100; i++) {
  console.log(boucle(i));
}
