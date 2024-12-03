# Day 1

## Différences entre ES et JS

### ES - Spécification

- EcmaScript : spécification standardisée par l'organisme ECMA International (nom officiel : ECMA-262).
- Il décrit comment un langage de script doit fonctionner.
- Cadre de référence que les implémentations (comme js) suivent
- Versionné, notamment avec ES5, ES6, ES2016+...

### JS - Implémentation

- langage de programmation réel basé sur la spécification ES
- Utilisé principalement pour le dév web côté client, mais aussi côté serveur avec Node.js, ainsi que pour des apps non web.
- Inclut des fonctionnalités non standard ou propriétaires avec des plugins (comme les APIs web spécifiques aux navigateurs) qui ne font pas partie d'ES
- Compatibles avec des moteurs comme V8 (chrome) qui implémentent les spécifications ES (degré de conformité pouvant varier).

### Différences spécifiques

- JS implémente ES
- JS utilise ES pour écrire et exécuter du code, mais ES n'est pas utilisable en solo
- JS suit ES, et pas l'inverse.
-

## Importance de la ponctuation, standard & environnement d'exécution

- JS peut insérer des points-virgules automatiques (ASI - Automatic Semicolon Insertion), mais peut entraîner des comportements imprévisibles. Par exemple :

  ```js
  console.log("Bonjour");
  console.log("heeey");
  ```

  fonctionne mais déconseillé en l'absence de point-virgule.

  ```js
  let a = 5
  [1,2,3].forEach((...))
  ```

  Ne fonctionne pas car js tente d'interpréter [1,2,3] comme une tentative d'accès.

## standards et environnements d'exécution

### Standards

- JS suit ES (ECMA-262). Quelques versions clés :
  - ES5 (2009) : Strict-mode + nombreuses fcts standardisées
  - ES6/ES2015 : Classes, modules, let/const, Promises, etc
  - ES2016+ : async/await, flatMap, nullish coalescing

### Environnements d'exécution

- JS est exécuté dans des environnements qui fournissent des APIs supplémentaires en fct de l'utilisation.
  - Navigateurs web :
    - Moteurs JS (Chrome : V8, Firefox: SpiderMonkey)
    - APIs intégréees comme le DOM, Fetch, WebSocket
  - Node.js :
    - Exécution Côté serveur
    - Fournit des modules spécifiques comme fs pour les fichiers, http pour les serveurs, etc
  - Autres plateformes :
    - Deno: une alternative à node.js
    - moteurs embarqués ex dans des app mobiles comme IoT

## Types d'instruction JS

- D'ABORD : Une instruction (ou statement) est une unité de base d'exécution : une action à effectuer par le moteur JS. (équivalent d'une phrase complète en langage humain)

### Que peut inclure une instruction ?

- Des mots-clés du langage (if, for, return...)
- Des expressions (calculs, assignations...)
- Des opérateurs (+, =...)

- Chaque instruction doit :
  - Être complète pour que le moteur JS puisse l'exécuter
  - Se terminer par un ";" (même si parfois ASI peut le faire automatiquement mais on va éviter)

### Types d'instructions JS

- assignation (`let x = 10; //affecte 10 à la variable x`)
- déclaration :

```js
const PI = 3.14; //déclare une constante
function add(a, b) {
  // Déclare une fonction
  return a + b;
}
```

- conditionnelle (`if (x < 5) { ... }`)
- boucles (`for, while...`)
- interruption (`for (...) { ...; break; //Sort de la boucle alors qu'elle n'est pas forcément terminée}`)
- retour (`return ...;`)

### Expressions vs instructions

- Expression produit une valeur : `let sum = 3 + 5; //'3 + 5' est une expression`
- Instruction exécute une action : `let sum = 3 + 5; // L'instruction inclut l'expression '3 + 5'`

## Les commentaires

- JSDoc utilise des commentaires spécifiques pour documenter le code, générer des docs, ou fournir des infos aux développeurs

```js
/**
 * Additionne deux nombres.
 * @param {number} a - Le premier nombre.
 * @param {number} b - Le second nombre.
 * @returns {number} La somme des deux nombres.
 */
function add(a, b) {
  return a + b;
}
```

- Les balises comme @param et @returns permettent de décrire précisément les paramètres attendus pour une fonction, le type des données, la valeur retournée par la fonction.
- Ca aide les autres dévs (ou moi-même plus tard) à comprendre comment utiliser la fonction, même sans lire son contenu

| Balise      | Utilité                                                        |
| ----------- | -------------------------------------------------------------- |
| @param      | Décrit un paramètre d'une fonction, avec son type et son rôle. |
| @returns    | Indique la valeur de retour d'une fonction.                    |
| @example    | Fournit un exemple d'utilisation de la fonction ou méthode.    |
| @throws     | Explique les erreurs ou exceptions qui peuvent être levées.    |
| @deprecated | Signale qu'une fonction ou méthode est obsolète.               |
| @author     | Documente l'auteur du code.                                    |
