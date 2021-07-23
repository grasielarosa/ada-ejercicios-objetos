// * Ejercicio 1: Una persona nueva y Ejercicio 2: Conociendo una persona
/*
let propiedadNombre = 'Grasiela';
let propiedadEdad = 33;

const persona = {
  nombre: propiedadNombre,
  edad: propiedadEdad
}
console.log(persona)
console.log(persona['nombre'],persona['edad'])

*/


// * Ejercicio 3 y 4: Keys

/*
let producto = {
    id: "ADA-020",
    titulo: "Gubergren sed est amet voluptua",
    precio: 123.75,
    imagen:
      "https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg",
    condicion: "nuevo",
    envioGratis: true,
    ubicacion: "Capital Federal",
  };

console.log(Object.keys(producto))

const obtenerPropiedadesYValores = (producto) => {
    const propiedades = Object.keys(producto);
     let valores = "";
     for (let prop of propiedades) {
       valores += `producto[${prop}] -> ${producto[prop]}\n`
     }
     return valores
   }
console.log(obtenerPropiedadesYValores(producto))
*/


// * Ejercicio 5: Email
/*

let perfilSinEmail = {
    nombreDeCuenta: "ada_lovelace",
    contrasenia: "1234567890!"
  };
  
  let perfilConEmail = {
    nombreDeCuenta: "ellie_arroway",
    contrasenia: "vegaeterna",
    email: "ellie@argos.org"
  };
  const tieneEmail = (perfil) => {
    return perfil.email ? 'El usuario tiene la propiedad email.' : 'El usuario no tiene la propiedad email.'
   }
   console.log(tieneEmail(perfilConEmail));
   console.log(tieneEmail(perfilSinEmail));

   */

   // * Ejercicio 6: Propiedad
/*

let perfil = {
    nombreDeCuenta: "ada_lovelace",
    contrasenia: "1234567890!",
  };
  

  const tienePropiedad = (perfil, prop) => {
    return (perfil[prop]) ? true : false; //* las propriedades en objetos dinámicos las debemos buscar con corchetes. No hace falta el operador ternario, solamente lo usé para retornar true or false en lugar de undefined o el valor.
  } 

  console.log(tienePropiedad(perfil, 'email'));
  console.log(tienePropiedad(perfil, 'contrasenia'));

  */