const a = parseFloat(prompt("Digite el valor de la variable 'a': "));
const b = parseFloat(prompt("Digite el valor de la variable 'b': "));
const c = parseFloat(prompt("Digite el valor de la variable 'c': "));
const resultado = (Math.pow(a, 3) * (Math.pow(b, 2) - 2 * a * c)) / (2 * b);
console.log(`El resultado es: ${resultado}`);