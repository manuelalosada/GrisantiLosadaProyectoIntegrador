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
