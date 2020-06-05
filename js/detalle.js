// DETALLE
 
// Header   
//     Se requiere logo del sitio y barra de navegación
// Section  
//     Detalle de Artista
//         Imagen del artista
//         Nombre
//         Fans (numero) 
//         HARD:  top 5 de canciones del artista (hipervínculo 
//             a detalle del track)

//     Detalle de Álbum
//         Imagen de album 
//         Nombre del Álbum
//         Nombre del artista(hipervínculo al detalle del artista)
//         Fecha de salida

//     Detalle Track
//         Nombre del track
//         Imagen
//         Nombre del artista (hipervínculo al detalle del artista)
//         Duración 
//         Nombre del álbum(hipervínculo al detalle del álbum)
//         Botón agregar a la playlist

//     Detalle Genero
//         Nombre del género 
//        10 artistas que pertenezcan a ese género 
//        (hipervínculo al detalle del artista)
//        Footer
//        Nombres de los integrantes
//        Logo de deezer
//        Redes sociales
       
// Funcionalidad:
// El cliente pide que la información que se vea en 
// esta pagina se cargue dinamicamente desde la api 
// de Deezer. 
// Para lograr esto la página de detalle recibirá 
// un parámetro via querystring en la URL indicando 
// qué número de artist/album/track/genre) para identificar
//  cual es el artista a buscar en la api de deezer.
// Ej: detailTrack.htm?id=3
       
// Esto abrirá la página de detalle de track con el track 
// número 3 de Deezer, mostrando su información.

// Feature: El cliente requiere también desea que si 
// el detalle seleccionado es de un track, este pueda 
// ser almacenado en la sesión del usuario para escucharlo 
// en la página de Playlist.
       

// DETALLE 
// Artista :  https://developers.deezer.com/api/artist 
// Endpoint : https://api.deezer.com/artist/27

// Álbum : https://developers.deezer.com/api/album 
// Endpoint : https://api.deezer.com/album/302127

// Track  : https://developers.deezer.com/api/track 
// Endpoint : https://api.deezer.com/track/3135556


      
window.onload = function (){

  var queryString = location.search;
  var queryStringObj = new URLSearchParams (queryString)
  
  console.log(queryStringObj)

var id = queryStringObj.get("id")
var tipo = queryStringObj.get("tipo")

  if (tipo == 'track'){
  

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/' + id )

      .then(function(response) {
          return response.json();
      })

      .then(function(resultado) {
          console.log(resultado);

          // document.querySelector('.nombreApellido').innerHTML= resultado.name
          // document.querySelector('.seguidoresArtista').innerHTML= resultado.
          // document.querySelector('').innerHTML = resultado.
          // document.querySelector('').innerHTML = resultado.
          // document.querySelector('').innerHTML = resultado.
          // document.querySelector('').innerHTML = resultado.
          // document.querySelector('').innerHTML = resultado.

      })

      .catch (function(error){
            console.log ('El error fue ' + error)
      }); 

    }else if (tipo == "album"){

      fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/'+ id)

      .then(function(response) {
        return response.json();
    })

    .then(function(data) {
        console.log(data);

        // document.querySelector('').innerHTML = data.
        // document.querySelector('').innerHTML = data.
        // document.querySelector('').innerHTML = data.
        // document.querySelector('').innerHTML = data.
        // document.querySelector('').innerHTML = data.
        // document.querySelector('').innerHTML = data.
        // document.querySelector('').innerHTML = data.
      
    }
}