-- supprimer la base de données si elle existe 
-- ATTENTION, ne pas faire en production
DROP DATABASE IF EXISTS coeurdecompagnon_dev;

-- Créer la base de données
CREATE DATABASE coeurdecompagnon_dev; 

-- Créer les tables 
CREATE TABLE coeurdecompagnon_dev.role(
    id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(50) NOT NULL UNIQUE
    );

CREATE TABLE coeurdecompagnon_dev.user(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(150) NOT NULL,
    role_id TINYINT(1) UNSIGNED NOT NULL,
    FOREIGN KEY user(role_id) REFERENCES coeurdecompagnon_dev.role(id),
    INDEX (email)
    );

CREATE TABLE coeurdecompagnon_dev.country(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE coeurdecompagnon_dev.species(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE coeurdecompagnon_dev.asso(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    image VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    siteweb VARCHAR(100) NOT NULL,
    address VARCHAR(150) NOT NULL,
    country_id TINYINT UNSIGNED NOT NULL,
    FOREIGN KEY (country_id) REFERENCES coeurdecompagnon_dev.country(id),
    INDEX(name)
    );

CREATE TABLE coeurdecompagnon_dev.action(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    image VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    published DATETIME NOT NULL,
    is_active BOOLEAN NOT NULL,
    asso_id TINYINT UNSIGNED NOT NULL,
    FOREIGN KEY action(asso_id) REFERENCES coeurdecompagnon_dev.asso(id),
    INDEX(name)
    );

CREATE TABLE coeurdecompagnon_dev.user_action(
    user_id TINYINT UNSIGNED NOT NULL,
    action_id TINYINT UNSIGNED NOT NULL,
    FOREIGN KEY (user_id) REFERENCES coeurdecompagnon_dev.user(id),
    FOREIGN KEY (action_id) REFERENCES coeurdecompagnon_dev.action(id),
    PRIMARY KEY (user_id, action_id)
    );

CREATE TABLE coeurdecompagnon_dev.animal(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    picture VARCHAR(50) NOT NULL,
    arrival DATE NOT NULL,
    asso_id TINYINT UNSIGNED NOT NULL,
    species_id TINYINT UNSIGNED NOT NULL,
    FOREIGN KEY (asso_id) REFERENCES coeurdecompagnon_dev.asso(id),
    FOREIGN KEY (species_id) REFERENCES coeurdecompagnon_dev.species(id),
    INDEX(name)
);


-- Insérer des données
INSERT INTO coeurdecompagnon_dev.role
VALUES
    ( NULL, "admin"),
    ( NULL, "user")
;

-- admin@admin.fr / admin
-- user@user.fr / user
INSERT INTO coeurdecompagnon_dev.user
VALUES
    ( NULL, "admin@admin.fr", "$argon2i$v=19$m=16,t=2,p=1$SHhIaUptM256UXBtZjF3VA$0cfqFjyvBxio+CPnUL6wAg", 1 ),
    ( NULL, "user@user.fr", "$argon2i$v=19$m=16,t=2,p=1$QkhldHlvT0t5b2p1N3RIYQ$pb81ZXmGAiRMnHhcZIlSZQ", 2 )
;

INSERT INTO coeurdecompagnon_dev.country
VALUES 
    ( NULL, "France" ),
    ( NULL, "Australie" )
;

INSERT INTO coeurdecompagnon_dev.species
VALUES
    ( NULL, "Golden Retriever"),
    ( NULL, "Chihuahua"),
    ( NULL, "Bouledogue Français")
;

INSERT INTO coeurdecompagnon_dev.asso
VALUES 
    ( NULL, "la SPA de Gennevilliers", "IMG_SPA_GENEVILLIERS.jpeg", "
Horaires :

Ouvert aux visites pour adoption uniquement. Prévoir d'arriver au moins 2 heures avant la fermeture.
- Lundi, Mercredi & Vendredi : de 13h à 17h
- Samedi & Dimanche : de 10h à 17h
- Mardi & Jeudi : fermé", "https://www.la-spa.fr/etablissement/refuge-spa-de-gennevilliers-grammont/", "117 119 121 avenue Marcel Paul
92230 Gennevilliers", 1 )
;

INSERT INTO coeurdecompagnon_dev.animal
VALUES
    ( NULL, "Cookie", "Cookie_picture.jpeg", "2025-10-08", 1, 2 ),
    ( NULL, "Gipsy", "Gipsy_picture.jpeg", "2025-08-22", 1, 2 )
;

-- Transaction SQL 
START TRANSACTION;

-- Requête 1
INSERT INTO coeurdecompagnon_dev.action
VALUES (NULL, "Promener les chiens", "promenade.jpeg", "Pourquoi promener un chien", "2025-10-22 11:04:12", true, 1 )
; 

-- variable qui stocke le dernier id inséré
SET @actionuser_id = LAST_INSERT_ID();

-- Requête 2
INSERT INTO coeurdecompagnon_dev.user_action
VALUES 
    (1, @actionuser_id),
    (2, @actionuser_id)
;

COMMIT;

-- mettre à jour un enregistrement 
-- UPDATE coeurdecompagnon_dev.animal
-- SET animal.name = "Roxy"
-- WHERE animal.id = 1
-- ;

-- supprimer un enregistrement 
-- DELETE FROM coeurdecompagnon_dev.animal
-- WHERE animal.id = 2
-- ;

-- sélectionner toutes les colonnes d'une table 
-- SELECT action.* 
-- SELECT country.name
-- FROM coeurdecompagnon_dev.asso

START TRANSACTION;

DELETE FROM coeurdecompagnon_dev.user_action
WHERE user_action.action_id = 1;

DELETE FROM coeurdecompagnon_dev.action
WHERE action.id = 1;

COMMIT;