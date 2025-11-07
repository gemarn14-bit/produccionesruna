// Esto sirve para controlar una galería de imágenes

var indice = 0;

//Esto selecciona las imágenes
var imagenes = document.querySelectorAll(".imagen-galeria");

function mostrarImagen() {
    // Oculta todas las imágenes para evitar que varias se vean al mismo tiempo
    imagenes.forEach((img) => {
        img.style.display = "none"; // Las hace invisibles.
    });

    // Error: if (indice < imagenes.length) { indice = 0; }
    if (indice >= imagenes.length) {
        indice = 0; // Si pasa del final, vuelve a la primera imagen así se recorren las imagenes de forma circular
    } else if (indice < 0) {
        indice = imagenes.length - 1; // Si retrocede más allá de la primera, va a la última
    }

    // Mostramos la imagen correspondiente al índice actual
    imagenes[indice].style.display = "block";
}


// Botón de siguente foto
document.getElementById("btn-siguiente").addEventListener("click", function() {
    indice++;          // Avanza al siguiente índice
    mostrarImagen();   // Muestra la imagen correspondiente
}); 

// Botón de foto anterior
document.getElementById("btn-anterior").addEventListener("click", function() {
    indice--;          // Retrocede una posición
   
    mostrarImagen();   // Muestra la nueva imagen actual
}); // ERROR: estaba mal cerrado le faltaba ");"

//Muestra las imagenes al cargarse
window.onload = mostrarImagen;
