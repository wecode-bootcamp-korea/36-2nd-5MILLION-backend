-- migrate:up
ALTER TABLE instructors ADD COLUMN name_en varchar(100) NOT NULL AFTER name;
ALTER TABLE users MODIFY kakao_id bigint NOT NULL;

-- migrate:down

