/*
Al seleccionar un destino informar 
si hace FRIO o CALOR en ese destino 
*/

function mostrar()
{
	let destinoViaje;
	let mensaje;

	destinoViaje=document.getElementById("txtIdDestino").value;

	switch(destinoViaje)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje="Hace frío";
			break;

		case "Mar del plata":
		case "Cataratas":
			mensaje="Hace calor";
			break;

		default:	
			mensaje="lugar no definido";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN