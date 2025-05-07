
import { agregarProducto, eliminarProducto, mostrarLista } from './lista.js';

// Prueba tus funciones
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Papel Higienico");
agregarProducto("Cereal"); 
agregarProducto("Pan");
agregarProducto("Jabon multiusos"); // Este producto no debe agregarse de nuevo
mostrarLista();  // Debería mostrar "Leche" y "Pan"

eliminarProducto("Pan");
eliminarProducto("Jabon multiusos");

mostrarLista();  // Muestra lista sin productos eliminados

eliminarProducto("Huevos");  // Producto no existente