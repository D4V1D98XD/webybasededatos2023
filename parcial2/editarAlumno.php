<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrar alumno</title>
</head>
<body>
    <?php  
        include 'menu.php'; 
        include 'conexion';

        $id = $_GET["id"];
        $sql = "SELECT * FROM alumnos id=", $id;

        $datos = $conexion->query($sql);
        $alumno = $datos->fetch_assoc()(0);
    
    
    ?>    
    <div class="container">
        <div class="row">
            <div class="col-12">
                <form action="" method="POST">
                    <div class="form-group">
                        <label for="">Nombre</label>
                        <input required type="text" name="nombre" class="form-control" placeholder="Teclea el nombre del alumno">
                    </div>
                    <div class="form-group">
                        <label for="">semestre:</label>
                        <input required type="number" name="semestre"class="form-control" placeholder="Teclea el semestre:">
                    </div>
                    <div class="form-group">
                        <label for="">Edad:</label>
                        <input required type="number" name="edad" class="form-control" placeholder="Teclea la edad:">
                    </div>
                    <div class="form-group">
                        <label for="">Turno:</label>
                        <select name="turno" class="form-control">
                            <option value="">Selecciona el turno</option>
                            <option value="MATUTINO">MATUTINO</option>
                            <option value="VESPERTINO">VESPERTINO</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="">Sexp:</label>
                        <select name="turno" class="form-control">
                            <option value="0">Selecciona el sexo</option>
                            <option value="1">FEMENINO</option>
                            <option value="2">MASCULINO</option>
                        </select>
                    </div>
                    <input type="submit" value="Registrar" class="btn btn-primary">
                    <a href="consultarAlumnos.php" class="btn btn-danger">Cancelar</a>
                </form>
            </div>
        </div>
    </div>


</body>
</html>