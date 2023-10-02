function encontrarNumerosPrimos(inicio, fin) {
	const numerosPrimos = []
	const result = []
	if (inicio < 1 || fin < 1) {
		return numerosPrimos; // Devolver un array vacío si las entradas son inválidas
	}

	// Creamos un array de números desde el 2 hasta el fin del rango
  	// ya que el 2 es el numero primo mas pequeño 
  	// y asi podremos usar el metodo  Criba
	for (let x = 2; x <= fin; x++) {
		numerosPrimos.push(x);
	}

	// Evaluamos todos los numeros primos,
	//utilizando el metodo Criba de Eratóstenes
	for (let index = 0; index < numerosPrimos.length; index++) {
		for (let i = 0; i < numerosPrimos.length; i++) {
			if (numerosPrimos[i] % numerosPrimos[index] === 0 && i !== index) {
				numerosPrimos.splice(i, 1);
			}
		}
	}

	for (x = 0; x < numerosPrimos.length; x++) {
		if (numerosPrimos[x] > inicio) {
			result.push(numerosPrimos[x])
		}
	}
	return result
}

console.log(encontrarNumerosPrimos(10, 50)); // Debería mostrar [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
