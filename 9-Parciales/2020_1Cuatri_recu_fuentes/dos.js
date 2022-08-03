/*

2)Se requiere el ingreso de datos para un video juego de pokemon en línea hasta que el usuario quiera:
-Necesitaremos: nombre del jugador/a
-Género (validar M/F/X)
-Edad (validar entre 3 a 99 años)
-Pokemon inicial (validar Charmander, Squirtle o Bolbasaur)
Y deberemos mostrar el promedio de edad de los jugadores ingresados.
El nombre y el pokemon elegido del jugador más grande de edad y del jugador más joven.

*/

function mostrar()
{

  let respuesta=true;

  let nombreJugador;
  let generoJugador;
  let edadJugador;
  let pokemonInicial;

  let promedioEdadJugadores;
  let acumuladorEdadJugadores=0;
  let contadorJugadores=0;

  let flagPrimerIngreso=true;
  let nombreJugadorMasViejo;
  let edadJugadorMasViejo;
  let pokemonJugadorMasViejo;
  let nombreJugadorMasJoven;
  let edadJugadorMasJoven;
  let pokemonJugadorMasJoven;

  let mensaje;

  while(respuesta)
  {

    do
    {
      nombreJugador=prompt("Ingrese el nombre del jugador/a").toUpperCase();
                
    }while(!isNaN(nombreJugador));

    do
    {
      generoJugador=prompt("Ingrese su sexo, “M” para masculino, “F” para femenino y “X” para no binerie");
      generoJugador=generoJugador.toUpperCase();
    
    }while(!isNaN(generoJugador) || (generoJugador!="M" && generoJugador!="F" && generoJugador!="X"));

    do
    {
      edadJugador=prompt("Ingrese su edad");

      edadJugador=parseInt(edadJugador);

    }while(isNaN(edadJugador) || edadJugador<3 || edadJugador>99);

    do
    {
      pokemonInicial=prompt("Elija su pokemon inicial :“charmander” / “squirtle” / “bolbasaur” ");
      pokemonInicial=pokemonInicial.toLowerCase();
    
    }while(!isNaN(pokemonInicial) || (pokemonInicial!="charmander" && pokemonInicial!="squirtle" && pokemonInicial!="bolbasaur"));


    if(flagPrimerIngreso)
    {
      flagPrimerIngreso=false;

      nombreJugadorMasViejo=nombreJugador;
      edadJugadorMasViejo=edadJugador;
      pokemonJugadorMasViejo=pokemonInicial;

      nombreJugadorMasJoven=nombreJugador;
      edadJugadorMasJoven=edadJugador;
      pokemonJugadorMasJoven=pokemonInicial;
    }else
    {
      if(edadJugadorMasViejo<edadJugador)
      {
        nombreJugadorMasViejo=nombreJugador;
        edadJugadorMasViejo=edadJugador;
        pokemonJugadorMasViejo=pokemonInicial;
      }else
      {
        if(edadJugadorMasJoven>edadJugador)
        {
          nombreJugadorMasJoven=nombreJugador;
          edadJugadorMasJoven=edadJugador;
          pokemonJugadorMasJoven=pokemonInicial;
        }
      }
    }

    contadorJugadores++;
    acumuladorEdadJugadores=acumuladorEdadJugadores+edadJugador;

    respuesta=confirm("dese continuar ingresando datos?");
  }

  promedioEdadJugadores=acumuladorEdadJugadores/contadorJugadores;

  mensaje="El promedio de edad de jugadores es: "+promedioEdadJugadores;
  mensaje+="\nEl jugador mas viejo es: "+nombreJugadorMasViejo+" y su pokemon inicial es: "+pokemonJugadorMasViejo;
  mensaje+="\nEl jugador mas Joven es: "+nombreJugadorMasJoven+" y su pokemon inicial es: "+pokemonJugadorMasJoven;

  alert(mensaje);

}



/*El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
genero (femenino-masculino-nobinario)
Nota (entre 1 y 10)
Se desconoce la cantidad de alumnos que se ingresaran.
Informar:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre  del mejor alumno no binario en la carrera de psicología.
F. ¿Cuál es la carrera que tiene más alumnos?

function mostrar()
{

  let nombre;
  let carrera;
  let estadoCarrera;
  let genero;
  let nota;

  let respuesta=true;

  let contadorTotal=0;

  let contadorMujeresTotal=0;

  let contadorNoBinaries=0;

  let promedioNotasFinalizantes;
  let contadorFinalizantes=0;
  let acumuladorNotasFinalizantes=0;

  let flagPrimerAlumno=true;
  let nombreMejorNoBiPsicologia;
  let mejorNotaNoBiPsico;

  let contadorProgramacion=0;
  let contadorPsicologia=0;
  let contadorDiseno=0;
  let carreraConMasAlumnos;

  let mensaje;

  while(respuesta)
  {
    do
    {
        nombre=prompt("Ingrese el nombre");
        nombre=nombre.toLowerCase();
    
    }while(!isNaN(nombre));

    do
    {
        carrera=prompt("Ingrese el carrera");
        carrera=carrera.toLowerCase();
    
    }while(!isNaN(carrera) || (carrera!="programacion" && carrera!="psicologia" && carrera!="diseño grafico"));

    do
    {
        estadoCarrera=prompt("Ingrese el estado de la Carrera");
        estadoCarrera=estadoCarrera.toLowerCase();
    
    }while(!isNaN(estadoCarrera) || (estadoCarrera!="curso" && estadoCarrera!="abandonado" && estadoCarrera!="finalizado"));

    do
    {
        genero=prompt("Ingrese el genero");
        genero=genero.toLowerCase();
    
    }while(!isNaN(genero) || (genero!="femenino" && genero!="masculino" && genero!="nobinario"));

    do
    {
        nota=prompt("Ingrese la cantidad de nota");

        nota=parseInt(nota);

    }while(isNaN(nota) || nota<1 || nota>10);

    if(genero=="femenino" && carrera=="programacion")
    {
      contadorMujeresTotal++;
    }
      
    if(genero=="nobinario")
    {
      contadorNoBinaries++;
    }
      
     if(estadoCarrera=="finalizado")
    {
      acumuladorNotasFinalizantes=acumuladorNotasFinalizantes+nota;
      contadorFinalizantes++;
    }

    switch(carrera)
    {
      case "psicologia":
        contadorPsicologia++;
      break;

      case "programacion":
        contadorProgramacion++;
      break;

      default:
        contadorDiseno++;
      break;
    }

    if(flagPrimerAlumno==true && (genero=="nobinario" && carrera=="psicologia"))
    {
      flagPrimerAlumno=false;
      nombreMejorNoBiPsicologia=nombre;
      mejorNotaNoBiPsico=nota;
    }else
    {
      if(mejorNotaNoBiPsico<nota && (genero=="nobinario" && carrera=="psicologia"))
      {
        mejorNotaNoBiPsico=nota;
      }
    }

    contadorTotal++;
    respuesta=confirm("desea continuar?");
  }

  if(contadorProgramacion > contadorPsicologia && contadorProgramacion > contadorDiseno) 
  { 
    carreraConMasAlumnos = "programacion";
  }
  else
  {
    if(contadorPsicologia > contadorProgramacion && contadorPsicologia > contadorDiseno) 
    {
      carreraConMasAlumnos = "psicologia";
    }
    else 
    {
      carreraConMasAlumnos = "diseño grafico";
    }
  }

  promedioNotasFinalizantes=acumuladorNotasFinalizantes/contadorFinalizantes;
  
  mensaje="A. Cantidad total de alumnos de cada carrera. psicologia: "+ contadorPsicologia; 
  mensaje+=" programacion: " + contadorProgramacion +" diseño: "+ contadorDiseno; 
  mensaje+="\nB. Cantidad total de mujeres que cursan la carrera de programación" + contadorMujeresTotal;
  mensaje+="\nC. Cantidad de alumnos no binarios."+ contadorNoBinaries;
  mensaje+="\nD. Promedio de notas de los alumnos finalizantes."+promedioNotasFinalizantes;
  mensaje+="\nE. Nombre  del mejor alumno no binario en la carrera de psicología." +nombreMejorNoBiPsicologia;
  mensaje+="\nF. ¿Cuál es la carrera que tiene más alumnos?" + carreraConMasAlumnos;

  alert(mensaje);

}

*/

