const numero = parseInt(prompt("Digite un número: "));
const lista = [];
for (let i = 1; i <= 10; i++) {
    lista.push(i * numero);
}
console.log(`Tabla de multiplicar del ${numero}: [${lista.join(', ')}]`);