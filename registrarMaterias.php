<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrar materias</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <script src="code.jquery.com_jquery-3.7.1.js"></script>
</head>
<body>
    <?php include 'menu.php'; ?>

    <div class="container"><br>
    
    <center><h1>Registrar la materia</h1></center>
        <div class="row">
            <div class="col-12 card p-4">
                <form action="guardarMateria.php" method="POST">
                    <div class="form-group">
                        <i><label for="nombre">Nombre: </label></i>
                        <input type="text" class="form-control" name="nombre" placeholder="Teclea la materia:">
                    </div><br>
                    <div class="form-group">
                        <i><label for="semestre">Semestre: </label></i>
                        <input type="text" class="form-control" name="semestre" placeholder="Teclea el semestre:">
                    </div><br>
                    <div class="form-group">
                        <i><label for="especialidad">Especialidad: </label></i>
                        <select name="especialidad" class="form-control">
                        <option value="">Seleccione la especialidad: </option>
                        <option value="PROGRAMACION">PROGRAMACION</option>
                        <option value="CONTABILIDAD">CONTABILIDAD</option>
                        <option value="OFIMATICA">OFIMATICA</option>
                        <option value="CONSTRUCCION">CONSTRUCCION</option>
                        <option value="ELECTRONICA">ELECTRONICA</option>
                        <option value="NO_CUENTA_CON_ESPECIALIDAD">NO CUENTA CON ESPECIALIDAD</option>
                    </select>
                    </div>
                    <div><br>
                        <center><input type="submit" class="btn btn-primary" value="Registrar">
                        <a href="ConsultarMaterias.php" class="btn btn-danger">Cancelar</a></center>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="js/bootstrap/js"></script>
</body>
</html>