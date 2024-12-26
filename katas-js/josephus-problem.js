const josephusProblem = (n, k) => {
  //Créer l'array
  let array = [];
  for (let i = 0; i < n; i++) array.push(i);

  let i = k - 1; //ex : k = 2, i commence par kill le prisonnier n = 1 à l'index i = 1
  console.log("array de base: ", array);
  while (array.length > 1) {
    console.log("i=", i, "prisoner to kill=", array[i]);
    array.splice(i, 1);
    // array[i] = undefined;
    i += k - 1; //avance du step
    i = i >= array.length ? i % array.length : i; //check si i dépasse du tableau, le renvoie au début + sa longueur dépassée le cas échéant
    console.log("nouvel array : ", array);
    if (i > 100) break; //sécurité
  }
};

console.log(josephusProblem(6, 2));
