// PLAYLIST

// Cada tema deberá presentar un botón para sacarlos 
// de la playlist.




window.onload = function () {
   
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
          // BOTON REMOVE FROM PLAYLIST

          var boton = document.querySelector('#btnRemoveTrack')
          boton.addEventListener('click', function(e){

          e.preventDefault()
            var trackId = this.id
          var recuperado = sessionStorage.getItem('playlist');
          playlist = JSON.parse(recuperado); 
      
          indiceDelArray = playlist.indexOf(trackId)
          playlist.splice(indiceDelArray,1);
          
  
          sessionStorage.setItem('playlist', JSON.stringify(playlist));
            location.reload()
          // let indiceEnArray = playlist.indexOf(idTrack);
          // playlist.splice(indiceEnArray, 1);
          // document.querySelector('#btnAddToPlaylist').innerHTML = "Agregar a playlist";
          // console.log(playlist);

          })
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

            var tiempoTrack = track.duration
            var minutesTrack = Math.floor( tiempoTrack / 60);
            var secondsTrack = segundosTrack - (minutes * 60);

            
            contenido +='<li>'
            contenido += '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=50&height=50&color=007FEB&layout=dark&size=medium&type=tracks&id=' + trackId + '&app_id=1" width="75" height="75"></iframe>';
            contenido += '<a href="detalle.html?id=' + track.id + '&tipo=track" class="nombreCancion">' + track.title + '</a>' 
            contenido += '<a href="detalle.html?id=' + track.artist.id + '&tipo=artist" class="nombreArtista">' + track.artist.name +'</a>' 
            contenido += '<a href="detalle.html?id=' + track.album.id + '&tipo=album" class="nombreAlbum">' + track.album.title + '</a>' 
            contenido += '<a>' + minutesTrack + ' mins ' + secondsTrack + ' secs </a>' 
            contenido += '<a>' + track.release_date + '</a>' 
            contenido += '<a>'  
            contenido += '<form action = "playlist.html" method = "GET" id="removeFromPlaylist">' 
            contenido += '<button type = "button" id='+ track.id +'class="btnRemoveTrack"> Remove </button>'
            contenido += '</form>'
            contenido += '</a>' 
            contenido += '</li>' 

           
            listadoPlaylist.innerHTML += contenido
        
          

        })

    
    }
}
