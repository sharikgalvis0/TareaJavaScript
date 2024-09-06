// 10 variables con Let
let nombre = "Sharik";
let apellido = "Galvis";
let edad= 18;
let genero = "Femeninow"
let estadoCivil = "Soltera";
let eps = "SURA";
let ciudad = "Medellín";
let direccion = "Cra 43c # 41 A 52"
let carrera = "Desarrollo de Software";
let estadoMatricula = "Matriculado";

// 5 variables con const

const ID = 1061278380;
const diaNacimiento = 17;
const mesNacimiento = "Septiembre";
const anioNacimiento = 2005;
const tipoSangre = "O+"

//OPERACIONES

//Concatenación de dos maneras

// 1
let saludo = "Hola ";
let mensajeCompleto = saludo + nombre + apellido + "¡BIENVENID@!";
let nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto)
console.log(mensajeCompleto)

// 2
let mcompleto =`Hola ${nombre} ${apellido} BIENVENID@`;
let informacionPersonal = `Nombre: ${nombreCompleto}, Edad: ${edad}, Ciudad: ${ciudad}, Carrera: ${carrera}`;

console.log(mcompleto)
console.log(informacionPersonal)

// Validación (Operación lógica)
// 1

let validacionEdad = edad >= 18;
console.log("Es mayor de edad:", validacionEdad);

//OPERADOR TERNARIO

let estadoCivill = (estadoCivil === "Soltera") ? "Estás soltera" : "No estás soltera";
let estadoSalud = (eps === "SURA") ? "Asegurado con SURA" : "No asegurado con SURA";
console.log(estadoSalud)
console.log(estadoCivill)

