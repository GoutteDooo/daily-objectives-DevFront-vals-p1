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
