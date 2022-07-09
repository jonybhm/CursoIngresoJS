/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar 
el botón  'mostrar'
*/
function mostrar()
{
	let mensaje;
	let nombreIngresado;
	nombreIngresado=document.getElementById('txtIdNombre').value;//el id es: txtIdNombre
	mensaje="su nombre: " + nombreIngresado;
	alert(mensaje);

}


