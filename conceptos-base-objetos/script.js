/*
* Ejercicio 1: Sobre mí

const sobreMi = {
    nombre: 'Grasiela',
    apellido: 'Rosa',
    edad: 33
  }
console.log(sobreMi)
console.log(sobreMi.apellido)

*/

/*
* Ejercicio 2: Presentar

let perfil = {
    nombre: "Olivia",
    apellido: "Marsu",
    edad: 21
  }
  
   const presentacion = (perfil) => {
    return `Hola, mi nombre es ${perfil.nombre} ${perfil.apellido} y tengo ${perfil.edad} años.`;
  }

  console.log(presentacion(perfil));
*/

/*
* Ejercicio 3: Canción

let song = {
    title: "Rock and Roll",
    bandName: "Led Zeppelin",
    duration: 166000,
    album: "Led Zeppelin IV"
}
console.log(song);

const cancion = (song) => { 
    const title = song.title;
    const bandName = song.bandName;
    const duration = song.duration/1000;
     
     return {title, bandName, duration}

}
const respuesta = cancion(song);
console.log(respuesta)

const cancion2 = (song) =>{
    delete song.album;
    song.duration = song.duration/1000;

    return song
}
const respuesta2 = cancion2(song);
console.log(respuesta2)

*/

/*
* Ejercicio 4: Base de datos y 5
let ada = {
    id: 1,
    nombre: "Ada Lovelace",
    email: "ada@gmail.com",
    telefono: "1234567890"
  }
  
  let grace = {
    id: 2,
    nombre: "Grace Hopper",
    email: "grace@hotmail.com",
    telefono: "0987654321"
  }
  
  let hedy = {
    id: 3,
    nombre: "Hedy Lamarr",
    email: "hedy@gmail.com",
    telefono: "06789054321"
  }
  
  let radia = {
    id: 4,
    nombre: "Radia Perlman",
    email: "radia@yahoo.com",
    telefono: "1234509876"
  }
  
  let sheryl = {
    id: 5,
    nombre: "Sheryl Sandberg",
    email: "Sheryl@facebook.com",
    telefono: "5432167890"
  }

  console.log(ada.nombre);
  console.log(grace.id);
  console.log(hedy.email);
  console.log(radia.id, radia.nombre);
  console.log(sheryl.telefono);
*/

/*
* Ejercicio 6: Corrección de datos
let datos = {
    id: 1,
    nombre: "Ada",
    apellido: "Lovelace",
    email: "ada.lovelace@gmail.com",
    telefono: "1234567890",
    edad: "29",
    programa: true,
  };

const modificarTelefono = (datos) => {
    datos.telefono = Number(telefono);
    
};
const modificarEdad = (edad) => {
    datos.edad = Number(edad);
}
*/


/*
* Ejercicio 7 y 8: Lenguaje favorito
let datos = {
  id: 1,
  nombre: "Ada",
  apellido: "Lovelace",
  email: "ada.lovelace@gmail.com",
  telefono: "1234567890",
  edad: 29,
  programa: true,
};


const agregarLenguajeFavorito = (datos) => {
  if (datos.programa) {
    datos.lenguajeFavorito = 'JavaScript';
  }
}


const agregarLenguajesFavoritos = (datos) => {
  if (datos.programa) {
    datos.lenguajesFavoritos = ['JavaScript', 'Ruby'];
  }
}
*/

/*
* Ejercicio 9: Disco

let disco = {
  id: 1,
  nombre: 'Wasting Light',
  anioLanzamiento: 2011,
  cantidadDeTemas: 12,
  banda: {
    nombre: 'Foo Fighters',
    anioFormacion: 1994
  }
};

const infoDelDisco = (disco) => {
  return `El disco ${disco.nombre} de la banda ${disco.banda.nombre} se lanzó en el año ${disco.anioLanzamiento}`
};
*/

/*
* Ejercicio 10: Habilidades

let perfil = {
  id: 123456789,
  nombre: "Ada Lovelace",
  url: "https://www.linkedin.com/in/ada-lovelace",
  habilidades: ["HTML", "CSS", "SASS"],
};

const agregarHabilidad = (perfil, habilidad) => {
  perfil.habilidades.push(habilidad)

}
*/

/*
* Ejercicio 11: Playlist

let playlistDeEjemplo = {
  nombre: "Lista de Nirvana",
  privada: true,
  canciones: ["Smells Like Teen Spirit", "In Bloom", "Come As You Are"]
}


const infoDeLaPlaylist = (playlistDeEjemplo) => {
  return `${playlistDeEjemplo.nombre}
Privada: ${playlistDeEjemplo.privada ? "Sí" : "No"}
Canciones: 
${playlistDeEjemplo.canciones[0]}
${playlistDeEjemplo.canciones[1]}
${playlistDeEjemplo.canciones[2]}`

}
*/

/*
* Ejercicio 12: Ganadora


let ganadoras = [
  {
    nombre: "Bebe Zahara Benet",
    temporada: "1",
    foto: "http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg",
  },
  {
    nombre: "Tyra Sanchez",
    temporada: "2",
    foto: "http://www.nokeynoshade.party/images/tyra-sanchez.jpg",
  },
  {
    nombre: "Raja",
    temporada: "3",
    foto: "http://www.nokeynoshade.party/images/raja.jpg",
  },
  {
    nombre: "Sharon Needles",
    temporada: "4",
    foto: "http://www.nokeynoshade.party/images/sharon-needles.jpg",
  },
  {
    nombre: "Jinkx Monsoon",
    temporada: "5",
    foto: "http://www.nokeynoshade.party/images/jinkx-monsoon.jpg",
  },
  {
    nombre: "Bianca Del Rio",
    temporada: "6",
    foto: "http://www.nokeynoshade.party/images/bianca-del-rio.jpg",
  },
];

const informacionGanadoras = () => {
  let infoGanadora = "";
  for(let ganadora of ganadoras){
     infoGanadora += `${ganadora.nombre} ganó la temporada ${ganadora.temporada}\n`
  }
  return infoGanadora
}

console.log(informacionGanadoras());
*/

/*
* Ejercicio 13: Vamos las bandas

let bandas = [
  { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
  { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
  { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
  { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
  { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
];

const estanActivas = () => {
  let statusBandas = '';
  for (let banda of bandas){
    statusBandas +=  banda.activa ? `${banda.nombre} está activa desde el año ${banda.fundacion}\n` : `${banda.nombre} no está activa\n`;
   
  }
  return statusBandas
}

console.log(estanActivas(bandas))
*/



/*
* Ejercicio 14: Banda
*/
let ledZeppelin = {
  nombre: "Led Zeppelin",
  anio: 1968,
  activa: false,
  miniatura:
    "http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75",
  integrantes: ["Jimmy Page", "Robert Plant", "John Paul Jones", "John Bonham"],
  discos: [
    {
      nombre: "Led Zeppelin",
      anio: 1969,
      canciones: ["Good Times, Bad Times", "Communication Breakdown"],
      duracion: 2691,
    },
    {
      nombre: "Led Zeppelin II",
      anio: 1969,
      canciones: ["Whole Lotta Love", "Moby Dick", "Ramble On"],
      duracion: 2502,
    },
    {
      nombre: "Led Zeppelin III",
      anio: 1970,
      canciones: ["Immigrant Song"],
      duracion: 2489,
    },
    {
      nombre: "Led Zeppelin IV",
      anio: 1971,
      canciones: ["Rock and Roll", "Stairway to Heaven", "Four Sticks"],
      duracion: 2559,
    },
  ],
};

const informacionDeLaBanda = (banda) => {
  const { nombre, anio, discos, integrantes } = banda;
  let counterCanciones = 0;
  let counterDuracion = 0;
  for (const {canciones, duracion} of discos){
   counterCanciones += canciones.length;
   counterDuracion += duracion;

  }
  const promedioCanciones = counterDuracion / counterCanciones;

  return `${nombre} se fundó en el año ${anio}. Tiene ${integrantes.length} integrantes: ${integrantes.join(", ")}. Tiene en total ${discos.length} discos. Tiene en total ${counterCanciones} canciones entre todos los discos. En promedio, cada canción dura ${promedioCanciones} segundos.`;
}

console.log(informacionDeLaBanda(ledZeppelin))
