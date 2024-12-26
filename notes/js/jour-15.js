"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("console");
var CompteBancaire = /** @class */ (function () {
    function CompteBancaire(solde, titulaire, courant) {
        this.solde = solde;
        this.titulaire = titulaire;
        this.courant = courant;
    }
    CompteBancaire.prototype.deposer = function (montant) {
        this.solde += montant;
    };
    CompteBancaire.prototype.afficherSolde = function () {
        console.log("Le solde de ".concat(this.titulaire, " est de ").concat(this.solde, " euros."));
    };
    Object.defineProperty(CompteBancaire.prototype, "obtenirSolde", {
        get: function () {
            return this.solde;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompteBancaire.prototype, "ajouterSolde", {
        set: function (montant) {
            this.solde += montant;
        },
        enumerable: false,
        configurable: true
    });
    return CompteBancaire;
}());
var CompteEpargne = /** @class */ (function (_super) {
    __extends(CompteEpargne, _super);
    function CompteEpargne() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompteEpargne.prototype.calculerInterets = function (taux) {
        console.log("Calcul des intérêts pours ${this.titulaire}...");
    };
    Object.defineProperty(CompteEpargne.prototype, "obtenirCourant", {
        get: function () {
            return this.courant;
        },
        enumerable: false,
        configurable: true
    });
    return CompteEpargne;
}(CompteBancaire));
var compte = new CompteEpargne(1000, "Alice", 500);
compte.deposer(500);
compte.afficherSolde();
compte.calculerInterets(0.1);
(0, console_1.log)(compte.obtenirCourant);
compte.courant += 350;
(0, console_1.log)(compte.obtenirSolde);
compte.ajouterSolde = 500;
(0, console_1.log)(compte.obtenirSolde);
