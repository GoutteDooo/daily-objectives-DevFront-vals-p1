const divChamber = document.createElement("div");
divChamber.classList.add("chambre");
const textString = document.createTextNode("Je suis dehors !");
const textNode = document.createTextNode("salut les gens, j'suis chez moi !");
document.body.appendChild(textNode);
maison.append(textNode);
maison.after(divChamber);
divChamber.append(textString);
divChamber.append("\n HEEE \n", "HOOO");
divChamber.insertAdjacentHTML("afterend", "<p>Je suis VRAIMENT dehors !!");
document.body.insertAdjacentElement(
  "afterbegin",
  document.createElement("div")
);
setTimeout(() => {
  document.body.firstElementChild.remove(); //removeau bout d'une seconde la div bleue créée précédemment
}, 1000);

console.log(document);

/**SUPPRIME TOUT LE BODY */
/*
document.childNodes[0].childNodes[1];
console.log(
  document.childNodes[1].childNodes[2].childNodes.forEach((node) =>
    node.remove()
  )
);
*/

const clonedChamber = maison.cloneNode(true);
console.log(clonedChamber);

const fragmentArrayReplace = [];
for (let i = 0; i < 3; i++) {
  const clonedChamber = maison.cloneNode(i % 2 ? true : false);
  fragmentArrayReplace.push(clonedChamber);
}

document.body.after(...fragmentArrayReplace);
