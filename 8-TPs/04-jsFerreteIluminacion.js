/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo 
precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento 
del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se 
hace un descuento del 40 % y si es de otra marca el descuento es 
del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" 
o “FelipeLamparas” se hace un descuento del 25 % y si es de 
otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  
el descuento es del 15%, si es  “FelipeLamparas” se hace un 
descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se 
debe sumar un 10% de ingresos brutos en informar del impuesto 
con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/

//ejercicio solo SWITCH/IF
function CalcularPrecio () 
{
    //cantidad txtIdCantidad
    //tienda elegida Marca
    //decuento txtIdprecioDescuento

    let precioLampara=35;
    let cantidad;
    let marca;
    let descuento;
    let precioFinal;
    let mensaje;
    let impuesto;

    cantidad=document.getElementById("txtIdCantidad").value;
    marca=document.getElementById("Marca").value;
    
    cantidad=parseFloat(cantidad);
    descuento=parseFloat(descuento);
    impuesto=parseFloat(impuesto);

    switch(cantidad)
    {
        case 5:
            if(marca=="ArgentinaLuz")
            {
                descuento=0.4;           
            }else
            {
                descuento=0.3;
            }        
        break;

        case 4:
            if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
            {
                descuento=0.25;                  
            }else
            {
                descuento=0.2;
            }
        break;
            
        case 3:
            if(marca=="ArgentinaLuz")
            {
                descuento=0.15;                        
            }else
            {
                if(marca=="FelipeLamparas")
                {
                    descuento=0.1;                           
                }else
                {
                    descuento=0.05;
                }
            }
        break;

        case 2:
        case 1:
            descuento=0;
        break;

        default:
            descuento=0.5;
        break;                                                                        
    }

    precioFinal=(precioLampara*cantidad)-(precioLampara*cantidad*descuento);
   
    if(precioFinal>=120) 
    {
        impuesto=precioFinal*0.1;
        precioFinal=precioFinal+impuesto;
        mensaje="Usted pago $"+ impuesto +" de IIBB.";
        alert(mensaje);
    }

    document.getElementById("txtIdprecioDescuento").value="$"+precioFinal;

}

/*
//ejercicio con IF/SWITCH
function CalcularPrecio () 
{
    let precioLampara=35; //precio hardcodeado
    let cantidad; //txtIdCantidad
    let descuento=0; //descuento hardcodeado
    let marca; //Marca
    let precioFinal; //txtIdprecioDescuento
    let impuesto;

    let mensaje;

    cantidad=document.getElementById("txtIdCantidad").value;
    marca=document.getElementById("Marca").value;

    cantidad=parseInt(cantidad);

    if(cantidad>5)
    {
        descuento=0.5;
    }else
    {
        if(cantidad==5)
        {
            switch (marca)
            {
                case "ArgentinaLuz":
                descuento=0.4;
                break;
            
                default:
                descuento=0.3;
                break;
            }
        }else
        {
            if(cantidad==4)
            {
                switch (marca)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                    descuento=0.25;
                    break;
                
                    default:
                    descuento=0.2;
                    break;
                }
            }else
            {
                if(cantidad==3)
                {
                    switch (marca)
                    {
                        case "ArgentinaLuz":
                        descuento=0.15;
                        break;

                        case "FelipeLamparas":
                        descuento=0.1;
                        break;
                    
                        default:
                        descuento=0.05;
                        break;
                    }
                }
            }
        }
    }
           

    precioFinal=(precioLampara*cantidad)-(precioLampara*cantidad*descuento);

    document.getElementById("txtIdprecioDescuento").value="$"+precioFinal;

    if(precioFinal>=120) //E.
    {
        impuesto=precioFinal*0.1;
        precioFinal=precioFinal+impuesto;
        mensaje="Usted pago $"+ impuesto +" de IIBB.";
        alert(mensaje);
    }

}
*/






/*
//ejercicio solo con SWITCH
function CalcularPrecio () 
{
    let precioLampara=35; //precio hardcodeado
    let cantidad; //txtIdCantidad
    let descuento; //descuento hardcodeado
    let marca; //Marca
    let precioFinal; //txtIdprecioDescuento
    let impuesto;

    let mensaje;

    cantidad=document.getElementById("txtIdCantidad").value;
    marca=document.getElementById("Marca").value;

    cantidad=parseInt(cantidad);

    switch(cantidad)
        {

            case 5:
                switch (marca)
                {
                    case "ArgentinaLuz":
                    descuento=0.4;
                    break;
                
                    default:
                    descuento=0.3;
                    break;
                }
            break;

            case 4:
                switch (marca)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                    descuento=0.25;
                    break;
                
                    default:
                    descuento=0.2;
                    break;
                }
            break;

            case 3:
                switch (marca)
                {
                    case "ArgentinaLuz":
                    descuento=0.15;
                    break;

                    case "FelipeLamparas":
                    descuento=0.1;
                    break;
                
                    default:
                    descuento=0.05;
                    break;
                }
            break;

            case 2:
            case 1:
                descuento=0;
            break;

            default:
                descuento=0.5;
            break;
        }
    

    precioFinal=(precioLampara*cantidad)-(precioLampara*cantidad*descuento);

    document.getElementById("txtIdprecioDescuento").value="$"+precioFinal;

    if(precioFinal>=120) //E.
    {
        impuesto=precioFinal*0.1;
        precioFinal=precioFinal+impuesto;
        mensaje="Usted pago $"+ impuesto +" de IIBB.";
        alert(mensaje);
    }

}
*/


/*
//ejercicio solo con IF
function CalcularPrecio () 
{
    //cantidad txtIdCantidad
    //tienda elegida Marca
    //decuento txtIdprecioDescuento

    let precioLampara;
    let cantidad;
    let marca;
    let descuento;
    let precioFinal;
    let mensaje;
    let impuesto;

    precioLampara=35;
    cantidad=document.getElementById("txtIdCantidad").value;
    marca=document.getElementById("Marca").value;
    
    cantidad=parseFloat(cantidad);
    descuento=parseFloat(descuento);
    impuesto=parseFloat(impuesto);

    if(cantidad>5) //A.
    {
        descuento=0.5;              
    }else
    {
        if(cantidad==5) //B.
        {
            if(marca=="ArgentinaLuz")
            {
                descuento=0.4;           
            }else
            {
                descuento=0.3;
            }        
        }else
        {
            if(cantidad==4) //C.
            {
                if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
                {
                    descuento=0.25;                  
                }else
                {
                    descuento=0.2;
                }
            }else
            {
                if(cantidad==3)//D.
                {
                    if(marca=="ArgentinaLuz")
                    {
                        descuento=0.15;                        
                    }else
                    {
                        if(marca=="FelipeLamparas")
                        {
                            descuento=0.1;                           
                        }else
                        {
                            descuento=0.05;
                        }
                    }
                }else
                {
                    if(cantidad<3)
                    {
                        descuento=0;
                    }
                }
            }   
        }                                                                
    }

    precioFinal=(precioLampara*cantidad)-(precioLampara*cantidad*descuento);

    document.getElementById("txtIdprecioDescuento").value="$"+precioFinal;

    if(precioFinal>=120) //E.
    {
        impuesto=precioFinal*0.1;
        precioFinal=precioFinal+impuesto;
        mensaje="Usted pago $"+ impuesto +" de IIBB.";
        alert(mensaje);
    }
}
*/