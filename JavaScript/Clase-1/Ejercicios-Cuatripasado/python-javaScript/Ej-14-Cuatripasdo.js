// repaso de listas de python en JavaScript

const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];
let lista3 = [...lista1, ...lista2]; // Spread operator
lista3.push(...[7, 8, 9]);
console.log(lista3.indexOf(5));
console.log(lista3.filter(x => x === 1).length); // Contar ocurrencias
lista3.reverse();
lista3 = [...lista3, ...lista3]; // Duplicar array
lista3.sort((a, b) => a - b); // Ordenar ascendente
lista3.sort((a, b) => b - a); // Ordenar descendente