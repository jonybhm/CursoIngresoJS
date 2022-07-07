/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),
realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
	let numeroUno;
	let numeroDos;
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	let suma;
	suma=numeroUno+numeroDos;
	alert("la suma es " + suma);	
}

function restar()
{
	let numeroUno;
	let numeroDos;
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	let resta;
	resta=numeroUno-numeroDos;
	alert("la resta es " + resta);
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	let producto;
	producto=numeroUno*numeroDos;
	alert("el producto es " + producto);
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	let division;
	division=numeroUno/numeroDos;
	alert("la division es " + division);
}



/*
let numeroUno;
	let numeroDos;
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
*/