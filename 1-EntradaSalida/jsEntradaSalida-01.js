/*
Jonathan De Castro 1°G
La juguetería El MUNDO DE OCTAVIO nos encarga un programa para conocer qué
cantidad de materiales se necesita para la fabricación de distintos juguetes.
*/
function mostrar()
{
	let mensaje;
	let mensajeDos;
		
	let diametroMayor;
	let diametroMenor;
	let ladosMenor;
	let ladosMayor;

	let area;
	let varillas;
	let papel;
	let papelBicolor;

	diametroMayor=prompt("Ingrese el diametro mayor en cm");
	diametroMenor=prompt("Ingrese el diametro menor en cm");
	ladosMenor=prompt("Ingrese los lados menores en cm");
	ladosMayor=prompt("Ingrese los lados mayores en cm");

	//conversion cm a m se divide por 100

	diametroMenor=parseFloat(diametroMayor).toFixed(2)/100;
	diametroMayor=parseFloat(diametroMenor).toFixed(2)/100;
	ladosMenor=parseFloat(ladosMenor).toFixed(2)/100;
	ladosMayor=parseFloat(ladosMayor).toFixed(2)/100;

	//area de rombo es (BA+DC)/2

	area=(diametroMenor+diametroMayor)/2;
	papel=area+area*0.1;
	varillas=diametroMayor+diametroMenor+2*ladosMayor+2*ladosMenor;

	papel=parseFloat(papel).toFixed(2);
	varillas=parseFloat(varillas).toFixed(2);
	
	mensaje="Se necesitará "+papel+" mts de papel y ";
	mensaje+=varillas+"mts de varillas";

	alert(mensaje);

	papelBicolor=papel/2;

	mensajeDos="En caso de utilizar dos colores distintos, precisará ";
	mensajeDos+=papelBicolor + "mts de cada tipo de papel";

	alert(mensajeDos);

}



