let listaDeCompras = [];  // Lista vacía

// Función para agregar un producto
export const agregarProducto = (producto) => {
  if (!listaDeCompras.includes(producto)) { // Verifica si el producto ya está en la lista
    listaDeCompras.push(producto);
    console.log(`Producto "${producto}" agregado a la lista.`);
  } else {
    console.log(`"${producto}" ya está en la lista.`);
  }
};

// Función para eliminar un producto
export const eliminarProducto = (producto) => {
    const index = listaDeCompras.indexOf(producto); 
  if (index !== -1) { // Verifica si el producto existe en la lista
    listaDeCompras.splice(index, 1); 
    console.log(`Producto "${producto}" eliminado de la lista.`);
  } else {
    console.log(`El producto "${producto}" no se encuentra en la lista.`);
  }
};

// Función para mostrar la lista completa
export const mostrarLista = () => {
  console.log("Lista de Compras:");
  if (listaDeCompras.length === 0) { // Verifica si la lista está vacía
    console.log("La lista está vacía.");
  } else {
    listaDeCompras.forEach((producto, index) => { 
      console.log(`${index + 1}. ${producto}`); //muestra la lista con numeración
    });
  }
};