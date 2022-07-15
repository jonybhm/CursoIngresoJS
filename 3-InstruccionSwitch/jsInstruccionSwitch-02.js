/*
al seleccionar un mes  informar.
si estamos en Invierno: "Abrigate que hace frio."
si a&uacute;n no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARACION: tomamos a Julio y Agosto como los meses de Invierno.
*/

function mostrar()
{
	let mesDelAño;
	let mensaje;

	mesDelAño=document.getElementById("txtIdMes").value;

	switch (mesDelAño)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje="Falta para el invierno.";
			break;

		case "Julio":
		case "Agosto":
		case "Septiembre":
			mensaje="Abrigate que hace frio.";
			break;

		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje="Ya pasamos el frio, ahora calor!!!.";
			break;			
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN