
/*
Ejercicio 3 de los sabados
Si es menor de 13 , mostrar el mensaje “feliz día”.
Si es adolescente el mensaje es “usted es adolescente”
Si tiene 17 años además mostrar el mensaje “último año!!!”
Si es mayor de edad mostrar el mensaje “tenes edad de laburar”.
Si tiene 33 años , además mostrar el mensaje “como cristo”
Si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
Si tiene 88, además mostrar el mensaje “lindo número''
Si la edad es par , además mostrar , “sos par!!”.
*/


function mostrar()
{
	//tomo la edad  txtIdEdad 
	//tomo estado civil estadoCivil
	let edad;
	let mensaje;

	edad=document.getElementById("txtIdEdad").value;

	edad=parseInt(edad);

	
	if (edad>0)
	{
		if(edad<13)
		{
			mensaje="feliz día";		
		}else
		{
			if(edad>12 && edad<18)
			{
				mensaje="usted es adolescente";
				if(edad==17)
				{
					mensaje+=", último año!";
				}

			}else
			{
				if(edad>17)
				{
					mensaje="tenes edad de laburar";
					if(edad==33)
					{
						mensaje+=", como Cristo";
					}else
					{
						if(edad==60)
						{
							mensaje+=", a jubilarse";
						}else
						{
							if(edad==88)
							{
								mensaje+=", lindo numero";
							}
						}
					}
				}
			}
		}
	}else
	{
		mensaje="no es una edad valida";
	}

	if (edad%2==0)
	{
		mensaje+=", sos par!!";
	}

	alert(mensaje);
}



/*
Al ingresar una edad menor a 18 años y un estado civil 
distinto a "Soltero", mostrar el siguiente mensaje:
'Es muy pequeño para NO ser soltero.' 


function mostrar()
{
	//tomo la edad  txtIdEdad 
	//tomo estado civil estadoCivil
	let edad;
	let estadoCivil;
	let mensaje;

	edad=document.getElementById("txtIdEdad").value;
	estadoCivil=document.getElementById("estadoCivil").value;
	edad=parseInt(edad);

	if (edad<18 && estadoCivil!="Soltero")
	{
		mensaje="Es muy pequeño para NO ser soltero.";
	}else
	{
		mensaje="Esta todo bien";
	}

	alert(mensaje);

}
*/
