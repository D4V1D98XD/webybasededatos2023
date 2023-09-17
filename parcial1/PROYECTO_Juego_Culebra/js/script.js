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

            console.log("hola?");
        }
    }

    function mostrarComidaAleatoria() {
        var maxX = 480; // Ancho del área del juego
        var maxY = 280; // Altura del área del juego
        comidaX = Math.floor(Math.random() * maxX / 20) * 20; // Posición X aleatoria en múltiplos de 20
        comidaY = Math.floor(Math.random() * maxY / 20) * 20; // Posición Y aleatoria en múltiplos de 20
    
        // Crea un nuevo elemento de comida y establece su posición
        var nuevaComida = $("<div class='food'></div>");
        nuevaComida.css({ left: comidaX + "px", top: comidaY + "px" });
    
        // Agrega la nueva comida al DOM
        $(".game-container").append(nuevaComida);
    
        // Muestra la nueva comida
        nuevaComida.css("display", "block");
    }

    function agregarParteCuerpo(x, y) {
        // Crea un nuevo elemento para la parte del cuerpo
        var nuevaParteCuerpo = $("<div class='snake snake-body'></div>");

        // Establece la posición de la nueva parte del cuerpo
        nuevaParteCuerpo.css({ left: x + "px", top: y + "px" });

        // Agrega la nueva parte del cuerpo al DOM
        $(".game-container").append(nuevaParteCuerpo);

        // Muestra la nueva parte del cuerpo
        nuevaParteCuerpo.css("display", "block");

        // Agrega la nueva parte del cuerpo al arreglo
        partesCuerpo.push(nuevaParteCuerpo);
    }

    function moverPartesCuerpo() {
        // Mueve cada parte del cuerpo hacia la posición de la parte delante de ella
        for (var i = partesCuerpo.length - 1; i > 0; i--) {
            var parteActual = partesCuerpo[i];
            var parteAnterior = partesCuerpo[i - 1];
            var left = parteAnterior.css("left");
            var top = parteAnterior.css("top");
            parteActual.css({ left: left, top: top });
        }
    }


    // Función para mover la serpiente
    function moverSerpiente() {
        // Mover las partes del cuerpo de la serpiente primero
        moverPartesCuerpo();
    
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
        verificarColision();
    }

    // Comprobar colisión entre la cabeza de la serpiente y la comida
    function verificarColision() {
        console.log("verificacion si funciona");
        console.log("posicion serpiente", posX);
        console.log("posicion comida", comidaX);
        if (comidaX + 10 == posX && comidaY + 10 == posY) {
            console.log("Colisión detectada");
            $(".food").remove();
            $("#Puntos").text(snakeSize * 100);
            snakeSize++;
            agregarParteCuerpo(posX - 20, posY); 
            // Mostrar una nueva comida en una ubicación aleatoria
            mostrarComidaAleatoria();
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
