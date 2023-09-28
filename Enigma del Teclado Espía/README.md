# Enigma del Teclado Espía

En una operación secreta, un agente espía observó a su objetivo ingresar una serie de dígitos en un teclado numérico especial con el siguiente diseño:


```
_____________
| 1 | 2 | 3 |
_____________
| 4 | 5 | 6 |
_____________
| 7 | 8 | 9 |
    ____
    | 0 |

```

El agente no pudo ver con claridad todas las teclas que el objetivo presionó, pero sabía que, dado un dígito ingresado, el objetivo podría haber presionado otra tecla adyacente en el teclado. Las teclas adyacentes se definen como las que se encuentran arriba, abajo, a la derecha o a la izquierda de la tecla original, excluyendo las diagonales.

Por ejemplo, si el agente vio que el objetivo presionó la tecla "1", entonces las teclas adyacentes posibles que podría haber presionado son "2" o "4".

Tu tarea es desarrollar un programa que, dada una secuencia de dígitos observados por el agente espía, determine todas las posibles combinaciones de dígitos que el objetivo pudo haber ingresado en el teclado. ¡Ayuda al agente a descubrir la clave secreta!


```
// 1. Convertimos el numero a string
// 2. dividimos el array en un string de digitos
// 3. llamamos a la funcion que separaá cada digito
function getAllCombination(code){
   if(code === undefined){
    return [];
  }
  code = code.toString();
  digits = code.split('');
  const combinations = generateCombination(digits);
  return combinations;
}


// 4. esta funcion va dividiendo el array en elementos 
//    individuales
// 5. se autollama para seguir dividiendo el resto de los digitos
// 6. llama a la funcion getAdjacentKeys() para obtener los digitos adyacentes


function generateCombination(digits) {
  if (digits.length === 0) {
    return ['']; // Caso base: Devolver un arreglo con una cadena vacía
  }

  const currentDigit = digits[0];
  const remainDigits = digits.slice(1);
  const combinationsWithoutCurrent = generateCombination(remainDigits);
  const adjacentsKeys = getAdjacentKeys(currentDigit);

// 7. se crea la variable que almacenará todas las combinaciones
// 8. 
  const combinationsWithCurrent = [];

  for (const adjacentKey of adjacentsKeys) {
    for (const combination of combinationsWithoutCurrent) {
      combinationsWithCurrent.push(adjacentKey + combination);
    }
  }

  return combinationsWithCurrent;
}



function getAdjacentKeys(digit) {
  const keypad = {
    '1': ['1', '2', '4'],
    '2': ['2','1', '3', '5'],
    '3': ['3','2', '6'],
    '4': ['4','1', '5', '7'],
    '5': ['5','2', '4', '6', '8'],
    '6': ['6','3', '5', '9'],
    '7': ['7','4', '8', '0'],
    '8': ['8','5', '7', '9'],
    '9': ['9','6', '8'],
    '0': ['0','8']
  };

  return keypad[digit];
}
console.log(getAllCombination(12)); //['12', '11', '13', '15', '22', '21', '23', '25', '42', '41', '43', '45']

```
