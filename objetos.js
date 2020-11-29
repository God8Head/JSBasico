// Objetos we
var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
  detalleDelAuto: function(){
    console.log(`Auto ${this.modelo} ${this.año}`)
  }
};

miAuto.marca;
miAuto.año;

miAuto.detalleDelAuto();

//El this hace referencia al padre directo, en este caso se refiere al objeto mismo "miAuto"



