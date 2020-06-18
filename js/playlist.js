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
   
    var recuperado = localStorage.getItem('playlist');
    var playlist = JSON.parse(recuperado);

   

    var listadoPlaylist =document.querySelector('.listadoPlaylist')

    if (recuperado == null || recuperado == "[]"){
        playlist= [];
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
            
            contenido +='<li>'
            // contenido += '<div class="trackPlayer"> <iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=40&height=40&color=007FEB&layout=dark&size=small&type=playlist&id=' + track.id + '&app_id=1" width="40" height="40"> </iframe> </div>'
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
  
            var recuperado = localStorage.getItem('playlist');
            playlist = JSON.parse(recuperado); 
        
            indiceDelArray = playlist.indexOf(id)
            
            playlist.splice(indiceDelArray,1);
    
            recuperado = localStorage.setItem('playlist');
  
           
              
            })
        })

        .catch(function(errors){
            console.log(errors);
            
        })
    
    }

}
