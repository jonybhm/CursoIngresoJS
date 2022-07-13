/*
Al ingresar una edad menor a 18 años y 
un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, 
mostrar el siguiente mensaje: 'Es soltero y no es menor.' 
*/

function mostrar()
{
	//tomo la edad  txtIdEdad
	//tomo estado civil estadoCivil

	let edad;
	let estadoCivil;
	let mensaje;

	edad=document.getElementById("txtIdEdad").value;

	edad=parseInt(edad);

	estadoCivil=document.getElementById("estadoCivil").value;

	if(edad>17 && estadoCivil=="Soltero")
	{
		mensaje="Es soltero y NO es menor";
		alert(mensaje);
	}
	

}//FIN DE LA FUNCIÓN