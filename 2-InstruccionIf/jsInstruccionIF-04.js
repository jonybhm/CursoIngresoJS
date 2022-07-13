/*
Al ingresar una edad debemos informar 
si la persona es adolescente, 
edad entre 13 y 17 años (inclusive) .
*/

function mostrar()
{
	//tomo la edad  txtIdEdad
	
	let edad;
	let mensaje;

	edad=document.getElementById("txtIdEdad").value;

	edad=parseInt(edad);

	mensaje="Usted es adolescente";

	if(edad<18 && edad>12)
	{
		alert(mensaje);
	}

}