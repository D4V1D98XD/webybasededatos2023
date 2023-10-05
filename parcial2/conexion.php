<?php

 $server = "localhost";
 $user = "root";
 $password ="";

 $conexion = new mysql($server,$user,$password);
 if($conexion->connect_error){
    die("fallo la conexion" . $conexion->connect_error);
 }
 ?>