/*Realizar el algoritmo que permita ingresar 5 paises:
del continente (validar entre america , asia , europa ,africa y oceania)
el nombre del país,
cantidad de habitantes en millones entre 1 y 2000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
Se debe Informar al usuario lo siguiente:
a)La cantidad de temperaturas pares.
b)El nombre del pais con menos habitantes
c)la cantidad de paises de america que tienen menos de 0 grados .
d)el promedio de habitantes entre los paises ingresados .
e) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
*/

function mostrar()
{
	let continente;
	let pais;
	let habitantes;
	let temperaturaMinima;

	let contadorTemperaturaPar=0;

	let flagPrimerPais=true;
	let nombrePaisMenosHabitantes;
	let cantidadHabitantesPaisMenos;

	let contadorPaisAmericaNegativa=0;

	let promedioHabitantesPaises=0;	
	let acumuladorHabitantes=0;

	let flagPrimerTemperatura=true;
	let temperaturaMenor;
	let nombrePaisMenorTemperatura;

	let mensaje;

	let contador=0;

	while(contador<2)
	{
	
	do
    {
        continente=prompt("Ingrese el continente");
        continente=continente.toLowerCase();
    
    }while(!isNaN(continente) || (continente!="america" && continente!="asia" && continente!="europa" && continente!="africa" && continente!="oceania" ));

    do
    {
        pais=prompt("Ingrese el pais");
        pais=pais.toLowerCase();
    
    }while(!isNaN(pais));

    do
    {
        habitantes=prompt("Ingrese la cantidad de habitantes");

        habitantes=parseInt(habitantes);

    }while(isNaN(habitantes) || habitantes<1 || habitantes>2000);

    do
    {
        temperaturaMinima=prompt("Ingrese la temperatura minima registrada");

        temperaturaMinima=parseInt(temperaturaMinima);

    }while(isNaN(temperaturaMinima) || temperaturaMinima<-50 || temperaturaMinima>50);

    if(temperaturaMinima%2==0)
    {
    	contadorTemperaturaPar++;
    }

    if(pais=="america" && temperaturaMinima<0)
    {
    	contadorPaisAmericaNegativa++;
    }

    if(flagPrimerTemperatura)
    {
    	flagPrimerTemperatura=false;
    	nombrePaisMenorTemperatura=pais;
    	temperaturaMenor=temperaturaMinima;

    }else
    {
    	if(temperaturaMenor>temperaturaMinima)
       	{
       		temperaturaMenor=temperaturaMinima;
    	}
    }

    if(flagPrimerPais)
    {
    	flagPrimerPais=false;
    	nombrePaisMenosHabitantes=pais;
    	cantidadHabitantesPaisMenos=habitantes;

    }else
    {
    	if(cantidadHabitantesPaisMenos>habitantes)
       	{
       		cantidadHabitantesPaisMenos=habitantes;
    	}
    }

    acumuladorHabitantes=acumuladorHabitantes+habitantes;
    contador++;

	}

	promedioHabitantesPaises=acumuladorHabitantes/contador;

	mensaje="a)La cantidad de temperaturas pares." + contadorTemperaturaPar;
	mensaje+="\nb)El nombre del pais con menos habitantes" + nombrePaisMenosHabitantes +".000.000";
	mensaje+="\nc)la cantidad de paises de america que tienen menos de 0 grados ." + contadorPaisAmericaNegativa;
	mensaje+="\nd)el promedio de habitantes entre los paises ingresados ." + promedioHabitantesPaises;
	mensaje+="\ne) la temperatura mínima ingresada, " + temperaturaMenor +  "y nombre del pais que registro esa temperatura. "+ nombrePaisMenorTemperatura;

	alert(mensaje);

}



