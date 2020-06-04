// HOME
// Se busca una página responsive que respete 3 secciones 
// con las siguientes especificaciones: 

// Header   
//     Logo del sitio
//     barra de navegación  
// Section  
//     Carousel/slideshow con imágenes 
//     Buscador
//     3 charts (albums/artists/tracks)
// FOOTER
//   redes sociales

// Funcionalidad:
//   Si el usuario presiona sobre cualquier elemento de
//   los de los charts, este debe ser redirigido a la 
//   página de detalle (ver detalle).
  

window.onload = function () {

var topAlbum = " ";
var topArtista = " ";
var topTrack = " ";

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

            topAlbum += '<li>' + nombreAlbum + '</li>'

            document.querySelector('.listadoAlbum').innerHTML = topAlbum;
        }

        
        // array con artistas y sus datos

        var arrayArtista= resultado.artists.data;

        for (let i = 0; i < arrayArtista.length; i++) {
            const element = arrayArtista[i];

            var nombreArtista = element.name;

            topArtista += '<li>' + nombreArtista + '</li>'

            document.querySelector('.listadoArtista').innerHTML = topArtista;
        }

        // array con tracks y sus datos

        var arrayTrack = resultado.tracks.data;

        console.log(arrayTrack)


        for (let i = 0; i < arrayTrack.length; i++) {
            const element = arrayTrack[i];

            var tituloTrack = element.title;

            topTrack += '<li>' + tituloTrack + '</li>'

            document.querySelector('.listadoTrack').innerHTML = topTrack;
            
        }


    })
}
    // for (let i = 0; i < data.length; i++) {
    //     const element = data[i];
    //     var nombreArtista = element.artist.name;
    //     var tituloTrack = element.album.title;

    // }
    // })

// fijarse lo que hizo martin en el colearning, hay que
//  agregar las canciones con un array y usar esos 
//  datos atravez de un for.


// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
