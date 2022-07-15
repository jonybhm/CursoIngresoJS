/*
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días. 
*/

function mostrar()
{
	//tomo el mes txtIdMes
	let mesDelAño;
	let mensaje;

	mesDelAño=document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Febrero":
			mensaje="Tiene 28 ó 29 días";
			break;

		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje="Tiene 31 días";
			break;

		default:
			mensaje="Tiene 30 días";
			break;
	}

	alert(mensaje);



}//FIN DE LA FUNCIÓN