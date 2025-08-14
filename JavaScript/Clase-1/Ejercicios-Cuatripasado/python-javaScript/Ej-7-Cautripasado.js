// Cantidad de elementos
console.log(nombres.length);
// Agregar un elemento 
nombres.push('Valentin');
// Insertar elemento en un índice 
nombres.splice(1, 0, 'Lazaro');
// Eliminar un elemento por valor
const index = nombres.indexOf('Valentin');
if (index > -1) nombres.splice(index, 1);
// Eliminar último elemento
nombres.pop();
// Eliminar un índice específico 
nombres.splice(2, 1);
// Limpiar todos los elementos
nombres.length = 0; // o nombres.splice(0);