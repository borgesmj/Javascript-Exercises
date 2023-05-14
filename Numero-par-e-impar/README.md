# Numero par e impar

__Escribe una función que reciba cadena de numeros separados por una coma y devuelva si es par, o si es impar._


```
function numeroPar(str){
str = str.split(',')
    for (let i = 0; i < str.length; i++) {
        if(str[i] % 2 === 0){
            console.log(str[i] + ' es par')
        } else {
            console.log(str[i] + ' es impar')
        }
    }
}
numeroPar('4,3,2,3,4,5')
```