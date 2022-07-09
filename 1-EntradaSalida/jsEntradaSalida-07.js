/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),
realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
	let mensaje;
	let numeroUno;
	let numeroDos;
	
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	
	let suma;
	suma=numeroUno+numeroDos;
	
	mensaje="la suma es " + suma;

	alert(mensaje);	
}

function restar()
{
	let mensaje;
	let numeroUno;
	let numeroDos;
	let resta;
	
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	
	resta=numeroUno-numeroDos;
	
	mensaje="la resta es " + resta;

	alert(mensaje);
}

function multiplicar()
{ 
	let mensaje;
	let numeroUno;
	let numeroDos;
	let producto;
	
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	
	producto=numeroUno*numeroDos;
	
	mensaje="el producto es " + producto;

	alert(mensaje);
}

function dividir()
{
	let mensaje;
	let numeroUno;
	let numeroDos;
	let division;
	
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	
	division=numeroUno/numeroDos;
	
	mensaje="la division es " + division;

	alert(mensaje);
}