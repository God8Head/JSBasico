//Crear muchos objetos basicamente

function auto(marca, modelo, año) {
	this.marca = marca;
	this.modelo = modelo;
	this.año = año;

}

var autoNuevo = new auto("Tesla", "Model 3", 2020);
var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Toyota", "Corolla", 2011);

autoNuevo3.marca;