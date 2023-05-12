# Suma de elementos

_Problema de suma de elementos: Escribe una función que reciba una cadena de numeros, separados por una coma y devuelva la suma de todos los elementos._
```function numbersSum(str){
    let sum = 0
    array = str.split(',')
    for (let i=0; i<array.length; i++){
        sum = sum + Number(array[i])
    }
    console.log(sum)
}
numbersSum('4,3,4,5,6,7') //29
```

### utilizando promt()

```
function numbersSum(){
    let str = prompt('ingrese numeros, separados por una coma (,)')
    let sum = 0
    array = str.split(',')
    for (let i=0; i<array.length; i++){
        sum = sum + Number(array[i])
    }
    console.log(sum)
}
numbersSum()

```