/*
Realizar el algoritmo que permita ingresar los datos de una compra de ingredientes para preparar comida al por mayor , 
hasta que el cliente quiera:
peso (entre 10 y 1000)en kilo,
precio por kilo (más de cero ),
tipo validad("v";"a";"m")(vegetal,animal o mezcla )
Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo de alimento más caro.
f) El promedio de precio por kilo en total.*/


function mostrar()
{

  let pesoComida;
  let importePorKilo;
  let tipoComida;
  let descuento=0;
  let mensaje;

  let acumuladorPesoVegetal=0;
  let acumuladorImporteVegetal=0;
  let acumuladorPesoAnimal=0;
  let acumuladorImporteAnimal=0;
  let acumuladorPesoMezcla=0;
  let acumuladorImporteMezcla=0;

  let acumuladorPesoTotal=0;
  let importeTotal=0;

  let comidaMasCara;

  let respuesta=true;

  while(respuesta==true)
  {
    do
    {
      pesoComida=prompt("Ingrese el peso a comprar en Kg");
      pesoComida=parseInt(pesoComida);
    }while(isNaN(pesoComida) || pesoComida<10 || pesoComida>1000);

    do
    {
      importePorKilo=prompt("Ingrese el importe por kilo");
      importePorKilo=parseInt(importePorKilo);
    }while(isNaN(importePorKilo) || importePorKilo<0);

    do
    {
      tipoComida=prompt("Ingrese el tipo de tipoComida").toLowerCase();

    }while(!isNaN(tipoComida) || (tipoComida!="v" && tipoComida!="a" && tipoComida!="m"))

    

    switch(tipoComida)
    {
      case "v":
        acumuladorPesoVegetal=pesoComida+acumuladorPesoVegetal;

        acumuladorImporteVegetal=(importePorKilo*pesoComida)+acumuladorImporteVegetal;
      break;

      case "a":
        acumuladorPesoAnimal=pesoComida+acumuladorPesoAnimal;

        acumuladorImporteAnimal=(importePorKilo*pesoComida)+acumuladorImporteAnimal;
      break;

      case "m":
        acumuladorPesoMezcla=pesoComida+acumuladorPesoMezcla;

        acumuladorImporteMezcla=(importePorKilo*pesoComida)+acumuladorImporteMezcla;
      break;
    }

    respuesta=confirm("desea continuar?");


  }//fin while

  if(acumuladorImporteAnimal > acumuladorImporteMezcla && acumuladorImporteAnimal > acumuladorImporteVegetal) 
  { 
    comidaMasCara = "Animal";
  }
  else
  {
    if(acumuladorImporteMezcla > acumuladorImporteAnimal && acumuladorImporteMezcla > acumuladorImporteVegetal) 
    {
      comidaMasCara = "Mezcla";
    
    }
    else 
    {
      comidaMasCara = "Vegetal";
      
    }
  }

  acumuladorPesoTotal=acumuladorPesoMezcla+acumuladorPesoAnimal+acumuladorPesoVegetal;
  importeTotal=acumuladorImporteMezcla+acumuladorImporteVegetal+acumuladorImporteAnimal;

  if(acumuladorPesoTotal>100 && acumuladorPesoTotal<300)
  {
    descuento=0.85;
  }else
  {
    if(acumuladorPesoTotal>300)
    {
      descuento=0.75;
    }
  }



  mensaje="a) El importe total a pagar , bruto sin descuento es: "+ importeTotal;

  if(descuento!=0)
  {
    mensaje+="\nb) el importe total a pagar con descuento "+ importeTotal*descuento;
  }

  mensaje+="\nd) El tipo de alimento más caro. "+comidaMasCara;
  mensaje+="\nf) El promedio de precio por kilo en total. " + importeTotal/acumuladorPesoTotal;

  alert(mensaje);

}
