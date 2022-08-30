-- migrate:up
CREATE TABLE `class_types` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `level` varchar(100) NOT NULL
);

CREATE TABLE `class_media` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `class_image_url` varchar(2048),
  `class_video_url` varchar(2048),
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `instructors` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `profile_image_url` varchar(2048) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `classes` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `start_time` datetime UNIQUE NOT NULL,
  `end_time` datetime UNIQUE NOT NULL,
  `class_type_id` int NOT NULL,
  `instructor_id` int NOT NULL,
  `floor_id` int NOT NULL,
  `class_media_id` int,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT `classes_instructor_id_fk` FOREIGN KEY (`instructor_id`) REFERENCES `instructors` (`id`),
  CONSTRAINT `classes_class_type_id_fk` FOREIGN KEY (`class_type_id`) REFERENCES `class_types` (`id`),
  CONSTRAINT `classes_class_media_id_fk` FOREIGN KEY (`class_media_id`) REFERENCES `class_media` (`id`),
  CONSTRAINT `constraint_classes_unique` UNIQUE (`id`, `start_time`, `end_time`)
);

INSERT INTO class_types(id, level) values(1, 'easy'),(2, 'normal'),(3, 'hard');

-- migrate:down
DROP TABLE class_types;
DROP TABLE class_media;
DROP TABLE instructors;
DROP TABLE classes;