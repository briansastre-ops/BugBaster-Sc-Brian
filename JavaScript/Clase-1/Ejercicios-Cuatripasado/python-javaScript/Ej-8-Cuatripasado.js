//Esto seria el representativo de una tupla en Python

const cocina = ['cuchara', 'cuchillo', 'tenedor']; // Array inmutable con Object.freeze()
Object.freeze(cocina);
console.log(cocina.length);
console.log(cocina[0]);
console.log(cocina[cocina.length - 1]);
console.log(cocina.slice(0, 2));