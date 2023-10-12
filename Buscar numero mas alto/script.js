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
	[63, 56, 123, 21, 23, 13, 34, 28, 147, 58],
	[73, 67, 13, 116, 37, 167, 132, 62, 42, 36],
	[184, 95, 120, 144, 64, 45, 164, 135, 32, 172],
	[54, 42, 142, 164, 12, 66, 57, 62, 105, 150],
	[77, 188, 182, 72, 169, 103, 157, 183, 140, 188],
	[125, 175, 167, 197, 112, 121, 183, 11, 144, 194],
	[144, 31, 199, 170, 45, 51, 83, 68, 68, 120],
	[19, 49, 106, 101, 86, 119, 127, 8, 96, 82],
	[141, 76, 97, 187, 48, 144, 124, 126, 1, 16],
])
