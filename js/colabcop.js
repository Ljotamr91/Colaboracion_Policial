// creamos el array que contiene las letras del DNI en su orden correspondiente
var letersDni = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];


// creamos la variable que almacenara el numero de DNI que introduzca el usuario.
var dniNumber = prompt("introduzca losdigitos de tu DNI sin la letra");
//var dniNumber = 210417746;

// esto hara que solo sea numerico el caracter que introduzca
var dniNumber = parseInt(dniNumber);

// divide el numero introducido por el usuario entre 23
var operationNumber = dniNumber % 23;

console.log(operationNumber);
console.log(letersDni[operationNumber]);

// creamos la funcion comprobar si el dni es correcto con el parametro del dni que introduce el usuario
// creamos la variable correcto con valor falso 
// creamos la variable contenidoDni y transformamos el dni a texto y le decimos que  mire el largo de la cadena de texto y si es igual a 8 espacios variable correcto pasara a verdadero
// creamos un condicional que le decimos si el contenidodni es = a 8 espacios cambia el valor de correcto a true
// de lo contrario  muestra un mensaje. 
function comprobe(dniUser){
    var correcto = false;
    var contenidoDni = dniUser.toString().length;
    if(contenidoDni == 8){
        correcto = true;
    } else {
        console.log("no es un dni valido");
    }
    return correcto;
};

// crear una funcion que con la ayuda de la funcion anterior haga el calculo
function calcular(dniUser){

};











// var residue = Math.trunc(residue);
// var resudue = Math.round();
//document.write(operationNumber);
// document.write(residue);
