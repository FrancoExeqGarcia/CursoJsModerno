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
class Empresa extends Cliente{
    constructor(nombre,saldo,telefono,categoria){
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida(){
        return`Bienvenido al cajero de empresas`;
    }
}


const juan = new Cliente('Juan', 405);
const empresa = new Empresa('codigo con fran', 450, 10929, 'aprendiendo');
console.log(empresa);
console.log(empresa.mostrarInformacion());
console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());