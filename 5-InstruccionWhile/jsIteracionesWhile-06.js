/*
Al presionar el botón pedir 5 números e informar 
la suma acumulada y el promedio. 
*/

function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;

	contador=0;
	acumulador=0;

	do
	{
		numeroIngresado=prompt("Ingrese un numero para la suma");
		
		numeroIngresado=parseFloat(numeroIngresado);

		acumulador=numeroIngresado+acumulador;

		contador++;
	}while(contador<5);

	document.getElementById("txtIdSuma").value=acumulador;//txtIdSuma
	document.getElementById("txtIdPromedio").value=acumulador/contador;//txtIdPromedio

}//FIN DE LA FUNCIÓN

	
	