/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let porcentaje;
	let resultado;

	importe=document.getElementById('txtIdImporte').value;
	porcentaje=prompt("ingrese el porcentaje de descuento");
	
	importe=parseFloat(importe);
	porcentaje=parseFloat(porcentaje);
	
	resultado=importe-(importe*porcentaje/100);

	document.getElementById('txtIdResultado').value=resultado;
}


//txtIdImporte
//txtIdResultadoy