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