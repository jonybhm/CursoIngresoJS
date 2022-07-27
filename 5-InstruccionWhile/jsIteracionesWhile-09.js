/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
*/
function mostrar()
{	// declarar variables

	let flagPrimerNumero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta=true;

	//iniciar variables

	flagPrimerNumero="primero";

	while(respuesta)
	{
		numeroIngresado=prompt("ingrese un numero");

		numeroIngresado=parseInt(numeroIngresado);

		if(flagPrimerNumero=="primero")
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			flagPrimerNumero="no primero";
		
		}else
		{
			if(numeroMaximo<numeroIngresado)
			{
				numeroMaximo=numeroIngresado;
			}
		
			if(numeroMinimo>numeroIngresado)
			{
				numeroMinimo=numeroIngresado;
			}
		}
		
		respuesta=confirm("desea continuar?");
	}

	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;	
	
}//FIN DE LA FUNCIÓN