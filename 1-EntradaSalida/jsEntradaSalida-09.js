/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let porcentaje;
	let resultado;

	sueldo=document.getElementById('txtIdSueldo').value;
	sueldo=parseInt(sueldo);
	porcentaje=prompt("ingrese el porcentaje de aumento");
	resultado=(sueldo*porcentaje/100)+sueldo;
	document.getElementById('txtIdResultado').value=resultado;
}

//txtIdSueldo
//txtIdResultado
