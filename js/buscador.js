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


// aca va lo que vimos en la clase 29/05
// hay que mandar los datos al buscador.


window.onload = function () {

    var queryString = location.search;

    var queryStringObj = new URLSearchParams (queryString);

    var busquedaUsuario = queryStringObj.get ('q');

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=' + busquedaUsuario)
    
    // fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=eminem')

        .then(function(response) {
          return response.json();
         })

        .then(function(resultado) {
          console.log(resultado.data);

          var contenidoCancion = ""

          
          for (let i = 0; i < resultado.data.length; i++) {
              const element = resultado.data[i];
              console.log(element)
              var nombreCancion = element.title
              var fotoAlbumCancion = element.album.cover
              var nombreAlbumCancion = element.album.title
              var nombreArtistaCancion = element.artist.name
              var duracionCancion = element.duration


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
                   
                  contenidoCancion += '<div class="canciones"> <a href="detalle.html?id=' + busquedaUsuario +'"> Cancion: ' +  nombreCancion + '</a>  </div>'
                  contenidoCancion += '<div class="cancion"> <a> Album: ' + nombreAlbumCancion + '</a> </div>'
                  contenidoCancion += '<div class="cancion"> <a> Artista: ' + nombreArtistaCancion + '</a> </div>'
                  
                contenidoCancion += '</div>'
              contenidoCancion += '</li>'
            
             


              var nombreCancion = document.querySelector('.resultadoBusqueda')
              
              nombreCancion.innerHTML = contenidoCancion
          }

          


          
          


        })
        // .catch (function(error){
        //     console.log ('El error fue ' + error)
        // }); 

        // BUSCADOR ALBUM 

        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=' +busquedaUsuario)

        .then(function(response) {
          return response.json();
         })

        .then(function(resultado) {
          console.log(resultado.data);

          var contenidoAlbum = ""

          
          for (let i = 0; i < resultado.data.length; i++) {
              const element = resultado.data[i];
              console.log(element)
              var nombreAlbum = element.artist.name
              var fotoAlbum = element.picture
              var nombreAlbumCancion = element.album.title
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
                   
              // contenidoAlbum += '<div class="canciones"> <a href="detalle.html?id=' + busquedaUsuario +'"> Album: ' +  nombreAlbum + '</a>  </div>'
              contenidoAlbum += '<div class="cancion"> <a> Album: ' + nombreAlbumCancion + '</a> </div>'
              contenidoAlbum += '<div class="cancion"> <a> Artista: ' + nombreArtistaAlbum + '</a> </div>'
                  
              contenidoAlbum += '</div>'
              contenidoAlbum += '</li>'
            
             


              var nombreAlbum = document.querySelector('.resultadoBusqueda')
              
              nombreAlbum.innerHTML = contenidoAlbum
          }

          


          
          


        })


    


} //NO BORRAR 

