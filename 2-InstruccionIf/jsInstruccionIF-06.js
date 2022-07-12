/*
Al ingresar una edad debemos informar si la persona es 
mayor de edad (mas de 18 años) o 
adolescente (entre 13 y 17 años) o 
niño (menor a 13 años).
*/

function mostrar()
{
	//tomo la edad txtIdEdad
	let edad;
	let mensajeMayor;
	let mensajeMenor;
	let mensajeAdolescente;

	edad=document.getElementById("txtIdEdad").value;

	edad=parseInt(edad);

	mensajeMayor="Usted es mayor de edad";
	mensajeMenor="Usted es menor de edad";
	mensajeAdolescente="Usted es adolescente";

	if(edad>17)
	{
		alert(mensajeMayor);
	}else
	{
		if(edad<13)
		{
			alert(mensajeMenor);
		}else
		{
			alert(mensajeAdolescente);
		}
	}



}//FIN DE LA FUNCIÓN