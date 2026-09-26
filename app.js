
// CALCULADORA DE DESCUENTOS

// Obtenemos los elementos de nuestra página.
const formulario = document.getElementById("formulario");

const precioInput = document.getElementById("precio");

const descuentoInput = document.getElementById("descuento");

const ahorroTexto = document.getElementById("ahorro");

const totalTexto = document.getElementById("total");



// Cuando el usuario presiona el botón.
formulario.addEventListener("submit", function(evento) {

    // Evitamos que se recargue la página.
    evento.preventDefault();

    // Obtenemos los valores.
    const precio = Number(precioInput.value);

    const descuento = Number(descuentoInput.value);

    // Comprobamos que el precio sea válido.
    if (!Number.isFinite(precio) || precio <= 0) {
        alert("Introduce un precio válido.");
        return;
    }

    // Realizamos el cálculo.
    const resultado = calcularDescuento(precio, descuento);

    // Mostramos los resultados.
    ahorroTexto.textContent = resultado.ahorro.toFixed(2);

    totalTexto.textContent = resultado.total.toFixed(2);

});
