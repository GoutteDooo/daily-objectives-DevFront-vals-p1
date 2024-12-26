import { log } from "console";

class CompteBancaire {
  private solde: number;
  protected titulaire: string;
  public courant: number;

  constructor(solde: number, titulaire: string, courant: number) {
    this.solde = solde;
    this.titulaire = titulaire;
    this.courant = courant;
  }

  deposer(montant: number): void {
    this.solde += montant;
  }

  afficherSolde(): void {
    console.log(`Le solde de ${this.titulaire} est de ${this.solde} euros.`);
  }
  get obtenirSolde(): number {
    return this.solde;
  }
  set ajouterSolde(montant: number) {
    this.solde += montant;
  }
}

class CompteEpargne extends CompteBancaire {
  calculerInterets(taux: number): void {
    console.log("Calcul des intérêts pours ${this.titulaire}...");
  }

  get obtenirCourant(): number {
    return this.courant;
  }
}

const compte = new CompteEpargne(1000, "Alice", 500);
compte.deposer(500);
compte.afficherSolde();
compte.calculerInterets(0.1);
log(compte.obtenirCourant);
compte.courant += 350;
log(compte.obtenirSolde);
compte.ajouterSolde = 500;
log(compte.obtenirSolde);
