let a = prompt("Digite el valor de '10' para la variable 'a': ");
let b = prompt("Digite el valor de '5' para la variable 'b': ");
[a, b] = [b, a]; // Destructuring assignment
console.log(`El nuevo valor de la variable 'a' es: ${a}`);
console.log(`El nuevo valor de la variable 'b' es: ${b}`);