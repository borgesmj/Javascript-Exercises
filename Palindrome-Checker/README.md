# Palindrome Checker
_Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2._

_Devuelve verdadero si la cadena dada es un palíndromo. En caso contrario, devuelve false.
Un palíndromo es una palabra o frase que se escribe de la misma manera tanto hacia delante como hacia atrás, ignorando la puntuación, las mayúsculas y los espacios.
Nota: Tendrá que eliminar todos los caracteres no alfanuméricos (puntuación, espacios y símbolos) y poner todo en el mismo caso (minúsculas o mayúsculas) para comprobar si hay palíndromos.
Pasaremos cadenas con distintos formatos, como racecar, RaceCar y race CAR entre otros.
También pasaremos cadenas con símbolos especiales, como 2A3*3a2, 2A3 3a2, y 2_A3*3#A2._


```
const palindrome = (str) => {
str = str.toLowerCase().replace(/\W|_/g,"") // all the letters to lowercase and eliminates all the Non Word Character and "_"
    let splitNumber = Math.floor(str.length) // divides the length in 2 parts, and if length is a even number, return the floor
    for (let i = 0; i<splitNumber; i++){
    if (str[i] !== str [str.length - 1 - i]) //evaluate the character with the inverse in the array
        {return false}
    }
    return true
}
console.log(palindrome("Never Odd or even"));

```

> comparar el primer carácter con el primer carácter opuesto, el segundo con el segundo opuesto, y así sucesivamente. Para hacer esto, necesitas la comparación 
>(str[i] !== str [str.length - 1 - i])



