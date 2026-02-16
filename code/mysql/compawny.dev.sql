-- supprimer la base de données si elle existe 
-- ATTENTION, ne pas faire en production
DROP DATABASE IF EXISTS compawny_dev;

-- Créer la base de données
CREATE DATABASE compawny_dev; 

-- Créer les tables 
CREATE TABLE compawny_dev.role(
    id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE compawny_dev.user(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(150) NOT NULL,
    role_id TINYINT(1) UNSIGNED NOT NULL,
    FOREIGN KEY (role_id) REFERENCES compawny_dev.role(id),
    INDEX (email)
 );

CREATE TABLE compawny_dev.country(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE compawny_dev.department(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE compawny_dev.species(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE compawny_dev.association(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    image VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    website VARCHAR(100) NOT NULL,
    address VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    is_international BOOLEAN NOT NULL,
    country_id TINYINT UNSIGNED NOT NULL,
    department_id TINYINT UNSIGNED NULL,
    FOREIGN KEY (country_id) REFERENCES compawny_dev.country(id),
    FOREIGN KEY (department_id) REFERENCES compawny_dev.department(id),
    INDEX(name)
    );

CREATE TABLE compawny_dev.action(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    image VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    published DATE NOT NULL,
    is_active BOOLEAN NOT NULL,
    association_id TINYINT UNSIGNED NOT NULL,
    FOREIGN KEY (association_id) REFERENCES compawny_dev.association(id),
    INDEX(name)
    );

CREATE TABLE compawny_dev.animal(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    image VARCHAR(50) NOT NULL, 
    arrival DATE NOT NULL,
    description TEXT NOT NULL,
    is_adoptable BOOLEAN NOT NULL,
    association_id TINYINT UNSIGNED NOT NULL,
    species_id TINYINT UNSIGNED NOT NULL,
    FOREIGN KEY (association_id) REFERENCES compawny_dev.association(id),
    FOREIGN KEY (species_id) REFERENCES compawny_dev.species(id),
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