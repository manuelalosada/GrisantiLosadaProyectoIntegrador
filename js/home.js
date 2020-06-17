
// FOOTER
//   redes sociales
  

window.onload = function () {

var topAlbum = " ";
var topArtista = " ";
var topTrack = " ";

// var carrousel = " ";

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
    
    .then(function(response){
        return response.json();
    })

    .then(function(resultado){
        console.log(resultado)

        // array con albumes y sus datos

        let arrayAlbum = resultado.albums.data;

        for (let i = 0; i < arrayAlbum.length; i++) {
            const element = arrayAlbum[i];
            
            var nombreAlbum = element.title;
            var nombreArtistaAlbum = element.artist.name;


            topAlbum += '<li> <a href="detalle.html?id=' + element.id + '&tipo=album" class="albumName">' + nombreAlbum + ' </a>'
            topAlbum +=  '<a href="detalle.html?id=' + element.artist.id + '&tipo=artist" class="albumArtistName"> - ' + nombreArtistaAlbum + '</a> </li>'

            document.querySelector('.listadoAlbum').innerHTML = topAlbum;
        }

        
        // array con artistas y sus datos

        var arrayArtista= resultado.artists.data;

        for (let i = 0; i < arrayArtista.length; i++) {
            const element = arrayArtista[i];

            var nombreArtista = element.name;

            // para agregar artistas a la lista de world top artists

            topArtista += '<li> <a href="detalle.html?id=' + element.id + '&tipo=artist">' + nombreArtista + '</a> </li>'

            document.querySelector('.listadoArtista').innerHTML = topArtista;

        }

        // 
        // array con tracks y sus datos

        var arrayTrack = resultado.tracks.data;

        console.log(arrayTrack)


        for (let i = 0; i < arrayTrack.length; i++) {
            const element = arrayTrack[i];

            var tituloTrack = element.title;

            var nombreArtistaTrack = element.artist.name


            topTrack += '<li> <a href="detalle.html?id=' + element.id + '&tipo=track" class="trackName">' + tituloTrack + ' </a>'
            topTrack +=  '<a href="detalle.html?id=' + element.artist.id + '&tipo=artist" class="trackArtistName"> - ' +nombreArtistaTrack + '</a> </li>'

            document.querySelector('.listadoTrack').innerHTML = topTrack;
            
        }
        


        


    })
}
   