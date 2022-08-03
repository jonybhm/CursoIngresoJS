/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let respuesta;

	contador=0;
	acumulador=0;
	respuesta='s';
	
	do
	{
		numeroIngresado=prompt("Ingrese un numero");

		numeroIngresado=parseFloat(numeroIngresado);

		acumulador=acumulador+numeroIngresado;

		contador++;

		respuesta=prompt("quiere continuar? s/n").toLowerCase();
	}while(respuesta=='s');
	
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN