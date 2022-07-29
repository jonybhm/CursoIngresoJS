/*
pedir el ingreso de 10 mascotas
validar tipo ( gato , perro y otros)solo esos tres tipos
raza , si es perro (pastor, toy, callejero) y si es gato (siamés, turco, mestizo)
y si es de tipo "otros"  , pedir solo un texto.
edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza
*/
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

	for(i=0;i<3;i++)
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