/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let mensaje
	let temperatura;
	
	temperatura=document.getElementById('txtIdTemperatura').value;
	temperatura=parseFloat(temperatura).toFixed(2);
	
	ConversionC=(temperatura-32)*5/9;

	mensaje=temperatura + "° Fahrenheit son "; 
	mensaje+=ConversionC + "° centígrados";

	alert(mensaje);
}

function CentigradosFahrenheit () 
{
	let mensaje;
	let temperatura;
	
	temperatura=document.getElementById('txtIdTemperatura').value;
	temperatura=parseFloat(temperatura).toFixed(2);
	
	ConversionF=(temperatura*9/5)+32;

	mensaje=temperatura + "° centígrados son ";
	mensaje+=ConversionF + "° Fahrenheit";

	alert(mensaje);
}

//txtIdTemperatura