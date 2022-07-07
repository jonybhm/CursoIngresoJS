/*2.	Para el departamento de Construcción:

A.	 mostrar la cantidad de alambre a comprar  si 
se ingresara el largo y el ancho de un terreno 
rectangular y se debe alambra con tres hilos de 
alambre.

B.	mostrar la cantidad de alambre a comprar  
si se ingresara el radio  de un terreno circular 
y se debe alambra con tres hilos de alambre.

C.	Para hacer un contrapiso de 1m x 1m se 
necesitan 2 bolsas de cemento y 3 de cal, 
debemos mostrar cuantas bolsas se necesitan de 
cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largo;
	let ancho;
	let rectangulo;
	let alambre;

	largo=document.getElementById('txtIdLargo').value;
	ancho=document.getElementById('txtIdAncho').value;

	largo=parseFloat(largo);
	ancho=parseFloat(ancho);

	rectangulo=2*largo+2*ancho;
	rectangulo=parseFloat(rectangulo).toFixed(2);

	alambre=rectangulo*3;
	alambre=parseFloat(alambre);

	alert("el perimetro del terreno es " + rectangulo + " metros, y el total de alambre a utilizar es " + alambre + " metros");

}
function Circulo () 
{
	let radio;
	let circunferencia;
	let alambre;

	radio=document.getElementById('txtIdRadio').value;
	
	radio=parseFloat(radio);
	
	circunferencia=2*Math.PI*radio;
	circunferencia=parseFloat(circunferencia).toFixed(2);
	
	alambre=circunferencia*3;
	alambre=parseFloat(alambre);

	alert("la circunferencia del terreno es " + circunferencia + " metros, y el total de alambre a utilizar es " + alambre + " metros");
}
function Materiales () 
{
	let cementoUno;
	let calUno;
	let cementoDos;
	let calDos;

	let largo;
	let ancho;
	let areaUno;
	
	largo=document.getElementById('txtIdLargo').value;
	ancho=document.getElementById('txtIdAncho').value;

	largo=parseFloat(largo);
	ancho=parseFloat(ancho);

	areaUno=largo*ancho;
	areaUno=parseFloat(areaUno).toFixed(2);

	let radio;
	let areaDos;

	radio=document.getElementById('txtIdRadio').value;
	radio=parseFloat(radio);
	
	areaDos=Math.PI*radio*radio;
	areaDos=parseFloat(areaDos).toFixed(2);

	cementoUno=areaUno*2;
	calUno=areaUno*3;
	cementoDos=areaDos*2;
	calDos=areaDos*3;

	alert("En caso de tener un terreno rectangular de " + areaUno + " metros cuadrados, necesitará " + cementoUno + " bolsas de cemento y " + calUno + " bolsas de cal ");
	alert("En caso de tener un terreno circular de " + areaDos + " metros cuadrados, necesitará " + cementoDos + " bolsas de cemento y " + calDos + " bolsas de cal ");
}

//txtIdLargo
//txtIdAncho
//txtIdRadio