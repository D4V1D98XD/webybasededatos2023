$(document).ready(function(){
    var valor_dado = 0;

    $("#boton").click(function(o){
        valor_dado = Math.floor(Math.random()*6+1);
        console.log("Sacaste un:" + valor_dado);
        $("#dado").attr("src", "dado/dado" + valor_dado + ".png");
        $("#numero").html(valor_dado);
    })


});  