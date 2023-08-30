$(document).ready(function(){
    alert("Funciona JQuery");
    $("#boton1").on("click", function(){
        console.log("cliccccccccck uno");
        $("#texto1").html("sexo entre pinguinos buscar");
    });

    $("#texto1").hover(function(){
        $(this).css("background-color", "blue");
        $(this).css("font-size", "50px");
    }, function(){
        $(this).css("background-color", "white");
        $(this).css("font-size", "20px");
    });

    $("#boton2").click(function(e){
        $("#imagen1").fadeToggle("slow");
    });
})