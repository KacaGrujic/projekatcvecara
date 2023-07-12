-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 13, 2023 at 01:10 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flowershop`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'suncokreti', '2023-07-09 21:19:52', '2023-07-09 21:19:52'),
(2, 'ruze', '2023-07-09 21:19:52', '2023-07-09 21:19:52'),
(3, 'lale', '2023-07-09 21:19:52', '2023-07-09 21:19:52'),
(4, 'gerberi', '2023-07-09 21:19:53', '2023-07-09 21:19:53'),
(5, 'orhideje', '2023-07-09 21:19:53', '2023-07-09 21:19:53'),
(6, 'irisi', '2023-07-09 21:19:53', '2023-07-09 21:19:53');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `flowers`
--

CREATE TABLE `flowers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 0,
  `category` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `flowers`
--

INSERT INTO `flowers` (`id`, `image`, `name`, `description`, `price`, `quantity`, `category`, `created_at`, `updated_at`) VALUES
(1, 'https://www.cvecarakazablanka.com/data/products/1736/feature/0/Buket_-_pet_crvenih_ru%C5%BEa_sa_dekoracijom.jpg', 'Buket ruza', 'Buket je napravljen sa pet crvenih holandskih ruža i dekoracijom. Ukoliko želite da nekoga iznenadite i pošaljete na adresu mali znak pažnje, ovaj buket je idealan poklon.', 3000, 0, 2, '2023-07-09 21:19:53', '2023-07-09 21:19:53'),
(2, 'https://www.cvecarakazablanka.com/data/products/1325/feature/0/buket_27.jpg', 'Buket irisa', 'Buket je napravljen sa žutim gerberima i plavim irisima koji su poput leptirića koji slete na mirisno lepo cveće. Iznenadite dragu osobu simpatičnim buketom i ulepšajte joj dan.', 1950, 0, 6, '2023-07-09 21:19:53', '2023-07-09 21:19:53'),
(3, 'https://www.cvecaralotos.rs/wp-content/uploads/2020/12/cvecara-pozarevac.jpg', 'Buket gerbera', 'Buket gerbera namenjen je samo za prave dame, one sa ukusom. Buket je pretežno sačinjen od roze gerbera, upotpunjuju ga i ruže, lizijantus, orjentalni ljiljan kao i sezonsko zelenilo. Dajte doznanja da vaša dama nikada nije sama.', 5200, 0, 4, '2023-07-09 21:19:53', '2023-07-09 21:19:53'),
(4, 'https://www.cvecarakazablanka.com/data/products/1323/feature/0/24_buket.jpg', 'Buket suncokreta', 'Buket je napravljen sa suncokretima koji su simbol sunčeve svetlosti i energije. Ukoliko želite da dragoj osobi ulepšate dan buketom veselih boja, pošaljite joj isti na kućnu adresu i izmamite joj osmeh na lice. ', 3850, 0, 1, '2023-07-09 21:19:53', '2023-07-09 21:19:53'),
(5, 'https://www.cvecaralotos.rs/wp-content/uploads/2021/03/grana-orhideje.jpg', 'Buket orhideja', 'Ukoliko je orhideja njeno omiljeno cveće, bez dileme ovo je buket za nju.', 3350, 0, 5, '2023-07-09 21:19:53', '2023-07-09 21:19:53'),
(6, 'https://www.cvecaralotos.rs/wp-content/uploads/2021/03/lale-u-torbi.jpg', 'Buket lala 1', 'Buket lala u našem prepoznatljivom pakovanju je favorit proleća. Buketom lala ćete savršeno preneti vašu istinsku ljubav, sreću i naklonost osobi kojoj ga darujete.', 1970, 0, 3, '2023-07-09 21:19:53', '2023-07-09 21:19:53'),
(7, 'https://cvecaraesperanca.rs/wp-content/uploads/2021/12/BC-14-5500.png', 'Buket lala 2', 'Početak proleća je teško zamisliti bez buketa lala na stolu. Posle dugih i hladnih dana, šarenilo boja, koje poseduje ova cvetna vrsta, nam unosi toplinu i vedrinu u domove.', 5500, 0, 3, '2023-07-09 21:19:53', '2023-07-09 21:19:53');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `name`, `email`, `message`, `created_at`, `updated_at`) VALUES
(1, 'Filip', 'filip123@gmail.com', 'Kada stizu novi aranzmani?', '2023-07-09 22:38:39', '2023-07-09 22:38:39'),
(2, 'Nikola', 'nikola@gmail.com', 'Da li isporucujete bukete i van drzave?', '2023-07-09 22:48:35', '2023-07-09 22:48:35'),
(3, 'Aleksa', 'aleksa@gmail.com', 'Koliko kosta dostava?', '2023-07-09 22:56:37', '2023-07-09 22:56:37');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_02_15_173333_create_messages_table', 1),
(6, '2023_06_24_234825_create_flowers_table', 1),
(7, '2023_06_24_234914_create_orders_table', 1),
(8, '2023_06_24_235328_create_order_items_table', 1),
(9, '2023_06_27_185522_add_users_column', 2),
(10, '2023_06_27_192140_create_categories_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `flower_id` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `flower_id`, `quantity`, `created_at`, `updated_at`) VALUES
(2, 12, 2, 3, '2023-07-10 19:44:24', '2023-07-10 19:44:24'),
(3, 12, 6, 3, '2023-07-10 19:44:24', '2023-07-10 19:44:24'),
(4, 12, 7, 3, '2023-07-11 11:44:05', '2023-07-11 11:44:05'),
(5, 12, 3, 2, '2023-07-11 11:44:05', '2023-07-11 11:44:05');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(37, 'App\\Models\\User', 13, 'auth_token', '02bc5973c3f285dd9ff636dc0a7bf058fc71d15604c7c533e9f2e791f4128972', '[\"*\"]', NULL, NULL, '2023-07-11 21:03:13', '2023-07-11 21:03:13'),
(38, 'App\\Models\\User', 12, 'filip123@gmail.com_Token', '787897405fee916d5a0afc315c7224bb68ec180e48003ad55515b0c28d457b5b', '[\"\"]', NULL, NULL, '2023-07-11 21:07:19', '2023-07-11 21:07:19'),
(39, 'App\\Models\\User', 12, 'filip123@gmail.com_Token', '95fde38caf9c12870c9ce0e822d218e4eb4ecc8bf7781db5597f5264b0b11664', '[\"\"]', NULL, NULL, '2023-07-11 21:13:04', '2023-07-11 21:13:04'),
(40, 'App\\Models\\User', 1, 'admin@gmail.com_AdminToken', '7bf4ca7647098675ed6bd80ed8ee391ab4bf12a1281574eec18722ae4262d71e', '[\"server:admin\"]', NULL, NULL, '2023-07-11 21:21:02', '2023-07-11 21:21:02'),
(41, 'App\\Models\\User', 12, 'filip123@gmail.com_Token', 'efea7a959c7cad4a2dc4edaf12edf1897305aa6e8d23ae64a5dfdb686aac068f', '[\"\"]', NULL, NULL, '2023-07-11 21:55:39', '2023-07-11 21:55:39'),
(42, 'App\\Models\\User', 12, 'filip123@gmail.com_Token', 'd98140c30afa10b37d923f0f81bb0cd407a200aa3b253dba50318c508b61bf7f', '[\"\"]', NULL, NULL, '2023-07-11 22:16:59', '2023-07-11 22:16:59');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '+38161 5424 9544',
  `birthdate` date NOT NULL DEFAULT '1987-04-06',
  `admin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `phone`, `birthdate`, `admin`) VALUES
(1, 'Admin', 'admin@gmail.com', NULL, '$2y$10$JOnbhTKzCq8RvT3Kf4YmKObbhyN9f3y.l4sbLsK9ZOL6LPs.WsSFC', NULL, '2023-07-09 21:19:52', '2023-07-09 21:19:52', '+38161 5424 9544', '1987-04-06', 1),
(2, 'Cindy Veum', 'janick.stoltenberg@example.net', '2023-07-09 21:19:52', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'qRSsmPeT0M', '2023-07-09 21:19:52', '2023-07-09 21:19:52', '+38161 5424 9544', '1987-04-06', 0),
(3, 'Yessenia Morar', 'jose59@example.com', '2023-07-09 21:19:52', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'ZEg7EhPAK2', '2023-07-09 21:19:52', '2023-07-09 21:19:52', '+38161 5424 9544', '1987-04-06', 0),
(4, 'Alayna Hoeger', 'fatima11@example.org', '2023-07-09 21:19:52', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'HQqNHz7lHQ', '2023-07-09 21:19:52', '2023-07-09 21:19:52', '+38161 5424 9544', '1987-04-06', 0),
(5, 'Ms. Vicenta Borer', 'heidenreich.russell@example.net', '2023-07-09 21:19:52', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'DgUknjxwBo', '2023-07-09 21:19:52', '2023-07-09 21:19:52', '+38161 5424 9544', '1987-04-06', 0),
(6, 'Prof. Forrest Labadie Sr.', 'tblanda@example.com', '2023-07-09 21:19:52', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'HB36TpdOoO', '2023-07-09 21:19:52', '2023-07-09 21:19:52', '+38161 5424 9544', '1987-04-06', 0),
(7, 'Dr. Nikolas Schultz Jr.', 'graham.elfrieda@example.net', '2023-07-09 21:19:52', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'yvR24QB792', '2023-07-09 21:19:52', '2023-07-09 21:19:52', '+38161 5424 9544', '1987-04-06', 0),
(8, 'Sofia Dooley', 'khalil14@example.com', '2023-07-09 21:19:52', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'GWVHM06nak', '2023-07-09 21:19:52', '2023-07-09 21:19:52', '+38161 5424 9544', '1987-04-06', 0),
(9, 'Marielle Schumm', 'lmayert@example.org', '2023-07-09 21:19:52', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'hmSBwspno9', '2023-07-09 21:19:52', '2023-07-09 21:19:52', '+38161 5424 9544', '1987-04-06', 0),
(10, 'Savanna Goodwin', 'morissette.janice@example.org', '2023-07-09 21:19:52', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'zH4wugiknV', '2023-07-09 21:19:52', '2023-07-09 21:19:52', '+38161 5424 9544', '1987-04-06', 0),
(11, 'Mr. Harmon Renner DDS', 'nfriesen@example.net', '2023-07-09 21:19:52', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'xoTa1a2Fo3', '2023-07-09 21:19:52', '2023-07-09 21:19:52', '+38161 5424 9544', '1987-04-06', 0),
(12, 'Filip', 'filip123@gmail.com', NULL, '$2y$10$X.5GVzHaqfRDlrcVCBZ4cupk.6sLezslJMyK.grCPR068bbSxrYyG', NULL, '2023-07-09 22:10:14', '2023-07-09 22:10:14', '+38161 5424 9544', '1987-04-06', 0),
(13, 'Nikola', 'nikola@gmail.com', NULL, '$2y$10$0Gj05rGOfANaZw.I5aLzteyk/Cym7yYKDx4Vv5zWmgG9mp/xQ/VrK', NULL, '2023-07-11 21:03:13', '2023-07-11 21:03:13', '+38161 5424 9544', '1987-04-06', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `flowers`
--
ALTER TABLE `flowers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `flowers`
--
ALTER TABLE `flowers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
