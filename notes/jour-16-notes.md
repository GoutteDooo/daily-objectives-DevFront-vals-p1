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
