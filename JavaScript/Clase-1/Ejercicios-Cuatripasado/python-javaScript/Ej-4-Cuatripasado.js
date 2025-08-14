const tupla = [13, 1, 8, 3, 2, 5, 8];  //<-es un array
const lista = [];
for (const elemento of tupla) {
    if (elemento < 5) {
        lista.push(elemento);
    }
}
console.log(lista);