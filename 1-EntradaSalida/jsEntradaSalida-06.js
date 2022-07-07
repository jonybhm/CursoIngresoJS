/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroUno=parseInt (numeroUno);
	let numeroDos;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroDos=parseInt (numeroDos);
	let suma;
	suma=numeroUno+numeroDos;
	alert ("la suma es " + suma);
}

