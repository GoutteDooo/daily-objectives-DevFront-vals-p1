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

# Comprendre le principe d'Instance

- En POO, une instance désigne un **objet concret** créé à partir d'une **classe**.

## Qu'est-ce qu'une classe ?

- C'est une définition ou un plan permettant de créer des objets. Elle décrit les propriétés (attributs) et les comportements (méthodes) communs à ces objets.
- Exemple :

```js
class Animal {
  constructor(name) {
    this.name = name; // propriété
  }
  speak() {
    // méthode
    console.log(`${this.name} makes a sound.`);
  }
}
```

## Qu'est-ce qu'une instance ?

- Un **objet particulier** créé à partir de la **classe**
- Si une classe est le modèle, l'instance est l'objet réel et unique construit à partir de ce modèle.
- Une instance a ses propres valeurs pour les propriétés définies dans la classe, même si elle partage les méthodes et la structure de la classe.

## Création d'une instance

- Une instance est créée en utilisant le mot-clé `new` (dans de nombreux langages, y compris JS, Java et C#)

## Caractéristiques d'une instance :

1. Propriétés uniques :
   - Chaque instance peut avoir des valeurs différentes pour les propriétés définies dans la classe.

```js
const cat = new Animal("Whiskers");
const dog = new Animal("Rex");

console.log(cat.name); // Whiskers
console.log(dog.name); // Rex
```

2. Comportements partagés :
   - Toutes les instances partagent les méthodes définies dans la classe.

```js
cat.speak(); // Whiskers makes a sound.
dog.speak(); // Rex makes a sound.
```

3. Identification comme instance :
   - On peut vérifier si un objet est une instance d'une classe avec l'opérateur `instanceof` :

```js
console.log(dog instanceof Animal); //true
```

4. Indépendance des instances :
   - Les modifications apportées à une instance n'affectent pas les autres instances (sauf si elles partagent des références d'objets)

```js
cat.name = "Kitty";
console.log(cat.name); // Kitty
console.log(dog.name); // Rex
```

## Différence entre classe et instance :

| Classe                                  | Instance                                                          |
| --------------------------------------- | ----------------------------------------------------------------- |
| Plan ou modèle                          | Objet concret créé à partir de la classe                          |
| Définit la structure et le comportement | Contient des valeurs spécifiques et utilise les méthodes définies |
| Abstrait                                | Concret                                                           |

# Les Classes

Elles sont utilisées pour structurer le code et modéliser des concepts du monde réel ou abstrait. Elles permettent de :

- Encapsuler des données et des comportements
- Créer des objets réutilisables
- Simplifier la maintenance et l'extensibilité du code

# Différences concrètes entre Classes Classiques et Abstraites

## Définition

1. Classe Classique :

   - C'est une **classe complète** qui peut être instanciée directement.

2. Classe Abstraite :
   - C'est une **classe incomplète**, servant de modèle pour d'autres classes et ne pouvant pas être instanciée directement.

## Instanciation

1. Classique :
   - Peut être utilisée directement pour créer des objets (instances).
     Exemple :

```js
class Animal {
  constructor(nom) {
    this.nom = nom;
  }
}

const chien = new Animal("Rex");
console.log(chien.nom); // Rex
```

2. Abstraite :
   - Ne peut pas être instanciée directement. elle **sert de base pour d'autres classes**.

```js
abstract class Animal {
  constructor(nom) {
    this.nom = nom;
  }
}

// Erreur : on ne peut pas instancier une classe abstraite
// const animal = new Animal("Rex");

class Chien extends Animal {
  parler() {
    console.log("Woof!");
  }
}

const rex = new Chien("Rex");
rex.parler(); // Woof!
```

## Objectif :

1. Classique :

   - Fournit une implémentation complète d'un objet
   - Peut contenir toutes les méthodes nécessaires au fonctionnement d'un objet

2. Abstraite :
   - Fournit un modèle ou une structure que les sous-classes doivent suivre
   - Peut inclure des méthodes abstraites (non implémentées) que les sous-classes doivent définir

## Méthodes abstraites

1. Classique :

   - Ne contient pas de méthodes abstraites. Toutes les méthodes ont une implémentation.

2. Abstraite :
   - Peut inclure des méthodes abstraites qui n'ont pas d'implémentation et doivent être définies dans les sous-classes.

Exemple de méthode abstraite :

```js
abstract class Animal {
  constructor(nom) {
    this.nom = nom;
  }

  // Méthode abstraite (pas d'implémentation ici)
  parler() {
    throw new Error("Cette méthode doit être implémentée dans une sous-classe.");
  }
}

class Chat extends Animal {
  parler() {
    console.log("Miaou!");
  }
}

const chat = new Chat("Minou");
chat.parler(); // Miaou!
```

# Le Constructor

- **Méthode spéciale** utilisée pour initialiser un objet lors de sa création. Il sert à configurer les propriétés de l'instance avec les valeurs fournies ou des valeurs par défaut.

## Caractéristiques

1. Appelé automatiquement

   - Il est exécuté automatiquement lors de la création de l'instance d'une classe à l'aide du mot-clé `new`

2. Définit les propriétés d'instance :

   - Il est souvent utilisé pour initialiser les propriétés spécifiques à chaque instance de la classe.

3. Un seul par classe :

   - Une classe ne peut avoir qu'un seul constructor. Cependant, il est possible d'inclure des paaramètres optionnels ou des valeurs par défaut pour varier le comportement.

4. Héritage et appel de `super` :
   - Lorsqu'une classe hérite une autre, le constructor de la classe parente peut être appelé via super() pour s'assurer que les propriétés définies dans la classe parent sont également initialisées.
