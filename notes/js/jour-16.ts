import { log } from "console";

abstract class Animal {
  protected _nom: string;
  protected _âge: number;

  constructor(nom: string, âge: number) {
    this._nom = nom;
    this._âge = âge;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(nom: string) {
    this._nom = nom;
  }

  get âge(): number {
    return this._âge;
  }

  set âge(âge: number) {
    this._âge = âge;
  }
  parler(): void {
    console.log(`${this.nom} parle.`);
  }
}

class Chien extends Animal {
  poils: string;
  constructor(nom: string, âge: number, poils: string) {
    super(nom, âge);
    this.poils = poils;
  }

  aboyer(): void {
    console.log(`${this.nom} aboie : Wouf !`);
  }
  parler(): void {
    console.log(`${this.nom} parle : Woof !`);
  }
}

class Chat extends Animal {
  private _stries: number;
  constructor(nom: string, âge: number, stries: number) {
    super(nom, âge);
    this._stries = stries;
  }
  miauler(): void {
    console.log(`${this.nom} miaule : Miaou !`);
  }
  parler(): void {
    console.log(`${this.nom} parle : Miaou !`);
  }
  get stries(): number {
    return this._stries;
  }
}

const Eden = new Chien("Eden", 15, "noirs");
const Fifille = new Chat("Fifille", 14, 55);
Eden.parler();
Fifille.parler();
log(Eden.âge);
log(Fifille.âge);
Fifille.nom = "Fifi";
log(Fifille.nom);
Fifille.parler();
log(Fifille.stries);
log(Eden.poils);

const animaux: Animal[] = [Eden, Fifille];
animaux.forEach((animal) => {
  log("nom de l'animal : " + animal.nom);
  log("âge de l'animal : " + animal.âge);
  animal.parler();
});
