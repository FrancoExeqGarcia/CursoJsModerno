const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInputa = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');
//UI
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');


class Citas{
    constructor(){
        this.citas = [];
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
}