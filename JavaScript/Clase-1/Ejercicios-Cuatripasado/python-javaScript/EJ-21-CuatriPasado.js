console.log(".:Juego Adivina el Número:.");
const aleatorio = Math.floor(Math.random() * 101);
let contador = 0;
let numero;

while (true) {
    numero = parseInt(prompt("Digite un número: "));
    contador++;
    
    if (numero > aleatorio) {
        alert("NO es el número, digite un número MENOR.");
    } else if (numero < aleatorio) {
        alert("NO es el número, digite un número MAYOR.");
    } else {
        alert(`¡FELICIDADES! Acabas de adivinar el número: ${aleatorio}`);
        break;
    }
}
console.log(`Número de intentos: ${contador}`);