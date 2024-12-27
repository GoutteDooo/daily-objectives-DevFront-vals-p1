# Différence entre Node et NPM

## Node

- Plateforme logicielle libre en JavaScript.
- Environnement bas niveau permettant l'exécution de JavaScript côté serveur.
- Créé par Ryan Dahl en 2009.

## NPM

- npm est un gestionnaire de paquets pour NodeJS
- npm dispose du "registre npm", qui contient tous les paquets disponibles
- Automatiquement installé avec NodeJS
- Fonctionne avec un terminal et gère les dépendances pour une application.
- entièrement écrit en JavaScript et développé par Isaac Schlueter.

# Découverte de "NPM", "YARN" et "PNPM"

## YARN

- L'un des principaux gestionnaires de paquets JS.
- Développé par Meta en 2016 (facebook) pour l'environnement d'exécution JS Node.js.
- C'est une alternative a npm
- Créé pour résoudre les problèmes de cohérence, de sécurité et de performances avec de grandes bases de code.
- Contraignant, permettant aux users d'appliquer des règles pour leurs dépendances ou leurs champs de manifeste dans des espaces de travail délimités.

## PNPM

- Performant NPM
- Alternative a npm et yarn, conçue pour optimiser la gestion des paquets.
- Très rapide, stocke les paquets en global et réalise une grande économie d'espace disque.
- Développé en 2016 par Zoltan Kochan.

# Comprendre ce qu'est un Package Node

- C'est un arbre de répertoires et fichiers décrites par un fichier `package.json`.
- Cela contient tout les fichiers nécessaires à l'exécution d'un module.
- Les modules sont des bibliothèques JS que l'on peut utiliser dans un projet.

# Mettre à jour package

`npm install <nom_du_paquet>@latest`

# Mettre à jour tous les packages

Checker maj dispos :

- `ncu`

Appliquer maj dans package.json :

- `ncu -u`

Réinstaller les dépendances avec :

- `npm install`

Màj tout les packages globaux :

- `npm update -g`

# Différence entre un linter un formatter

- **Linter** : Outil qui analyse le code source pour détecter des pbs de style ou des erreurs potentielles sans modifier le code.
- **Formatter** : Outil qui modifie automatiquement le code pour respecter un style prédéfini ou un formatage spécifique.

# Est-il préférable de l'installer en global ou indépendamment sur chaque projet ?

- Sur sa machine, c'est cool, ça permet d'avoir sa propre manière de faire.
- Le plus embêtant, c'est quand on commence à travailler en équipe.
  Là, il vaut mieux installer sur le projet, comme ça tout le monde travaille avec le même outil, sans avoir de conflits de version.

# Nodemon ?

- Outil de développement pour Node.
- Surveille les modifs dans le projet, et redémarre le serveur ou l'app lorsque ces modifs sont repérées.
