
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Asignar materias</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <script src="code.jquery.com_jquery-3.7.1.js"></script>
</head>
<body>

    <?php 
        include 'menu.php'; 
        include 'conexion.php';
        $sql_alumnos = "SELECT * FROM alumnos";
        $sql_materias = "SELECT * FROM materias";
        $datos_alumnos = $conexion->query($sql_alumnos);
        $datos_materias = $conexion->query($sql_materias);
    ?>

    <div class="container"><br>
        <div class="row">
            <div class="col-12 card p-4">
            <center><h2>Asignar Materias al alumno</h2></center><br>
                <form action="GuardarAsignación.php" method="POST">
                    <label for="">Alumno:</label>
                    <select name="alumno" class="form-control">
                        <option value="">Selecciona un alumno:</option>
                        <?php 
                            if($datos_alumnos->num_rows > 0) {
                            while($registro = $datos_alumnos->fetch_assoc()){ 
                        ?>
                            <option value="<?php echo $registro["id"]; ?>"><?php echo $registro["nombre"]; ?></option>


                        <?php } ?>
                    <?php } ?>
                    </select>
                    <br><br>
                <i><h5>Seleccione las materias:</h5></i><br>
                    <?php 
                        if($datos_materias->num_rows > 0) {
                            while($registro = $datos_materias->fetch_assoc()){  ?>
                             <p><input type="checkbox" name="materias[]" value="<?php echo $registro["id"]; ?>"> <?php echo $registro["nombre"]; ?></p>
                        <?php } } ?>
                    <div><br>
                        <center><input type="submit" class="btn btn-primary" value="Asignar">
                        <a href="" class="btn btn-danger">Cancelar</a></center>
                    </div>
                </form>
            </div>
        </div>
    </div>


<footer class="text-center">
        <hr>
        CETIS 107 &copy; 2023
    </footer>

    <script src="js/bootstrap.js"></script>

</body>
</html>