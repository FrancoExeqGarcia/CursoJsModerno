//variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


//eventos
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto);
}

//classes
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];

    }


    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }
    calcularRestante(){
        const gastado = this.gastos.reduce( (total, gasto) => total += gasto.cantidad, 0 );
        this.restante = this.presupuesto - gastado;

    }
    eliminarGasto(id){
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        this.calcularRestante();
    }

}

class UI{
    insertarPresupuesto(cantidad){
        //extrayendo los valores
        const { presupuesto, restante} = cantidad;
        //agregando al html 
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){
        // crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }
        //mensaje de error
        divMensaje.textContent = mensaje;
        //insertar en html
        document.querySelector('.primario').insertBefore(divMensaje,formulario);
        //quitar el html

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    mostrarGastos(gastos){
        this.limpiarHTML(); //elimina el previo
        //iterar
        gastos.forEach(gasto =>{
            
            const { cantidad, nombre, id } = gasto;
            //crear un li
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id= id;

            console.log(nuevoGasto);
            //agregar el html del gasto

            nuevoGasto.innerHTML = 
            `
                ${nombre} <span class="badge badge-primary badge-pill">$ ${gasto.cantidad} </span> 
            `;
            //borrar gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = "Borrar &times";
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);

            //agregar al html
            gastoListado.appendChild(nuevoGasto);
        })
    }

    limpiarHTML(){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;

    }
    comprobarPresupuesto(presupuestoObj){
        const { presupuesto, restante} = presupuestoObj;

        const restanteDiv = document.querySelector('.restante');

        //comprobar 25%
        if((presupuesto / 4) > restante){
            restanteDiv.classList.remove('.alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if((presupuesto / 2) > restante){
            restanteDiv.classList.remove('.alert-success');
            restanteDiv.classList.add('alert-warning');
        } else{
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }

        //si el total es 0 o menor
        if (restante <= 0){
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
}
//instanciar
const ui = new UI();
let presupuesto;
//funciones

function preguntarPresupuesto(){
    const presupuestoUsario = prompt('Cual es tu presupuesto?');

    //console.log(Number(presupuestoUsario));

    if (presupuestoUsario === '' || presupuestoUsario === null || isNaN(presupuestoUsario) || presupuestoUsario <= 0){
        window.location.reload();
    }

    //presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsario);
    console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);
}

//ag
function agregarGasto(e){
    e.preventDefault();

    //leer datos del form

    const nombre =  document.querySelector('#gasto').value;
    const cantidad =  Number(document.querySelector('#cantidad').value);

    //validar
    if(nombre === '' || cantidad === ''){
        ui.imprimirAlerta('ambos campos son obligatorios','error');
        return;
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no valida', 'error');
        return;
    }

    const gasto = {
        nombre : nombre,
        cantidad : cantidad, 
        id: Date.now()
    }

    presupuesto.nuevoGasto(gasto);

    ui.imprimirAlerta('Gasto agregado correcamente');

    //imprimir gastos
    const{ gastos, restante } = presupuesto
    ui.mostrarGastos(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);//estamos comprobando lo que hemos gastado junto al presupuesto
    formulario.reset();
}

function eliminarGasto(id){
    //elimina el objeto
    presupuesto.eliminarGasto(id);
    //elimina los gastos del html
    const {gastos, restante} = presupuesto;
    ui.mostrarGastos(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);
}