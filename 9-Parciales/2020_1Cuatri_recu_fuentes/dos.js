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
F. ¿Cuál es la carrera que tiene más alumnos?*/

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



