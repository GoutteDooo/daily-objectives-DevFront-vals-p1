var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Femme = /** @class */ (function (_super) {
    __extends(Femme, _super);
    function Femme(name, age) {
        return _super.call(this, name, age) || this;
    }
    Femme.prototype.parler = function () {
        console.log("Bonjour, je m'appelle : ");
    };
    return Femme;
}(Personne));
var p = new Femme("Alice", 30);
console.log(p.nom); // Utilisation du getter
p.nom = "Bob"; // Utilisation du setter
console.log(p.nom); // Utilisation du getter
