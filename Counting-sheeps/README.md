# Counting sheeps

_Consider a list/array of sheep. Each sheep has a name and a color (separated by
commas)._
_Make an algorithm that obtains the number of sheep and the name and color of
each one and prints in the console the names of the sheep that are red and whose
name also contains the letters n and a, regardless of order, capitalization, or spaces.
Remember. It must contain the two letters n and a in the name. Don't count sheep
that only have one of the letters, it must have both._

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
