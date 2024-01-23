//symbols
//no se crea con la palabra new
//los symbols no son iguales nunca
const sym = Symbol('1');
const sym2 = Symbol('1');

if (sym === sym2){
    console.log('son iguales');
}else{
console.log('son diferentes');
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

//agregar nombre  y apellidocomo llaves del objeto

persona[nombre] ='franken';
persona[apellido]= 'garcia';
persona.tipoCliente = 'Premium';
persona.saldo = 500;


console.log(persona);
console.log(persona[nombre]);

//las propiedades que utilizan un symbol no son iterables

for (let i in persona){
    console.log(i);

}

//definir una descripcion del symbol

const nombreCliente = Symbol('nombre del cliente');
const cliente = {};
cliente[nombreCliente]= 'Pedro';
console.log(cliente);

console.log(cliente[nombreCliente]);
console.log(nombreCliente);