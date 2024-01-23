//generadores
//funcion que retorna un iterador

function *crearGenerador(){
    yield 1;
    yield 'franken';
    yield 3+3;
    yield true;
}

// const iterador = crearGenerador();
// console.log(iterador);
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador);

//acceder a un generador de manera programada
function *generadorCarrito(carrito) {
    for(let i = 0; i < carrito.length; i++){
        yield carrito[i];
    }
}

const carrito = ['Producto 1', 'Product 2','Producto 3'];

const iterador = generadorCarrito(carrito);

console.log(iterador.next());

console.log(iterador.next());

console.log(iterador.next());

console.log(iterador.next());