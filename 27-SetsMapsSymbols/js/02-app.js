//WeakSet

const weakset = new WeakSet();

const cliente = {
    nombre: 'franken',
    saldo: 100
}
weakset.add(cliente);

//console.log(weakset.has('nombre'));

//weakset.delete(cliente);

//los weakset no pueden iterarse
console.log(cliente.size);

console.log(weakset);