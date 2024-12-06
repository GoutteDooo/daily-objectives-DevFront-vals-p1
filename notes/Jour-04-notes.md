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
