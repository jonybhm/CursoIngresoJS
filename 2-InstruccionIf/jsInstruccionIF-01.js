/*
Al ingresar una edad que sea igual a 15,
mostrar el mensaje "niña bonita".
*/

function mostrar()
{
	//tomo la edad  id: txtIdEdad
	
	let edad;
	let mensajeTrue;
	let mensajeFalse;
	
	edad=document.getElementById('txtIdEdad').value;

	edad=parseInt(edad);

	mensajeTrue="niña bonita";
	mensajeFalse="numero disntinto de 15";
	
	if(edad==15)
	{
		alert(mensajeTrue);
	}else
	{
		alert(mensajeFalse);
	}
	
	
}//FIN DE LA FUNCIÓN