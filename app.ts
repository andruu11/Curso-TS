// Variables en TS
//tipo de variable para string
let nombre:string = "Jhassir";
//tipo de variable para numeros
let numero:number = 10000;
//tipo de variable para booleanos
let desicion:boolean = true;
//tipo de variable para fechas
let hoy:Date = new Date();
//Tipo de variable libre
let cualquierVariable: any;
//Tipo de variable Objeto
let objUno = {
    nombre: "Jhassir Andree",
    apellido: "Candia Valdez",
    edad: 25,
    birthDay: "12-12-2009"
}

function getNombre(){
    return "Jhass";
}

//Template literal
let imprimir = "Hola, " + objUno.nombre + " " + objUno.apellido + " " + " ("+ objUno.edad +") ";
let imprimirDos = `Hola, ${ objUno.nombre } 
${ objUno.apellido }
(${ objUno.edad })`;
let imprimirFuncion = ` ${ getNombre() } `;

/* Parametros */
function activar(quien:string, //parametro obligatorio
                momento?:string, //parametro opcional
                objeto:string = "batiseñal" //parametro por defecto
                
                ){
    let mensaje: string;
    if ( momento ) {
        mensaje = `${quien} activo la ${objeto} en la ${momento}`;
        
    }else{
        mensaje = `${quien} activo la ${objeto}`;
    }
    //console.log(mensaje);
    
}
activar("Gordon", "tarde");

/* Funciones de Flecha */

let miFuncion = function( a:any ){
    return a;
}
//parametro => return;
let miFuncionF = (a: any) => a;
//console.log(miFuncion("Hola :v"));
//console.log(miFuncionF("Flecha :v"));

let miFuncion2F = (a:number, b:number) => a + b;
//console.log(miFuncion2F(5,2));

let miFuncion3F = ( nombre:string ) =>{
    nombre = nombre.toUpperCase();
    return nombre;
}
//console.log(miFuncion3F("que pedo we..."));
let Heroe = {
    nombreHeroe: "Hulk",
    smash(){
        setTimeout(() => {
            //console.log(this.nombreHeroe + " Smash");
        },1500)

    }

}

Heroe.smash();
/** Destructuracion de Obj y Arrays**/
let avenger = {
    nombreAvenger: "Steve",
    clave: "Capitan America",
    poder: "Fuerza"
}
//Destructuracion de objetos
let { nombreAvenger, clave, poder } = avenger;
//Arrays
let avengers:string[] = ["Thor", "Capitan America", "Iron Man"];
//la destructuracion de arrays es secuencial
let [ thor, capi, tony ] = avengers;
/** Promesas **/
let prom1 = new Promise( function( resolve, reject ){
    setTimeout(()=> {})
})