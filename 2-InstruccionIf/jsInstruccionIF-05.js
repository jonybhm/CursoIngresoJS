/*
Al ingresar una edad solo debemos informar si la persona
NO es adolescente.
*/

function mostrar()
{
	//tomo la edad  
	let edad;
	let mensajeTrue;
	
	edad=document.getElementById("txtIdEdad").value;

	edad=parseInt(edad);

	mensajeTrue="Usted no es adolescente";

	if(edad<13 || edad>17)
	{
		alert(mensajeTrue);
	}


}//FIN DE LA FUNCIÓN