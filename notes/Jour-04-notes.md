# DAY 4

## Les objets JS

- ` let user = new Object();` - Cette déclaration est appelée un objet littéral.
- Pour écrire une clé avec plusieurs mots, on va la déclarer entre guillemets :

```js
user = {
  "likes birds": true,
};
```

- Pour l'appeler, on peut faire comme ça : `user["likes birds"]`. On met entre crochets pour que js comprenne l'espace.
- exemple : `delete user["likes birds"]` remove la clé et avec elle sa valeur.

- Pour vérifier si une clé existe, on peut utiliser : `"key" in object`. Par exemple :

```js
console.log("name" in user); //return : true, user.name existe
```

```js
for (let key in user) {
  console.log(key);
  console.log(user[key]); // = user.name; user.age; user.isAdmin; ici....
}
```

- Les propriétés **integer** sont triées lors de l'appel de key. Par exemple :

```js
let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  // ..,
  1: "USA",
};

for (let code in codes) {
  alert(code); //1, 41, 44, 49...
}
```

- Les autres propriétés **non-integer** sont toutes appelées dans l'ordre dans lequel elles ont été créées.

- Une **variable** stockant un objet est une **référence** vers celui-ci :

```js
let a = {};
let b = a; //b et a référencent le même objet.
```

```js
let a = {};
let b = {}; //b et a référencent deux objets distincts, même si leur contenu sont identiques.
```

### Clonage d'objets

- Si on veut cloner un objet qui a des propriétés de fonction, une implémentation comme `._cloneDeep(obj)` de la bibliothèque `lodash` est conçue pour ça.

## Garbage collector

- Vérifie si les objets sont bien référencés, et si ce n'est pas le cas, libère la mémoire.
- l'algorithme de base de la récupération de place (garbage collection), s'appelle "mark-and-sweep".
- 3 optimisations :
  - Collecte générationnelle (deux ensemble : les "nouveaux" et les "anciens". Suivi réguliers des "nouveaux" et espacés des "anciens")
  - Collecte incrémentielle (de nombreux petits garbages collectors au lieu d'un gros créent de petits retards au lieu d'un gros)
  - Collecte en cas d'inactivité (lorsque processus inactif)

## Arrays

- LIFO (Last In First Out) pour les stacks
- FIFO (First In First Out) pour les files d'attente
- Un array JS fait les deux. On appelle ça un **deque** (double-ended queue)

## Arrays Methods

```js
arr.concat(arg1, arg2, ...);
arr.slice(start,end);//Prend les éléments entre start inclu et end exclu
arr.splice(start, deleteCount, elem1,elem2, ..., elemN); //modifie l'array entré et prend à partir de start, le nombre d'items à delete, et y push les éléments entrés (couteau suisse)
arr.indexOf(item, from); //retourne l'index et démarre sa recherche à partir de from
arr.includes(item, from); //retourne true si item trouvé et démarre sa recherche à partir de from
arr.lastIndexOf(item); //idem mais cherche de droite à gauche
arr.find(function(item, index, array)); //retourne le premier élément qui match
arr.findIndex(item);
arr.findLastIndex(item);
arr.filter(function(item, index, array));//un "multi-find", retourne un tableau de tt les éléments qui matchent
arr.map(function(item, index, array));//retourne un array de ce qu'on a voulu "mapper"
arr.sort((a,b) => a > b ? 1 : -1);//sort l'array définitivement et le retourne (numbers et string)
arr.reverse(); //tri dans le sens inverse
arr.split("",(number));//Décrire ce qu'on veut split entre les guillemets (all lettres par défaut si guillemets vides), et number est le nombre d'items à split (optionnel)
arr.join(""); //l'inverse de split
arr.reduce();//réduit le tableau jusqu'à un certain point (à nous de définir avec ce qui est proposé en paramètres)
```

- Il y'a un paramètre optionnel rare dans certaines fonctions `thisArg`.
  OU, la **CHEAT SHEETS** sur Javascript.info :

```
A cheat sheet of array methods:

To add/remove elements:

push(...items) – adds items to the end,
pop() – extracts an item from the end,
shift() – extracts an item from the beginning,
unshift(...items) – adds items to the beginning.
splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
To search among elements:

indexOf/lastIndexOf(item, pos) – look for item starting from position pos, and return the index or -1 if not found.
includes(value) – returns true if the array has value, otherwise false.
find/filter(func) – filter elements through the function, return first/all values that make it return true.
findIndex is like find, but returns the index instead of a value.
To iterate over elements:

forEach(func) – calls func for every element, does not return anything.
To transform the array:

map(func) – creates a new array from results of calling func for every element.
sort(func) – sorts the array in-place, then returns it.
reverse() – reverses the array in-place, then returns it.
split/join – convert a string to array and back.
reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
Additionally:

Array.isArray(value) checks value for being an array, if so returns true, otherwise false.Please note that methods sort, reverse and splice modify the array itself.

These methods are the most used ones, they cover 99% of use cases. But there are few others:

arr.some(fn)/arr.every(fn) check the array.

The function fn is called on each element of the array similar to map. If any/all results are true, returns true, otherwise false.

These methods behave sort of like || and && operators: if fn returns a truthy value, arr.some() immediately returns true and stops iterating over the rest of items; if fn returns a falsy value, arr.every() immediately returns false and stops iterating over the rest of items as well.

We can use every to compare arrays:

function arraysEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

alert( arraysEqual([1, 2], [1, 2])); // true
arr.fill(value, start, end) – fills the array with repeating value from index start to end.

arr.copyWithin(target, start, end) – copies its elements from position start till position end into itself, at position target (overwrites existing).

arr.flat(depth)/arr.flatMap(fn) create a new flat array from a multidimensional array.

For the full list, see the manual.

At first sight, it may seem that there are so many methods, quite difficult to remember. But actually, that’s much easier.

Look through the cheat sheet just to be aware of them. Then solve the tasks of this chapter to practice, so that you have experience with array methods.

Afterwards whenever you need to do something with an array, and you don’t know how – come here, look at the cheat sheet and find the right method. Examples will help you to write it correctly. Soon you’ll automatically remember the methods, without specific efforts from your side.
```
