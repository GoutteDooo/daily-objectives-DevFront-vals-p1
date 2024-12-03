"use strict";
/**
 * Additionne deux nombres.
 * @param {number} a - Le premier nombre.
 * @param {number} b - Le second nombre.
 * @returns {number} La somme des deux nombres.
 */
function add(a, b) {
  return a + b;
}

function demo() {
  console.log(this); // `undefined` au lieu de l'objet global
}
demo();

// console.log(obj);
