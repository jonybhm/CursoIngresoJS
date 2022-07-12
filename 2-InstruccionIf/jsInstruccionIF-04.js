/*
Al ingresar una edad debemos informar 
si la persona es adolescente, 
edad entre 13 y 17 años (inclusive) .
*/

function mostrar()
{
	//tomo la edad  txtIdEdad
	
	let edad;
	let mensajeTrue;
	let mensajeFalse;

	edad=document.getElementById("txtIdEdad").value;

	edad=parseInt(edad);

	mensajeTrue="Usted es adolescente";

	if(edad<18 && edad>12)
	{
		alert(mensajeTrue);
	}

}//FIN DE LA FUNCIÓN