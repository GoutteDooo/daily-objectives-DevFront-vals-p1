//exo 3

let isEmpty = true;

for (i = 0; i < 8; i++) {
  let row = "";
  for (j = 0; j < 8; j++) {
    row += isEmpty ? " " : "#";
    isEmpty = !isEmpty;
  }
  isEmpty = !isEmpty;
  console.log(row);
}
