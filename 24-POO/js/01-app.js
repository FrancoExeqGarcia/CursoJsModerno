//class declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion(){
        return`Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida(){
        return`Bienvenido al cajero`;
    }
}

const juan = new Cliente('Juan', 400);
console.log(juan);
console.log(juan.mostrarInformacion());
console.log(Cliente.bienvenida());
//class expression
const Cliente2 = class{ 
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const juan2 = new Cliente2('Juansete', 450);
console.log(juan2);