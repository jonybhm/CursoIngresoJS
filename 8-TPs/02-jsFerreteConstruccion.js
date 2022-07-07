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

	document.getElementById('txtIdLargo').value;
	document.getElementById('txtIdAncho').value;

	largo=parseFloat(largo);
	ancho=parseFloat(ancho);

	rectangulo=2*largo+2*ancho;
	rectangulo=parseFloat(rectangulo);
	
	alambre=rectangulo*3;
	alambre=parseFloat(alambre);

	alert("el perimetro del terreno es " + rectangulo + " metros, y el total de alambre a utilizar es " + alambre + " metros");

}
function Circulo () 
{
	
}
function Materiales () 
{
	
}

//txtIdLargo
//txtIdAncho
//txtIdRadio