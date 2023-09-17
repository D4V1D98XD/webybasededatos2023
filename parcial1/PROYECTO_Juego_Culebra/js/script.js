$(document).ready(function () {
    var juegoIniciado = false;
    var velocidad = 200; // Velocidad de movimiento de la serpiente en milisegundos
    var intervaloMovimiento;
    var direccionActual = "derecha"; // Dirección inicial de la serpiente

    // Definir la posición inicial de la serpiente
    var posX = 250;
    var posY = 150;

    // Tamaño inicial de la serpiente
    var snakeSize = 1;
    var partesCuerpo = [];

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
        }
    }

    function mostrarComidaAleatoria() {
        var maxX = 480; // Ancho del área del juego
        var maxY = 280; // Altura del área del juego
        var comidaX = Math.floor(Math.random() * maxX / 20) * 20; // Posición X aleatoria en múltiplos de 20
        var comidaY = Math.floor(Math.random() * maxY / 20) * 20; // Posición Y aleatoria en múltiplos de 20
    
        // Actualizar la posición de la comida en el DOM
        $(".food").css({ left: comidaX + "px", top: comidaY + "px" });

        // Mostrar la comida
        $(".food").css("display", "block");
    }

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

        // Agregar una nueva parte al cuerpo de la serpiente
        partesCuerpo.push({ x: posX, y: posY });

        // Eliminar la última parte del cuerpo si la serpiente no ha crecido
        if (partesCuerpo.length > snakeSize) {
            partesCuerpo.shift();
        }

        // Actualizar la posición de las partes del cuerpo
        moverPartesCuerpo();

        // Comprobar colisión con la comida
        verificarColision();
    }

    // Comprobar colisión entre la cabeza de la serpiente y la comida
    function verificarColision() {
        var comidaX = parseInt($(".food").css("left"));
        var comidaY = parseInt($(".food").css("top"));
        
        if (posX == comidaX + 10 && posY == comidaY + 10) {
            // La serpiente ha tocado la comida
            snakeSize++; // Aumentar el tamaño de la serpiente
            $("#Puntos").text(snakeSize * 100); // Actualizar los puntos

            // Generar una nueva posición aleatoria para la comida y mostrarla
            mostrarComidaAleatoria();

            // Agregar una nueva parte al cuerpo de la serpiente
            partesCuerpo.push({ x: posX, y: posY });
        }
    }

    // Función para mover las partes del cuerpo de la serpiente
    function moverPartesCuerpo() {
        for (var i = 0; i < partesCuerpo.length; i++) {
            var parte = partesCuerpo[i];
            $(".snake-body:eq(" + i + ")").css({ left: parte.x + "px", top: parte.y + "px" });
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
