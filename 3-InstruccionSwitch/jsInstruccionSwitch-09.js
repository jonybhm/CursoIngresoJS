/*
una agencia de viajes debe sacar las tarifas de los viajes ,
se cobra $15.000 por cada estadia como base, se pide el ingreso 
de una estacion del año y localidad para vacacionar para poder 
calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y 
Cordoba tiene un descuento del 10% Mar del plata tiene un 
descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y 
Cordoba tiene un aumento del 10% Mar del plata tiene un 
aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% Mar del plata tiene un 
aumento del 10% y Cordoba tiene el precio sin descuento
*/
function mostrar()
{
	let estacionDelAño;
	let destinoViaje;
	
	let precioBase;
	let descuento;
	let aumento;
	let precioFinal;

	let mensaje;

	precioBase=15000;
	descuento=0;
	aumento=0;

	estacionDelAño=document.getElementById("txtIdEstacion").value;
	destinoViaje=document.getElementById("txtIdDestino").value;

	switch(estacionDelAño)
	{
		case "Invierno":
			switch(destinoViaje)
			{
				case "Bariloche":
					aumento=0.2;
					break;

				case "Cordoba":
					descuento=0.1;
					break;

				case "Mar del plata":
					descuento=0.2;
					break;

				default:
					break;
			}
			break;

		case "Verano":
			switch(destinoViaje)
			{
				case "Bariloche":
					descuento=0.2;
					break;

				case "Cordoba":
					aumento=0.1;
					break;

				case "Cataratas":
					aumento=0.1;
					break;

				case "Mar del plata":
					aumento=0.2;
					break;

				default:
					break;
			}
			break;

		case "Otoño":
		case "Primavera":
			switch(destinoViaje)
			{
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
					aumento=0.1;
					break;

				default:
					break;

			}
			break;

		default:
		break;
	}

	precioFinal=precioBase-precioBase*descuento+precioBase*aumento;
	mensaje="El precio final es" + precioFinal;
	alert(mensaje);
}//FIN DE LA FUNCIÓN