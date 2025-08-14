const r = parseFloat(prompt("Digite el valor del radio de un círculo 'r': "));
const area = Math.PI * Math.pow(r, 2);
const longitud = 2 * Math.PI * r;
console.log(`El área del círculo es: ${area.toFixed(2)}`);
console.log(`y la longitud de la circunferencia es: ${longitud.toFixed(2)}`);