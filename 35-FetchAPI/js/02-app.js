const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);

//json array
function obtenerDatos() {
    fetch('data/empleado.json') 
        .then( respuesta => respuesta.json())
        .then(resultado => mostrarHTML(resultado))
}

function mostrarHTML({id, nombre, empresa, trabajo}) {
    console.log('prueba');
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
        <p>ID: ${id} </p>
        <p>Empleado: ${nombre} </p>
        <p>Empresa: ${empresa} </p>
        <p>Trabajo: ${trabajo} </p>
    `;
}