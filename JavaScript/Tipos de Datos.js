const libro={
    titulo: "Aprendiendo JavaScript",
    autor: "Carlos Azaustre",
    numPaginas: 100,
    editorial: "carlosazaustre.es",
    precio: "24.90",
    //funciones en los objetos 
    leer: function(){
        console.log ("He leido un libro")
    }
 }

 //object*

 //como llamar objetos 
 libro.titulo
 libro["numPaginas"]
  
 // variables de los objetos
 let pages = "numPaginas";
 libros[pages]
 libro.pages
 libro.leer() 

 //number*
 25 -  25 //entero 
 25.5  -  25.5  //decimal
 0x1f  -  1 //exadecimal
 5.4e2 - 540 //coma flotante
 - 1/0  //infinity
 "a" /15  //NaN

 parseInt ("15") //entero 

 parseFloat ("5e3") //coma flotante

 let n= 2.5678;
 n.toFixed("0"); 


 //math*
Math.PI 
Math.E

//Array*
let miArray =[
    1,
    true,
    [3,2],
    "hola",
    { clave: valor}
]

miArray.length  //mide la longitud del array 

//string*
"javascript"[2]

const fecha= new Date()
fecha.toString().split("")[4] //para dar la hora actual

 