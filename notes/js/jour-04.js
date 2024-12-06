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

let user = makeUser("John", 20);
/*console.log(user.propInexistante); //return undefined
console.log(user["name"]); // = user.name
console.log("name" in user);
*/
for (let key in user) {
  console.log(key);
  console.log(user[key]); // = user.name; user.age; user.isAdmin; ici....
}
