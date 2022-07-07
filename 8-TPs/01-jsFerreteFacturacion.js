/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioTres=document.getElementById('txtIdPrecioTres').value;
	precioUno=parseFloat(precioUno);
	precioDos=parseFloat(precioDos);
	precioTres=parseFloat(precioTres);
	let suma;
	suma=precioUno + precioDos + precioTres;
	alert("la suma es: " + suma);

}
function Promedio () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioTres=document.getElementById('txtIdPrecioTres').value;
	precioUno=parseFloat(precioUno);
	precioDos=parseFloat(precioDos);
	precioTres=parseFloat(precioTres);
	let suma;
	suma=precioUno + precioDos + precioTres;
	let promedio;
	promedio=suma/3;
	alert("el promedio es: " + promedio);
}
function PrecioFinal () 
{
	let iva;
	iva=0.21;
	let precioUno;
	let precioDos;
	let precioTres;
	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioTres=document.getElementById('txtIdPrecioTres').value;
	precioUno=parseFloat(precioUno);
	precioDos=parseFloat(precioDos);
	precioTres=parseFloat(precioTres);
	let suma;
	suma=precioUno + precioDos + precioTres;
	let precioFinal;
	precioFinal=(suma*iva)+suma;
	alert("el precio final es: " + precioFinal);
}

//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres