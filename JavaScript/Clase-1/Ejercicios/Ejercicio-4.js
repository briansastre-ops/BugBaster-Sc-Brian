console.log("Rango de 0 a 10 con números divisibles entre 3");
const divisibles = [];
for (let num = 0; num <= 10; num++) {
    if (num % 3 === 0) {
        divisibles.push(num);
    }
}
console.log(divisibles.join(","));
console.log();
