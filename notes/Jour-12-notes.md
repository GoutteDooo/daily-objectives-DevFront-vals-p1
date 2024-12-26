Méthodes pour créer de nouveaux nœuds :

document.createElement(tag) – crée un élément avec la balise donnée,
document.createTextNode(value) – crée un nœud texte (rarement utilisé),
elem.cloneNode(deep) – clone l’élément, si deep==true tous les descendants viennent avec.
Insertion et suppression :

node.append(...nodes or strings) – insère dans node, à la fin,
node.prepend(...nodes or strings) – insère dans node, au début,
node.before(...nodes or strings) –- insère juste avant node,
node.after(...nodes or strings) –- insère juste après node,
node.replaceWith(...nodes or strings) –- remplace node.
node.remove() –- supprime le node.
Les chaînes de caractères texte sont insérées “sous forme de texte”.

Il existe également des méthodes “old school” :

parent.appendChild(node)
parent.insertBefore(node, nextSibling)
parent.removeChild(node)
parent.replaceChild(newElem, node)
Toutes ces méthodes retournent le node.

Étant donné un peu de HTML dans html, elem.insertAdjacentHTML(where, html) l’insère en fonction de la valeur de where :

"beforebegin" – insère html juste avant elem,
"afterbegin" – insère html dans elem, au début,
"beforeend" – insère html dans elem, à la fin,
"afterend" – insère html juste après elem.
Il existe également des méthodes similaires, elem.insertAdjacentText et elem.insertAdjacentElement, qui insèrent des chaînes de caractères texte et des éléments, mais ils sont rarement utilisés.

Pour ajouter du HTML à la page avant la fin du chargement :

document.write(html)
Une fois la page chargée, un tel appel efface le document. Surtout vu dans les anciens scripts.
