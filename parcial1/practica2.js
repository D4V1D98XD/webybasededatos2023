$(document).ready(function(){
    $("#boton1").click(function(){
        alert("Evento click boton");
    });

    $("#div1").on("dblclick", function(){
        alert("Evento click mensajes");
    });

    $("#input").focus(function(o){
        console.log("Metodo focus al dar click en input");
    });

    $("#texto1").hover(function(){
        $("#texto1").css("background-color","red");
    }, function(){
        $("#texto1").css("background-color", "white");
    });

    $("#input2").keydown(function(){
        console.log("key down");
        $("")
    });


});