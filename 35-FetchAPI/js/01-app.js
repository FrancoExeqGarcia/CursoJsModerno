// api desde txt

const cargarTxtBtn = document.querySelector('#cargarTxt');

cargarTxtBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    const url = 'data/datos.txt' //url
    fetch(url) 
        .then( respuesta => {
            console.log(respuesta);

            console.log(respuesta.headers.get("Content-Type"));
            console.log(respuesta.status); // Estado
            console.log(respuesta.statusText); // STATE "ok"
            console.log(respuesta.url); // URL que se consulta
            console.log(respuesta.type); // tipo de consulta que estamos realizando 


            return respuesta.text(); 

        })
        .then( datos => {
            console.log(datos);
        })
        .catch( error => {
            console.log(error);
        })
}