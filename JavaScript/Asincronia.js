const datos =[{
    id: 1,
    title: 'iron man',
    yera: 2008
},{
    idid: 2,
    title: 'Spiderman: Hommecoming',
    yera: 2017
},{
    id: 3,
    title: 'Avenders: Endgame',
    yera: 2019
}];

//const getDatos= ()=> {
//  return datos;
//}


//const getDatos = () => {
//    setTimeout (() =>{
//        return datos;
//    }, 1500);
//}
//  console console.log(getDatos()); 


const getDatos =() =>{
    return new Promise ((resolve, reject) =>{
        if (datos.length === 0) {
            reject (new Error ('No existen datos'));
        }
    setTimeout (() =>{
        resolve (datos);
    }, 1500);
    }) 
}
    
// getDatos()
//   .then((datos) => console.log(datos));

async function fetchingData(){
    try{
        const datosFetched = await getDatos ();
        console.log(datosFetched);
    } catch (err) {
        console.log (err);
    }
}
fetchingData();
