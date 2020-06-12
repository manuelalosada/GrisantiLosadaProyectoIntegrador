// GÉNEROS
// Se busca una página responsive  que respete 3 secciones
// con las siguientes especificaciones: 

// Header   
//     se requiere logo del sitio y barra de navegación
// Section  
//     Listado de todos los géneros de la aplicación
// Footer
//     Nombres de los integrantes
//     Logo de deezer
//     Redes sociales

// Funcionalidad:
// Al hacer click sobre cualquier género la aplicación
// nos va a redirigir a la página de detalle (ver detalle)


// GÉNEROS
// Listado con todos los géneros.
// Genre: https://developers.deezer.com/api/genre 
// Endpoint: https://api.deezer.com/genre


window.onload = function () {

    var contenidoGeneros = ''

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')
    .then(function(response){
        return response.json();
    })

    .then(function(resultado){
        console.log(resultado)
  
    arrayGeneros = resultado.data

    for (let i = 1; i < arrayGeneros.length; i++) {
        const element = arrayGeneros[i];

    var nombreGenero= element.name
    var urlImagenGenero = element.picture
    
    contenidoGeneros += '<div class="playlist">'
    contenidoGeneros += '<img src="' + urlImagenGenero + '" alt="' + nombreGenero +'">'
    contenidoGeneros += '<a href="detalle.html?id=' + element.id + '&tipo=genero">' + nombreGenero + '</a>'
    contenidoGeneros += '</div>'

    var divGeneros = document.querySelector('.playlists')
    divGeneros.innerHTML = contenidoGeneros
    }
    })

    

}