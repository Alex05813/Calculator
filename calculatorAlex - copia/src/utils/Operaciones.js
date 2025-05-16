//Aqui yo Alexander pondra las valiables para las ecaciones
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => {
    if (b === 0) {
        throw new Error('No podras dividir por cero, intenta con otro valor');
    }
    return a / b;
};

module.exports = {
    suma,
    resta,
    multiplicacion,
    division
};