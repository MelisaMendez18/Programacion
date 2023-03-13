/*const API_URL = 'https://jsonplaceholder.typicode.com/';

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if (this.readyState === 4 && this.estatus === 200) {
  // 0 = UNDET, no se ha llamado al metodo open 
  // 1 = OPENED, se ha llamado al metodo open.
  // 2 = HEADERS_RECEIVED, se esta llamando al metodo send()
  // 3 = LOADING, está cargando, es decir, está recibiendo la respuesta.
  // 4 = DONE, se ha completado la operacion.
  console.log (this.Response);
  const HTMLResponse = document.querySelector("#app");

  const tpl = data.map ((user) => `<li> ${user.name} ${user.email}</li>`);
  HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    }
}
xhr. addEventListener("load", onRequestHandler);
xhr.open ("GET", ` $ {API_URL}/users`);
xhr.send ();
*/

//*const API_URL = 'https://jsonplaceholder.typicode.com/';

//const HTMLResponse = Document.querySelector("#app");

//fetch (`${API_URL}/users`)
   //.then ((response) => response.json())
   //.then ((users) =>{
    //const tpl = users.map ((user) => `<li> ${user.name} ${user.email}</li>`);
    //HTMLResponse.innerHTML = `<ul> ${tpl} </ul>`;
   //});
