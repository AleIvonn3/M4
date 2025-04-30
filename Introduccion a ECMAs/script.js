// Array para guardar los destinos
let destinos = [];

// Función para registrar un destino de viaje
const registrarDestino = (destino, fecha, transporte, personas) => {
    const nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        personas: personas,
        costo: calcularCosto(destino, transporte, personas)
    };

    destinos.push(nuevoViaje);
};

// Función para calcular el costo del viaje
const calcularCosto = (destino, transporte, personas) => {
    let costoBase = 0;

    // Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    }else if (destino === "Mexico") {
        costoBase = 350;
    }else if (destino === "España") {
        costoBase = 450;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    } else if (transporte === "Automóvil Rentado") { 
        costoBase += 250;
    } else if (transporte === "Barco") {
        costoBase += 400;
    }

    // Aplicar descuento según el número de personas
    if (personas > 6) {
        costoBase *= 0.8; 
    } else if (personas > 3) {
        costoBase *= 0.9;
    }
    return costoBase * personas; // Multiplicar por el número de personas
};

// Función para mostrar el itinerario de los viajes registrados
const mostrarItinerario = () => {
    for (let i = 0; i < destinos.length; i++) {
        const viaje = destinos[i];
        console.log("Destino: " + viaje.destino);
        console.log("Fecha: " + viaje.fecha);
        console.log("Transporte: " + viaje.transporte);
        console.log("Personas: " + viaje.personas);
        console.log("Costo total: $" + viaje.costo);
        console.log("---------------------------");
    }
};

// Iniciar la aplicación
const iniciarApp = () => {
    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión", 5);
    registrarDestino("Londres", "2024-07-01", "Tren", 1);
    registrarDestino("Mexico", "2024-07-01", "Automóvil Rentado", 3);
    registrarDestino("New York", "2024-07-01", "Barco", 9);
    registrarDestino("España", "2024-08-10", "Avión", 2);

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
};

// Ejecutar la aplicación
iniciarApp();
