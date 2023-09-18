#Ejercicio: Implementar un Generador de Contraseñas

Crea una función en JavaScript que genere contraseñas seguras de forma aleatoria.
La función debe permitir especificar la longitud de la contraseña y los tipos de caracteres
 permitidos (por ejemplo, letras mayúsculas, letras minúsculas, números y caracteres especiales).

El generador de contraseñas debe seguir estas reglas:

Debe aceptar tres parámetros:

longitud: la longitud de la contraseña que se desea generar (número entero).
usaLetrasMayusculas: un booleano que indica si se deben incluir letras mayúsculas en la contraseña.
usaCaracteresEspeciales: un booleano que indica si se deben incluir caracteres especiales (por ejemplo, !@#$%^&*)
n la contraseña.
La función debe validar los parámetros de entrada y asegurarse de que longitud sea un
número entero positivo y que al menos uno de los dos booleanos (usaLetrasMayusculas y usaCaracteresEspeciales)
sea verdadero. Si los parámetros no son válidos, la función debe devolver un mensaje de error apropiado.

La contraseña generada debe ser aleatoria y debe incluir letras minúsculas, números y, opcionalmente, letras mayúsculas y/o caracteres especiales según los parámetros proporcionados.

La función debe devolver la contraseña generada como una cadena de caracteres.

Asegúrate de que la contraseña generada sea segura y no fácilmente adivinable.
´´´

function generarContrasena(longitud, usoMayusculas, usoEspeciales) {
  if (
    (longitud <= 0 || longitud > 30) &&
    typeof usoMayusculas !== Boolean &&
    typeof usoEspeciales !== Boolean
  ) {
    return 'Parametros no validos';
  } else {
    let letras = 'abcdefghijklmnopqrstuvwxyz';
    let numeros = '1234567890';
    let letrasNumeros = letras + numeros;
    if (usoMayusculas) {
      letrasNumeros += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (usoEspeciales) {
      letrasNumeros += '*/-+?@&%$';
    }

    let newContrasena = '';
    for (let i = 0; i < longitud; i++) {
      let index = Math.floor(Math.random() * letrasNumeros.length);
      newContrasena += letrasNumeros[index];
    }
    return newContrasena;
  }
}

console.log(generarContrasena(30, true, true));
´´´
