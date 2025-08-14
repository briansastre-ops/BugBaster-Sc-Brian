const tupla = [13, 1, 8, 3, 2, 5, 8]; // Definimos el array (tupla en Python)
const lista = [];

for (let elemento of tupla) {
    if (elemento < 5) {
        lista.push(elemento);
    }
}

console.log(lista);
