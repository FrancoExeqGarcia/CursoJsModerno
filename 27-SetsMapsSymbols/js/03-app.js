//maps son listas ordenadas en llave y valor
const cliente = new Map();

cliente.set('nombre','Karen');
cliente.set('tipo','Premium');
cliente.set('saldo',3000);
cliente.set([0], true);

console.log(cliente);

console.log(cliente.size);

console.log(cliente.has('nombre'));

console.log(cliente.get('nombre'));

cliente.delete('saldo');

console.log(cliente.has('saldo'));

console.log(cliente.get('saldo'));

cliente.clear();
console.log(cliente);

const paciente = new Map([['nombre','paciente'],['cuarto', 'no definido']]);
paciente.set('dr','Dr asignado');
paciente.set('nombre','Antonio');

console.log(paciente);

paciente.forEach((datos,index) => {
    console.log(datos);
});
paciente.forEach((datos,index) => {
    console.log(index);
});