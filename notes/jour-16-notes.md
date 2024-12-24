# Comprendre ce qu'est l'héritage

## A quoi sert l'héritage ?

L'héritage est un concept fondamental en Programmation Orientée Objet (POO) qui permet à une classe (appelée classe dérivée ou sous-classe) de réutiliser et étendre les fonctionnalités d'une autre classe (appelée classe parente ou super-classe).

Cela permet :

- La réutilisation du code existant pour éviter la duplication.
- L'extension des fonctionnalités en ajoutant ou modifiant des comportements spécifiques.
- De créer une relation hiérarchique entre des classes partageant des caractéristiques communes.

# Qu'est-ce qu'une interface ?

- Cela représente un contrat, ou une structure pour des classes ou des objets.
- Permet la standardisation, le polymorphisme et la réutilisation du code.
- Est un outil clé pour pour écrire un code modulaire, maintenable et extensible.

Il est conseillé d'utiliser les interfaces pour standardiser les comportements des classes.
Aussi, les combiner avec des classes abstraites pour structurer des systèmes complexes.
(Notamment en TypeScript)

## Différences entre interfaces et classes abstraites

| Aspect                  | Interface                                         | Classe Abstraite                                             |
| ----------------------- | ------------------------------------------------- | ------------------------------------------------------------ |
| Implémentation          | Ne contient aucune implémentation.                | Peut contenir des méthodes abstraites et implémentées.       |
| Héritage/Implémentation | Une classe peut implémenter plusieurs interfaces. | Une classe ne peut hériter que d'une seule classe abstraite. |
| Nature                  | Représente un contrat ou une structure.           | Représente un concept ou un comportement partagé.            |
| Constructeur            | Ne peut pas contenir de constructeur.             | Peut contenir un constructeur.                               |

# Comprendre le principe de relations entre les objets (UML)

- Les relations entre objets en UML (Unified Modeling Language) sont des liens qui décrivent les relations entre les objets et les classes.
- Les trois principales relations sont l'association, l'aggrégation et la composition.

## Qu'est ce que l'association ?

- Relation simple entre deux classes ou objets.
- Exemple de la relation entre le Professeur et l'étudiant. Un professeur peut enseigner plusieurs étudiants. Un étudiant peut être enseigné par plusieurs professeurs.

## Qu'est ce que l'aggrégation ?

- Relation plus forte qu'une association.
- Indique une relation de tout à partie entre deux objets, mais chaque partie peut continuer d'exister indépendamment du tout.
- Exemple de la Classe (de l'école) qui réunit tout les Eleves. Si la Classe disparaît, les Eleves continuent d'exister.

## Qu'est ce que la composition ?

- Relation très forte entre deu classes.
- Indique une relation de tout à partie entre deux objets, mais cette fois-ci, la vie de la partie dépend du tout.
- Si l'objet contenant (le tout) est détruit, les objets contenus (les parties) le sont également.
- Exemple de la Maison et des Pieces. Si la Maison disparaît, les Pieces aussi disparaîtront.

## Résumé des différentes relations :

| Relation    | Force      | Exemple                       | Dépendance                                      | Représentation UML |
| ----------- | ---------- | ----------------------------- | ----------------------------------------------- | ------------------ |
| Association | Simple     | Professeur -> Étudiant        | Aucune stricte                                  | Ligne simple       |
| Aggrégation | Forte      | Classe (de l'école) -> Eleves | Les deux parties peuvent exister indépendamment | Losange vide       |
| Composition | Très forte | Maison -> Pieces              | Les parties dépendent du tout                   | Losange rempli     |

# Comprendre ce qu'est le polymorphisme :

- Le polymorphisme est la capacité d'un objet à être utilisé de différentes manières en fonction de son type.
