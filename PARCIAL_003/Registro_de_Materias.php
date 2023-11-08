<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrar Materias</title>
    <link rel="stylesheet" href="css/bootstrap.css"> 
    <script src="code.jquery.com_jquery-3.7.1.js"></script>
</head>
<body>
    <?php include 'menu.php'; ?>
 <div class="container">
    <div class="row">
      <div class="col-12 card p-4">
        <form action="">
            <div class="form-group">
                <label for="nombre">Nombre: </label>
                <input type="text" class="form-control" name="semestre" placeholder="Teclea la materia:">
            </div>
            <div class="form-group">
                <label for="semestre">Semestre: </label>
                <input type="text" class="form-control" name="semestre" placeholder="Teclea el semestre:">
            </div>
            <div class="form-group">
                <select name="especialidad" class="form-control">
                <option value="">Seleccione especialidad</option>
                    <option value="PROGRAMACION">PROGRAMACION</option>
                    <option value="CONTABILIDAD">CONTABILIDAD</option>
                    <option value="ELECTRONICA">ELECTRONICA</option>
                    <option value="CONSTRUCCION">CONSTRUCCION</option>
                    <option value="OFIMATICA">OFIMATICA</option>
                </select>
            </div><br>
            <div>
                <input type="submit" class="btn btn-primary" value="Registrar">
                <a href="Consultar_Materiass.php" class="btn btn-danger">Cancelar</a>
            </div>
     </div>
    </div>

 </div>
 <script src="js/bootstrap.js"></script>
</body>
</html>