// RESULTADOS DE BÚSQUEDA

// funcionalidad: 
// El cliente requiere que los resultados de la búsqueda 
// de la sección principal se reflejen en esta página  
// mostrando un listado de resultados.
// Cada resultado debe ser un hipervínculo que envíe al 
// usuario a la página de detalle del recurso buscado.

// Feature:
// Si la búsqueda tarda en cargar deberá aparecer un 
// spinner para luego desaparecer cuando el contenido 
// esté listo




window.onload = function () {


    var queryString = location.search;

    var queryStringObj = new URLSearchParams (queryString);

    var busquedaUsuario = queryStringObj.get ('q');

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=' + busquedaUsuario)
    
    

        .then(function(response) {
          return response.json();
         })

        .then(function(resultado) {
          console.log(resultado);

          var contenidoCancion = ""

          
          for (let i = 0; i < resultado.data.length; i++) {
              const element = resultado.data[i];
              
              console.log(element)

              var nombreCancion = element.title
              var fotoAlbumCancion = element.album.cover
              var nombreAlbumCancion = element.album.title
              var nombreArtistaCancion = element.artist.name
              var duracionCancion = element.duration

      
  
              var duracionCancion = track.duration
              var minutesTrack = Math.floor( duracionCancion / 60);
              var secondsTrack = duracionCancion - (minutesTrack * 60);


              contenidoCancion += '<li>'

                contenidoCancion += '<h3> Respuesta </h3>'

                contenidoCancion += '<div class="genero">'

                    contenidoCancion += '<div class="generalGenero">'

                        contenidoCancion += '<div class="fotoGenero">'
                        contenidoCancion += '<img src="' + fotoAlbumCancion + '" alt="' + nombreAlbumCancion + '">'
                        contenidoCancion += '</div>'

                        contenidoCancion += '<div class="nombreGenero"><a>' + nombreCancion + '</a>'
                        contenidoCancion += '</div>'

                    contenidoCancion += '</div>'
                   
                  contenidoCancion += '<div class="canciones"> Cancion: <a href="detalle.html?id=' + busquedaUsuario +'"> ' +  nombreCancion + '</a>  </div>'
                  contenidoCancion += '<div class="cancion"> <a> Album: ' + nombreAlbumCancion + '</a> </div>'
                  contenidoCancion += '<div class="cancion"> <a> Artist: ' + nombreArtistaCancion + '</a> </div>'
                  contenidoCancion += ' <div class="cancion"> <a> Duration: ' +  minutesTrack + ' mins ' + secondsTrack + ' secs </a> </div>'
                  
                contenidoCancion += '</div>'
              contenidoCancion += '</li>'
            
             


              var nombreCancion = document.querySelector('.resultadoBusqueda')
              
              nombreCancion.innerHTML = contenidoCancion
          }

          


          
          


        })
       

        // BUSCADOR ALBUM 

        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=' +busquedaUsuario)

        .then(function(response) {
          return response.json();
         })

        .then(function(resultado) {
          console.log(resultado);

          var contenidoAlbum = ""

          
          for (let i = 0; i < resultado.data.length; i++) {
              const element = resultado.data[i];
              console.log(element)
              var nombreAlbum = element.artist.name
              var fotoAlbum = element.picture
              var nombreAlbumCancion = element.title
              var nombreArtistaAlbum = element.artist.name
              var duracionCancion = element.duration


              contenidoAlbum += '<li>'
              contenidoAlbum += '<h3> Respuesta </h3>'
              contenidoAlbum += '<div class="genero">'
              contenidoAlbum += '<div class="generalGenero">'
              contenidoAlbum += '<div class="fotoGenero">'
              contenidoAlbum += '<img src="' + fotoAlbum + '" alt="' + nombre + '">'
              contenidoAlbum += '</div>'
              contenidoAlbum += '<div class="nombreGenero"><a>' + nombreAlbum + '</a>'
              contenidoAlbum += '</div>'
              contenidoAlbum += '</div>'
                   
              contenidoAlbum += '<div class="cancion"> <a> Album: ' + nombreAlbumCancion + '</a> </div>'
              contenidoAlbum += '<div class="cancion"> <a> Artista: ' + nombreArtistaAlbum + '</a> </div>'
                  
              contenidoAlbum += '</div>'
              contenidoAlbum += '</li>'
            
             


              var nombreAlbum = document.querySelector('.resultadoBusqueda')
              
              nombreAlbum.innerHTML = contenidoAlbum
          }

          


          
          


        })

        //BUSCAR ARTISTA 

         fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=' + busquedaUsuario)

         .then(function(response) {
          return response.json();
         })

        .then(function(resultado) {
          console.log(resultado);

          var contenidoArtista = ""

          
          for (let i = 0; i < resultado.data.length; i++) {
              const element = resultado.data[i];
              console.log(element)
              var nombreArtista = element.name
              var fotoAlbumArtista = element.cover
              var cantidadCanciones = element.nb_tracks

              


              contenidoArtista += '<li>'
              contenidoArtista += '<h3> Respuesta </h3>'
              contenidoArtista += '<div class="genero">'
              contenidoArtista += '<div class="generalGenero">'
              contenidoArtista += '<div class="fotoGenero">'
              contenidoArtista += '<img src="' + fotoAlbumArtista + '" alt="' + nombreArtista + '">'
              contenidoArtista += '</div>'
              contenidoArtista += '<div class="nombreGenero"><a>' + nombreArtista + '</a>'
              contenidoArtista += '</div>'
              contenidoArtista += '</div>'
                   
              contenidoArtista += '<div class="canciones"> <a href="detalle.html?id=' + busquedaUsuario +'"> Cantidad de Canciones: ' +  cantidadCanciones + '</a>  </div>'
              
                  
              contenidoArtista += '</div>'
              contenidoArtista += '</li>'
            
             


              var nombreCancion = document.querySelector('.resultadoBusqueda')
              
              nombreCancion.innerHTML = contenidoCancion
          }

          


          
          


        })




    


} //NO BORRAR 

