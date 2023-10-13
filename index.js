//mostrar cotntenido en la pantalla o consola
console.log("hola mundo");
console.log(2+2);
console.log("Hola a todos! observen este numero:" , 6 + 8); 

//comentario en lina://
/*comentario en bloque: /*.....*/ /* mas de una linea*/

//definiendo variables
var num1=10;
var num2=20
console.log(num1+num2);
 var resultado= (2*2) + 4;
 console.log(resultado);

 //definiendo constantes
 const IVA= 21;
 console.log(IVA + "%")
 //no se puede cambiar el valor de una variable   (IVA= 10);
var name= "CristianBarros";
var t= true;
console.log(typeof(IVA));
console.log(typeof(num1));
console.log(typeof(name));
console.log(typeof(t));

var a = new Number("123");
var b = Number("123");
console.log("a: ", a);
console.log("b: ", b);

//cadena y numeros
var txt1 = "Cristian";
txt1 += "Barros";
console.log( txt1);

//la funcion promt()
// var nombre = prompt ("Ingrese su nombre", "");
//document.write( "hola" + nombre);


//condicionales
//estructura de control (if) y (else)
var nota = 4;
console.log("El examen a resultado:");
if (nota < 5) {                  //condicion
    calificacion = "suspendido"; //accion A creando variable calificacion
} else {
    calificacion = "aprobado";    //acion B creando variable calificacion
} 
console.log( calificacion);

//if con &&
var altura = 0;
var edad = 0;
altura = parseFloat(prompt("ingrese su altura"));
edad = parseInt(prompt("ingrese su edad"));
if (altura > 1.30 && edad > 14) {
    console.log("cumple con los requisitos");
} else{
    console.log("no cumple con los requisitos");
}
//¿Qué muestra por consola el siguiente código?

//
//
fc = ((a) => a + 100);

console.log( fc(10) );






