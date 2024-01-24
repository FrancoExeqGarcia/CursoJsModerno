
export const nombreCliente = 'Juan';
export const ahorra = 200;

export function mostrarInformacion(nombre,ahorra){
    return`
    Cliente: ${nombre} -
    ahorros: ${ahorra};
    `;
}

export class Cliente{
    constructor(nombre, ahorra){
        this.nombre = nombre;
        this.ahorra = ahorra;
    }

    mostrarInformacion(){
        return`
        Cliente: ${this.nombre} -
        ahorros: ${this.ahorra};
        `;
    }
}