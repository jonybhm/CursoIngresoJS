/*
una agencia de viajes nos piden informar si hacemos viajes a 
lugares según la estación del año estemos, informar si "Se viaja"
 o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos
"No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche 
*/

function mostrar()
{
	let estacionDelAño;
	let destinoViaje;
	let mensaje;

	estacionDelAño=document.getElementById("txtIdEstacion").value;
	destinoViaje=document.getElementById("txtIdDestino").value;

	switch(estacionDelAño)
	{
		case "Invierno":
		case "Primavera":
			if(destinoViaje=="Bariloche")
			{
				mensaje="se viaja";	
			}else
			{
				mensaje="No se viaja";
			}
			break;

		case "Verano":
			if(destinoViaje=="Mar del plata" || destinoViaje=="Cataratas")
			{
				mensaje="se viaja";
			}else
			{
				mensaje="No se viaja";
			}
			break;

		default:
			mensaje="se viaja";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN