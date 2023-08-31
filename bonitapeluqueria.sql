-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-09-2023 a las 01:39:43
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bonitapeluqueria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

CREATE TABLE `citas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `correo` varchar(200) NOT NULL,
  `fecha` date NOT NULL,
  `hora` varchar(20) NOT NULL,
  `procedimiento` varchar(200) NOT NULL,
  `celular` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Volcado de datos para la tabla `citas`
--

INSERT INTO `citas` (`id`, `nombre`, `correo`, `fecha`, `hora`, `procedimiento`, `celular`) VALUES
(15, 'Angela Benavides', 'angela@gmail.com', '2023-08-16', '09:00', 'cabello', '3107132031'),
(16, 'Maria', 'maria@gmail.com', '2023-08-16', '10:00', 'cabello', '3107132031'),
(20, 'asddas', 'asdasd', '2023-08-31', '11:00', 'asdasdas', '41232423'),
(25, 'Monica', 'alejandrotorres@gmail.com', '2023-09-01', '14:00', 'asdasdas', '31045579061');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'pr1', 'dsc1', '2023-08-30 21:57:04', '2023-08-30 21:57:04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'juanperez', '1234', '2023-08-30 20:32:33', '2023-08-30 20:32:33'),
(2, 'victor', '$2b$10$LWzfPDZw1EP3Ibg.sgZqjOgywRa9qTApWx1VP06iDzG16CnQF0flO', '2023-08-30 18:34:39', '2023-08-30 18:34:39'),
(3, 'Angela', '$2b$10$eTsbyjYfcf/UrKZB741HQeFUSTebjh5Mhxz0YdP8s.wh9kQYcfS4y', '2023-08-30 21:03:23', '2023-08-30 21:03:23'),
(4, 'Alfonso', '$2b$10$91h4xRBMeYn7xwzlisexAuvaeFeoOb9kqhKXpxL7DCcNPvEdA4Gma', '2023-08-30 23:01:56', '2023-08-30 23:01:56'),
(5, 'Vadelgado', '$2b$10$2ff979Y0R1zjF6KZJPfc9u91qukkJHQBXJlj1gv2ccWMH7MlFaCkm', '2023-08-31 20:55:31', '2023-08-31 20:55:31');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `citas`
--
ALTER TABLE `citas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `citas`
--
ALTER TABLE `citas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
