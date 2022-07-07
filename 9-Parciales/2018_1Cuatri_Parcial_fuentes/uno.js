/*
Realizar el algoritmo que  pida el ancho y el largo de un rectángulo  por prompt y que muestre el perímetro por alert.
*/
function mostrar()
{
	let ancho;
	let largo;
	let perimetro;

	ancho=prompt("ingrese el ancho del rectángulo");
	largo=prompt("ingrese el largo del rectángulo");

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro=ancho*2+largo*2;

	alert("El perímetro es " + perimetro);

}
