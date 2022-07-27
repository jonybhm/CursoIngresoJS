/*
 al presionar el botón pedir la cantidad de
 veces que quiero repetir el mensaje "Hola UTN FRA" 
*/
function mostrar()
{
	let repeticiones;
	let index

	repeticiones=prompt("ingrese un numero de repeticiones");

	repeticiones=parseInt(repeticiones);

	for(index=0;index<repeticiones;index++)
	{
		alert("Hola UTN FRA");
	}




}//FIN DE LA FUNCIÓN