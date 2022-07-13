/*
Al ingresar una edad debemos 
informar solo si la persona es mayor de edad
*/

function mostrar()
{
	//tomo la edad  txtIdEdad
	let edad;
	let mensaje;
	

	edad=document.getElementById('txtIdEdad').value;

	edad=parseInt(edad);

	mensaje="Usted es mayor de edad";	
	

	if(edad>=18)
	{
		alert(mensaje);
	}

}