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
