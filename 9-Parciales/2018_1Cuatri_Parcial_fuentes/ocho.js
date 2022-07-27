/*
Enunciado:

Bienvenidos.

Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y 
un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al
terminar el ingreso por document.write:

a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7) 
*/
function mostrar()
{
	let numeroIngresado
	let respuesta=true;
	let contadorPar;
	let contadorImpar
	let contadorCeros;
	let acumuladorPositivos;
	let acumuladorNegativo;
	let contadorPositivos;
	let contadorNegativos;
	let promedioPositivos;

	let flagPrimerNumero;
	let numeroMaximo;
	let numeroMinimo;
	let letraNumeroMaximo;
	let letraNumeroMinimo;

	contadorPar=0;
	contadorImpar=0
	contadorCeros=0;
	acumuladorPar=0;
	acumuladorNegativo=0;
	acumuladorPositivos=0;
	contadorNegativos=0;
	contadorPositivos=0;

	flagPrimerNumero=true;



	while(respuesta)
	{
		do
		{

		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		}while(isNaN(numeroIngresado) || (numeroIngresado<-100 || numeroIngresado>100));
		
		if(flagPrimerNumero)
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			letraNumeroMaximo=numeroIngresado;
			letraNumeroMinimo=numeroIngresado;
			flagPrimerNumero=false;
		}else
		{
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
				letraNumeroMaximo=String(numeroIngresado).charAt(0);
			}
			if(numeroIngresado>numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
				letraNumeroMinimo=String(numeroIngresado).charAt(0);
			}

		}

		if(numeroIngresado%2==0)
		{
			contadorPar++;
		}else
		{
			contadorImpar++;
		}

		if(numeroIngresado==0)
		{
			contadorCeros++;
		}else
		{
			if(numeroIngresado<0)
			{
				acumuladorPositivos=acumuladorPositivos+numeroIngresado;
				contadorPositivos++;
			}else
			{
				acumuladorNegativo=acumuladorNegativo+numeroIngresado;
				contadorNegativos++;
			}
		}

		respuesta=confirm("desea continuar?");
	}

	promedioPositivos=acumuladorPositivos/contadorPositivos;

	mensaje="a) La cantidad de números pares. "+contadorPar;
	mensaje+="\nb) La cantidad de números impares. "+contadorImpar;
	mensaje+="\nc) La cantidad de ceros. "+contadorCeros;
	mensaje+="\nd) El promedio de todos los números positivos ingresados. "+promedioPositivos;
	mensaje+="\ne) La suma de todos los números negativos. "+acumuladorNegativo;
	mensaje+="\nf) El número y la letra del máximo. "+numeroMaximo+letraNumeroMaximo;
	mensaje+="\nf) El número y la letra del minimo. "+numeroMinimo+letraNumeroMinimo;

	alert(mensaje);
}

