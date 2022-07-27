/*
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas 
(validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, 
informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6. 
*/

function mostrar()
{
	let nota;
	let sexo;
	let contador;
	let acumulador;
	let promedio;
	let contadorNotaMenorSeis;

	let flagPrimerNota;
	let notaMasBaja;
	let sexoNotaMasBaja;

	let mensaje;

	acumulador=0;
	contador=0;
	contadorNotaMenorSeis=0;

	flagPrimerNota=true;

	do{
		
		do
		{
			nota=prompt("Ingrese una nota valida");

			nota=parseInt(nota);
		}while(isNaN(nota) || nota<0 || nota>10);


		do
		{
			sexo=prompt("Ingrese un sexo valido").toLowerCase();
		}while(!isNaN(sexo) || (sexo!="f" && sexo!="m"));

		if(flagPrimerNota)
		{
			notaMasBaja=nota;
			sexoNotaMasBaja=sexo;
			flagPrimerNota=false;
		}else
		{
			if(nota<notaMasBaja)
			{
				notaMasBaja=nota;
				sexoNotaMasBaja=sexo;
			}
		}

		if(sexo=="m" && nota<6)
		{
			contadorNotaMenorSeis++;
		}

		acumulador=nota+acumulador;

		contador++;

	}while(contador<5);

	promedio=acumulador/contador;

	mensaje="El promedio de notas es: " + promedio;
	mensaje+="\nLa nota mas baja es: " + notaMasBaja + "y su sexo: " + sexoNotaMasBaja;
	mensaje+="\nLa cantidad de varones con notas menor a 6 son: " + contadorNotaMenorSeis;

	alert(mensaje);

}
