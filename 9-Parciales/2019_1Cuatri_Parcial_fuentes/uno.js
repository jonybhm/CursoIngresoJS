/*
Realizar el algoritmo que  pida los datos necesarios para un triángulo equilátero por prompt y que muestre el perímetro por alert.
*/

function mostrar()
{
	let ladoTriangulo;
	let perimetro;

	ladoTriangulo=prompt("ingrese el lado del triángulo equilátero");

	ladoTriangulo=parseFloat(ladoTriangulo);

	perimetro=ladoTriangulo*3;

	alert("El perimetro del triángulo es " + perimetro);
}
