// DETALLE
 

//     Detalle de Artista
//         HARD:  top 5 de canciones del artista 

//     Detalle Genero
//         Nombre del género 
//        10 artistas que pertenezcan a ese género 




      
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

            htmlTrack += ' <form action = "playlist.html" method = "GET" id="addPlaylistForm">' 
            htmlTrack += '<button type = "button" id="btnAddToPlaylist"> Add to Playlist </button>'
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
          fotoTrack.innerHTML = '<img src="' + resultado.album.cover_medium + '" alt="' + resultado.artist.name + '" class="tango4"></img>'
          
          
          var duracionTrack = document.querySelector('.duracionTrack h3')
          duracionTrack.innerHTML += resultado.duration;

          
          // NO ENCUENTRO EL GENERO

          // var idTrack = resultado.id

          // fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/' + idTrack + )

          // .then(function(response){
          //   return response.json();
          // })
             
          // .then(function(datos){
          //   console.log(datos)

          //   })
          
          
    
          var boton = decument.querySelector('#btnAddToPlaylist')
          boton.addEventListener('click', function(e){

          e.preventDefault()

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

          // if(playlist.includes(id)){
          //   document.querySelector('#btnAddToPlaylist').innerHTML = "Delete from Playlist";
          // } else {
          //   document.querySelector('#btnAddToPlaylist').innerHTML = 'Add to Playlist';          
          // }


          
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
        document.querySelector('.subnombreAlbum h3').innerHTML = '<a href="detalle.html?id=' + data.artist.id + '&tipo=artist">' + data.artist.name + '</a>'
        document.querySelector('.estrenoAlbum h4').innerHTML = data.release_date

        var arrayAlbumGenero = data.genres.data
        console.log(arrayAlbumGenero)
        
        // aca se agrega el genero 

        for (let i = 0; i < arrayAlbumGenero.length; i++) {
          const element = arrayAlbumGenero[i];

          document.querySelector('.generoAlbum a').innerHTML = '<a href=detalle.html?id=' + element.id + '&tipo=genre">' + element.name + '</a>'
          
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

          htmlArtista += '<ol class="cancionesArtista">'
          htmlArtista += '</ol>'

          document.querySelector('.columna').innerHTML = htmlArtista

        // Agregamos al html los datos

          document.querySelector(".fotoArtista").innerHTML = '<img src="' + result.picture_medium + '" alt="help-beatles" class="lewis">' 
          document.querySelector(".nombreApellido").innerHTML = result.name
          document.querySelector(".seguidoresArtista a").innerHTML = result.nb_fan + ' followers'
          
        //agregando las canciones del artista

          idArtista = result.id
          fetch ( 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/' + idArtista + '/top')
  
          .then(function(response){
              return response.json();
            })
           
      
            .then(function(datos){
              console.log(datos)

              for (let i = 0; i < datos.data.length; i++) {
                const element = datos.data[i];

                console.log(element)

                idCancion= element.id
                console.log(idCancion)
              
               
                document.querySelector('.cancionesArtista').innerHTML += '<li class="cancionArtista"> <a href="detalle.html?id=' + idCancion + '&tipo=track">' + element.title + '</a> </li>' 
              }
             
      
            })

      })

      //hacer lo mismo pero con generos
  } else if (tipo == 'genero'){
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/' + id)

      .then(function(response){
        return response.json();
      })

      .then(function(datos){
        console.log(datos);

        htmlGenero += '<div class="genero">'
          htmlGenero += '<div class="generalGenero">'
              htmlGenero += '<div class="fotoGenero">'
              htmlGenero += '</div>'
              htmlGenero += '<div class="nombreGenero">'
                htmlGenero += '<a> </a>'
              htmlGenero += '</div>'
          htmlGenero += '</div>'

          htmlGenero += '<ol class="artistasGenero">'
          htmlGenero += '</div>'

        htmlGenero += '</div>'
     
        document.querySelector('.columna').innerHTML = htmlGenero

        document.querySelector('.nombreGenero a').innerHTML = datos.name
        document.querySelector('.fotoGenero').innerHTML = '<img src="' + datos.picture_medium + '"alt="' + datos.name + '">'

        idGenero = datos.id

      fetch ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/' + idGenero + "/artists")

      .then(function(response){
        return response.json();
      })

      .then(function(datos){
        console.log(datos);
      
        for (let i = 0; i < datos.data.length; i++) {
          const element = datos.data[i];

          document.querySelector('.artistasGenero').innerHTML += '<li class="astistaGenero"> <a href="detalle.html?id=' + element.id + '&tipo=artist">' + element.name + '</a> </li>' 
          
        }
      

      })
  })
  }
}














