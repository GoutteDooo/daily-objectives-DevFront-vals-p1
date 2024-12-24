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
var Animal = /** @class */ (function () {
    function Animal(nom, âge) {
        this._nom = nom;
        this._âge = âge;
    }
    Object.defineProperty(Animal.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (nom) {
            this._nom = nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "\u00E2ge", {
        get: function () {
            return this._âge;
        },
        set: function (âge) {
            this._âge = âge;
        },
        enumerable: false,
        configurable: true
    });
    Animal.prototype.parler = function () {
        console.log("".concat(this.nom, " parle."));
    };
    return Animal;
}());
var Chien = /** @class */ (function (_super) {
    __extends(Chien, _super);
    function Chien(nom, âge, poils) {
        var _this = _super.call(this, nom, âge) || this;
        _this.poils = poils;
        return _this;
    }
    Chien.prototype.aboyer = function () {
        console.log("".concat(this.nom, " aboie : Wouf !"));
    };
    Chien.prototype.parler = function () {
        console.log("".concat(this.nom, " parle : Woof !"));
    };
    return Chien;
}(Animal));
var Chat = /** @class */ (function (_super) {
    __extends(Chat, _super);
    function Chat(nom, âge, stries) {
        var _this = _super.call(this, nom, âge) || this;
        _this._stries = stries;
        return _this;
    }
    Chat.prototype.miauler = function () {
        console.log("".concat(this.nom, " miaule : Miaou !"));
    };
    Chat.prototype.parler = function () {
        console.log("".concat(this.nom, " parle : Miaou !"));
    };
    Object.defineProperty(Chat.prototype, "stries", {
        get: function () {
            return this._stries;
        },
        enumerable: false,
        configurable: true
    });
    return Chat;
}(Animal));
var Eden = new Chien("Eden", 15, "noirs");
var Fifille = new Chat("Fifille", 14, 55);
Eden.parler();
Fifille.parler();
(0, console_1.log)(Eden.âge);
(0, console_1.log)(Fifille.âge);
Fifille.nom = "Fifi";
(0, console_1.log)(Fifille.nom);
Fifille.parler();
(0, console_1.log)(Fifille.stries);
(0, console_1.log)(Eden.poils);
var animaux = [Eden, Fifille];
animaux.forEach(function (animal) {
    (0, console_1.log)("nom de l'animal : " + animal.nom);
    (0, console_1.log)("âge de l'animal : " + animal.âge);
    animal.parler();
});
