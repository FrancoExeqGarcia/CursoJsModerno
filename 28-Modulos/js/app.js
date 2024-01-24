import { nombreCliente, ahorra, mostrarInformacion, Cliente } from "./cliente.js";
import{ Empresa } from './empresa.js';

console.log(nombreCliente);
console.log(ahorra);
console.log(mostrarInformacion(nombreCliente,ahorra));

const cliente = new Cliente(nombreCliente,ahorra);
console.log(cliente.mostrarInformacion());

//importar 
const empresa = new Empresa('codigo con franken', 100, 'aprendizaje');
console.log(empresa.mostrarInformacion());
