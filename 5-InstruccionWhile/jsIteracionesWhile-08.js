/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
*/
function mostrar()
{
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numeroIngresado;

	respuesta='s';
	sumaPositivos=0;
	multiplicacionNegativos=1;

	do
	{
		numeroIngresado=prompt("ingrese un numero");

		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado>0)
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
		}else
		{
			multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
		}

		respuesta=prompt("desea seguir? s/n").toLowerCase();
	}while(respuesta=="s");
	

	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN