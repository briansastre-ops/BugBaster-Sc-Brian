
//ciclo while
let contador = 0;
while (contador < 3) {
    console.log(contador);
    contador++;
}
 console.log("Fin del ciclo while");

//Do while
let conteo = 0;
do {
    console.log(conteo);
    conteo++;
} while (conteo < 3);
console.log("Fin del ciclo do while");

// For

for(let contando=0; contando < 3 ; contando ++){
    console.log(contando); 0, 1, 2
}
console.log("fin del ciclo for")

// Palabras reservadas 

for(let contando = 0; contando <=10; contando++){
    if(contando % 2 ==0){
        console.log(contando);
        break
    }
}
console.log("termina el ciclo al encontrar el primer numero par")

//Palabra continue 

for(let contando = 0; contando <=10; contando++){
    if(contando % 2 ==0){
        console.log(contando);
        continue
    }
    console.log(contando); 0, 2, 4, 6, 8, 10
}
console.log("termina el ciclo al encontrar el primer numero par")


inicio:
for(let contando = 0; contando <=10; contando++){
    if(contando % 2 ==0){
        console.log(contando);
        break inicio;
    }
}
console.log("termina el ciclo al encontrar el primer numero par")