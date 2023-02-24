//Tipos de datos que se manejan//

let dato
typeof (dato)

let miNumero = 1
typeof (miNumero)

let miString = "Hola Mundo"
typeof (miString)

let miBooleano = false
typeof (miBooleano)

//operadores//

let suma = 5 +5 
suma

let resta = 3 - 2 
resta

let division = 3/0
division

let multiplicacion = 5 * 10
multiplicacion

let potencia = 3 ** 3
potencia

// numerico *//
let x = 1
x 
let y = ++x
y
x
let z = x ++
z
x
let a = x --
a
x

// booleano *//

//(!) lo contrario //
!true   //false//
!false  //true//

//(!!) doble negacion//
!!true  //true//

// (==0) operacion de igualdad //
// (===) valor o tipo //
true === true //true//
true === false //false//

//(!==) operador de distinto //
true !== false //true//
false !== false //false//

//operador AND &&
true && true && true //true//
true && false && true //false//

//operador OR ||
false || false || false //false//
false || true || false //false//

 //Sentencia IF, ELSE IF, ELSE //
 let operacion = 0 + 1;

 if  (operacion > 7) {
    console.log ('Es mayor a 7');
 } else if (operacion < 7 && operacion > 2) {
    console.log ('Esta entre 7 y 2')
 } else {
    console.log ('Es menor de 2')
 }

//Sentecia SWITCH (interruptor)
let operación = 5 + 2 

switch (operación){
    case 0:
        console.log ("El resultado es 0")
    break;

    case 7:
        console.log("El resultado es 0")
    break;
    
    default:
        console.log ("El resultado no es 0 ni 7")
}

//Funciones (Anteriormente) //

// function saludar (nombre = "carlos"){
//  return `¡Hola ${nombre}!`
//}

//saludar()
//saludar("paola")

//function Inventario (nombre){
//    this.nombre = nombre;
//    this.articulos = [];
//}
//Inventario.prototype.getNombre = function(){
//    return this.nombre;
//}
//Inventario.prototype.add = function(articulo, cantidad){
//    this.articulo[articulo]= cantidad;
//}
//Inventario.prototype.cantidad = function(articulo){
//    return this.articulos[articulo]
//}
//let libros = new Inventario ('libros');
//libros.getNombre()
//libros.add("Aprendiendo JavaScript", 5);
//libros.cantidad ('Aprendiendo JavaScript'); 

class Inventario {
    constructor(nombre){
        this.nombre = nombre;
        this.articulos = [];
    }

    getNombre(){
        return this.nombre;
    }

    add(articulo, cantidad){
        this.articulo[articulo]= cantidad;
    }

    cantidad(articulo){
        return this.articulos[articulo]
    }
}

let libros = new Inventario ('libros');
libros.getNombre()
libros.add("Aprendiendo JavaScript", 5);
libros.cantidad ('Aprendiendo JavaScript'); 
