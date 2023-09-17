$(document).ready(function () {
    var juegoIniciado = false;
    var intervaloMovimiento;
    var direccionActual = "derecha";

    var posX = 250;
    var posY = 150;

    var snakeSize = 1;
    var partesCuerpo = [];

    //velocidades
    var velocidad = 200;
    var velocidadInicial = 400;
    var incrementoVelocidad = 10;
    var velocidad = velocidadInicial;


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
    
        $(".food").css({ left: comidaX + "px", top: comidaY + "px" });

        // Mostrar la comida
        $(".food").css("display", "block");
    }

    // Función para verificar colisiones con la serpiente misma
    function verificarColisionConSerpiente() {
        if(snakeSize >= 2){
            console.log("la serpiente es mayor o igual a 2");
            for (var i = 2; i < partesCuerpo.length; i++) {
                var parte = partesCuerpo[i];
                if (posX === parte.x && posY === parte.y) {
                    finDelJuego();
                    console.log("geim over");
                    console.log("posicion cuerpo",parte.x);
                    console.log("posicion cabeza", posX);

                    return;
                }
            }
        }
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
        console.log(velocidad);

        verificarColisionConSerpiente();

        // Actualizar la posición de la cabeza de la serpiente
        $(".snake").css({ left: posX + "px", top: posY + "px" });

        // Agregar una nueva parte al cuerpo de la serpiente
        partesCuerpo.push({ x: posX, y: posY });

        if (partesCuerpo.length > snakeSize) {
            partesCuerpo.shift();
        }

        // Actualizar la posición de las partes del cuerpo
        moverPartesCuerpo();

        // Comprobar colisión con la comida
        verificarColision();
    }
    // Comprobar colisión entre la cabeza de la serpiente y la comida
    // Comprobar colisión con los bordes del contenedor
    function verificarColision() {
        var comidaX = parseInt($(".food").css("left"));
        var comidaY = parseInt($(".food").css("top"));

        // Dimensiones del contenedor
        var contenedorAncho = 500;
        var contenedorAlto = 300;

        if (posX < 0 || posX >= contenedorAncho || posY < 0 || posY >= contenedorAlto) {
            finDelJuego(); // La serpiente ha chocado con los bordes del contenedor
            return;
        }

        if (posX == comidaX + 10 && posY == comidaY + 10) {
            // La serpiente ha tocado la comida
            snakeSize++; // Aumentar el tamaño de la serpiente
            $("#Puntos").text(snakeSize * 100); // Actualizar los puntos

            // Incrementa la velocidad
            velocidad -= incrementoVelocidad;
            clearInterval(intervaloMovimiento); // Detener el intervalo actual
            intervaloMovimiento = setInterval(moverSerpiente, velocidad); // Iniciar un nuevo intervalo con la velocidad actualizada

            // Genera una nueva posición aleatoria para la comida y mostrarla
            mostrarComidaAleatoria();

            // Agrega una nueva parte al cuerpo de la serpiente
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

    function finDelJuego() {
        clearInterval(intervaloMovimiento); // Detener el intervalo de movimiento
        juegoIniciado = false; // Marcar el juego como no iniciado
        alert("Fin del juego. Puntuación: " + (snakeSize * 100)); // Mostrar un mensaje con la puntuación
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
