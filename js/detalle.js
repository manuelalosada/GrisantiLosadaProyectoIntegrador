// DETALLE
 

//     Detalle de Artista
//         HARD:  top 5 de canciones del artista (hipervínculo 
//             a detalle del track)

//     Detalle Genero
//         Nombre del género 
//        10 artistas que pertenezcan a ese género 
//        (hipervínculo al detalle del artista)
//      
// Footer
//       
//        Redes sociales
       
// Funcionalidad:
// 
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
  
  console.log(queryStringObj)

var id = queryStringObj.get("id")
var tipo = queryStringObj.get("tipo")

var htmlArtista = ""
var htmlAlbum = ""
var htmlTrack = ""
var htmlGenero = ""

  if (tipo == 'track'){
  

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/' + id )

      .then(function(response) {
          return response.json();
      })

      .then(function(resultado) {
          console.log(resultado);

          htmlTrack += '<div class="track">'

            htmlTrack += '<div class="fotoTrack">'
            htmlTrack += '</div>'

            htmlTrack += '<div class="generalTrack">'

              htmlTrack += '<div class="nombreTrack">'
                htmlTrack+= '<h1>'
                htmlTrack += '</h1>'
              htmlTrack += '</div>'

              htmlTrack += '<div class="subnombreTrack">'
                htmlTrack += '<h3>'
                htmlTrack += '</h3>'
              htmlTrack += '</div>'

              htmlTrack += '<div class="nombreAlbumTrack">'
                htmlTrack += '<h3>Album:'
                htmlTrack += '</h3>'
                htmlTrack += '</div>'
              
                htmlTrack += '<div class="duracionTrack">'
                htmlTrack += '<h3>Duration: ' 
                htmlTrack += '</h3>'
                htmlTrack += '</div>'

              htmlTrack += '<div class="estrenoTrack">'
                htmlTrack += '<h4>Release Date: '
                htmlTrack += '</h4>'
              htmlTrack += '</div>'

            htmlTrack += '</div>'

            htmlTrack += '<div class="generoTrack">'
              htmlTrack += '<a>'
              htmlTrack += '</a>'
            htmlTrack += '</div>'

            htmlTrack += ' <form action = "playlist.html" method = "GET">' 
            htmlTrack += '<button type = "submit" id="btnAddToPlaylist"> Add to Playlist </button>'
            htmlTrack += '</form>'
        
          htmlTrack += "</div>"

          var columnaDetalle = document.querySelector('.columna')
          columnaDetalle.innerHTML = htmlTrack

        


          var tituloTrack = document.querySelector('.nombreTrack h1')
          tituloTrack.innerHTML= resultado.title

          var subnombreTrack = document.querySelector('.subnombreTrack h3')
          subnombreTrack.innerHTML=   '<a href="detalle.html?id=' + resultado.artist.id + '&tipo=artist">' + resultado.artist.name + '</a>'

          var fechaTrack = document.querySelector('.estrenoTrack h4')
          fechaTrack.innerHTML += resultado.release_date
          
          var nombreAlbumTrack = document.querySelector('.nombreAlbumTrack h3')
          nombreAlbumTrack.innerHTML += '<a href="detalle.html?id=' + resultado.album.id +'&tipo=album">' + resultado.album.title +'</a>'
          
          var fotoTrack = document.querySelector('.fotoTrack')
          fotoTrack.innerHTML = '<img src="' + resultado.album.cover_medium + '" alt="tango4" class="tango4"></img>'
          
          
          var duracionTrack = document.querySelector('.duracionTrack h3')
          duracionTrack.innerHTML += resultado.duration;

          // document.querySelector('.generoTrack a').innerHTML = resultado.NO ENCUENTRO EL GENERO
          
          
         

          var boton = decument.querySelector('#btnAddToPlaylist')
          boton.addEventListener('click', function(){

          var recuperado = localStorage.getItem('playlist');
      
            if(recuperado == null){ 
              playlist = [];
          } else {
              playlist = JSON.parse(recuperado); 
          }
          
          if(playlist.includes(id)){
            indiceDelArray = playlist.indexOf(id)
            var removed = playlist.splice(indiceDelArray,1);
      
          } else {
            playlist.push(id)
          }
          recuperado = localStorage.setItem('playlist');

            
          })

          if(playlist.includes(id)){
            document.querySelector('#btnAddToPlaylist').innerHTML = "Delete from Playlist";
          } else {
            document.querySelector('#btnAddToPlaylist').innerHTML = 'Add to Playlist';          
          }

      })


    }else if (tipo == "album"){

      fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/'+ id)

      .then(function(response) {
        return response.json();
    })

    .then(function(data) {
        console.log(data);

       // Este es el codigo que se va a ver en la pagina si toca un album
        htmlAlbum += '<div class="album">'

          htmlAlbum += '<div class="fotoAlbum">'
          htmlAlbum += '</div>'

          htmlAlbum += '<div class="generalAlbum">'

            htmlAlbum += '<div class="nombreAlbum">'
              htmlAlbum += '<h1>'
              htmlAlbum += '</h1>'
            htmlAlbum += '</div>'

            htmlAlbum += '<div class="subnombreAlbum">'
              htmlAlbum += '<h3>'
              htmlAlbum += '</h3>'
            htmlAlbum += '</div>'

            htmlAlbum += '<div class="estrenoAlbum">'
              htmlAlbum += '<h4>Release Date: '
              htmlAlbum += '</h4>'
            htmlAlbum += '</div>'

          htmlAlbum += '</div>'

          htmlAlbum += '<div class="generoAlbum">'
            htmlAlbum += '<a>'
            htmlAlbum += '</a>'
          htmlAlbum += '</div>'
        
        htmlAlbum += "</div>"

        document.querySelector('.columna').innerHTML = htmlAlbum

      // Aca se agrega al codigo html los datos de las canciones 

        document.querySelector('.fotoAlbum').innerHTML = ' <img src="' + data.cover_medium + '" alt="help-beatles" class="help">'
        document.querySelector('.nombreAlbum h1').innerHTML = data.title
        document.querySelector('.subnombreAlbum h3').innerHTML = '<a href="detalle.html?id=' + data.artist.id + '&tipo=artist">' + data.artist.name
        document.querySelector('.estrenoAlbum h4').innerHTML = data.release_date

        var arrayAlbumGenero = data.genres
        
        // aca se agrega el codigo del genero con un for haciendo
        // ciclos en el array

        for (let i = 0; i < arrayAlbumGenero.length; i++) {
          const element = arrayAlbumGenero.length[i];

          document.querySelector('.generoAlbum a').innerHTML = element.name
          
        }
        
    
      
    })
  } else if (tipo == 'artist'){
      fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/' + id)

      .then(function(response){
        return response.json();
      })

      .then(function(result){
        console.log(result);

      // Cambiamos el html para que solo aparesca el div de artista.

        htmlArtista += ' <div class="artista">'

          htmlArtista += '<div class="generalArtista">'

            htmlArtista += '<div class="fotoArtista">'
            htmlArtista += '</div>'

            htmlArtista += '<div class="nombreApellido">'
              htmlArtista += '<a>'
              htmlArtista += '</a>'
            htmlArtista += '</div>'

            htmlArtista += '<div class="seguidoresArtista">'
              htmlArtista += '<a>'
              htmlArtista += '</a>'
            htmlArtista += '</div>'
        
          htmlArtista += '</div>'

          htmlArtista += '<div class="canciones">'
              htmlArtista += '<div class="cancion2"> <a>Bruises - Steve Void Remix</a> </div>'
              htmlArtista +='<div class="cancion2"> <a>Someone You Loved</a> </div>'
              htmlArtista +='<div class="cancion2"> <a>Before You Go</a> </div>'
              htmlArtista +='<div class="cancion2"> <a>Hold Me While You Wait</a> </div>'
              htmlArtista +='<div class="cancion2"> <a>Grace</a> </div> '
              htmlArtista +='<div class="cancion2"> <a>Bruises - Steve Void Remix</a> </div>'
              htmlArtista +='<div class="cancion2"> <a>Someone You Loved</a> </div>'
              htmlArtista +='<div class="cancion2"> <a>Before You Go</a> </div>'
          htmlArtista += '</div>'

          document.querySelector('.columna').innerHTML = htmlArtista

        // Agregamos al html los datos del string.

          document.querySelector(".fotoArtista").innerHTML = '<img src="' + result.picture_medium + '" alt="help-beatles" class="lewis">' 
          document.querySelector(".nombreApellido").innerHTML = result.name
          document.querySelector(".seguidoresArtista a").innerHTML = result.nb_fan + ' followers'
          
          // falta agragar las canciones que no las encontre en este array (supongo que habria que hacer un for para ponerlas)
          // que las canciones vayan al detalle del track!!!

          // idArtista = result.id
          // fetch ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artists/' + idArtista + "/top")
  
          // .then(function(response){
          //     return response.json();
          //   })
      
          //   .then(function(datos){
          //     console.log(datos);
      
          //   })

      })
      //hacer lo mismo pero con generos
  } else if (tipo == 'genero'){
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/' + id)

      .then(function(response){
        return response.json();
      })

      .then(function(datos){
        console.log(datos);

        htmlGenero += '<div class="generalGenero">'
            htmlGenero += '<div class="fotoGenero">'
            htmlGenero += '</div>'
            htmlGenero += '<div class="nombreGenero">'
              htmlGenero += '<a> </a>'
            htmlGenero += '</div>'
        htmlGenero += '</div>'

        htmlGenero += ' <div class="canciones">'
          htmlGenero += '<div class="cancion2"> <a>Nombre de la cancion</a> </div>'
          htmlGenero +='<div class="cancion2"> <a>Nombre de la cancion</a> </div>'
          htmlGenero +='<div class="cancion2"> <a>Nombre de la cancion</a> </div>'
          htmlGenero +='<div class="cancion2"> <a>Nombre de la cancion</a> </div>'
          htmlGenero +='<div class="cancion2"> <a>Nombre de la cancion</a> </div>'
        htmlGenero += '</div>'
     
        document.querySelector('.columna').innerHTML = htmlGenero

        document.querySelector('.nombreGenero a').innerHTML = datos.name
        document.querySelector('.fotoGenero').innerHTML = '<img src="' + datos.picture_medium + '"alt="' + datos.name + '">'

        idGenero = datos.id

      // fetch ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/' + idGenero + "/top")

      // .then(function(response){
      //   return response.json();
      // })

      // .then(function(datos){
      //   console.log(datos);

      // })
  })
  }
}














