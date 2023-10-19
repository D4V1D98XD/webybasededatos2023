-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-10-2023 a las 08:35:24
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cetis107`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `numero_control` varchar(30) NOT NULL,
  `semestre` int(11) NOT NULL,
  `edad` int(11) NOT NULL,
  `turno` varchar(10) NOT NULL,
  `sexo` tinyint(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`id`, `nombre`, `numero_control`, `semestre`, `edad`, `turno`, `sexo`) VALUES
(1, 'Beltran Duarte Paulet Mariana', '21325061070363', 5, 17, 'Vespertino', 0),
(2, 'Garcia Leyva Leonardo David', '21325067070484', 5, 17, 'Vespertino', 1),
(3, 'Apodaca Morales Hasly Kamila', '21325067070423', 5, 17, 'Vespertino', 0),
(4, 'Campos Rodriguez Hector Javier', '21325067070468', 5, 18, 'Vespertino', 1),
(5, 'Rocha Magana Ruben', '21325061070254', 5, 17, 'Vespertino', 1),
(6, 'Castro Samaniego Evelyn Melissa', '21325061070308', 5, 17, 'Vespertino', 0),
(7, 'Baez Felix Mariana Guadalupe', '2132506107465', 5, 16, 'Vespertino', 0),
(8, 'Arce Monobe Dylan Olek', '2132506107462', 5, 17, 'Vespertino', 1),
(9, 'Armenta Valenzuela Kevin Rene', '21325061070060', 5, 18, 'Vespertino', 1),
(10, 'Casas Valdez Diana Georgina', '2132506107443', 5, 17, 'Vespertino', 0),
(11, 'Madrid Araujo Francisco Antonio', '21325061070043', 5, 17, 'Vespertino', 1),
(12, 'Moreno Blanco Jair Emmanuel', '21325061070546', 5, 17, 'Vespertino', 1),
(13, 'Rodriguez Meza Erik David', '21325061070321', 5, 17, 'Vespertino', 1),
(14, 'Villalva Felix Jose Esteban', '21325061070256', 5, 17, 'Vespertino', 1),
(15, 'Ramirez Hernandez David Regino', '21325061070372', 5, 17, 'Vespertino', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
