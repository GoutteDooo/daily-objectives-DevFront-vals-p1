/*let user = new Object();
user.name = "John";
console.log(user);
delete user.name;
console.log("after delete : ", user);
user["likes birds"] = true;
console.log(user);
*/
const makeUser = (name = null, age = 30) => {
  return {
    name,
    age,
    isAdmin: false,
  };
};

const cloneObject = (object = new Object()) => {
  return { ...object };
};

let user = makeUser("John", 20);
/*console.log(user.propInexistante); //return undefined
console.log(user["name"]); // = user.name
console.log("name" in user);
*/
for (let key in user) {
  console.log(key);
  console.log(user[key]); // = user.name; user.age; user.isAdmin; ici....
}
let copiedUser = cloneObject(user);
console.log("copiedUser : ", copiedUser);
for (let key in user) {
  delete user[key];
}
console.log("copiedUser after deleted user : ", copiedUser);
console.log("deleted user :", user);

const isEmpty = (object = Object) => {
  for (let key in object) {
    console.log(key);

    if (object[key]) {
      return false;
    }
  }
  return true;
};

console.log(isEmpty(user));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const sumSalaries = (object) => {
  let sum = 0;
  for (let key in object) {
    sum += object[key];
  }
  return sum;
};

console.log(sumSalaries(salaries));

let menu = {
  width: 200,
  height: 300,
  title: "Le Menu",
};
const multiplyNumeric = (obj) => {
  let newObj = obj;
  for (let key in obj) {
    if (typeof newObj[key] == "number") newObj[key] *= 2;
  }
  return newObj;
};

console.log(multiplyNumeric(menu));
const objetTest = {
  user: "toto",
  age: 30,
};

const str = ["1", "2", "3"];
str.push("4");

console.log(str);

copiedUser = {};
for (let key in user) {
  copiedUser[key] = user[key];
}

console.log(user, copiedUser);

user = {
  name: "John",
  age: 18,
};
copiedUser = {};
Object.assign(copiedUser, user);
for (let key in user) {
  user[key] = "";
}

console.log("user : ", user, copiedUser);

const tiroir = {
  name: "Toto",
};

const permission1 = { canView: true };
const permission2 = { canEdit: true };
console.log("tiroir avant les perms : ", tiroir);

Object.assign(tiroir, permission1, permission2);
delete permission1;
delete permission2;

console.log("tiroir après les perms : ", tiroir);

user.sizes = {
  height: 182,
  width: 50,
};

let clone = structuredClone(user);
/*
alert(user.sizes === clone.sizes); // false, c'est un objet différent

// user et clone n'ont plus aucun lien entre eux
user.sizes.width = 60; // changer une propriété d'un endroit
alert(clone.sizes.width); // 50, sans lien
*/
delete tiroir.canView;
console.log(tiroir);

let objet1 = {
  text: "toto",
};

let objet2 = objet1;
objet1.text = "toto1";

console.log(objet2.text);

let objetFun = {};

const fonctionFun = () => {
  alert("0 + 0 = la tête à toto.");
};
/*
objetFun.alert = fonctionFun;
objetFun.alert();
*/
objetFun = {
  text: "La tete à Zoro",
  fonctionFun() {
    alert("0 + 0 =");
    alert(this.text || "... je ne sais plus");
  },
  textFun: () => {
    this.text = "La tête à Toto !";
  },
};
/*
objetFun.textFun();
console.log(objetFun);

objetFun.fonctionFun();
*/
const alertFunc = () => {
  alert(this);
};
// alertFunc();

let calculator = {
  valueA: null,
  valueB: null,
  read() {
    let a = prompt("Valeur 1 : ", "2");
    let b = prompt("Valeur 2 : ", "3");
    this.valueA = a;
    this.valueB = b;
  },
  sum() {
    return +this.valueA + +this.valueB;
  },
  mul() {
    return this.valueA * this.valueB;
  },
};
/*
calculator.read();
console.log("somme : ", calculator.sum(), "/ produit : ", calculator.mul());
*/
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // affiche l'étape en cours
    alert(this.step);
    return this;
  },
};

//ladder.up().up().showStep().down().showStep();
/*
const arrayTest = ["a", "b", "c"];
arrayTest[1] = "d";
console.log(arrayTest);
console.log("shifting : ", arrayTest.shift());
console.log("unshifting : ", arrayTest.unshift("1", "0"));
console.log(arrayTest);
for (let letter of arrayTest) {
  console.log(letter);
}
*/

const styles = ["Jazz", "Blues"];
styles.push("RnR");
console.log(styles);
console.log(styles.length);
styles[Math.floor(styles.length / 2)] = "Classics";
console.log(styles.shift());

styles.unshift("Rap", "Reggae");
console.log(styles);

const sumInput = () => {
  const array = [];
  do {
    let input = prompt("Veuillez saisir un nombre : ", 0);
    if (input === null || input === "") break;
    input = Number(input);
    if (isNaN(input)) {
      break;
    }
    array.push(input);
  } while (true);
  console.log(array, ", calcul de la somme : ");
  let sum = 0;
  for (let value of array) {
    sum += value;
  }
  console.log("La somme est : ", sum);
};
/*
const input = prompt("Veuillez saisir un nombree : ", 0);
console.log(typeof input, input);
*/
//sumInput();

const getMaxSubSum = (arr) => {
  let maxSumTemp = 0;
  let maxSum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    maxSumTemp = 0;
    for (let j = i; j <= arr.length - 1; j++) {
      maxSumTemp += arr[j];
      maxSum = Math.max(maxSum, maxSumTemp);
    }
  }
  return maxSum;
};

// console.log(getMaxSubSum([-1, -2, -3, -2, -5, -3]));

/* Arrays Methods */
let arrayTest = ["I", "Go", "Home", 1, 12, 3];
console.log("array de base : ", arrayTest);

const removedArray = arrayTest.splice(3, 3, "then", "I'm", "OK !"); //Retourne les éléments splicés

console.log("array splicé : ", arrayTest);
console.log("Eléments removed : ", removedArray);

let slicedArray = arrayTest.slice(2, 5);
console.log("array slicé, mais son contenu reste identique");
console.log(arrayTest);
console.log(slicedArray);

arrayTest.concat(slicedArray);
console.log(
  "concaténation avec le slicé et le removed : ",
  arrayTest.concat(slicedArray, removedArray),
  "mais ne met pas à jour arrayTest"
);

arrayTest = arrayTest.concat(slicedArray, removedArray);
console.log(arrayTest);
slicedArray = null;
console.log(slicedArray, arrayTest);
let arrayLike = {
  0: "un",
  1: "deux",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};

// console.log(arrayTest.concat(arrayLike));
/*
arrayTest.forEach((item, index, array) => {
  console.log(item, index, array);
});
*/

// console.log(
//   "mappage : ",
//   arrayTest.map((item) => typeof item)
// );
console.log(arrayTest.sort((a, b) => (a > b ? 1 : -1)));
console.log(arrayTest);
let names = "John, Ashley, Alberto";
let namesArray = names.split(", ");
console.log(namesArray);

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  },
};

let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

// find users, for who army.canJoin returns true
let soldiers = users.filter((user) => army.canJoin(user));
/*
alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23
*/
