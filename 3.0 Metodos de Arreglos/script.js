const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

// Filtra productos con precio menor a $100
const productosBaratos = productos.filter(producto => producto.precio < 100);
console.log("Productos con precio menor a $100:", productosBaratos);

// Ordena los productos filtrados alfabéticamente por su nombre
const productosOrdenados = productosBaratos.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("Productos ordenados alfabéticamente:", productosOrdenados);

// Genera un nuevo arreglo con solo los nombres de los productos
const nombresProductos = productosOrdenados.map(producto => producto.nombre);
console.log("Nombres de los productos:", nombresProductos);

// Calcular el costo total de los productos filtrados usando reduce()
const costoTotal = productosBaratos.reduce((total, producto) => total + producto.precio, 0);
console.log("Costo total de los productos filtrados:", costoTotal);

// Verificar si todos los productos filtrados pertenecen a la categoría "Ropa" usando every()
const todosSonRopa = productosBaratos.every(producto => producto.categoria === "Ropa");
console.log("¿Todos los productos filtrados son de la categoría 'Ropa'?", todosSonRopa);

// Verificar si algún producto filtrado pertenece a la categoría "Educación" usando some()
const algunoEsEducacion = productosBaratos.some(producto => producto.categoria === "Educación");
console.log("¿Algún producto filtrado pertenece a la categoría 'Educación'?", algunoEsEducacion);