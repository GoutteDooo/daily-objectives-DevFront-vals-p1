# Comprendre ce qu'est un test unitaire :

- Vérifier qu’une fonction ou un composant fonctionne correctement de manière isolée.
- C'est une forme de test automatique où l'on écrit du code pour tester du code.
- Il est très efficace de corriger un bug le plus tôt possible.
- Plus le bug est long a détecter et à corriger, plus il deviendra coûteux pour l'entreprise.
- Cela passe d'un coût de x1 lors du développement à un coût de x30 à x100 lors de la mise en production.
- C'est pk les TU sont excellents pour détecter les bugs le plus tôt possible.
- Ils facilitent également le **refactoring**.
- Améliorennt la qualité du code.
- Rend plus facile la maintenance du code.
- Au début d'un projet, il vaut mieux éviter de faire des tests unitaires.
- Il est plus intéressant de faire des tests unitaires lorsque le code est en cours de développement, et que le projet est déjà bien avancé.
- Ecrire des testes qui sont :
  - Maintenables
  - Robustes
  - Trustworthy (Dignes de confiance)

## Trois types de tests :

- Unit
- Integration
- end-to-end

- Sorte de "testing pyramid" de manière générale. (60u-30i-10e2e)

### Unitaires :

- Chaque module individuellement testée

### Integration :

- Teste tous les modules ensemble

### End-to-end :

- Teste tout le projet en même temps
- Simule un utilisateur interagissant avec le tout le système.

# Testing frameworks

- Un ensemble d'outils pour écrire et run des tests.
- Cela inclut bien souvent :
  - Un moteur de tests (execute les tests)
  - Une librairie de assertions (check si le code fonctionne comme prévu)
  - des mocking tools (remplace)
  - Un outil de coverage (mesure combien le code fonctionne)

## Exemples de testing frameworks :

- [Jest](https://jestjs.io/)
- [Mocha](https://mochajs.org/)
- [Jasmine](https://jasmine.github.io/)
- [AVA](https://github.com/avajs/ava)
- [Tape](https://github.com/substack/tape)
- [QUnit](https://qunitjs.com/)
- [Cypress](https://www.cypress.io/)
- [Vitest](https://vitest.dev/)
- [Playwright](https://playwright.dev/)

- Jest est le plus populaire.
- Vitest pour ESM, TS, et JSX.
-

# Deux manières de tester :

- Coder d'abord, puis tester (code First)
- Tester d'abord, puis coder (test First - TDD)

## TDD - Test Driven Development

- TDD prevents us from over-engineering solutions. ("Le TDD prévient de ne pas élargir les solutions")
- Not silver bullet.
-

## Code First
