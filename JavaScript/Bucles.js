//while

function bucleWhile(num){
    let i =0;
    while (i < num){
        console.log(i);
        i++
    }
}

bucleWhile(11);

//Do while

function doWhile (num){
    let i = 0
}
do {
    console.log(i);
    i++
} while (i < num);

doWhile(11);

//FOR

 function bucleFor(num){
    for (let i=0; i<num; i ++){
        console.log(i); 
    }
 }

 //Array 

 const obj ={
    unArray: new Array (10000)
 };

 for(let i=0; i<obj.unArray.length; I++){
    obj.unArray[I] = 'Hola';
 }

 //Foreach para array 

 const miArray= [1,2,3,4,];
 miArray.forEach(function(item,index){
    console.log("El valor de la posiscion" 
    + index + "es:" + item)
 })

 const libro={
    titulo: "Aprendiendo JavaScript",
    autor: "Carlos Azaustre",
    numPaginas: 100,
    editorial: "carlosazaustre.es",
    precio: "24.90",
 }

 for (let prop in libro){
    console.log (`}La prop ${prop} contiene: ${libro[prop]}`)
 }