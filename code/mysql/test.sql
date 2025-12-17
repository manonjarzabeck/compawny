-- Insérer des données
INSERT INTO compawny_dev.role
VALUES
    ( NULL, "admin"),
    ( NULL, "user")
;

-- admin@admin.fr / admin
-- user@user.fr / user
INSERT INTO compawny_dev.user
VALUES
    ( NULL, "admin@admin.fr", "$argon2i$v=19$m=16,t=2,p=1$SHhIaUptM256UXBtZjF3VA$0cfqFjyvBxio+CPnUL6wAg", 1 ),
    ( NULL, "user@user.fr", "$argon2i$v=19$m=16,t=2,p=1$QkhldHlvT0t5b2p1N3RIYQ$pb81ZXmGAiRMnHhcZIlSZQ", 2 )
;

INSERT INTO compawny_dev.country (id, name) VALUES
(1, 'France'),
(2, 'Belgium'),
(3, 'Switzerland'),
(4, 'Italy'),
(5, 'Spain'),
(6, 'Germany'),
(7, 'Netherlands'),
(8, 'Portugal'),
(9, 'Austria'),
(10, 'Poland'),
(11, 'Denmark'),
(12, 'Norway'),
(13, 'Sweden'),
(14, 'Ireland'),
(15, 'Finland')
;


-- INSERT INTO compawny_dev.country
-- VALUES 
--     ( NULL, "France" ),
--     ( NULL, "Australie" ),
--     ( NULL, "Belgique" ),
--     ( NULL, "Suisse" ),
--     ( NULL, "Portugal" ),
--     ( NULL, "Espagne" ),
--     ( NULL, "Pologne" ),
--     ( NULL, "Maroc" ),
--     ( NULL, "Afrique du Sud" ),
--     ( NULL, "Norvège" ),
-- ;

INSERT INTO compawny_dev.species (id, name) VALUES
(1, 'Dog'),
(2, 'Cat'),
(3, 'Rabbit'),
(4, 'Bird'),
(5, 'Hamster'),
(6, 'Guinea Pig'),
(7, 'Horse'),
(8, 'Turtle'),
(9, 'Ferret'),
(10, 'Goat'),
(11, 'Duck'),
(12, 'Sheep'),
(13, 'Hedgehog'),
(14, 'Lizard'),
(15, 'Snake')
;


-- INSERT INTO compawny_dev.species
-- VALUES
--     ( NULL, "Chat"),
--     ( NULL, "Chien"),
--     ( NULL, "Lapin"),
--     ( NULL, "Oiseau"),
--     ( NULL, "Rongeur"),
--     ( NULL, "Reptile"),
--     ( NULL, "Poisson"),
--     ( NULL, "Furet"),
--     ( NULL, "Cheval"),
--     ( NULL, "Chèvre")
-- ;


INSERT INTO compawny_dev.asso
(id, name, image, description, siteweb, address, country_id) VALUES
(1, 'Les Pattes du Cœur', 'asso1.jpg', 'Refuge spécialisé dans les chiens abandonnés.', 'https://pattesducoeur.fr', '12 Rue des Animaux, Paris', 1),
(2, 'Chats & Co', 'asso2.jpg', 'Association dédiée à la prise en charge des chats errants.', 'https://chatsandco.be', '27 Rue des Fleurs, Bruxelles', 2),
(3, 'Refuge Arc-en-Ciel', 'asso3.jpg', 'Refuge multi-espèces pour animaux blessés.', 'https://arcenciel.ch', '5 Chemin des Prés, Genève', 3),
(4, 'Amici Animali', 'asso4.jpg', 'Sauvetage d’animaux domestiques.', 'https://amicianimali.it', '9 Via Roma, Milan', 4),
(5, 'Vida Animal', 'asso5.jpg', 'Protection animale en Espagne.', 'https://vidaanimal.es', '21 Calle Sol, Madrid', 5),
(6, 'Tierfreund Haus', 'asso6.jpg', 'Refuge allemand pour animaux âgés.', 'https://tierfreund.de', '4 Tierstrasse, Berlin', 6),
(7, 'Animal Haven NL', 'asso7.jpg', 'Refuge écolo pour animaux abandonnés.', 'https://animalhaven.nl', '3 Havenweg, Amsterdam', 7),
(8, 'Patas Felizes', 'asso8.jpg', 'Association portugaise de sauvetage.', 'https://patasfelizes.pt', '8 Rua Azul, Lisbonne', 8),
(9, 'TierWelt', 'asso9.jpg', 'Refuge en Autriche.', 'https://tierwelt.at', '17 Tiergasse, Vienne', 9),
(10, 'Zwierzaki Dom', 'asso10.jpg', 'Protection animale en Pologne.', 'https://zwierzaki.pl', '33 Ul. Kwiatowa, Varsovie', 10),
(11, 'Nordic Pattes', 'asso11.jpg', 'Refuge danois moderne.', 'https://nordicpattes.dk', '6 Havnegade, Copenhague', 11),
(12, 'DyreHjelp', 'asso12.jpg', 'Centre norvégien de soin animal.', 'https://dyrehjelp.no', '4 Fjordvei, Oslo', 12),
(13, 'Svenska Paws', 'asso13.jpg', 'Association suédoise pour animaux.', 'https://svenskapaws.se', '19 Björkgatan, Stockholm', 13),
(14, 'Irish Animal Care', 'asso14.jpg', 'Refuge en Irlande.', 'https://irishanimal.ie', '2 Green Road, Dublin', 14),
(15, 'Suomi Friends', 'asso15.jpg', 'Refuge finlandais.', 'https://suomifriends.fi', '9 Snow Street, Helsinki', 15)
;

-- INSERT INTO compawny_dev.asso
-- VALUES 
--     ( NULL, "la SPA de Gennevilliers", "IMG_SPA_GENEVILLIERS.jpeg", "
-- Horaires :

-- Ouvert aux visites pour adoption uniquement. Prévoir d'arriver au moins 2 heures avant la fermeture.
-- - Lundi, Mercredi & Vendredi : de 13h à 17h
-- - Samedi & Dimanche : de 10h à 17h
-- - Mardi & Jeudi : fermé", "https://www.la-spa.fr/etablissement/refuge-spa-de-gennevilliers-grammont/", "117 119 121 avenue Marcel Paul
-- 92230 Gennevilliers", 1 )
-- ;

INSERT INTO compawny_dev.action
(id, name, image, description, published, is_active, asso_id) VALUES
(1, 'Journée Adoption Chiens', 'a1.jpg', 'Événement adoption chiens.', '2025-01-10 10:00:00', 1, 1),
(2, 'Collecte Croquettes', 'a2.jpg', 'Collecte pour refuges.', '2025-01-15 09:00:00', 1, 2),
(3, 'Soins Animaux', 'a3.jpg', 'Séance vétérinaire gratuite.', '2025-01-11 11:00:00', 1, 3),
(4, 'Marche Solidaire', 'a4.jpg', 'Randonnée caritative.', '2025-01-12 08:00:00', 1, 4),
(5, 'Atelier Chiots', 'a5.jpg', 'Atelier éducation canine.', '2025-01-18 14:00:00', 1, 5),
(6, 'Séance Vaccination', 'a6.jpg', 'Vaccination solidaire.', '2025-01-16 13:00:00', 1, 6),
(7, 'Distribution Couvertures', 'a7.jpg', 'Aide animaux l’hiver.', '2025-01-22 15:00:00', 1, 7),
(8, 'Formation Bénévoles', 'a8.jpg', 'Formations bénévoles.', '2025-01-20 10:00:00', 1, 8),
(9, 'Collecte Jouets', 'a9.jpg', 'Jouets pour animaux.', '2025-01-25 09:00:00', 1, 9),
(10, 'Sauvetage Urgent', 'a10.jpg', 'Mission de sauvetage.', '2025-01-14 17:00:00', 1, 10),
(11, 'Journée Adoptions Chats', 'a11.jpg', 'Rencontre chats.', '2025-01-08 10:00:00', 1, 11),
(12, 'Visite Refuge', 'a12.jpg', 'Portes ouvertes.', '2025-01-05 09:00:00', 1, 12),
(13, 'Atelier Enfants', 'a13.jpg', 'Découverte des animaux.', '2025-01-30 13:00:00', 1, 13),
(14, 'Stand Marché', 'a14.jpg', 'Stand associatif.', '2025-01-28 11:00:00', 1, 14),
(15, 'Expo Photos', 'a15.jpg', 'Photos adoption réussies.', '2025-02-01 16:00:00', 1, 15)
;


INSERT INTO compawny_dev.user_action (user_id, action_id) VALUES
(1, 1),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(2, 6),
(1, 7),
(2, 8),
(2, 9),
(2, 10),
(1, 11),
(1, 12),
(2, 13),
(2, 14),
(2, 15);


-- INSERT INTO compawny_dev.action
-- (id, name, image, description, published, is_active, asso_id) VALUES
-- (1, 'Journée Adoption Chiens', 'a1.jpg', 'Événement adoption chiens.', '2025-01-10 10:00:00', 1, 1),
-- (2, 'Collecte Croquettes', 'a2.jpg', 'Collecte pour refuges.', '2025-01-15 09:00:00', 1, 2),
-- (3, 'Soins Animaux', 'a3.jpg', 'Séance vétérinaire gratuite.', '2025-01-11 11:00:00', 1, 3),
-- (4, 'Marche Solidaire', 'a4.jpg', 'Randonnée caritative.', '2025-01-12 08:00:00', 1, 4),
-- (5, 'Atelier Chiots', 'a5.jpg', 'Atelier éducation canine.', '2025-01-18 14:00:00', 1, 5),
-- (6, 'Séance Vaccination', 'a6.jpg', 'Vaccination solidaire.', '2025-01-16 13:00:00', 1, 6),
-- (7, 'Distribution Couvertures', 'a7.jpg', 'Aide animaux l’hiver.', '2025-01-22 15:00:00', 1, 7),
-- (8, 'Formation Bénévoles', 'a8.jpg', 'Formations bénévoles.', '2025-01-20 10:00:00', 1, 8),
-- (9, 'Collecte Jouets', 'a9.jpg', 'Jouets pour animaux.', '2025-01-25 09:00:00', 1, 9),
-- (10, 'Sauvetage Urgent', 'a10.jpg', 'Mission de sauvetage.', '2025-01-14 17:00:00', 1, 10),
-- (11, 'Journée Adoptions Chats', 'a11.jpg', 'Rencontre chats.', '2025-01-08 10:00:00', 1, 11),
-- (12, 'Visite Refuge', 'a12.jpg', 'Portes ouvertes.', '2025-01-05 09:00:00', 1, 12),
-- (13, 'Atelier Enfants', 'a13.jpg', 'Découverte des animaux.', '2025-01-30 13:00:00', 1, 13),
-- (14, 'Stand Marché', 'a14.jpg', 'Stand associatif.', '2025-01-28 11:00:00', 1, 14),
-- (15, 'Expo Photos', 'a15.jpg', 'Photos adoption réussies.', '2025-02-01 16:00:00', 0, 15);


INSERT INTO compawny_dev.animal
(id, name, picture, arrival, asso_id, species_id) VALUES
(1, 'Rex', 'rex.jpg', '2025-01-10', 1, 1),
(2, 'Misty', 'misty.jpg', '2025-01-12', 2, 2),
(3, 'Caramel', 'caramel.jpg', '2025-01-05', 3, 3),
(4, 'Pico', 'pico.jpg', '2025-01-08', 4, 4),
(5, 'Luna', 'luna.jpg', '2025-01-15', 5, 5),
(6, 'Biscuit', 'biscuit.jpg', '2025-01-18', 6, 6),
(7, 'Tornado', 'tornado.jpg', '2025-01-20', 7, 7),
(8, 'Shelly', 'shelly.jpg', '2025-01-14', 8, 8),
(9, 'Bandit', 'bandit.jpg', '2025-01-11', 9, 9),
(10, 'Bella', 'bella.jpg', '2025-01-17', 10, 10),
(11, 'Quack', 'quack.jpg', '2025-01-19', 11, 11),
(12, 'Fluffy', 'fluffy.jpg', '2025-01-09', 12, 12),
(13, 'Spike', 'spike.jpg', '2025-01-06', 13, 13),
(14, 'Zazu', 'zazu.jpg', '2025-01-07', 14, 14),
(15, 'Viper', 'viper.jpg', '2025-01-16', 15, 15);


-- INSERT INTO compawny_dev.animal
-- VALUES
--     ( NULL, "Cookie", "Cookie_picture.jpeg", "2025-10-08", 1, 2 ),
--     ( NULL, "Gipsy", "Gipsy_picture.jpeg", "2025-08-22", 1, 2 )
-- ;

-- -- Transaction SQL 
-- START TRANSACTION;

-- -- Requête 1
-- INSERT INTO compawny_dev.action
-- VALUES (NULL, "Promener les chiens", "promenade.jpeg", "Pourquoi promener un chien", "2025-10-22 11:04:12", true, 1 )
-- ; 

-- -- variable qui stocke le dernier id inséré
-- SET @actionuser_id = LAST_INSERT_ID();

-- -- Requête 2
-- INSERT INTO compawny_dev.user_action
-- VALUES 
--     (1, @actionuser_id),
--     (2, @actionuser_id)
-- ;

-- COMMIT;

-- mettre à jour un enregistrement 
-- UPDATE compawny_dev.animal
-- SET animal.name = "Roxy"
-- WHERE animal.id = 1
-- ;

-- supprimer un enregistrement 
-- DELETE FROM compawny_dev.animal
-- WHERE animal.id = 2
-- ;

-- sélectionner toutes les colonnes d'une table 
-- SELECT action.* 
-- SELECT country.name
-- FROM compawny_dev.asso

-- START TRANSACTION;

-- DELETE FROM compawny_dev.user_action
-- WHERE user_action.action_id = 1;

-- DELETE FROM compawny_dev.action
-- WHERE action.id = 1;

-- COMMIT; 