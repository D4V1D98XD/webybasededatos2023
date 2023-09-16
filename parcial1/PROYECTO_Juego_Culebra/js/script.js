$(document).ready(function(){
    // Función para iniciar el juego
    function iniciarJuego() {
        alert("El juego se ha iniciado.");
        // Obtener el elemento de la serpiente
        var snakeElement = $(".snake");
        $(".snake").css("display", "block");

    }

    $("#Inicio").on("click", function() {
        setTimeout(function() {
            iniciarJuego(); // Llama a la función para iniciar el juego
          }, 500);
    });
});
