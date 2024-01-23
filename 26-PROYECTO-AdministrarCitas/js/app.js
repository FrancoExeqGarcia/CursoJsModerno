const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInputa = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');
//UI
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

let editando;

class Citas{
    constructor(){
        this.citas = [];
    }

    agregarCita(cita){
        this.citas = [...this.citas, cita];
        console.log(this.citas);

    }

    eliminarCita(id){
        this.citas = this.citas.filter(cita => cita.id !== id)

    }
    editarCita(citaActualizada){
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita);
    }
}

class UI{
    imprimirAlerta(mensaje, tipo){
        //crear div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');
        //agregar clase segun error

        if (tipo === 'error'){
            divMensaje.classList.add('alert-danger')
        }else{
            
            divMensaje.classList.add('alert-success')
        }

        divMensaje.textContent = mensaje;

        //agregar al dom

        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        //quitar alerta despues de 5 segundos
        setTimeout(() => {
            divMensaje.remove();
        }, 5000);
    }

    imprimirCitas({citas}){
        this.limpiarHTML();
        citas.forEach(cita => {
            const {mascota, propietario, telefono, fecha, hora , sintomas, id} = cita;
            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3'); 
            divCita.dataset.id = id;

            //scripting de la cita
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `
            <span class="font-weighr-bolder">Propietario: </span> ${propietario}
            `;

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `
            <span class="font-weighr-bolder">Telefono: </span> ${telefono}
            `;
            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `
            <span class="font-weighr-bolder">Fecha: </span> ${fecha}
            `;
            
            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `
            <span class="font-weighr-bolder">Hora: </span> ${hora}
            `;
            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
            <span class="font-weighr-bolder">Sintoma: </span> ${sintomas}
            `;

            //boton para eliminar cita
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn','btn-danger','mr-2');
            btnEliminar.innerHTML = `Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          `;

          btnEliminar.onclick = () => eliminarCita(id);
          //ANADE BOTON
          const btnEditar = document.createElement('button');
          btnEditar.classList.add('btn', 'btn-info');
          btnEditar.innerHTML = `Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
        </svg>
        `;
        btnEditar.onclick = () => cargarEdicion(cita);

            //agregar parrafos a divcita,
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);


            //agregar la cita al html
            contenedorCitas.appendChild(divCita);
        })
    }

    limpiarHTML(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild)
        }
    }
}
const ui = new UI();
const administrarCitas = new Citas();


//registrar eventos
eventListeners();
function eventListeners(){
    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInputa.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);

    formulario.addEventListener('submit', nuevaCita);
}
//objeto con la inf de la cita
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: '',
}
//agrega datos al objeto de cita
function datosCita(e){
    console.log(e.target.name);
    citaObj[e.target.name] = e.target.value;
    console.log(citaObj);
}


//Valida y agrega una nueva cita a la clase de citas
function nuevaCita(e){
    e.preventDefault();

    //extraer info del objeto de cita
    const {mascota, propietario, telefono, fecha, hora , sintomas} = citaObj;

    //validar
    if( mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '' ){
        ui.imprimirAlerta("todos los campos son obligatorios", 'error');
        console.log('todos los campos son obligatorios');

        return;
    }
    if(editando){
        ui.imprimirAlerta('editado correctamente');



        //pasar obj de la cita a edicion

        administrarCitas.editarCita({...citaObj});

        //regresar texto de boton a estado original
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

        editando = false;

    }else{
        //generar un id unico
        citaObj.id = Date.now();
        
        
        //creando una nueva cita
        administrarCitas.agregarCita({...citaObj});

        //mensaje de agregado

        ui.imprimirAlerta('se agrego correctamente');

    }
    

//reiniciar el objeto para la validacion
reiniciarObjeto();

//reiniciar el formulario
formulario.reset();


//mostrar el html de las citas
ui.imprimirCitas(administrarCitas);
}
function reiniciarObjeto(){
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}

function eliminarCita(id){
    //eliminar cita
    administrarCitas.eliminarCita(id);
    //muestra msj
    ui.imprimirAlerta("cita eliminada correctamente");

    //refrescar cita
    ui.imprimirCitas(administrarCitas);
}

//carga datos y edicion
function cargarEdicion(cita){
    const {mascota, propietario, telefono, fecha, hora , sintomas, id} = cita;

    //llenar inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInputa.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    //llenarObj
    citaObj.mascota = mascota;
    citaObj.propietario =propietario ;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editando = true;
}