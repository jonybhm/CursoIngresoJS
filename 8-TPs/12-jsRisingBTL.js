/*
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y 
censos nos pide realizar una carga de datos validada e ingresada 
por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y 
luego asignarla a cuadros de textos. 

12.   Los datos requeridos son los siguientes:

A.	Edad, entre 18 y 90 años inclusive.

B.	Sexo, “M” para masculino y “F” para femenino

C.	Estado civil, 1-para soltero, 2-para casados, 
3-para divorciados y 4-para viudos

D.	Sueldo bruto, no menor a 8000.

E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.

F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, 
“N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
    let sueldoIngresado;
    let legajoIngresado;
    let nacionalidadIngresada;
    let numeroCifrasLegajo;

    let contadorFemenino;
    let acumuladorFemenino;
    let promedioFemenino;

    let i;

    let mensaje;

    contadorFemenino=0;
    acumuladorFemenino=0;
    
    for(i=0;i<3;i++)
    {

        do
        {
            sexoIngresado=prompt("Ingrese su sexo, “M” para masculino y “F” para femenino");
            sexoIngresado=sexoIngresado.toUpperCase();
        
        }while(!isNaN(sexoIngresado) || (sexoIngresado!="M" && sexoIngresado!="F"));

        do
        {
            edadIngresada=prompt("Ingrese su edad, entre 18 y 90 años inclusive.");

            edadIngresada=parseInt(edadIngresada);

        }while(isNaN(edadIngresada) || edadIngresada<18 || edadIngresada>90);

        if(sexoIngresado=="F")
        {
            contadorFemenino++;
            acumuladorFemenino=acumuladorFemenino+edadIngresada;
        }
      
        do
        {

            mensaje="Ingrese Estado civil, 1-para soltero";
            mensaje+=", 2-para casados, 3-para divorciados y 4-para viudos";
            
            estadoCivilIngresado=prompt(mensaje);

            estadoCivilIngresado=parseInt(estadoCivilIngresado);

        }while(isNaN(estadoCivilIngresado) || !(estadoCivilIngresado>0 && estadoCivilIngresado<5));


        do
        {
            sueldoIngresado=prompt("Ingrese su sueldo no menor a 8000.");

            sueldoIngresado=parseInt(sueldoIngresado);

        }while(isNaN(sueldoIngresado) || sueldoIngresado<8000);

        
        do
        {
            legajoIngresado=prompt("Ingrese su legajo numérico de 4 cifras, sin ceros a la izquierda.");

            legajoIngresado=parseInt(legajoIngresado);

            numeroCifrasLegajo=(Math.log10((legajoIngresado ^ (legajoIngresado >> 31)) - (legajoIngresado >> 31)) | 0) + 1; //funcion para obtener el numero de cifras de un entero

        }while(numeroCifrasLegajo!=4);    
      
        do
        {
            mensaje="Ingrese sus Nacionalidad, “A” para argentinos, ";
            mensaje+="“E” para extranjeros, “N” para nacionalizados.";
            nacionalidadIngresada=prompt(mensaje).toUpperCase();
                    
        }while(!isNaN(nacionalidadIngresada) || (nacionalidadIngresada!="A" && nacionalidadIngresada!="E" && nacionalidadIngresada!="N"));
      
    }

    promedioFemenino=acumuladorFemenino/contadorFemenino;

    mensaje="El promedio de edades femeninas es: "+promedioFemenino;

    alert(mensaje);

    document.getElementById("txtIdEdad").value=edadIngresada;
    document.getElementById("txtIdSexo").value=sexoIngresado;
    document.getElementById("txtIdEstadoCivil").value=estadoCivilIngresado;
    document.getElementById("txtIdSueldo").value=sueldoIngresado;
    document.getElementById("txtIdLegajo").value=legajoIngresado;
    document.getElementById("txtIdNacionalidad").value=nacionalidadIngresada;


}
