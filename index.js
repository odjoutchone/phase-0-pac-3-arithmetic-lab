function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        // can't divide by zero
        throw new error("can't divide by zero");
    }
    return a /b;
}
function increment(a) {
    return a + 1;
}
function decrement(a) {
    return a - 1;
}

function makeInt(n) {
    return n
}

function makeInt(n) {
    return parseInt(n, 10)
}
function preserveDecimal(n) {
    return parseFloat(n)
}
