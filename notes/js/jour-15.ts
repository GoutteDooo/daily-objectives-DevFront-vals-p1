import { log } from "console";

abstract class Personne {
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

class Femme extends Personne {
  constructor(name: string, age: number) {
    super(name, age);
  }
  parler() {
    console.log("Bonjour, je m'appelle : ");
  }
}

const p = new Personne("Alice", 30);
console.log(p.nom); // Utilisation du getter
p.nom = "Bob"; // Utilisation du setter
