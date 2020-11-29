//arrays

var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

console.log(frutas);
console.log(frutas.length);

var masFrutas = frutas.push("Naranja"); //Ponerlo al final
var ultimo = frutas.pop("Naranja"); //Quitar al final
var nuevaLongitud = frutas.unshift("Naranja"); //Ponerlo al inicio
var borrarFruta = frutas.shift("Naranja"); //Quitar al inicio

var indexof = frutas.indexOf("Plátano");