$(document).ready(function(){
    var container = 0;
    $('img').click(function(){
        var nombre_imagen = $(this).attr('data-id');
        $(this).sttr('src', imagenes + '/' + nombre_imagen);
    })

})