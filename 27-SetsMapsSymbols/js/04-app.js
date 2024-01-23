//weak map menos utilizados, usadas en librerias internas
//mantiene los datos en privado
//no se pueden iterar tampoco puede conocerse su extension
const producto = {
    idProducto : 10
}

const weakMap = new WeakMap();
weakMap.set(producto,'Monitor');

console.log(weakMap.has(producto));
console.log(weakMap.get(producto));
console.log(weakMap.delete(producto));
//console.log(weakMap.size);
console.log(weakMap);