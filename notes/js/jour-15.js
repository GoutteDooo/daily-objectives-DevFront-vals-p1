var Personne = /** @class */ (function () {
    function Personne(nom, âge) {
        this._nom = nom;
        this._âge = âge;
    }
    Object.defineProperty(Personne.prototype, "nom", {
        // Getter pour accéder au nom
        get: function () {
            return this._nom;
        },
        // Setter pour modifier le nom avec validation
        set: function (valeur) {
            if (valeur.length < 3) {
                throw new Error("Le nom doit avoir au moins 3 caractères.");
            }
            this._nom = valeur;
        },
        enumerable: false,
        configurable: true
    });
    return Personne;
}());
var p = new Personne("Alice", 30);
console.log(p.nom); // Utilisation du getter
p.nom = "Bob"; // Utilisation du setter
