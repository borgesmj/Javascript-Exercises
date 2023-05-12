# Ceasars Cipher
_Uno de los cifrados más sencillos y conocidos es el cifrado César, también conocido como cifrado por desplazamiento. En un cifrado por desplazamiento, el significado de las letras se desplaza en una cantidad determinada.
Un uso moderno común es el cifrado ROT13, en el que los valores de las letras se desplazan 13 posiciones. Así, A ↔ N, B ↔ O y así sucesivamente.
Escribe una función que tome como entrada una cadena codificada con ROT13 y devuelva una cadena decodificada.
Todas las letras serán mayúsculas. No transforme ningún carácter no alfabético (es decir, espacios, signos de puntuación), pero sí páselos.
Este ejercicio fue para obtener el **JavaScript Algorithms and Data Structures** en FreeCodeCamp_

## Solution 🚀

```
function rot13(str) {
  //declaramos los saltos en las letras que hará el cifrado
  let jump = 13;
  //la cadena de letras a evaluar
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //la solucion que se ver'a refrelada al final
  let solution = "";
  //el regEx que evaluará si hay o no caracteres especiales
  let regEx = /[A-Z]/;

  //utilizamos un loop for para evaluar letra por letra en la cadena de caracteres str
  for (let i = 0; i < str.length; i++) {
    if (regEx.test(str[i])) {
      let p = letters.indexOf(str[i]);
      p = (p + jump) % letters.length;
      solution += letters[p];
    } else {
      solution += str[i];
    }
  }
  return solution;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));

```
