//exo 5

const recursiveIsEven = (num) => {
  if (num < 0) num = -num;
  if (num == 0) return true;
  else if (num == 1) return false;
  console.log("récursivité, num : ", num);

  return recursiveIsEven(num - 2);
};

console.log(recursiveIsEven(-26));
