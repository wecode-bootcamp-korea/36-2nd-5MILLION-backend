-- migrate:up
CREATE TABLE `floors` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `floor` varchar(50) NOT NULL
);

CREATE TABLE `floor_class` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `floor_id` int NOT NULL,
  `class_id` int NOT NULL,
  CONSTRAINT `floor_class_class_id_fk` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`),
  CONSTRAINT `floor_class_floor_id_fk` FOREIGN KEY (`floor_id`) REFERENCES `floors` (`id`)
);

INSERT INTO floors(id, floor) values(1, '1F'),(2, '2F');

-- migrate:down
DROP TABLE floors;
DROP TABLE floor_class;