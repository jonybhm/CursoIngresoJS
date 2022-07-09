/*
Ingresar valor de dolar oficial y dolar blue por ID
y mostrar la diferencia porcentual entre ambos 
*/
function sumar()
{
	let mensaje;
	let dolarOficial;
	let dolarBlue;
	let diferencia;
	let porcentajeDiferencia;
	
	dolarOficial=document.getElementById('txtIdNumeroUno').value;
	dolarBlue=document.getElementById('txtIdNumeroDos').value;
	
	dolarOficial=parseInt (dolarOficial);
	dolarBlue=parseInt (dolarBlue);

	diferencia=(dolarBlue/dolarOficial)*100;
	
	porcentajeDiferencia=diferencia-100;
	
	mensaje="la diferecia porcentual es de " + porcentajeDiferencia + "%";
	
	alert (mensaje);
}

