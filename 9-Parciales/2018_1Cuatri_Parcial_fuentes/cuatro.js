/*
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:  
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado,
muestro el mensaje 
"la suma es xxx y supero el 10".
*/
function mostrar()
{
	let numeroUno;
	let numeroDos;
	let mensaje;
	let resultado;

	numeroUno=prompt("ingrese el primer numero");
	numeroDos=prompt("ingrese el segundo numero");

	if(numeroUno==numeroDos)
	{
		mensaje=numeroUno + numeroDos;
		alert(mensaje);
	}else
	{
		if(numeroUno>numeroDos)
		{
			numeroUno=parseFloat(numeroUno);
			numeroDos=parseFloat(numeroDos);
			
			resultado=numeroUno-numeroDos;
			
			alert(resultado);
		}else
		{
			numeroUno=parseFloat(numeroUno);
			numeroDos=parseFloat(numeroDos);
			
			resultado=numeroUno+numeroDos;
			
			alert(resultado);

			if(resultado>10)
			{
				alert("la suma es "+ resultado +" y supero el 10")
			}
		}
	}
	
}
