<?php

$server = "localhost";
$user = "root";
$password = ""; //es el password del CHAMP
$base_de_datos = "cetis107";

//conexion
$base_de_datos = "cetis107";
$conexion = new mysqli($server, $user, $password, $base_de_datos); 

//revisar conexion
if($conexion->connect_error){
    die("falló la conexión" . $conexion->connect_error);
}
?>