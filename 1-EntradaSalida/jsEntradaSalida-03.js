/*
1.	Se ingresan 5 importes, marca del producto 
y pais de origen (China, Uruguar o Paraguay).
Calcular y mostrar:
a.	Minimo importe con su pais
b.	Maximo importe con su marca
c.	Promedio importe
d.	Cantidad de productos de China
e.	Sobre el maximo encontrado aplicar un descuento del 10% a dicho importe.
*/

function mostrar()
{
	let importe;
	let marcaProducto;
	let paisOrigen;
	let promedio;
	let contador;
	let acumulador;
	let contadorChina;
	let importeConDescuento;
	
	let flagPrimerImporte;
	let importeMax;
	let importeMin;
	let paisMinImporte;
	let marcaMaxImporte;
	
	let index;

	let mensaje;

	contador=0;
	contadorChina=0;
	flagPrimerImporte="primero";

	while(contador<5)
	{
		do
		{
			importe=prompt("ingrese un importe valido");
			importe=parseInt(importe);
		}while(isNaN(importe) || importe<0);
	
		do
		{
			marcaProducto=prompt("Ingrese el nombre de la marca");
		}while(!isNaN(marcaProducto));

		do
		{
			paisOrigen=prompt("Ingrese el pais de origen");
		}while(!isNaN(paisOrigen));

		if(flagPrimerImporte=="primero")
		{
			marcaMaxImporte=marcaProducto;
			importeMax=importe;

			paisMinImporte=paisOrigen;
			importeMin=importe;

			flagPrimerImporte="no primero";

		}else
		{
			if(importeMax<importe)
			{
				marcaMaxImporte=marcaProducto;
				importeMax=importe
			}
			if(importeMin>importe)
			{
				paisMinImporte=paisOrigen;
				importeMin=importe;
			}
		}

		if(paisOrigen=="China")
		{
			contadorChina++;
		}
		acumulador=acumulador+importe;
		contador++;
	}

	promedio=acumulador/contador;

	importeConDescuento=importeMax-importeMax*0.1;

	mensaje="Minimo importe es "+ importeMin + " de " + paisMinImporte;
	mensaje+=<br>"Maximo importe es "+ importeMax + " de " + marcaMaxImporte;
	mensaje+=<br>"El promedio es " + promedio;
	mensaje+=<br>"La cantidad de productos de China es " + contadorChina;
	mensaje+=<br>"El importe maximo con descuento es " + importeConDescuento;

	alert(mensaje);

}


