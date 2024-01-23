const carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');

console.log(carrito.delete('element #3'));

console.log(carrito.has('Guitarra'));

console.log(carrito.size);

carrito.forEach((producto,index,pertenece) => {
//console.log(producto)    
//console.log(index)
console.log(pertenece)
});
console.log(carrito);


//Del siguiente arreglo eliminar los duplicados
const numeros = [10, 20, 39, 59, 19, 19];

const noDuplicados = new Set(numeros);
console.log(noDuplicados);