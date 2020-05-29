window.onload = function () {
  
  fetch('https://api.deezer.com/chart')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });

  // NO  BORRAR
}

// fijarse lo que hizo martin en el colearning, hay que
//  agregar las canciones con un array y usar esos 
//  datos atravez de un for.


// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
  
// }