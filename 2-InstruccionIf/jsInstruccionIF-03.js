/*
Al ingresar una edad debemos informar 
si la persona es mayor de edad,
sino informar que es un menor de edad.
*/

function mostrar()
{
	//tomo la edad  txtIdEdad

	let edad;
	let mensaje;

	edad=document.getElementById('txtIdEdad').value;

	edad=parseInt(edad);

	
	if(edad>17)
	{
		mensaje="Usted es mayor de edad";
		alert(mensaje);
	}else
	{
		mensaje="Usted es menor de edad";
		alert(mensaje);
	}


}
