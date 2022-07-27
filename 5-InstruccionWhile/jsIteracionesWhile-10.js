/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;

	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let contadorPositivos;
	let contadorNegativos;
	let contadorCeros;
	let contadorPares;
	let promedioPositivos;
	let promedioNegativos;
	let diferenciaPosNeg; 

	let mensaje;

	//inicializar las variables

	respuesta=true;

	sumaNegativos=0;
	sumaPositivos=0;
	contadorPositivos=0;
	contadorNegativos=0;
	contadorCeros=0;
	contadorPares=0;
	
				
	while(respuesta==true)
	{
		do
		{
			numeroIngresado=prompt("Ingrese un numero valido");
			numeroIngresado=parseInt(numeroIngresado);
		}while(isNaN(numeroIngresado));

		if(numeroIngresado<0)
		{
			sumaNegativos=sumaNegativos+numeroIngresado;
			contadorNegativos++;
		}
		
		if(numeroIngresado>0)
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
			contadorPositivos++;	
		}

		if(numeroIngresado==0)
		{
			contadorCeros++;
		}

		if(numeroIngresado/2==0)
		{
			contadorPares++;
		}

		respuesta=confirm("desea continuar?");
	}//fin de while

	promedioNegativos=sumaNegativos/contadorNegativos;
	promedioNegativos=parseFloat(promedioNegativos).toFixed(2);
	promedioPositivos=sumaPositivos/contadorPositivos;
	promedioPositivos=parseFloat(promedioPositivos).toFixed(2);

	diferenciaPosNeg=sumaNegativos-sumaPositivos;


	mensaje="1-Suma de los negativos. "+sumaNegativos;
	mensaje+="\n2-Suma de los positivos. "+sumaPositivos;
	mensaje+="\n3-Cantidad de positivos. "+contadorPositivos;
	mensaje+="\n4-Cantidad de negativos. "+contadorNegativos;
	mensaje+="\n5-Cantidad de ceros. "+contadorCeros;
	mensaje+="\n6-Cantidad de números pares. "+contadorPares;
	mensaje+="\n7-Promedio de positivos. "+promedioPositivos;
	mensaje+="\n8-Promedios de negativos. "+promedioNegativos;
	mensaje+="\n9-Diferencia entre positivos y negativos, (positvos-negativos). "+diferenciaPosNeg;
	
	alert(mensaje);
}//FIN DE LA FUNCIÓN