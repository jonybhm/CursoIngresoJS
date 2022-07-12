/*
Al ingresar una edad debemos informar 
si la persona es mayor de edad,
sino informar que es un menor de edad.
*/

function mostrar()
{
	//tomo la edad  txtIdEdad

	let edad;
	let mensajeTrue;
	let mensajeFalse;

	edad=document.getElementById('txtIdEdad').value;

	edad=parseInt(edad);

	mensajeTrue="Usted es mayor de edad";
	mensajeFalse="Usted es menor de edad";

	if(edad>17)
	{
		alert(mensajeTrue);
	}else
	{
		alert(mensajeFalse);
	}



}//FIN DE LA FUNCIÓN