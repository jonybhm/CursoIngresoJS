/*
Al selecionar un destino , indicar el punto cardinal de nuestro pais 
en donde se encuentra Norte, Sur, Este u Oeste 
*/
function mostrar()
{
	let destinoViaje;
	let mensaje;

	destinoViaje=document.getElementById("txtIdDestino").value;

	switch(destinoViaje)
	{
		case "Ushuaia":
			mensaje="Sur";
			break;

		case "Cataratas":
			mensaje="Norte";
			break;

		case "Mar del plata":
			mensaje="Oeste";
			break;

		case "Bariloche":
			mensaje="Este";
			break;

		default:
			mensaje="Falta definir lugar"
			break;
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN