var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "Tv", costo: 30000 },
  { nombre: "Libro", costo: 30 },
  { nombre: "Cell", costo: 5000 },
  { nombre: "Laptop", costo: 7000 },
  { nombre: "Teclado", costo: 3300 },
  { nombre: "Audifonos", costo: 3330 }
];

var articulosFiltrados = articulos.filter(function(articulo){
  return articulo.costo <= 500
});

var nombreArticulos = articulos.map(function(articulo){
  return articulo.nombre
});

var encuentraArticulo = articulos.find(function(articulo){
  return articulo.nombre === "Laptop"
})

articulos.forEach(function(articulo){
  console.log(articulo.nombre);
});

var artículosBaratos = articulos.some(function(articulo){
  return articulo.costo <= 700;
})
//True