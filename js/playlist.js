// PLAYLIST


// Section  
//     Los temas favoritos reproducibles
// Footer
//     Nombres de los integrantes
//     Logo de deezer
//     Redes sociales

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
    
            var queryString = location.search;
            var data = new URLSearchParams(queryString);
            var id = data.get('id');
   


    // fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/' + id)
    //     .then(function(response){
    //         return response.json();
    //     })
    //     .then(function(resultado){
    //         console.log(resultado);

        
    //         // var nombreCancion =
        
    //         var player = document.querySelector('iframe');
    //         player.src = 'https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=' + id + '&app_id=1'

            
    //     })
    //     .catch(function (error) {
    //         console.log(error);

    //     })    


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
            // var listadoPlaylist =document.querySelector('.listadoPlaylist')
            console.log(track)
            
            contenido +='<li>'
            contenido += '<a href="detalle.html?id=' + track.id + '&tipo=track" class="nombreCancion">' + track.title + '</a>' 
            contenido += '<a href="detalle.html?id=' + track.artist.id + '&tipo=artist" class="nombreArtista">' + track.artist.name +'</a>' 
            contenido += '<a href="detalle.html?id=' + track.album.id + '&tipo=album" class="nombreAlbum">' + track.album.title + '</a>' 
            contenido += '<a>' + track.duration + '</a>' 
            contenido += '<a>' + track.release_date + '</a>' 
            contenido += '<a> Remove</a>' 
            contenido += '</li>' 

            listadoPlaylist.innerHTML += contenido
        })

        .catch(function(errors){
            console.log(errors);
            
        })
    
    }

}
