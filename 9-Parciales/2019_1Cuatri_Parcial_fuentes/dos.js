/*
A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman  xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".
*/

function mostrar()
{
  let nombreUno;
  let nombreDos;
  let pesoUno;
  let pesoDos;
  let sumaPesos;
  let promedioPesos;

  nombreUno=prompt("Ingrese el primer nombre");
  nombreDos=prompt("Ingrese el segundo nombre");
  pesoUno=prompt("Ingrese el primer peso");
  pesoDos=prompt("Ingrese el segundo peso");

  pesoUno=parseInt(pesoUno);
  pesoDos=parseInt(pesoDos);

  sumaPesos=pesoUno+pesoDos;
  promedioPesos=sumaPesos/2;

  alert("ustedes se llaman  " + nombreUno + " y " + nombreDos + 
  " pesan "+ pesoUno + " y " + pesoDos +" kilos, que sumados son " 
  + sumaPesos + " kilos y el promedio de peso " + promedioPesos);

}
