-- migrate:up
CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(200) NOT NULL,
  `kakao_id` varchar(200) UNIQUE NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `bookings` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `class_id` int NOT NULL,
  `user_id` int NOT NULL,
  CONSTRAINT `bookings_class_id_fk` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`),
  CONSTRAINT `bookings_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);

-- migrate:down
DROP TABLE users;
DROP TABLE bookings;
