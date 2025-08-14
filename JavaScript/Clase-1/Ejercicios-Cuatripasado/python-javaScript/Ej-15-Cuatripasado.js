// Diccionarios en JavaScript (Objetos)

const diccionario = {
    "IDE": "Integrated Development Environment",
    "POO": "Programacion Orientada a Objetos",
    "SABD": "Sistema de Administracion de Base de Datos"
};
console.log(diccionario["IDE"]);
console.log(diccionario.POO || "No encontrado"); // Similar a get()
diccionario["IDE"] = "Entorno de Desarrollo Integrado";

// Recorrer elementos
for (const termino in diccionario) {
    console.log(termino);
}

for (const [termino, valor] of Object.entries(diccionario)) {
    console.log(termino, valor);
}

// Agregar elemento
diccionario["PK"] = "Primary Key";

// Eliminar elemento
delete diccionario["SABD"];

// Vaciar diccionario
for (const key in diccionario) {
    delete diccionario[key];
}