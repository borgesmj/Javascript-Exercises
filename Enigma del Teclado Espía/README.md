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