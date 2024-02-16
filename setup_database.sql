CREATE DATABASE IF NOT EXISTS hippocrat_db;
CREATE USER IF NOT EXISTS 'dami'@'localhost' IDENTIFIED BY 'Syzygy96';
GRANT ALL PRIVILEGES ON `hippocrat_db`.* TO 'dami'@'localhost';
GRANT SELECT ON  `performance_schema`.* TO 'dami'@'localhost';
FLUSH PRIVILEGES;