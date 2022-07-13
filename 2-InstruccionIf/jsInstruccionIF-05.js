/*
Al ingresar una edad solo debemos informar si la persona
NO es adolescente.
*/

function mostrar()
{
	//tomo la edad  
	let edad;
	let mensaje;
	
	edad=document.getElementById("txtIdEdad").value;

	edad=parseInt(edad);

	mensaje="Usted no es adolescente";

	if(edad<13 || edad>17)
	{
		alert(mensaje);
	}


}