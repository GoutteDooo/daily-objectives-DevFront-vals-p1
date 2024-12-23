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

- Contrairement aux mangages strictement orientés objet comme Java, JS utilise des protos pour implémenter l'héritage, au lieu de classes au sens classique.

### Fonctions comme objets

- Les fonctions sont elles-mêmes des objets. Elles peuvent avoir des propriétés et être assignées à des variables.

### Typage dynamique

- JS est faiblement typé et dynamique. Ce qui est une différence forte avec Java ou C++.

### Flexibilité

- JS permet de créer et manipuler des objets à la volée, sans définition stricte préalable.
