/*
Al presionar el Boton, 
asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROB&Oacute;" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	let numeroRandom;
	let mensaje;

	numeroRandom=Math.floor(Math.random()*10)+1;

	if(numeroRandom==9 || numeroRandom==10)
	{
		mensaje=numeroRandom+" EXCELENTE";
		
	}else
	{
		if(numeroRandom<4)
		{
			mensaje=numeroRandom+" Vamos, la próxima se puede";
			
		}else
		{
			mensaje=numeroRandom+" APROBADO";
			
		}
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN