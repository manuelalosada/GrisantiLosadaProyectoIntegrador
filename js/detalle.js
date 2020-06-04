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
       
      
window.onload = function (){

  var queryString = location.search;
  var queryStringObj = new URLSearchParams (queryString)
  

  if (queryStringObj){

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track')

      .then(function(response) {
          return response.json();
      })

      .then(function(resultado) {
          console.log(resultado);

          // en esta parte hay que reemplazar con todos los
          // datos que toco el usuario en otra pagina


          // document.querySelector('.cancion2').innerHTML= resultado.title


      })
      .catch (function(error){
            console.log ('El error fue ' + error)
      }); 

    }else{
      alert('No se recibio ningun dato')
    }
}