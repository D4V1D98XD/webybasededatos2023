<?php
include 'conexion.php';

$nombre = $_POST["nombre"];
$numero_control = $_POST["nc"];
$semestre = $_POST["semestre"];
$edad = $_POST["edad"];

$sql = "INSERT INTO alumnos(nombre, numero_control, semestre, edad, turno, sexo)";
$sql += "VALUES('".$nombre."','".$numero_control."',".$semestre.",".$edad.", '".$turno."',".$sexo.")";

if($conexion->query($sql) === TRUE){
    header("Location: consultarAlumnos.php");
} else {
    echo "<h2>Ocurrio un error</h2> <p>Error: " .$sql. "<br>" . $conexion_error . "</p>";
    echo "<h3><a href='ConsultarAlumnos.php'>Regresar a alumnos</a></h3>";
}

?>