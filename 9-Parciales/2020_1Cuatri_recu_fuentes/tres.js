/*

3)Una distribuidora de bebidas llena 5 comiones con sus productos y necesita guardar ciertos datos de cada una:
-Nombre del conductor
-Cantidad de litros de agua transportada($100 el litro)
-Cantidad de litros de gaseosa transportada ($150 el litro)
-Cantidad de litros de cerveza transportada ($200 el litro)
Y debemos mostrar que tipo de bebida se transportó en mayor cantidad (cerveza,agua o gaseosa)
Además se pide un total de facturación que estará dado por cada litro de gaseosa vendida a $150,
cada litro de agua a $100 y cada litro de cerveza a $200.

*/

function mostrar()
{
	contador=0;

	let nombreConductor;
	let litrosAguaTransportada;
	let litrosGaseosaTransportada;
	let litrosCervezaTransportada;

	let acumuladorLitrosAgua=0;
	let acumuladorLitrosGaseosa=0;
	let acumuladorLitrosCerveza=0;
	let bebidaMasTransportada;

	let facturacionAgua;
	let facturacionGaseosa;
	let facturacionCerveza;

	let totalFacturacion;

	let mensaje;

	while(contador<5)
	{
		do
        {
            nombreConductor=prompt("Ingrese el nombre del conductor").toUpperCase();
                    
        }while(!isNaN(nombreConductor));
    
        do
        {
            litrosAguaTransportada=prompt("Ingrese la cantidad de agua transportada");

            litrosAguaTransportada=parseInt(litrosAguaTransportada);

        }while(isNaN(litrosAguaTransportada) || litrosAguaTransportada<0);

        do
        {
            litrosGaseosaTransportada=prompt("Ingrese la cantidad de Gaseosa transportada");

            litrosGaseosaTransportada=parseInt(litrosGaseosaTransportada);

        }while(isNaN(litrosGaseosaTransportada) || litrosGaseosaTransportada<0);

        do
        {
            litrosCervezaTransportada=prompt("Ingrese la cantidad de Cerveza transportada");

            litrosCervezaTransportada=parseInt(litrosCervezaTransportada);

        }while(isNaN(litrosCervezaTransportada) || litrosCervezaTransportada<0);

        acumuladorLitrosAgua=acumuladorLitrosAgua+litrosAguaTransportada;
		acumuladorLitrosGaseosa=acumuladorLitrosGaseosa+litrosGaseosaTransportada;
		acumuladorLitrosCerveza=acumuladorLitrosCerveza+litrosCervezaTransportada;

		
		contador++;
	}

	facturacionAgua=100*acumuladorLitrosAgua;
	facturacionGaseosa=150*acumuladorLitrosGaseosa;
	facturacionCerveza=200*acumuladorLitrosCerveza;
	totalFacturacion=facturacionAgua+facturacionGaseosa+facturacionCerveza;

	if(acumuladorLitrosAgua > acumuladorLitrosGaseosa && acumuladorLitrosAgua > acumuladorLitrosCerveza)
	{	
		bebidaMasTransportada = "Agua";
		
	}
	else
	{
		if(acumuladorLitrosGaseosa > acumuladorLitrosAgua && acumuladorLitrosGaseosa > acumuladorLitrosCerveza)
		{
			bebidaMasTransportada = "Gaseosa";
		
		}
		else 
		{
			bebidaMasTransportada = "Cerveza";
		
		}
	}

	
	mensaje="La bebida mas transportada fue: "+bebidaMasTransportada;
	mensaje+="\nLa facturacion final del agua fue: $"+facturacionAgua;
	mensaje+="\nLa facturacion final de la Gaseosa fue: $"+facturacionGaseosa;
	mensaje+="\nLa facturacion final de la Cerveza fue: $"+facturacionCerveza;
	mensaje+="\nLa facturacion total fue: $"+totalFacturacion;

	alert(mensaje);
}

/*
pedir el ingreso de 10 mascotas
validar tipo ( gato , perro y otros)solo esos tres tipos
raza , si es perro (pastor, toy, callejero) y si es gato (siamés, turco, mestizo)
y si es de tipo "otros"  , pedir solo un texto.
edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza

function mostrar()
{
	let tipoMascota;
	let razaMascota;
	let edadMascota;
	let nombreMascota;

	let flagPrimerGato=true;
	let nombreDelGatoMasViejo;
	let edadGatoMasViejo;

	let flagPrimerPerro=true;
	let nombreDelPerroMasViejo;
	let edadPerroMasViejo;

	let flagPrimerOtro=true;
	let nombreDelOtroMasViejo;
	let edadOtroMasViejo;

	let contadorSiames=0;
	let acumuladorEdadSiames=0;
	let contadorTurco=0;
	let acumuladorEdadTurco=0;
	let contadorMestizo=0;
	let acumuladorEdadMestizo=0;
	let razaGatoMayorCantidad;
	let promedioEdadRazaGato;

	let mensaje;

	for(i=0;i<10;i++)
	{
		do
	    {
	        tipoMascota=prompt("Ingrese el tipo de mascota");
	        tipoMascota=tipoMascota.toLowerCase();
	    
	    }while(!isNaN(tipoMascota) || (tipoMascota!="perro" && tipoMascota!="gato" && tipoMascota!="otro"));

	    switch(tipoMascota)
	    {
	    	case "perro":
	    		do
			    {
			        razaMascota=prompt("Ingrese la raza de mascota");
			        razaMascota=razaMascota.toLowerCase();
			    
			    }while(!isNaN(razaMascota) || (razaMascota!="pastor" && razaMascota!="toy" && razaMascota!="callejero"));
	    	break;

	    	case "gato":
	    		do
			    {
			        razaMascota=prompt("Ingrese la raza de mascota");
			        razaMascota=razaMascota.toLowerCase();
			    
			    }while(!isNaN(razaMascota) || (razaMascota!="siames" && razaMascota!="turco" && razaMascota!="mestizo"));
	    	break;

	    	default:
	    		razaMascota=prompt("Ingrese la raza de mascota");
	    	break;

	    }

	    switch(tipoMascota)
	    {
	    	case "perro":
	    	case "gato":
	    		do
			    {
			        edadMascota=prompt("Ingrese la edad, entre 1 y 20 años");

			        edadMascota=parseInt(edadMascota);

			    }while(isNaN(edadMascota) || edadMascota<1 || edadMascota>20);
	    	break;

	    	default:
	    		do
			    {
			        edadMascota=prompt("Ingrese la edad, entre 1 y 100 años");

			        edadMascota=parseInt(edadMascota);

			    }while(isNaN(edadMascota) || edadMascota<1 || edadMascota>100);
	    	break;
	    		
	    }

	    do
	    {
	        nombreMascota=prompt("Ingrese el nombre");
	        nombreMascota=nombreMascota.toUpperCase();
	    
	    }while(!isNaN(nombreMascota)); 
	
		switch(tipoMascota)
	    {

	    	case "gato":
	    		if(flagPrimerGato)
	    		{
	    			flagPrimerGato=false;
	    			nombreDelGatoMasViejo=nombreMascota;
	    			edadGatoMasViejo=edadMascota;
	    		}else
	    		{
	    			if(edadGatoMasViejo<edadMascota)
	    			{
		    			nombreDelGatoMasViejo=nombreMascota;
		    			edadGatoMasViejo=edadMascota;
	    			}
	    		}

	    		switch(razaMascota)
	    		{
	    			case "siames":
	    				contadorSiames++;
	    				acumuladorEdadSiames=acumuladorEdadSiames+edadMascota;
	    			break;

	    			case "turco":
	    				contadorTurco++;
	    				acumuladorEdadTurco=acumuladorEdadTurco+edadMascota;
	    			break;

	    			case "mestizo":
	    				contadorMestizo++;
	    				acumuladorEdadMestizo=acumuladorEdadMestizo+edadMascota;
	    			break;
	    		}
	    	break;
	    	
	    	case "perro":
	    		if(flagPrimerPerro)
	    		{
	    			flagPrimerPerro=false;
	    			nombreDelPerroMasViejo=nombreMascota;
	    			edadPerroMasViejo=edadMascota;
	    		}else
	    		{
	    			if(edadPerroMasViejo<edadMascota)
	    			{
		    			nombreDelPerroMasViejo=nombreMascota;
		    			edadPerroMasViejo=edadMascota;
	    			}
	    		}
	    	break;

	    	default:
	    		if(flagPrimerOtro)
	    		{
	    			flagPrimerOtro=false;
	    			nombreDelOtroMasViejo=nombreMascota;
	    			edadOtroMasViejo=edadMascota;
	    		}else
	    		{
	    			if(edadOtroMasViejo<edadMascota)
	    			{
		    			nombreDelOtroMasViejo=nombreMascota;
		    			edadOtroMasViejo=edadMascota;
	    			}
	    		}
	    	break;

	    }

	}//fin for

	if(contadorSiames > contadorTurco && contadorSiames > contadorMestizo)
	{	
		razaGatoMayorCantidad= "siames";
		promedioEdadRazaGato=acumuladorEdadSiames/contadorSiames;
	}
	else
	{
		if(contadorTurco > contadorSiames && contadorTurco > contadorMestizo) 
		{
			razaGatoMayorCantidad= "turco";
			promedioEdadRazaGato=acumuladorEdadTurco/contadorTurco;
		}
		else
		{
			razaGatoMayorCantidad= "mestizo";
			promedioEdadRazaGato=acumuladorEdadMestizo/contadorMestizo;
		}
	}

	mensaje="El gato mas viejo es:"+nombreDelGatoMasViejo;
	mensaje+="\nEl perro mas viejo es:"+nombreDelPerroMasViejo;
	mensaje+="\nEl animal mas viejo que no es ni perro ni gato es:"+nombreDelOtroMasViejo;

	if(flagPrimerGato)
	{
		mensaje+="\nno se ingresaron gatos";
	}else
	{
		mensaje+="\nLa raza de gatos que mas hay es: " + razaGatoMayorCantidad;
		mensaje+="\ny el promedio de edades es: "+ promedioEdadRazaGato;
	}

	

	alert(mensaje);


}//fin funcion

*/