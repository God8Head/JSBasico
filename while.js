//Bucles 2.0

var estudiantes = ["Kevin", "Génesis", "Nicole", "Naranjo"];

function saludarEstudiantes (estudiante) {
  console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0) {
  var estudiantes = estudiantes.shift();
  saludarEstudiantes(estudiante);
}