/*
Bienvenidos (SOLO WITCH).

una empresa de viajes le solicita ingresar que continente
le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 ,
que se puede pagar de todas las maneras

Si es América tiene un 50% de descuento y 
si ademas paga por débito se le agrega un 10% mas de descuento

Si es África tiene un 60% de descuento y 
si además paga por mercadoPago o efectivo se le agrega 
un 15% mas de descuento

Si es Europa tiene un 20% de descuento y 
si ademas paga por débito se le agrega un 15% , 
por mercadoPago un 10% y cualquier otro medio 5%

cualquier otro continente tiene un recargo del 20%
*/

function mostrar()
{
	// Marca

	let continente;
	let precioPorDia=100;
	let cantidadDias;
	let medioDePago;
	let descuento=0;
	let recargo=0;
	let precioFinal;
	let mensaje;

	continente=document.getElementById("Marca").value;

	cantidadDias=prompt("ingrese la cantidad de dias");
	cantidadDias=parseInt(cantidadDias);

	medioDePago=prompt("ingrese medio de pago");

	precioFinal=precioPorDia*cantidadDias

	switch (continente)
	{
		case "América":

			descuento=0.5;

			switch (medioDePago)
			{
				case "debito":
					descuento+=0.1;
				break;
			}

		break;

		case "África":

			descuento=0.6;

			switch (medioDePago)
			{
				case "mercadoPago":
				case "efectivo":
					descuento+=0.15;
				break;
			}

		break;

		case "Europa":

			descuento=0.2;

			switch (medioDePago)
			{
				case "debito":
					descuento+=0.15;
				break;
			
				case "mercadoPago":
					descuento+=0.1;
				break;

				default:
					descuento+=0.05;
				break;
			}

		break;		

		default:
			recargo=0.2;
		break;
	}

	precioFinal=precioFinal-(precioFinal*descuento)+(precioFinal*recargo);

	mensaje="El precio final es de $"+precioFinal;

	alert(mensaje);

}
