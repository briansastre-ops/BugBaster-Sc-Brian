const seleccionArgentina = {
    10: { 'Nombre': 'Lionel Messi', 'Edad': 35, 'Altura': 1.70 },
    11: { 'Nombre': 'Angel Di Maria', 'Edad': 34, 'Altura': 1.80 }
};

console.log(seleccionArgentina[11]);
console.log(Object.values(seleccionArgentina));

for (const llave in seleccionArgentina) {
    console.log(llave);
}