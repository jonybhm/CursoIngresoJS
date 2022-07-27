/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;

	do
	{

		sexoIngresado=prompt("ingrese 'm' para masculino o 'f' para femenino").toLowerCase();

	}while(sexoIngresado!="m" && sexoIngresado!="f");

	document.getElementById("txtIdSexo").value=sexoIngresado;
}//FIN DE LA FUNCIÓN