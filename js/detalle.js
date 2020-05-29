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
       
       
window.onload = function () {
  
    fetch('https://api.deezer.com/chart')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    })
    .catch (function(error){
        console.log ('El error fue ' + error)
    });
  
  }
  