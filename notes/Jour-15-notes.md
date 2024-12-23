# Est-ce que JS est un langage Orienté Objet ?

- Apparemment, JS n'est pas un pur langage orienté objet comme Java ou C++.
- Il est souvent qualifié de langage orienté prototype. Il supporte des concepts de la POO mais les implémente de manière différente.

## Objets

- En JS, presque tout est un objet (ou peut être traité comme tel)
- Ils peuvent être créés littéralement ou à l'aide de constructeurs (Object, class, etc.)

## Prototypes

- JS utilise un modèle basé sur des prototypes plutôt que des classes (bien que les classes soient dispo depuis ES6 comme une abstraction syntaxique)
- Chaque objet a une propriété interne appelée [[Prototype]], qui est un lien vers un autre objet ou `null `. Cela permet l'héritage prototype

## Encapsulation

- Les objets peuvent encapsuler des données et des comportements (via des propriétés et des méthodes).
- Avec ES6, JS prend en charge des modificateurs d'accès simulés grâce aux `Symbols`, `getters` et `setters`

## Héritage

- L'héritage est possible en utilisant des prototypes (Object.create()) ou la syntaxe des classes introduite avec ES6 (extends)
  Exemple :

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex");
dog.speak(); // Rex barks.
```

## Polymorphisme

- Avec les classes ou les protos, JS permet d'écraser des méthodes ou d'en définir de nouvelles dans les sous-classes.

## Quelles différences Majeures avec un langage strictement orienté objet

### Prototypage

- Contrairement aux langages strictement orientés objet comme Java, JS utilise des protos pour implémenter l'héritage, au lieu de classes au sens classique.

### Fonctions comme objets

- Les fonctions sont elles-mêmes des objets. Elles peuvent avoir des propriétés et être assignées à des variables.

### Typage dynamique

- JS est faiblement typé et dynamique. Ce qui est une différence forte avec Java ou C++.

### Flexibilité

- JS permet de créer et manipuler des objets à la volée, sans définition stricte préalable.

# Comprendre ce qu'est l'abstraction

- Concept clé de la POO.
- Il s'agit de **cacher les détails complexes** d'une implémentation pour ne présenter aux users qu'une interface simple et claire, leur permettant de se concentrer sur ce qui est important sans être submergés par les détails.

## Principes

1. Simplification des détails :
   - Isoler les caractéristiques essentielles d'un objet ou d'un système, tout en masquant les parties inutiles ou complexes.
   - (Exemple de la voiture que l'on conduit. On a le volant, les pédales, le tableau de bord... Mais on a pas accès aux détails du moteur, à quel type de carburant est utilisé, aux transmissions... Ce qui représenterait bcp trop d'infos)
   -
2. Encapsulation et abstraction :
   - L'abstraction est souvent liée à l'encapsulation, qui consiste à restreindre l'accès direct à certaines parties d'un objet. L'abstraction s'appuie sur l'encapsulation pour masquer les détails et offrir une interface simple.
3. Interface vs implémentation :
   - L'interface (ou API) décrit **ce que fait** un objet ou une classe.
   - L'implémentation décrit **comment cela est fait**
   - Avec l'abstraction, seule l'interface est exposée à l'user.

## Abstraction dans la POO

1. Classes abstraites :
   - C'est une classe qui **ne peut pas être instanciée directement**. Elle sert de **modèle pour d'autres classes** et définit une interface commune.
   - Elle peut contenir des **méthodes abstraites** (définies mais non implémentées) et des **méthodes concrètes** (implémentées).
   - Exemple en JS :

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    throw new Error("This method must be implemented by subclasses");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Bark!");
  }
}

const dog = new Dog("Rex");
dog.makeSound(); // Bark!
```

2. Interfaces :
   - Définit les méthodes ou propriétés qu'une classe doit implémenter, sans fournir d'implémentation. (JS n'a pas d'interface formelle, mais utilise souvent des conventions)
3. Modules et API :
   - En JS, les modules permettent de cacher certains détails tout en exposant une interface publique simple.
   - Exemple avec les modules ES6 :

```js
// module.js
export function add(a, b) {
  return a + b;
}

// détails internes non exposés
function helperFunction() {
  return "Helper";
}
```

## Avantages de l'abstraction

1. Réduction de la complexité
   - Les users d'une classe ou d'un système n'ont pas besoin de comprendre ses détails internes.
2. Réutilisation et modularité :
   - Les abstractions permettent de construire des systèmes modulaires, où les composants peuvent être réutilisés ou échangés sans affecter le reste.
3. Maintenance facilitée :
   - En masquant les détails d'implémentation, les changements internes peuvent être effectués sans perturber le code qui utilise l'abstraction.
4. Orientation utilisateur:
   - L'abstraction se concentre sur ce qui est pertinent pour l'user final, ce qui améliore la lisibilité et la convivialité du code.

## Résumé

- L'abstraction est **le processus de masquer les détails complexes d'une implémentation** pour présenter aux users une interface simple et fonctionnelle, leur permettant de se concentrer sur ce qui est vraiment important.
