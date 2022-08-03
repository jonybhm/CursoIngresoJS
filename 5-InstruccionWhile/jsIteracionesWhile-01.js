/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	let numero;

	numero=0;	

	while(numero<10)
	{
		numero++;
		alert(numero);
	}

}//FIN DE LA FUNCIÓN

//validaciones while

let edad;

edad=prompt("ingrese su edad");

edad=parseInt(edad);

while(isNaN(edad) || !(edad>18 && edad<65))
{
	edad=prompt("ingrese un valor correcto");
	edad=parseInt(edad);
} 

let division;

division=prompt("ingrese su division");

while(!isNaN(division))
{
	division=prompt("ingrese un valor correcto");
	
} 