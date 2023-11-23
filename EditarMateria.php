<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrar Materia</title>
    <link rel="stylesheet" href="css/bootstrap.css"> 
    <script src="code.jquery.com_jquery-3.7.1.js"></script>
</head>
<body>
    <?php 
        include 'menu.php'; 
        include 'conexion.php';

        $id = $_GET["id"];

        $sql = "SELECT * FROM materias WHERE id=".$id;

        $datos = $conexion->query($sql);
        
        $materias = $datos->fetch_assoc();

    ?>
    <div class="container">
        <div class="row">
            <div class="col-12 card m-4 p-4">
                <h2>Registrar Materia</h2><hr>
                <form action="ActualizarMateria.php" method="POST">
                    <input type="hidden" name="id" value="<?php echo $materias["id"]; ?>">
                    <div class="form-group">
                        <i><label for="">Nombre:</label></i>
                        <input value="<?php echo $materias["nombre"]; ?>" name="nombre" type="text" class="form-control" placeholder="Teclea el nombre del materias" required>
                    </div><br>
                    <div class="form-group">
                        <i><label for="">Semestre:</label></i>
                        <input value="<?php echo $materias["semestre"]; ?>" name="semestre" type="number" class="form-control" placeholder="Teclea el semestre" required>
                    </div><br>
                    <div class="form-group">
                        <i><label for="">Especialidad:</label></i>
                        <select name="especialidad" class="form-control">
                        <option selected value="<?php echo $materias["semestre"]; ?>"><?php echo $materias["semestre"]; ?></option>
                            <option value="">Seleccione la especialidad: </option>
                            <option value="PROGRAMACION">PROGRAMACION</option>
                            <option value="CONTABILIDAD">CONTABILIDAD</option>
                            <option value="OFIMATICA">OFIMATICA</option>
                            <option value="CONSTRUCCION">CONSTRUCCION</option>
                            <option value="ELECTRONICA">ELECTRONICA</option>
                            <option value="NO_CUENTA_CON_ESPECIALIDAD">NO CUENTA CON ESPECIALIDAD</option>
                        </select>
                    </div><br>
                    <div>
                        <center><input type="submit" value="Actualizar" class="btn btn-primary">
                        <a href="ConsultarMaterias.php" class="btn btn-danger">Cancelar</a></center>
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