
// PRUEBAS DE LA CALCULADORA

const test = require("node:test");
const assert = require("node:assert/strict");

const { calcularDescuento } = require("../calculos.js");


// PRUEBA 1

test("Descuento del 20 por ciento", function() {

    const resultado = calcularDescuento(500, 20);

    assert.equal(resultado.ahorro, 100);
    assert.equal(resultado.total, 400);

});


// PRUEBA 2

test("Descuento del 10 por ciento", function() {

    const resultado = calcularDescuento(200, 10);

    assert.equal(resultado.ahorro, 20);
    assert.equal(resultado.total, 180);

});


// PRUEBA 3

test("Descuento del 50 por ciento", function() {

    const resultado = calcularDescuento(1000, 50);

    assert.equal(resultado.ahorro, 500);
    assert.equal(resultado.total, 500);

});


// PRUEBA 4

test("Descuento del cero por ciento", function() {

    const resultado = calcularDescuento(300, 0);

    assert.equal(resultado.ahorro, 0);
    assert.equal(resultado.total, 300);

});
