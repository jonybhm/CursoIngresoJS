/*
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:  
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar 
el resultado, muestro el mensaje
"la resta es xxx y superó el 10".
*/
function mostrar()
{
	let numeroUno;
	let nombreDos;
	let resultado;

	numeroUno=prompt("ingrese el primer numero");
	numeroDos=prompt("ingrese el segundo numero");

	numeroUno=parseFloat(numeroUno);
	numeroDos=parseFloat(numeroDos);
		

	if (numeroUno==numeroDos)
	{
		
		numeroUno=numeroUno.toString();
		numeroDos=numeroDos.toString();

		resultado=numeroUno+numeroDos;
		
	}else
	{
		
		if(numeroUno>numeroDos)
		{
			resultado=numeroUno-numeroDos;
			
			if(resultado>10)
			{
				alert("la resta es "+resultado+" y superó el 10");
			}
		}else
		{
			resultado=numeroUno+numeroDos;
			
		}
	}

	alert(resultado);
}
