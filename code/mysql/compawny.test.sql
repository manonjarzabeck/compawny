-- supprimer la base de données si elle existe 
-- ATTENTION, ne pas faire en production
DROP DATABASE IF EXISTS compawny_test;

-- Créer la base de données
CREATE DATABASE compawny_test; 

-- Créer les tables 
CREATE TABLE compawny_test.role(
    id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE compawny_test.user(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(150) NOT NULL,
    role_id TINYINT(1) UNSIGNED NOT NULL,
    FOREIGN KEY (role_id) REFERENCES compawny_test.role(id),
    INDEX (email)
 );

CREATE TABLE compawny_test.country(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE compawny_test.department(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE compawny_test.species(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE compawny_test.association(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    introduction VARCHAR(200) NULL,
    image VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    website VARCHAR(100) NOT NULL,
    address VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    is_international BOOLEAN NOT NULL,
    latitude DECIMAL(9,6) NOT NULL,
    longitude DECIMAL(9,6) NOT NULL,
    country_id TINYINT UNSIGNED NOT NULL,
    department_id TINYINT UNSIGNED NULL,
    FOREIGN KEY (country_id) REFERENCES compawny_test.country(id),
    FOREIGN KEY (department_id) REFERENCES compawny_test.department(id),
    INDEX(name)
    );

CREATE TABLE compawny_test.action(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    image VARCHAR(50) NULL,
    description TEXT NOT NULL,
    published DATE NULL,
    is_active BOOLEAN NOT NULL,
    association_proposal VARCHAR(100) NULL,
    source ENUM('admin','visitor') NOT NULL DEFAULT 'admin',
    association_id TINYINT UNSIGNED NULL,
    FOREIGN KEY (association_id) REFERENCES compawny_test.association(id),
    INDEX(name)
    );


CREATE TABLE compawny_test.user_action (
    user_id TINYINT UNSIGNED NOT NULL,
    action_id TINYINT UNSIGNED NOT NULL,
    PRIMARY KEY (user_id, action_id),
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (action_id) REFERENCES action(id)
);


CREATE TABLE compawny_test.animal(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    image VARCHAR(50) NOT NULL, 
    arrival DATE NOT NULL,
    description TEXT NOT NULL,
    is_adoptable BOOLEAN NOT NULL,
    association_id TINYINT UNSIGNED NOT NULL,
    species_id TINYINT UNSIGNED NOT NULL,
    FOREIGN KEY (association_id) REFERENCES compawny_test.association(id),
    FOREIGN KEY (species_id) REFERENCES compawny_test.species(id),
    INDEX(name)
);



-- SELECT 
			-- ${this.table}.*,
			-- GROUP_CONCAT(user.id) AS user.ids
            -- FROM 
			-- ${process.env.MYSQL_DATABASE}.${this.table}
			-- JOIN 
			-- ${process.env.MYSQL_DATABASE}.user_action
			-- ON
			-- user_action.action_id = action_id
			-- JOIN 
			-- ${process.env.MYSQL_DATABASE}.user
			-- ON
			-- user.id = user_action.user_id
			-- GROUP BY
			-- ${this.table}.id
			-- ;