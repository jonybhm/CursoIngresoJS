/*
En el ingreso a un viaje en crucero nos solicitan 
nombre , 
edad(mayores de 18), 
sexo("f" o "m") y 
estado civil("soltero", "casado" o "viudo");
a) El nombre del hombre casado más joven.
b) El sexo y nombre del pasajero/a más viejo.
c) La cantidad de mujeres que hay casadas o viudas.
d) El promedio de edad entre las mujeres.
e) El promedio de edad entre los hombres solteros. 
*/


function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;

	let flagPrimerIngreso=true;
	
	let nombreHombreCasadoMasJoven;
	let edadHombreCasadoMasJoven;

	let sexoPasajeroMasViejo;
	let nombrePasajeroMasViejo;
	let edadPasajeroMasViejo;

	let acumuladorEdadMujeres=0;
	let contadorMujeresCasadasViudas=0;
	let contadorMujeresTotal=0;
	let promedioEdadMujeres;

	let acumuladorEdadHombresSolteros=0;
	let contadorHombresSolteros=0;
	let promedioEdadHombres;

	let respuesta=true;

	let mensaje;

	while(respuesta==true)
	{
		do
	    {
	        nombre=prompt("Ingrese nombre");
	        	    
	    }while(!isNaN(nombre));

	    do
	    {
	        edad=prompt("Ingrese edad, mayores de 18");

	        edad=parseInt(edad);

	    }while(isNaN(edad) || edad<18);

		do
	    {
	        sexo=prompt("Ingrese sexo, “M” para masculino y “F” para femenino");
	        sexo=sexo.toUpperCase();
	    
	    }while(!isNaN(sexo) || (sexo!="M" && sexo!="F"));

	    do
	    {
	               
	        estadoCivil=prompt("Ingrese sus estado Civil, soltero, casado o viudo").toLowerCase();
	                
	    }while(!isNaN(estadoCivil) || (estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo"));

	    if(flagPrimerIngreso==true)
		{
			nombreHombreCasadoMasJoven = nombre;
			edadHombreCasadoMasJoven = edad;

			sexoPasajeroMasViejo = sexo; 
			nombrePasajeroMasViejo = nombre;
			edadPasajeroMasViejo = edad;

			flagPrimerIngreso = false;
		}else
		{
			if(sexo=="M" && estadoCivil=="casado" && edad<edadHombreCasadoMasJoven)
			{
				edadHombreCasadoMasJoven=edad;
				nombreHombreCasadoMasJoven = nombre;
			}else
			{
				if(edad>edadPasajeroMasViejo)
				{
					edadPasajeroMasViejo=edad;
					sexoPasajeroMasViejo = sexo; 
					nombrePasajeroMasViejo = nombre;
				}
			}
		}

		switch(sexo)
		{
			case "F":
				switch(estadoCivil)
				{
					case "casado":
					case "viudo":
						acumuladorEdadMujeres=acumuladorEdadMujeres+edad;
						contadorMujeresCasadasViudas++;
						contadorMujeresTotal++;
					break;

					default:
						acumuladorEdadMujeres=acumuladorEdadMujeres+edad;
						contadorMujeresTotal++;
					break;
				}
			break;

			case "M":
				switch(estadoCivil)
				{
					case "soltero":
						acumuladorEdadHombresSolteros=acumuladorEdadHombresSolteros+edad;
						contadorHombresSolteros++;
					break;
				}
			break;
		}


		respuesta=confirm("desea continuar?");
	}

	promedioEdadHombres=(acumuladorEdadHombresSolteros/contadorHombresSolteros).toFixed(2);
	promedioEdadMujeres=(acumuladorEdadMujeres/contadorMujeresTotal).toFixed(2);

	mensaje="a) El nombre del hombre casado más joven. "+nombreHombreCasadoMasJoven;
	mensaje+="\nb) El sexo y nombre del pasajero/a más viejo."+sexoPasajeroMasViejo + nombrePasajeroMasViejo;
	mensaje+="\nc) La cantidad de mujeres que hay casadas o viudas."+contadorMujeresCasadasViudas;
	mensaje+="\nd) El promedio de edad entre las mujeres. "+promedioEdadMujeres;
	mensaje+="\ne) El promedio de edad entre los hombres solteros. "+promedioEdadHombres;

	alert(mensaje);

}
