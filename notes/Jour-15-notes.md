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

# Différence entre les attributs et les propriétés d'une classe :

## Attributs

- **Définition :** Les attributs sont les données ou variables associées à une classe ou à ses instances.
- **Nature :** Ils représentent l'état d'un objet ou de la classe (valeurs contenues)
- **Déclaration :** Dans TS, ils souvent souvent déclarés explicitement au sein de la classe avec leur type.
- **Accès :** Les attributs peuvent être publics, privés ou protégés.

Exemple d'attribut :

```ts
class Personne {
  nom: string; // Attribut
  âge: number; // Attribut

  constructor(nom: string, âge: number) {
    this.nom = nom;
    this.âge = âge;
  }
}
```

## Propriétés

- **Définition** : Les propriétés sont une interface pour accéder ou modifier les attributs d'une classe. Elles incluent des getters ou des setters pour encapsuler l'accès aux attributs.
- **Objectif** : Elles permettent de contrôler l'accès ou de valider les données avant qu'elles ne soient modifiées ou lues.
- **Déclaration** : Les propriétés sont définies avec le mot-clé `get` ou `set` et une fonction associée.

Exemple de propriété :

```ts
class Personne {
  private _nom: string; // Attribut privé
  private _âge: number; // Attribut privé

  constructor(nom: string, âge: number) {
    this._nom = nom;
    this._âge = âge;
  }

  // Getter pour accéder au nom
  get nom(): string {
    return this._nom;
  }

  // Setter pour modifier le nom avec validation
  set nom(valeur: string) {
    if (valeur.length < 3) {
      throw new Error("Le nom doit avoir au moins 3 caractères.");
    }
    this._nom = valeur;
  }
}

const p = new Personne("Alice", 30);
console.log(p.nom); // Utilisation du getter
p.nom = "Bob"; // Utilisation du setter
```

## Résumé des différences :

| Aspects de la classe | Attributs                           | Propriétés                                 |
| -------------------- | ----------------------------------- | ------------------------------------------ |
| Nature               | Variables internes de la classe     | Interface pour accéder aux attributs       |
| Accessibilité        | Directement accessibles (si public) | Accès via des getters et des setters       |
| Encapsulation        | Aucune, sauf si déclarés privés     | fournissent un contrôle et des validations |
| Déclaration          | Explicite                           | Utilisation des mots-clés `get` et `set`   |

# Les différentes méthodes d'une classe

## Méthodes d'instance

- **Description :** Les méthods qui appartiennent à une instance spécifique d'une classe.
- **Utilisation** : Elles nécessitent une instance pour être appelées.
- **Exemple :**

```ts
class Personne {
  nom: string;

  constructor(nom: string) {
    this.nom = nom;
  }

  saluer(): void {
    console.log(`Bonjour, je m'appelle ${this.nom}`);
  }
}

const p = new Personne("Alice");
p.saluer(); // Bonjour, je m'appelle Alice
```

## Méthodes statiques

- **Description :** Les méthodes statiques sont associées à la classe elle-même, et non à une instance. Elles ne peuvent pas accéder directement aux attributs d’instance ou appeler des méthodes d’instance sans référence explicite.
- **Utilisation :** Elles sont souvent utilisées pour des utilitaires ou des fonctions qui n’ont pas besoin d’état spécifique à une instance.
- **Exemple :**

```ts
class MathUtil {
  static ajouter(a: number, b: number): number {
    return a + b;
  }
}

console.log(MathUtil.ajouter(5, 3)); // 8
```

## Méthodes abstraites

- **Description :** Les méthodes abstraites sont définies dans une classe abstraite mais n’ont pas d’implémentation. Elles doivent être implémentées dans les classes dérivées.
- **Utilisation :** Elles imposent aux sous-classes d’avoir une implémentation spécifique.
- **Exemple :**

```ts
abstract class Animal {
  abstract parler(): void; // Pas d'implémentation
}

class Chien extends Animal {
  parler(): void {
    console.log("Wouf !");
  }
}

const chien = new Chien();
chien.parler(); // Wouf !
```

## Méthodes privées

- **Description :** Les méthodes privées ne peuvent être appelées qu’au sein de la classe où elles sont définies.
- **Utilisation :** Elles servent à encapsuler des détails d'implémentation qui ne doivent pas être accessibles en dehors de la classe.
- **Exemple :**

```ts
class CompteBancaire {
  private solde: number;

  constructor(solde: number) {
    this.solde = solde;
  }

  // Méthode privée
  private verifierFonds(montant: number): boolean {
    return this.solde >= montant;
  }

  retirer(montant: number): void {
    if (this.verifierFonds(montant)) {
      this.solde -= montant;
      console.log(`Retrait réussi. Nouveau solde : ${this.solde}`);
    } else {
      console.log("Fonds insuffisants.");
    }
  }
}

const compte = new CompteBancaire(500);
compte.retirer(100); // Retrait réussi. Nouveau solde : 400
// compte.verifierFonds(100); // Erreur : Méthode privée
```

## Méthodes protégées

- **Description :** Les méthodes protégées peuvent être utilisées dans la classe où elles sont définies et dans les classes qui en héritent.
- **Utilisation :** Elles sont utiles pour partager des fonctionnalités avec des sous-classes sans les exposer publiquement.
  **Exemple :**

```ts
class Animal {
  protected respirer(): void {
    console.log("Respire...");
  }
}

class Chien extends Animal {
  aboyer(): void {
    console.log("Wouf !");
    this.respirer(); // Accessible car protégée
  }
}

const chien = new Chien();
chien.aboyer(); // Wouf ! Respire...
// chien.respirer(); // Erreur : Méthode protégée
```

## Méthodes asynchrones

- **Description :** Les méthodes qui retournent une promesse et permettent d’exécuter du code asynchrone.
- **Utilisation :** Utile pour les opérations comme les requêtes réseau ou le traitement différé.
- **Exemple :**

```ts
class Api {
  async fetchData(): Promise<string> {
    const response = await new Promise<string>((resolve) =>
      setTimeout(() => resolve("Données reçues"), 1000)
    );
    return response;
  }
}

const api = new Api();
api.fetchData().then((data) => console.log(data)); // Données reçues
```

## Résumé des différentes méthodes :

| Type de méthode | Accessible par                | Utilisation                                                |
| --------------- | ----------------------------- | ---------------------------------------------------------- |
| instance        | Une instance de la classe     | Pour définir les comportements spécifiques aux instances.  |
| statique        | La classe elle-même           | Pour des fonctions utilitaires ou générales.               |
| abstraite       | Les sous-classes              | Pour imposer une implémentation dans les classes dérivées. |
| privée          | La classe uniquement          | Encapsuler des détails d'implémentation                    |
| protégée        | La classe et ses sous-classes | Partager des fonctionnalités avec des sous-classes         |
| asynchrone      | Une instance ou une classe    | Exécuter du code asynchrone                                |

# Comprendre le principe d'encapsulation

## Qu'est ce que l'encapsulation ?

- Concept clé de la POO.
- Il s'agit de **cacher les détails complexes** d'une implémentation pour ne présenter aux users qu'une interface simple et fonctionnelle, leur permettant de se concentrer sur ce qui est important sans être submergés par les détails.

## À quoi sert l'encapsulation ?

- Permettre aux utilisateurs de manipuler les données sans avoir à se soucier de leur implémentation interne.
- Permettre aux développeurs de modifier l'implémentation sans avoir à modifier les interfaces utilisateurs.
- Permettre aux développeurs de faire des modifications indépendantes sans avoir à modifier les interfaces utilisateurs.

## Résumé des différentes encapsulations :

| Type d'encapsulation | Description                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Privée               | Les attributs et les méthodes d'une classe sont définis privément, ce qui signifie qu'ils ne peuvent être accédés que par les méthodes de la classe. Les attributs sont donc protégés et ne peuvent être modifiés que par les méthodes de la classe. Cette encapsulation permet de garantir la sécurité et la confidentialité des données.                                           |
| Publique             | Les attributs et les méthodes d'une classe sont définis publiquement, ce qui signifie qu'ils peuvent être accédés par tous les objets de la classe ou ses sous-classes. Les attributs sont donc accessibles et modifiables par tous les objets de la classe ou ses sous-classes. Cette encapsulation permet de garantir la sécurité et la confidentialité des données.               |
| Protégée             | Les attributs et les méthodes d'une classe sont définis protégément, ce qui signifie qu'ils ne peuvent être accédés que par les méthodes de la classe ou ses sous-classes. Les attributs sont donc protégés et ne peuvent être modifiés que par les méthodes de la classe ou ses sous-classes. Cette encapsulation permet de garantir la sécurité et la confidentialité des données. |

# Le Scope

| Scope     | Accessible dans la classe | Accessible dans les sous-classes | Accessible par les instances |
| --------- | ------------------------- | -------------------------------- | ---------------------------- |
| private   | Oui                       | Non                              | Non                          |
| protected | Oui                       | Oui                              | Non                          |
| public    | Oui                       | Oui                              | Oui                          |
