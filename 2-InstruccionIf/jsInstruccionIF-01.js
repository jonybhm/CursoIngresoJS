/*
Al ingresar una edad que sea igual a 15,
mostrar el mensaje "niña bonita".
*/

function mostrar()
{
	//tomo la edad  id: txtIdEdad
	
	let edad;
	let mensaje;

	edad=document.getElementById('txtIdEdad').value;

	edad=parseInt(edad);

	if(edad==15)
	{
		mensaje="niña bonita";
		alert(mensajeTrue);
	}else
	{
		mensaje="numero disntinto de 15";
		alert(mensajeFalse);
	}
	
	
}