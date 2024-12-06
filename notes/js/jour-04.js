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
