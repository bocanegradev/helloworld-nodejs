const Math = {};

function add(x1, x2) {
    return x1 + x2;
}

function substract(x1, x2) {
    return x1 - x2;
}

function multiply(x1, x2) {
    return x1 * x2;
}

function divide(x1, x2) {
    if (x2 == 0) {
        console.log('No es posible dividir por cero');
    }
    else {
        return x1 / x2;
    }
}

// !Exportando el objeto Math
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

// function hello(name) {
//     console.log('This is a hello function, ' + name);
// }
// module.exports = hello;
module.exports = Math;