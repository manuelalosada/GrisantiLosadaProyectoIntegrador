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

    var busquedaUsuario = queryStringObj.get ('textoBuscado');

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=eminem')

        .then(function(response) {
          return response.json();
         })

        .then(function(resultado) {
          console.log(resultado.data);

          var contenido = ""
          for (let i = 0; i < resultado.data.length; i++) {
              const element = resultado.data[i];
              
              var cancion = element.title

             
          }



        })
        .catch (function(error){
            console.log ('El error fue ' + error)
        }); 
    


} //NO BORRAR 

