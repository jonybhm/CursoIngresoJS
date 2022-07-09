/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
	let mensaje;
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioTres=document.getElementById('txtIdPrecioTres').value;
	
	precioUno=parseFloat(precioUno);
	precioDos=parseFloat(precioDos);
	precioTres=parseFloat(precioTres);
	
	suma=precioUno + precioDos + precioTres;
	
	mensaje="la suma es: " + suma;

	alert(mensaje);

}

function Promedio () 
{
	let mensaje;
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;
	let promedio;
	
	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioTres=document.getElementById('txtIdPrecioTres').value;
	
	precioUno=parseFloat(precioUno);
	precioDos=parseFloat(precioDos);
	precioTres=parseFloat(precioTres);
	
	suma=precioUno + precioDos + precioTres;
	
	promedio=suma/3;
	
	mensaje="el promedio es: " + promedio;

	alert(mensaje);
}

function PrecioFinal () 
{
	let mensaje;
	let iva;
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;
	let precioFinal;
	
	iva=0.21;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioTres=document.getElementById('txtIdPrecioTres').value;

	precioUno=parseFloat(precioUno);
	precioDos=parseFloat(precioDos);
	precioTres=parseFloat(precioTres);

	suma=precioUno + precioDos + precioTres;

	precioFinal=(suma*iva)+suma;

	mensaje="el precio final es: " + precioFinal;

	alert(mensaje);
}

//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres