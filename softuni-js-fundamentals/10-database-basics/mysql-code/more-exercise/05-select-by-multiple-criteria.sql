CREATE DATABASE `softuni`;

USE `softuni`;
CREATE TABLE `students` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`first_name` VARCHAR(50),
	`last_name` VARCHAR(50),
	`age` INT,
	`grade` DOUBLE
);


USE `softuni`;
INSERT INTO `students` (`id`, `first_name`, `last_name`, `age`, `grade`)
VALUES
(1, 'Guy', 'Gilbert', 15, 4.5),
(2, 'Kevin', 'Brown', 17, 5.4),
(3, 'Roberto', 'Tamburello', 19, 6),
(4, 'Linda', 'Smith', 18, 5),
(5, 'John', 'Stones', 16, 4.25),
(6, 'Nicole', 'Nelson', 17, 5.5);


/* USE 1 of the below commands to filter using  && or ||   */
/*  Comply with BOTH of the two criteria */
USE `softuni`;
SELECT * FROM `students`
WHERE `grade` > 4 AND `age` < 25;


/*  Comply with either of the two criteria */
USE `softuni`;
SELECT * FROM `students`
WHERE `grade` > 4 OR `age` < 25;
