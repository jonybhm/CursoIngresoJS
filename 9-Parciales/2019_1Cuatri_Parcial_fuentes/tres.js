/*
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
*/

function mostrar()
{
	let precio;
	let descuento;
	let precioFinal;

	precio=prompt("Ingresar precio");
	descuento=prompt("Ingresar descuento");

	precio=parseInt(precio);
	descuento=parseInt(descuento);

	precioFinal=precio-(precio*descuento/100)

	document.getElementById('elPrecioFinal').value=precioFinal;

}

//elPrecioFinal
