/*
Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula
(Mercurio y Venus están antes que la tierra). 
*/

function mostrar()
{
	let planeta;
	let mensaje;

	planeta=prompt("Ingrese un planeta del sistema solar");

	switch (planeta)
	{
		case "tierra":
			mensaje="acá vivimos";
			break;

		case "mercurio":
		case "venus":
			mensaje="acá hace más calor";
			break;

		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
			mensaje="acá hace más frío";
			break;

		default:
			mensaje="no es un planeta válido";
			break;

	}

	alert(mensaje);
}
