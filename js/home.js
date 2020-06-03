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

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0')
    
    .then(function(response){
        return response.json();
    })

    .then(function(data){

        var topTrack = document.querySelector('.rankingTrack')
        var topArtista = document.querySelector('.rankingArtista')
        var topAlbum = document.querySelector('.rankingAlbum')

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        var nombreArtista = element.artist.name;
        var tituloTrack = element.album.title;

    }
    })



}

// fijarse lo que hizo martin en el colearning, hay que
//  agregar las canciones con un array y usar esos 
//  datos atravez de un for.


// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
  
// }