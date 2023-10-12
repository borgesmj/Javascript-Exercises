function buscarNumeroAlto(matriz) {
	// Primero creamos un arreglo unidireccional con los numeros mas altos de cada elemento
	let numerosMasAltos = matriz.map((item) => (
		Math.max(...item)
	))
	// console.log(`numeros mas altos: ${numerosMasAltos}`)
	// Luego regresamos el numero mas alto de toda la matriz
	return (Math.max(...numerosMasAltos))
}
buscarNumeroAlto([
	[5, 12, 7],
	[3, 9, 2],
	[10, 8, 15]
])