/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt)
realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."
*/
function SacarResto()
{
	let mensaje;
	let dividendo;
	let divisor;
	let resto;

	dividendo=document.getElementById('txtIdNumeroDividendo').value;
	divisor=document.getElementById('txtIdNumeroDivisor').value;
	
	dividendo=parseFloat(dividendo).toFixed(2);
	divisor=parseFloat(divisor).toFixed(2);

	resto=dividendo%divisor;
	
	mensaje="el resto es " + resto;

	alert(mensaje);
}
