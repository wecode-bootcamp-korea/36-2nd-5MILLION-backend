-- migrate:up
CREATE TABLE `messages` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `reply` varchar(500) NOT NULL,
  `user_id` int NOT NULL,
  CONSTRAINT `messages_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);

-- migrate:down
DROP TABLE messages;