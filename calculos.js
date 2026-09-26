
// FUNCION PARA CALCULAR DESCUENTOS

function calcularDescuento(precio, porcentaje) {

    const ahorro = precio * porcentaje / 100;

    const total = precio + ahorro;

    return {
        ahorro: ahorro,
        total: total
    };
}

// Permitir que Node.js utilice nuestra funcion.
if (typeof module !== "undefined") {
    module.exports = { calcularDescuento };
}
