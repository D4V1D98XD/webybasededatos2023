<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>inicio</title>
    <link rel="stylesheet" href="css/bootstrap.css">
</head>
<body>
  <?php include 'conexion.php'; ?>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">cetis 107</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            menu
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">consulta alumnos</a></li>
            <li><a class="dropdown-item" href="#">registra alumnos</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="busca" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">buscar</button>
      </form>
    </div>
  </div>
</nav>
<div class="container">
  <div class="row">
    <div class="card m-2">
      <h1>sistema de gestion de control escolar</h1>
      <h1>CETIS 107</h1>
      <img src="img/cetis_logo.png" alt="" width="20%" class="img-fluid">
    </div>
  </div>
</div>
<footer class="text-center"><hr>
<span>cetis 107 web app &copy; 2023</span>
</footer>

    <script src="js/bootstrap.js"></script>
</body>
</html>