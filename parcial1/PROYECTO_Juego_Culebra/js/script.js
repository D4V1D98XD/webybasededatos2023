$(document).ready(function () {
    var juegoIniciado = false;
    var velocidad = 200; // Velocidad de movimiento de la serpiente en milisegundos
    var intervaloMovimiento;
    var direccionActual = "derecha"; // Dirección inicial de la serpiente

    // Definir la posición inicial de la serpiente
    var posX = 250;
    var posY = 150;

    // Variables para la posición de la comida
    var comidaX = 0;
    var comidaY = 0;

    // Tamaño inicial de la serpiente
    var snakeSize = 1;

    // Función para iniciar el juego
    function iniciarJuego() {
        if (!juegoIniciado) {
            alert("El juego se ha iniciado.");
            juegoIniciado = true;

            // Mostrar la serpiente
            $(".snake").css("display", "block");

            // Mostrar la comida en una posición aleatoria
            mostrarComidaAleatoria();

            // Iniciar el bucle de juego para mover la serpiente continuamente
            intervaloMovimiento = setInterval(moverSerpiente, velocidad);

            console.log("hola?");
        }
    }

    function mostrarComidaAleatoria() {
        comidaX = Math.floor(Math.random() * 25) * 20; // Posición X aleatoria en múltiplos de 20
        comidaY = Math.floor(Math.random() * 15) * 20; // Posición Y aleatoria en múltiplos de 20

        $(".food").css({ left: comidaX + "px", top: comidaY + "px" });

        // Agregar la comida al DOM
        $(".food").css("display", "block");
    }

    
    // Comprobar colisión entre la cabeza de la serpiente y la comida


    // Función para mover la serpiente
    function moverSerpiente() {
        // Mueve la serpiente en la dirección actual
        if (direccionActual === "derecha") {
            posX += 20; // Mover hacia la derecha
        } else if (direccionActual === "izquierda") {
            posX -= 20; // Mover hacia la izquierda
        } else if (direccionActual === "arriba") {
            posY -= 20; // Mover hacia arriba
        } else if (direccionActual === "abajo") {
            posY += 20; // Mover hacia abajo
        }

        // Actualizar la posición de la cabeza de la serpiente en el DOM
        $(".snake").css({ left: posX + "px", top: posY + "px" });

        // Comprobar colisión con la comida
        
    }

    function verificarColision() {
        if (comidaX === posX && comidaY === posY) {
            console.log("Colisión detectada");
            $("#Puntos").text(snakeSize * 100);
        }
    }


    // Detectar la pulsación de una tecla para cambiar la dirección de la serpiente
    $(document).keydown(function (event) {
        if (!juegoIniciado) {
            iniciarJuego();
        }

        // Cambiar la dirección de la serpiente basada en la tecla presionada
        if (event.key === "ArrowRight" && direccionActual !== "izquierda") {
            direccionActual = "derecha";
        } else if (event.key === "ArrowLeft" && direccionActual !== "derecha") {
            direccionActual = "izquierda";
        } else if (event.key === "ArrowUp" && direccionActual !== "abajo") {
            direccionActual = "arriba";
        } else if (event.key === "ArrowDown" && direccionActual !== "arriba") {
            direccionActual = "abajo";
        }
    });
});
