# Las sumas

Este ejercicio es un reto semanal, propuesto por [Mouredev](https://github.com/mouredev/)

Crea una función que encuentre todas las combinaciones de los números
  de una lista que suman el valor objetivo.
  - La función recibirá una lista de números enteros positivos
    y un valor objetivo.
  - Para obtener las combinaciones sólo se puede usar
    una vez cada elemento de la lista (pero pueden existir
    elementos repetidos en ella).
  - Ejemplo: Lista = [1, 5, 3, 2],  Objetivo = 6
    Soluciones: [1, 5] y [1, 3, 2] (ambas combinaciones suman 6)
    (Si no existen combinaciones, retornar una lista vacía)

```
    function findCombination(lista, objetivo) {
    let result = []

    function evaluar(restante, combinacionActual, indexInicial) {
        //Si el objetivo fué completado, toma el array 
        //y lo haga push al restult general
        if (restante === 0) {
            result.push([...combinacionActual]);
            return;
        }

        //Si la suma se pasa del objetivo, regresa sin dar 
        //un array
        if (restante < 0) {
            return
        }

        // Mientras el codigo este funcionando
        // el código agrega con push otro item
        //Después de que la función recursiva haya terminado, 
        //el código elimina el último elemento agregado a 
        //combinacionActual utilizando pop(). Esto se hace para retroceder y 
        //probar otras combinaciones sin el elemento actual 
        //que se agregó en la iteración actual.

        for (let i = indexInicial; i < lista.length; i++) {
            combinacionActual.push(lista[i]);
            evaluar(restante - lista[i], combinacionActual, i + 1)
            combinacionActual.pop();
        }
    }
    evaluar(objetivo, [], 0)
    return result
}

console.log(findCombination([1, 5, 3, 2], 6))
```
