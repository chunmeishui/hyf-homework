CREATE DATABASE school DEFAULT CHARACTER SET = 'utf8mb4';
USE school;
-- Class: with the columns: id, name, begins (date), ends (date)
CREATE TABLE `Class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `begin_date` DATETIME NOT NULL,
  `end_date` DATETIME NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
-- Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE `Student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `class_id` INT(10) UNSIGNED,
  FOREIGN KEY (`class_id`) REFERENCES `Class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).







