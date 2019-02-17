// Variables en TS
//tipo de variable para string
var nombre = "Jhassir";
//tipo de variable para numeros
var numero = 10000;
//tipo de variable para booleanos
var desicion = true;
//tipo de variable para fechas
var hoy = new Date();
//Tipo de variable libre
var cualquierVariable;
//Tipo de variable Objeto
var objUno = {
    nombre: "Jhassir Andree",
    apellido: "Candia Valdez",
    edad: 25,
    birthDay: "12-12-2009"
};
function getNombre() {
    return "Jhass";
}
//Template literal
var imprimir = "Hola, " + objUno.nombre + " " + objUno.apellido + " " + " (" + objUno.edad + ") ";
var imprimirDos = "Hola, " + objUno.nombre + " \n" + objUno.apellido + "\n(" + objUno.edad + ")";
var imprimirFuncion = " " + getNombre() + " ";
/* Parametros */
function activar(quien, //parametro obligatorio
momento, //parametro opcional
objeto //parametro por defecto
) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activo la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activo la " + objeto;
    }
    //console.log(mensaje);
}
activar("Gordon", "tarde");
/* Funciones de Flecha */
var miFuncion = function (a) {
    return a;
};
//parametro => return;
var miFuncionF = function (a) { return a; };
//console.log(miFuncion("Hola :v"));
//console.log(miFuncionF("Flecha :v"));
var miFuncion2F = function (a, b) { return a + b; };
//console.log(miFuncion2F(5,2));
var miFuncion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
//console.log(miFuncion3F("que pedo we..."));
var Heroe = {
    nombreHeroe: "Hulk",
    smash: function () {
        setTimeout(function () {
            //console.log(this.nombreHeroe + " Smash");
        }, 1500);
    }
};
Heroe.smash();
/** Destructuracion de Obj y Arrays**/
var avenger = {
    nombreAvenger: "Steve",
    clave: "Capitan America",
    poder: "Fuerza"
};
//Destructuracion de objetos
var nombreAvenger = avenger.nombreAvenger, clave = avenger.clave, poder = avenger.poder;
//Arrays
var avengers = ["Thor", "Capitan America", "Iron Man"];
//la destructuracion de arrays es secuencial
var thor = avengers[0], capi = avengers[1], tony = avengers[2];
