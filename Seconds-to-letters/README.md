# Conversión de Duración a Texto Legible

Tu tarea en este desafío es escribir una función que convierta una duración (dada como un número de segundos) en un formato de texto legible para los humanos.

La función debe aceptar un número entero no negativo como entrada. Si la entrada es cero, la función debe devolver "ahora". En caso contrario, debe expresar la duración como una combinación de años, días, horas, minutos y segundos.

Aquí tienes un ejemplo para ilustrar cómo debería funcionar tu función:

Para una entrada de 62 segundos, tu función debería devolver "1 minuto y 2 segundos".

Para una entrada de 3662 segundos, tu función debería devolver "1 hora, 1 minuto y 2 segundos".


```
function secondsToLetters(seconds){
  const timeFormats = [
{
  name: 'day', value: 86400
},
{
  name: 'hour', value: 3600
},
{
  name: 'minute', value: 60
}
    ];
  if (seconds < 0){
    return 'must be a positive number';
  } else if (seconds === 0){
    return 'Now';
  } else {
    let result = '';
    timeFormats.forEach((time) => {
        const timeCount = Math.floor(seconds / time.value);
        if (timeCount > 0){
          if (timeCount >= 365){
            result += `${timeCount / 365} year, `
            seconds -= timeCount * time.value
          } else {
            result += `${timeCount} ${time.name}${timeCount === 1 ? '' : 's'}${time.name === 'minute' ? ' and ' : ', '}`;
            seconds -= timeCount * time.value;
          }
        }
    });
    result += `${seconds} seconds`;
    return result;
  }
}

console.log(secondsToLetters(3662)); //1 hour, 1 minute and 2 seconds
console.log(secondsToLetters(0)); //Now
console.log(secondsToLetters(30)); // 30 seconds
console.log(secondsToLetters(360));//6 minutes and 0 seconds
console.log(secondsToLetters(3962)); //1 minute and 2 seconds
console.log(secondsToLetters(31539662)); //1 year, 1 hour, 1 minute and 2 seconds
console.log(secondsToLetters(150)); //2 minutes and 30 seconds
console.log(secondsToLetters(-9)); //must be a positive number
```
