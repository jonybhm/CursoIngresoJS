/*
Realizar el algoritmo que permita 
el ingreso por prompt de las notas 
(validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos,
el nombre e informar por alert:
a) El promedio de las notas totales.
b) La nota más baja , el nombre y  el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
d) la nota de la primer mujer ingresada y su nombre.
e) cantidad de aprobados de cada sexo (mas de 5)
f) el sexo que mas desaprobo
g) el promedio de notas de los aprobados
h) el promedio de notas de las mujeres 
*/
/*

se pide la altura , 
la edad y 
la estacion del año en la que nacio(invierno,verano , otoño, primavera)


i) la nota y nombre de la persona mas alta
j) de los nacidos en otoño el primer varon
k) de los adolescente el nombre del mas bajo en altura
L) la estacion del año que mas alumnos nacieron
M) el sexo , nombre, edad y altura del primer aprobado


*/


function mostrar()
{

	let notaIngresada;
	let sexoIngresado;
	let nombreIngresado;

	let contador=0;//punto a)
	let acumuladorNotasTotal=0;
	let promedioNotasTotal;

	let flagPrimerNota=true;//punto b)
	let notaMasBaja;
	let nombreNotaMasBaja;
	let sexoNotaMasBaja;

	let flagPrimerNotaMujer=true;//para el punto d)
	let nombrePrimerMujer;
	let notaPrimerMujer;

	let contadorAprobadosHombres=0;//para el punto c) e) g) y f)
	let contadorAprobadosMujeres=0;

	let acumuladorAprobadosHombres=0;
	let acumuladorAprobadosMujeres=0;
	let promedioAprobados;

	let contadorDesaprobadosHombres=0;//para el punto f)
	let contadorDesaprobadosMujeres=0;
	let sexoMasDesaprobado;
	
	let acumuladorDesaprobadosMujeres=0;
	let acumuladorDesaprobadosHombres=0;
	let promedioNotasMujeres;// para el punto h)

	let mensaje;
	

	while(contador<5)
	{
	    do
	    {
	        notaIngresada=prompt("Ingrese la nota");

	        notaIngresada=parseInt(notaIngresada);

	    }while(isNaN(notaIngresada) || notaIngresada<0 || notaIngresada>10);

		do
	    {
	        sexoIngresado=prompt("Ingrese su sexo, “M” para masculino y “F” para femenino");
	        sexoIngresado=sexoIngresado.toLowerCase();
	    
	    }while(!isNaN(sexoIngresado) || (sexoIngresado!="m" && sexoIngresado!="f"));

	    do
	    {
	        nombreIngresado=prompt("Ingrese su nombre");
	        nombreIngresado=nombreIngresado.toLowerCase();
	    
	    }while(!isNaN(nombreIngresado));

	    if(flagPrimerNota)
	    {
	    	flagPrimerNota=false;
	    	notaMasBaja=notaIngresada;
	    	nombreNotaMasBaja=nombreIngresado;
	    	sexoNotaMasBaja=sexoIngresado;
	    }else
	    {
	    	if(notaIngresada<notaMasBaja)
	    	{
	    		notaMasBaja=notaIngresada;
	    		sexoNotaMasBaja=sexoIngresado;
	    		nombreNotaMasBaja=nombreIngresado;
	    	}
	    }

		if(flagPrimerNotaMujer && sexoIngresado=="f")
	    {
	    	flagPrimerNotaMujer=false;
	    	nombrePrimerMujer=nombreIngresado;
	    	notaPrimerMujer=notaIngresada;
	    }

	    switch(sexoIngresado)
	    {
	    	case "f":

	    		if(notaIngresada>=6)
	    		{
	    			contadorAprobadosMujeres++;
	    			acumuladorAprobadosMujeres=acumuladorAprobadosMujeres+notaIngresada;
	    		}else
	    		{
	    			contadorDesaprobadosMujeres++;
	    			acumuladorDesaprobadosMujeres=acumuladorDesaprobadosMujeres+notaIngresada;
	    		}
	    	break;

	    	case "m":
	    		if(notaIngresada>=6)
	    		{
	    			contadorAprobadosHombres++;
	    			acumuladorAprobadosHombres=acumuladorAprobadosHombres+notaIngresada;
	    		}else
	    		{
	    			contadorDesaprobadosHombres++;
	    			acumuladorDesaprobadosHombres=acumuladorDesaprobadosHombres+notaIngresada;
	    		}
	    	break;
	    }

	    contador++;
	    acumuladorNotasTotal=acumuladorNotasTotal+notaIngresada;

	}

	if(contadorDesaprobadosHombres > contadorDesaprobadosMujeres ) 
	{	
		sexoMasDesaprobado = "hombres";
		
	}
	else
	{
		sexoMasDesaprobado = "mujeres";
		
	}

	promedioNotasTotal=acumuladorNotasTotal/contador;
	promedioAprobados=(acumuladorAprobadosHombres+acumuladorAprobadosMujeres)/(contadorAprobadosHombres+contadorAprobadosMujeres);
	promedioNotasMujeres=(acumuladorAprobadosMujeres+acumuladorDesaprobadosMujeres)/(contadorAprobadosMujeres+contadorDesaprobadosMujeres);
	
	mensaje="a) El promedio de las notas totales: "+promedioNotasTotal;
	mensaje+="\nb) La nota más baja , el nombre y  el sexo de esa persona: "+notaMasBaja+"/"+nombreNotaMasBaja+"/"+sexoNotaMasBaja;
	mensaje+="\nc) La cantidad de varones que su nota haya sido mayor o igual a 6: "+contadorAprobadosHombres;
	mensaje+="\nd) la nota de la primer mujer ingresada y su nombre. "+nombrePrimerMujer+"/"+notaPrimerMujer;
	mensaje+="\ne) cantidad de aprobados de cada sexo (mas de 5) "+(contadorAprobadosHombres+contadorAprobadosMujeres);
	mensaje+="\nf) el sexo que mas desaprobo fue: "+sexoMasDesaprobado;
	mensaje+="\ng) el promedio de notas de los aprobados: "+promedioAprobados; 
	mensaje+="\nh) el promedio de notas de las mujeres: "+promedioNotasMujeres;

	alert(mensaje);
}












































/*
Debemos realizar la carga de 5(cinco) productos de 
prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y 
no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de 
unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total 

function mostrar()
{
	let tipoProducto;
	let precioProducto;
	let cantidadProducto;
	let marcaProducto;
	let fabricanteProducto;

	let contadorJabon=0;

	let contador=0;

	let mensaje;

	let flagPrimerProducto=true;
	let fabricanteAlcoholMasBarato;
	let cantidadAlcohol=0;

	let compraAlcohol=0;
	let compraBarbijo=0;
	let compraJabon=0;
	
	let precioAlcohol=0;
	let precioBarbijo=0;
	let precioJabon=0;


	while(contador<5)
	{
		do
		{
			tipoProducto=prompt("Ingrese el tipo de producto");

		}while(!isNaN(tipoProducto) || (tipoProducto!="barbijo" && tipoProducto!="alcohol" && tipoProducto!="jabon"));

		do
		{
			precioProducto=prompt("Ingrese el precio del producto");
			precioProducto=parseInt(precioProducto);

		}while(isNaN(precioProducto) || precioProducto<100 || precioProducto>300);

		do
		{
			cantidadProducto=prompt("Ingrese la cantidada");
			cantidadProducto=parseInt(cantidadProducto);

		}while(isNaN(cantidadProducto) || cantidadProducto<0 || cantidadProducto>1000);

		marcaProducto=prompt("Ingrese la marca");
		fabricanteProducto=prompt("ingrese el fabricante");

		if(tipoProducto == "alcohol" && (flagPrimerProducto == true || precioProducto < precioAlcohol ))
		{
			flagPrimerProducto = false;
			precioAlcohol = precioProducto;
			cantidadAlcohol = cantidadProducto + cantidadAlcohol; 
			fabricanteAlcoholMasBarato = fabricanteProducto;
		}

		switch(tipoProducto)
		{
			case "barbijo":
				precioBarbijo=precioBarbijo+precioProducto;
				compraBarbijo++;

			break;

			case "jabon":
				precioJabon=precioJabon+precioProducto;
				compraJabon++;
			break;

			case "alcohol":
				precioAlcohol=precioAlcohol+precioProducto;
				compraAlcohol++;
			break; 
		}

		contador++;
	}

	Math.max(compraAlcohol,compraJabon,compraBarbijo);
}

*/
