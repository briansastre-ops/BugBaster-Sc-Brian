console.log("Ejercicio 1: Números divisibles entre 3 de 0 a 10");
for (let num = 0; num <= 10; num++) {
    if (num % 3 === 0) {
        process.stdout.write(num + ",");
    }
}
console.log("\n"); // Salto de línea
