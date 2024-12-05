# Day 3 - JS

## Les boucles

- Une unique exécution du corps est appelé une itération
- `while(i) === while (i != 0)`

```js
do {
  //corps de la boucle
} while (condition);
```

- De cette manière, le corps de la boucle s'exécute avant la condition -> Donc au moins une fois.

### break et continue

- break stop la boucle
- continue stop l'itération en cours et force une nouvelle
- Attention avec les opérateurs ternaires (?) ! Ils attendent des expressions. Break et Continue sont des instructions : `(i > 5) ? alert(i) : continue;` provoque une erreur ici. On préférera écrire :

```js
if (i > 5) {
    alert(i);
} else {
    continue;
}
```

### Les labels

- Une label est un identifiant avec deux points avant une boucle :

```js
labelName: for (...) {
    ...
}
```

- L'instruction `break <labelName>` dans la boucle interrompt tout le bloc de code relatif au label.
- Comme ici :

```js
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, "");

    // si une chaîne est vide ou annulée, alors rompre les deux boucles
    if (!input) break outer; // (*)

    // faire quelque chose avec la valeur …
  }
}

alert("Done!");
```

- Ca peut aussi s'écrire comme ça :

```js
outer:
for (let i = ....) {...}
```

- **continue** fonctionne aussi avec un label, on passe donc à l'itération suivante de la boucle labellisée.

### Résumé

- Pour créer une boucle infinie, on utilise généralement `while (true)`. Une telle boucle peut être stoppée avec la directive `break`.
- Lorsque l'on écrit `for (let i = 0; i < 5 ; ++i)` par exemple, `++i` s'exécute à la fin du corps de la boucle.
