# Counting sheeps

_Consider a list/array of sheep. Each sheep has a name and a color (separated by
commas).
Make an algorithm that obtains the number of sheep and the name and color of
each one and prints in the console the names of the sheep that are red and whose
name also contains the letters n and a, regardless of order, capitalization, or spaces.
Remember. It must contain the two letters n and a in the name. Don't count sheep
that only have one of the letters, it must have both._

_Considera una lista/arreglo de ovejas. Cada oveja tiene un nombre y un color (separados por comas).
Haz un algoritmo que obtenga el número de ovejas y el nombre y color de
cada una e imprima en la consola los nombres de las ovejas que son rojas y cuyo
nombre contenga también las letras n y a, independientemente del orden, mayúsculas o espacios.
Recuerda. Debe contener las dos letras n y a en el nombre. No cuentes las ovejas
que sólo tengan una de las letras, debe tener las dos._

## Solution 🚀
```
function sheeps(number, array) {
  for (let i = 0; i < array.length; i++) {
    let nameUppercase = array[i].name.toUpperCase();
    if (
      nameUppercase.includes("A") &&
      nameUppercase.includes("N") &&
      array[i].color === "red"
    ) {
      console.log(array[i].name);
    }
  }
}
sheeps(3, [
  { name: "noah", color: "blue" },
  { name: "euge", color: "red" },
  { name: "Ki Na Ma", color: "red" }
]); // Ki Na Ma

``
