/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let mensaje;
	let nombre;
	nombre=document.getElementById('txtIdNombre').value;
	let edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	mensaje="Usted se llama " + nombre;
	mensaje +=" y tiene " + edad + " años." 
	alert(mensaje);
}

