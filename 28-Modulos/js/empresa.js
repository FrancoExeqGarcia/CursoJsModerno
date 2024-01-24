import {Cliente} from './cliente.js';

export class Empresa extends Cliente{
    constructor(nombre, ahorra, categoria) {
        super(nombre,ahorra);
        this.categoria = categoria;
    }
    mostrarInformacion(){
        return`
        Cliente: ${this.nombre} -
        ahorros: ${this.ahorra} -
        categoria ${this.categoria}
        `;
    }
}