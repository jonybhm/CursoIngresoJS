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
	let mensaje;

	edad=document.getElementById("txtIdEdad").value;

	edad=parseInt(edad);

	if(edad>17)
	{
		mensaje="Usted es mayor de edad";
		
	}else
	{
		if(edad<13)
		{
			mensaje="Usted es menor de edad";
			
		}else
		{
			mensaje="Usted es adolescente";
			
		}
	}
	alert(mensaje);

}