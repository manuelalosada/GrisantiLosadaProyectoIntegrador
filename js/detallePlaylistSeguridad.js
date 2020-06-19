// DETALLE
 

//     Detalle de Artista
//         HARD:  top 5 de canciones del artista 

//     Detalle Genero
//         Nombre del género 
//        10 artistas que pertenezcan a ese género 


// href="detalle.html?id=' + element.artist.id +'&tipo=artist
// href="detalle.html?id=' + element.id + '&tipo=track
      
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
  
            
            
            var minutos = Math.floor(resultado.duration/60)
            console.log(minutos)
  
            
            var idTrack = resultado.id
  
            let recuperoStorage = sessionStorage.getItem('playlist');
            
          
            if(recuperoStorage == null){
                playlist = [];
            } else {
                playlist = JSON.parse(recuperoStorage);
            }
  
            if(playlist.includes == idTrack){
                document.querySelector('#btnAddToPlaylist').innerHTML = "Delete from playlist";
            }
  
  
            let agregar = document.querySelector('#btnAddToPlaylist');
  
            agregar.addEventListener('click', function(e){
  
                e.preventDefault();
  
                if(playlist == idTrack){
                  
                    let indiceEnArray = playlist.indexOf(idTrack);
                    playlist.splice(indiceEnArray, 1);
                    document.querySelector('#btnAddToPlaylist').innerHTML = "Agregar a playlist";
                    console.log(playlist);
                    
                } else { 
              
                    playlist.push(idTrack);
                    document.querySelector('#btnAddToPlaylist').innerHTML = "Quitar de la playlist"
                }
  
  
  
                let playlistParaStorage = JSON.stringify(playlist);
                sessionStorage.setItem('playlist', playlistParaStorage);
                console.log(sessionStorage);
  
  
            })
  
        })
      
            
  
          //   // function getFloor(x) {
          //   //   return Math.floor(resultado.duration/60);
          //  }
            
  
  
  
  
  
            // var boton = document.querySelector('#btnAddToPlaylist')
            // boton.addEventListener('click', function(e){
  
            //   e.preventDefault()
  
            // var recuperado = sessionStorage.getItem('playlist');
        
            //   if(recuperado == null){ 
            //     playlist = [];
            // } else {
            //     playlist = JSON.parse(recuperado)
            // }
            
            // if(playlist.includes(id)){
            //   indiceDelArray = playlist.indexOf(id)
            //   playlist.splice(indiceDelArray,1);
  
            // } else {
            //   playlist.push(id)  
  
            // }
            // sessionStorage.setItem('playlist', JSON.stringify(playlist));
  
           
              
            // })
  
            // if(playlist.includes(id)){
            //   document.querySelector('#btnAddToPlaylist').innerHTML = "Delete from Playlist";
            // } else {
            //   document.querySelector('#btnAddToPlaylist').innerHTML = 'Add to Playlist';          
            // }
  
  
            
        // })
  
  
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
  
  
// CODIGO PLAYLIST   

// PLAYLIST


// Section  
//     Los temas favoritos reproducibles

// Funcionalidad:
// El cliente requiere que los temas sean reproducibles 
// en esta sección.

// Feature:
// Los temas de esta pagina seran cargados dinámicamente
// desde la sesión del usuario
// Cada tema deberá presentar un botón para sacarlos 
// de la playlist.




window.onload = function () {
    
    //para obtener los datos de un track
    
            // var queryString = location.search;
            // var data = new URLSearchParams(queryString);
            // var id = data.get('id');
   
    var recuperado = sessionStorage.getItem('playlist');
    var playlist = JSON.parse(recuperado)

   

    var listadoPlaylist = document.querySelector('.listadoPlaylist')

    if (recuperado == null || recuperado == "[]"){
        playlist = [];
        listadoPlaylist.innerHTML += '<li> No song found in your Playlist </li>' 
    } else {
        playlist.forEach(function(id){ //esta funcion va a representar cada elemento del array
            showTrack(id)
        });
    }

    var contenido = ''
    function showTrack(id){

        fetch ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/' + id)
        
        .then(function (response) {
            return response.json();
        })
        .then(function (track) {
            console.log(track)

            var trackId = track.id
            console.log(trackId)
            
            contenido +='<li>'
            contenido += '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=50&height=50&color=007FEB&layout=dark&size=medium&type=tracks&id=' + trackId + '&app_id=1" width="75" height="75"></iframe>';
            // contenido += '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=80&height=80&color=007FEB&layout=dark&size=small&type=playlist&id=' + trackId + '&app_id=1" width="80" height="80"></iframe>'
            contenido += '<a href="detalle.html?id=' + track.id + '&tipo=track" class="nombreCancion">' + track.title + '</a>' 
            contenido += '<a href="detalle.html?id=' + track.artist.id + '&tipo=artist" class="nombreArtista">' + track.artist.name +'</a>' 
            contenido += '<a href="detalle.html?id=' + track.album.id + '&tipo=album" class="nombreAlbum">' + track.album.title + '</a>' 
            contenido += '<a>' + track.duration + '</a>' 
            contenido += '<a>' + track.release_date + '</a>' 
            contenido += '<a>'  
            contenido += '<form action = "playlist.html" method = "GET" id="removeFromPlaylist">' 
            contenido += '<button type = "button" id="btnRemoveTrack"> Remove </button>'
            contenido += '</form>'
            contenido += '</a>' 
            contenido += '</li>' 

           
            listadoPlaylist.innerHTML += contenido
        
            // BOTON REMOVE FROM PLAYLIST

            var boton = document.querySelector('#btnRemoveTrack')
            boton.addEventListener('click', function(e){
  
            e.preventDefault()
  
            var recuperar = sessionStorage.getItem('playlist');
            playlist = JSON.parse(recuperar); 
        
            indiceDelArray = playlist.indexOf(trackId)
            playlist.splice(indiceDelArray,1);
    
            sessionStorage.setItem('playlist' , JSON.stringify(playlist));

        //     var idTrack = resultado.id

        //   let recuperoStorage = sessionStorage.getItem('playlist');
          
        
        //   if(recuperoStorage == null){
        //       playlist = [];
        //   } else {
        //       playlist = JSON.parse(recuperoStorage);
        //   }

        //   if(playlist.includes == idTrack){
        //       document.querySelector('#btnAddToPlaylist').innerHTML = "Delete from playlist";
        //   }


        //   let agregar = document.querySelector('#btnAddToPlaylist');

        //   agregar.addEventListener('click', function(e){

        //       e.preventDefault();

        //       if(playlist == idTrack){
                
        //           let indiceEnArray = playlist.indexOf(idTrack);
        //           playlist.splice(indiceEnArray, 1);
        //           document.querySelector('#btnAddToPlaylist').innerHTML = "Agregar a playlist";
        //           console.log(playlist);
                  
        //       } else { 
            
        //           playlist.push(idTrack);
        //           document.querySelector('#btnAddToPlaylist').innerHTML = "Quitar de la playlist"
        //       }



        //       let playlistParaStorage = JSON.stringify(playlist);
        //       sessionStorage.setItem('playlist', playlistParaStorage);
        //       console.log(sessionStorage);


        //   })
  
           
            
            })


        })

        // .catch(function(errors){
        //     console.log(errors);
            
        // })
    
    
    }
}


