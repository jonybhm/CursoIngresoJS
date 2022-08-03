/*

1)De 5  personas que ingresan a la farmacia se deben tomar y validar los siguientes datos.
nombre, numero de espera(del 0 al 99),DNI(validar entre 10.000.000 a 99.999.999) 
y monto de la factura emitida (validar que no sea negativo):
a)informar el promedio gastado por persona.
b)La cantidad de personas que su DNI es menor a 80.000.000 
y la cantidad de personas que su DNI es igual o mayor a los 80.000.000
c)el nombre y numero de espera del que más gastó
pedir datos por prompt y mostrar por document.write

*/

function mostrar()
{
    let contador=0;

    let nombre;
    let numeroEspera;
    let DNI;
    let montoFactura;

    let promedioGastado;
    let acumuladorGastado=0;

    let contadorPersonasDNImenor=0;
    let contadorPersonasDNImayoroigual=0;

    let flagPrimerIngreso=true;
    let nombreQuienMasGasto;
    let numeroQuienMasGasto;
    let montoQuienMasGasto;

    let mensaje;

    while(contador<2)
    {
        do
        {
            nombre=prompt("Ingrese el nombre").toUpperCase();
                    
        }while(!isNaN(nombre));
    
        do
        {
            numeroEspera=prompt("Ingrese el numero de espera");

            numeroEspera=parseInt(numeroEspera);

        }while(isNaN(numeroEspera) || numeroEspera<0 || numeroEspera>99);

        do
        {
            DNI=prompt("Ingrese el DNI");

            DNI=parseInt(DNI);

        }while(isNaN(DNI) || DNI<10000000 || DNI>99999999);

        do
        {
            montoFactura=prompt("Ingrese el monto de la factura");

            montoFactura=parseInt(montoFactura);

        }while(isNaN(montoFactura) || montoFactura<0);

        if(DNI<80000000)
        {
            contadorPersonasDNImenor++;
        }else
        {
            contadorPersonasDNImayoroigual++;
        }

        if(flagPrimerIngreso)
        {
            flagPrimerIngreso=false;
            nombreQuienMasGasto=nombre;
            numeroQuienMasGasto=numeroEspera;
            montoQuienMasGasto=montoFactura;
        }else
        {
            if(montoQuienMasGasto<montoFactura)
            {
                nombreQuienMasGasto=nombre;
                numeroQuienMasGasto=numeroEspera;
                montoQuienMasGasto=montoFactura;
            }
        }

        contador++;
        acumuladorGastado=acumuladorGastado+montoFactura;

    }

    promedioGastado=acumuladorGastado/contador;   

    mensaje=" a)el promedio gastado por persona: "+promedioGastado;
    mensaje+="b)La cantidad de personas que su DNI es menor a 80.000.000 es: "+contadorPersonasDNImenor;
    mensaje+="y la cantidad de personas que su DNI es igual o mayor a los 80.000.000: "+contadorPersonasDNImayoroigual;
    mensaje+="c)el nombre del que más gastó es :"+nombreQuienMasGasto+" y numero de espera: "+numeroQuienMasGasto;

    document.write(mensaje);

}


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
*/



