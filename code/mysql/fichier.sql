-- Insérer des données
INSERT INTO compawny_dev.role (name)
VALUES
    ('admin'),
    ('user')
;

-- admin@admin.fr / admin
-- user@user.fr / user
INSERT INTO compawny_dev.user (email, password, role_id)
VALUES
    ('admin@admin.fr', '$argon2i$v=19$m=16,t=2,p=1$SHhIaUptM256UXBtZjF3VA$0cfqFjyvBxio+CPnUL6wAg', 1),
    ('user@user.fr', '$argon2i$v=19$m=16,t=2,p=1$QkhldHlvT0t5b2p1N3RIYQ$pb81ZXmGAiRMnHhcZIlSZQ', 2)
;

INSERT INTO compawny_dev.country (id, name) VALUES
(1, 'France'),
(2, 'Afrique du Sud'),
(3, 'Australie'),
(4, 'Canada'),
(5, 'Thaïlande'),
(6, 'Kenya'),
(7, 'Brésil'),
(8, 'Japon'),
(9, 'Nouvelle Zélande'),
(10, 'Inde'),
(11, 'Espagne')
;

INSERT INTO compawny_dev.species (id, name) VALUES
( 1 , 'Chien'),
( 2 , 'Chat'),
( 3 , 'Lapin'),
( 4 , 'Perruche'),
( 5 , 'Hamster'),
( 6 , 'Cochon d''Inde'),
( 7 , 'Cheval'),
( 8 , 'Tortue'),
( 9 , 'Furet'),
( 10 , 'Chèvre'),
( 11 , 'Canard'),
( 12 , 'Poule')
;

INSERT INTO compawny_dev.asso
(id, name, image, description, siteweb, address, country_id) VALUES
(1, 'Les Pattes du Cœur', 'asso1.jpg', 'Refuge spécialisé dans les chiens abandonnés.', 'https://pattesducoeur.fr', '12 Rue des Animaux, Paris', 1),
(2, 'SPA France', 'spa_france.jpg', 'Organisation de protection animale majeure en France spécialisée dans l’adoption de chiens et chats.', 'https://spa.fr', '39 Boulevard Berthier, 75017 Paris', 1),
(3, 'Refuge Les Pattes du Sud', 'pattes_du_sud.jpg', 'Refuge accueillant chiens et chats abandonnés et organisant des actions solidaires régionales.', 'https://pattesdusud.fr', '17 Chemin de la Garrigue, 13009 Marseille', 1),
(4, 'Chats des Monts', 'chats_des_monts.jpg', 'Petite association dédiée au sauvetage, soins et à l’adoption de chats errants.', 'https://chatsdesmonts.fr', '12 Rue des Érables, 63000 Clermont-Ferrand', 1),
(5, 'L''Écurie des Sans Voix', 'ecurie_sans_voix.jpg', 'Sanctuaire pour chevaux, ânes et poneys issus de maltraitance ou abandonnés.', 'https://ecuriedessansvoix.fr', 'Route de la Ferme, 74000 Annecy', 1),
(6, 'NAC & Co', 'nac_co.jpg', 'Association spécialisée dans le sauvetage et en adoption de NAC (lapins, cochons d’Inde, rats, reptiles).', 'https://nacandco.fr', '5 Allée des Tilleuls, 69007 Lyon', 1),
(7, 'Mil Patitas', 'mil_patitas.jpg', 'Refuge franco-espagnol recevant chiens de chasse et chiens errants.', 'https://milpatitas.fr', '24 Rue de la Gare, 64100 Bayonne', 1),
(8, 'Les Rongeurs Heureux', 'rongeurs_heureux.jpg', 'Association consacrée aux lapins, cochons d’Inde et petits rongeurs abandonnés.', 'https://rongeursheureux.fr', '22 Rue des Jardins, 35000 Rennes', 1),
(9, 'La Cabane des Minous', 'cabane_minous.jpg', 'Refuge indépendant spécialisé dans le placement de chats sociables et craintifs.', 'https://cabanedesminous.fr', '9 Bis Rue du Port, 17000 La Rochelle', 1),
(10, 'Les Ailes Libres', 'ailes_libres.jpg', 'Sanctuaire recueillant oiseaux exotiques et perruches issues de particuliers.', 'https://ailes-libres.fr', '10 Chemin des Pins, 34000 Montpellier', 1),
(11, 'Les Animaux de la Vallée', 'animaux_vallee.jpg', 'Refuge rural multi espèces accueillant chiens, chats, poules et chèvres.', 'https://animauxdelavallee.fr', 'Lieu-dit La Prairie, 88000 Épinal', 1),
(12, 'Chevaux Solidaires Ouest', 'chevaux_solidaires.jpg', 'Association spécialisée dans la retraite et la rééducation de chevaux.', 'https://chevaux-solidaires-ouest.fr', 'Route du Haras, 56000 Vannes', 1),
(13, 'L''Arche des Chiens du Nord', 'arche_chiens_nord.jpg', 'Petite structure familiale traitant les abandons canins et adoptions responsables.', 'https://archedeschiensnord.fr', 'Rue des Acacias, 59000 Lille', 1),
(14, 'SOS NAC Bourgogne', 'sos_nac_bourgogne.jpg', 'Protection et adoption de NAC issus de sauvetages et abandonnés.', 'https://sosnacbourgogne.fr', '18 Rue du Centre, 21000 Dijon', 1),
(15, 'Liberté à Plumes', 'liberte_plumes.jpg', 'Sanctuaire recueillant poules de batteries, canards et oies rescapées.', 'https://liberteaplumes.fr', 'Ferme des P''tits Bois, 45000 Orléans', 1),
(16, 'Chiens & Coeur', 'chiens_coeur.jpg', 'Association canine œuvrant pour l’adoption, l’éducation positive et la prévention des abandons.', 'https://chiensetcoeur.fr', '14 Avenue du Parc, 33000 Bordeaux', 1),
(17, 'Primate Rescue Centre', 'primate_rescue.jpg', 'Basée en Afrique du Sud, cette association se consacre à la réhabilitation et la protection des singes et primates. Vous pouvez soutenir leurs actions en faisant un don ou en devenant bénévole sur place pour participer aux soins et à l’éducation des primates.', 'https://primate-rescue.co.za', 'R448, Franschhoek, Western Cape', 2),
(18, 'Koala Haven', 'koala_haven.jpg', 'Située en Australie, Koala Haven protège et soigne les koalas blessés ou orphelins. Les bénévoles aident aux soins des animaux et à la sensibilisation du public sur la conservation des koalas.', 'https://koala-haven.org.au', '12 Koala Street, Queensland', 3),
(19, 'Arctic Wildlife Foundation', 'arctic_wildlife.jpg', 'Au Canada, cette fondation travaille à la protection des ours polaires et de la faune arctique. Les actions incluent la recherche, la conservation et l’éducation des communautés locales. Des programmes de volontariat sont ouverts aux passionnés de la nature.', 'https://arcticwildlife.ca', '45 Northern Lights Ave, Nunavut', 4),
(20, 'Elephant Nature Park', 'elephant_park.jpg', 'En Thaïlande, cet établissement accueille et soigne les éléphants sauvés de situations difficiles. Les bénévoles participent aux soins quotidiens, à l’entretien des enclos et à la sensibilisation des visiteurs.', 'https://elephantnaturepark.org', '209/2 Sritham, Chiang Mai', 5),
(21, 'David Sheldrick Wildlife Trust', 'sheldrick_wildlife.jpg', 'Au Kenya, cette association protège les éléphants et les rhinocéros. Les bénévoles peuvent participer à la surveillance des animaux et soutenir les programmes éducatifs et de réintroduction.', 'https://sheldrickwildlifetrust.org', 'Nairobi, Kenya', 6),
(22, 'Instituto de Animais da Amazônia', 'amazonia_animals.jpg', 'Au Brésil, l’association s’occupe de la conservation des espèces menacées de la forêt amazonienne. Bénévoles et donateurs peuvent soutenir la protection des jaguars, singes et oiseaux exotiques.', 'https://iaamazonia.org.br', 'Av. Amazonas 122, Manaus', 7),
(23, 'Japan Wildlife Center', 'japan_wildlife.jpg', 'Au Japon, cette association se concentre sur la protection des espèces locales et menacées comme les tanukis et les macaques japonais. Les bénévoles participent à l’entretien, aux soins et à l’éducation environnementale.', 'https://japanwildlife.jp', '3 Chuo, Tokyo', 8),
(24, 'Kiwi Conservation Society', 'kiwi_conservation.jpg', 'En Nouvelle-Zélande, la Kiwi Conservation Society veille à la protection des kiwis et autres oiseaux indigènes. Les volontaires aident à la surveillance, au suivi des nids et aux actions pédagogiques auprès des visiteurs.', 'https://kiwiconservation.org.nz', '12 Feather Rd, Wellington', 9),
(25, 'Wildlife SOS India', 'wildlife_sos.jpg', 'En Inde, cette association sauve et réhabilite des espèces comme les éléphants, ours et reptiles. Les bénévoles peuvent aider aux soins, à la surveillance et aux programmes éducatifs.', 'https://wildlifesos.org', '13 Conservation Lane, Delhi', 10),
(26, 'Fundación Fauna Ibérica', 'fauna_iberica.jpg', 'En Espagne, cette association se concentre sur la conservation des animaux indigènes menacés comme le lynx ibérique et l’aigle royal. Les actions incluent la réintroduction, la surveillance et la sensibilisation du public.', 'https://faunaiberica.es', 'Calle de la Naturaleza 5, Madrid', 11)
;

INSERT INTO compawny_dev.action
(id, name, image, description, is_active, asso_id) VALUES
( 1 , 'Journée Adoption Chiens', 'a1.jpg', 'Tous les samedis, venez au refuge rencontrer des chiens adorables et peut-être adopter votre futur compagnon ! Des journées pleines de câlins et de rencontres.', 1, 1),
( 2 , 'Randonnée Solidaire', 'a4.jpg', 'Tous les dimanches, l’association  organise une marche conviviale pour soutenir les refuges et sensibiliser autour du bien-être animal. Venez avec vos compagnons ! Départ à 14h.', 1, 2),
( 3 , 'Collecte de Croquettes', 'a2.jpg', 'Aidez les refuges locaux en collectant des croquettes pour les chiens et chats en attente d’adoption. ', 1, 3),
( 4 , 'Sauvetage et Premiers Soins', 'a10.jpg', 'Rejoignez une mission de sauvetage pour animaux blessés ou abandonnés et participez aux premiers soins. Des journées spéciales sont organisées tout au long de l’année.', 1, 4),
( 5 , 'Expo Photos Adoption', 'a15.jpg', 'Participez à l’exposition photos présentant les chevaux, les ânes et les poneys recueillis et leur nouvelle vie.', 1, 5),
( 6 , 'Atelier Découverte pour Enfants', 'a13.jpg', 'Initiez les enfants au monde animal et à l’importance de prendre soin des animaux.', 1, 6),
( 7 , 'Collecte de couvertures', 'a7.jpg', 'Votre refuge à besoin de couvertures chaudes pour les animaux en hiver.', 1, 7),
( 8 , 'Stand Associatif Marché', 'a14.jpg', 'Rejoignez-nous sur le marché local pour présenter les actions du refuge et récolter des dons.', 1, 8),
( 9 , 'Journée Adoptions Chats', 'a11.jpg', 'Tous les samedis, venez rencontrer des chats à adopter et partager un moment de douceur avec eux.', 1, 9),
( 10 , 'Collecte de Matériel', 'a19.jpg', 'Rassemblez des accessoires, couvertures ou paniers pour les animaux en refuge.', 1, 9),
( 11 , 'Soins aux oiseaux exotiques', 'a18.jpg', 'Aidez à nourrir, nettoyer leurs habitats et jouer avec les oiseaux exotiques pour leur bien-être.', 1, 10),
( 12 , 'Formation Bénévoles', 'a8.jpg', 'Participez à une formation pour devenir bénévole efficace au sein d’une association ou d’un refuge.', 1, 11),
( 13 , 'Collecte de Jouets', 'a9.jpg', 'Apportez des jouets pour animaux afin d’égayer le quotidien des chiens, chats et NAC en refuge.', 1, 11),
( 14 , 'Nettoyage des Box', 'a17.jpg', 'Aidez le refuge en nettoyant les box, en préparant les espaces de vie de chevaux et en passant un moment de douceur avec eux.', 1, 12),
( 15 , 'Promenade des Chiens', 'a16.jpg', 'Venez promener les chiens du refuge et leur offrir un moment de liberté et d’attention.', 1, 13),
( 16 , 'Sensibilisation dans les Écoles', 'a20.jpg', 'Participez à des ateliers éducatifs pour sensibiliser les enfants à la protection animale.', 1, 14),
( 17 , 'Portes Ouvertes du Sanctuaire', 'a12.jpg', 'Découvrez le sanctuaire, ses habitants à plumes et les actions quotidiennes menées pour leur bien-être.', 1, 15),
( 18 , 'Atelier Éducation Chiots', 'a5.jpg', 'Initiez-vous à l’éducation canine avec des chiots et découvrez les bonnes pratiques pour les futurs adoptants.', 1, 16)
;

INSERT INTO compawny_dev.animal
(id, name, picture, arrival, description, asso_id, species_id) VALUES
(1, 'Gatsby', 'gatsby.jpg', '2024-01-12', 'Gatsby est un chien senior très doux et affectueux. Il adore les câlins et les moments tranquilles sur le canapé. Il préfère un foyer sans chats pour pouvoir profiter pleinement de l’attention de sa famille adoptive.', 1, 1),
(2, 'Lilou', 'lilou.jpg', '2023-05-08', 'Lilou est une jeune chienne pleine d’énergie et de curiosité. Elle adore courir et jouer en extérieur. Elle est très attachante et fera le bonheur d’une famille active et aimante, prête à lui offrir de longues promenades quotidiennes.', 2, 1),
(3, 'Mista', 'mista.jpg', '2025-11-20', 'Mista est une chatte âgée avec beaucoup de charme et de douceur. Elle est FIV positive et préfère les environnements calmes et sécurisés. Avec un peu de patience et beaucoup d’amour, elle saura devenir votre fidèle compagne.', 3, 2),
(4, 'Simba', 'simba.jpg', '2023-09-15', 'Simba est un chien adulte plein de tendresse, un peu réservé au début mais très loyal une fois en confiance. Il aime les caresses et se promener dans des lieux calmes, parfait pour une famille cherchant un compagnon fidèle et posé.', 4, 1),
(5, 'Cookie', 'cookie.jpg', '2025-03-30', 'Cookie est une chatte câline et curieuse. Elle adore observer le monde depuis la fenêtre et a besoin d’un appartement sécurisé. Elle apprécie les moments de tranquillité autant que les câlins, et fera une parfaite compagne pour un foyer attentif.', 5, 2),
(6, 'Nemo', 'nemo.jpg', '2024-07-22', 'Nemo est un chien joueur et enthousiaste. Il adore les jeux et les balades en extérieur. Il sera ravi d’intégrer une famille sportive qui pourra lui offrir l’énergie et l’attention dont il a besoin.', 6, 1),
(7, 'Nala', 'nala.jpg', '2024-12-10', 'Nala est une chatte douce et affectueuse. Elle aime la compagnie d’autres chats mais préfère éviter les chiens. Avec un peu de patience et beaucoup d’amour, elle saura s’intégrer parfaitement dans votre foyer.', 7, 2),
(8, 'Loki', 'loki.jpg', '2023-06-05', 'Loki est un chien senior très attachant. Il aime la compagnie humaine et profite pleinement des moments de calme. Idéal pour un foyer sans autres animaux, il vous offrira fidélité et tendresse chaque jour.', 8, 1),
(9, 'Fiona', 'fiona.jpg', '2024-04-18', 'Fiona est une jeune chatte joueuse et curieuse. Elle adore explorer son environnement et s’amuser avec des jouets. Elle s’adaptera parfaitement à une famille patiente qui saura lui offrir un foyer stimulant.', 9, 2),
(10, 'Tango', 'tango.jpg', '2024-08-14', 'Tango est un chien actif et plein de vie. Il adore les promenades et les jeux en extérieur. Il attend un foyer dynamique prêt à partager de belles aventures et à lui offrir beaucoup d’amour.', 10, 1),
(11, 'Gaston', 'gaston.jpg', '2024-02-11', 'Gaston est un chien adulte plein de tendresse mais il est un peu réservé avec les enfants. Il recherche un foyer calme et patient, où il pourra donner tout son amour à ceux qui sauront le comprendre.', 11, 1),
(12, 'Salem', 'salem.jpg', '2025-10-07', 'Salem est un chat senior très affectueux. Il adore la compagnie humaine et aime se reposer sur vos genoux. Il nécessite un foyer patient et attentionné qui saura lui offrir douceur et sécurité.', 12, 2),
(13, 'Oscar', 'oscar.jpg', '2025-03-22', 'Oscar est un jeune chien joueur et sociable. Il adore la compagnie d’autres chiens et sera parfait pour une famille aimante et active, prête à partager de nombreux moments de jeux et de complicité.', 13, 1),
(14, 'Merlin', 'merlin.jpg', '2024-09-30', 'Merlin est un chat adulte FIV+ très tranquille. Il adore les moments de calme et s’adapte bien aux environnements sans stress. Il sera un compagnon doux et discret pour un foyer patient.', 14, 2),
(15, 'Ponpon', 'ponpon.jpg', '2025-10-25', 'Ponpon est un lapin sociable et curieux. Il adore explorer son espace et interagir avec ses humains. Il a besoin d’un environnement sécurisé et d’un compagnon de jeu pour s’épanouir pleinement.', 15, 3),
(16, 'Émeraude', 'emeraude.jpg', '2025-11-12', 'Émeraude est une perruche vive et joyeuse. Elle adore chanter et interagir avec ses humains. Elle a besoin de beaucoup de stimulation et de temps d’attention, et sera un vrai rayon de soleil dans votre foyer.', 1, 4),
(17, 'Pépito', 'pepito.jpg', '2025-10-08', 'Pépito est un cochon d’Inde adorable mais fragile. Il a besoin d’un environnement calme et sécurisé, et d’attention quotidienne. Très câlin, il fera fondre le cœur de ses adoptants.', 2, 5),
(18, 'Roxanne', 'roxanne.jpg', '2024-02-20', 'Roxanne est une chienne pleine de vie et d’amour. Elle adore les enfants et la compagnie canine. Elle attend un foyer dynamique et affectueux pour partager de nombreux moments de joie.', 3, 1),
(19, 'Milo', 'milo.jpg', '2024-06-18', 'Milo est un chat adulte très attachant mais il a besoin d’un environnement calme. Il n’est pas recommandé avec les chiens, mais il saura devenir un merveilleux compagnon pour une famille patiente.', 4, 2),
(20, 'Charlie', 'charlie.jpg', '2025-12-03', 'Charlie est un chien senior très doux et fidèle. Il adore les moments calmes et la compagnie humaine. Il attend un foyer aimant et patient pour partager toute sa tendresse.', 5, 1)
;

-- -- Insérer des données
-- INSERT INTO compawny_dev.role
-- VALUES
--     ( 'admin'),
--     ( 'user' )
-- ;

-- -- admin@admin.fr / admin
-- -- user@user.fr / user
-- INSERT INTO compawny_dev.user
-- VALUES
--     ( 'admin@admin.fr", "$argon2i$v=19$m=16,t=2,p=1$SHhIaUptM256UXBtZjF3VA$0cfqFjyvBxio+CPnUL6wAg', 1 ),
--     ( 'user@user.fr", "$argon2i$v=19$m=16,t=2,p=1$QkhldHlvT0t5b2p1N3RIYQ$pb81ZXmGAiRMnHhcZIlSZQ', 2 )
-- ;

-- INSERT INTO compawny_dev.country (id, name) VALUES
-- (1, 'France'),
-- (2, 'Afrique du Sud'),
-- (3, 'Australie'),
-- (4, 'Canada'),
-- (5, 'Thailande'),
-- (6, 'Kenya'),
-- (7, 'Brésil'),
-- (8, 'Japon'),
-- (9, 'Nouvelle Zélande'),
-- (10, 'Inde'),
-- (11, 'Espagne')
-- ;



-- INSERT INTO compawny_dev.species (id, name) VALUES
-- ( 1 , 'Chien'),
-- ( 2 , 'Chat'),
-- ( 3 , 'Lapin'),
-- ( 4 , 'Perruche'),
-- ( 5 , 'Hamster'),
-- ( 6 , 'Cochon d’Inde'),
-- ( 7 , 'Cheval'),
-- ( 8 , 'Tortue'),
-- ( 9 , 'Furet'),
-- ( 10 , 'Chèvre'),
-- ( 11 , 'Canard'),
-- ( 12 , 'Poule')
-- ;


-- INSERT INTO compawny_dev.asso
-- (id, name, image, description, siteweb, address, country_id) VALUES
-- (1, 'Les Pattes du Cœur', 'asso1.jpg', 'Refuge spécialisé dans les chiens abandonnés.', 'https://pattesducoeur.fr', '12 Rue des Animaux, Paris', 1),
-- (2, 'SPA France', 'spa_france.jpg', 'Organisation de protection animale majeure en France spécialisée dans l’adoption de chiens et chats.', 'https://spa.fr', '39 Boulevard Berthier, 75017 Paris', 1),
-- (3, 'Refuge Les Pattes du Sud', 'pattes_du_sud.jpg', 'Refuge accueillant chiens et chats abandonnés et organisant des actions solidaires régionales.', 'https://pattesdusud.fr', '17 Chemin de la Garrigue, 13009 Marseille', 1),
-- (4, 'Chats des Monts', 'chats_des_monts.jpg', 'Petite association dédiée au sauvetage, soins et à l’adoption de chats errants.', 'https://chatsdesmonts.fr', '12 Rue des Érables, 63000 Clermont-Ferrand', 1),
-- (5, 'L’Écurie des Sans Voix', 'ecurie_sans_voix.jpg', 'Sanctuaire pour chevaux, ânes et poneys issus de maltraitance ou abandonnés.', 'https://ecuriedessansvoix.fr', 'Route de la Ferme, 74000 Annecy', 1),
-- (6, 'NAC & Co', 'nac_co.jpg', 'Association spécialisée dans le sauvetage et en adoption de NAC (lapins, cochons d’Inde, rats, reptiles).', 'https://nacandco.fr', '5 Allée des Tilleuls, 69007 Lyon', 1),
-- (7, 'Mil Patitas', 'mil_patitas.jpg', 'Refuge franco-espagnol recevant chiens de chasse et chiens errants.', 'https://milpatitas.fr', '24 Rue de la Gare, 64100 Bayonne', 1),
-- (8, 'Les Rongeurs Heureux', 'rongeurs_heureux.jpg', 'Association consacrée aux lapins, cochons d’Inde et petits rongeurs abandonnés.', 'https://rongeursheureux.fr', '22 Rue des Jardins, 35000 Rennes', 1),
-- (9, 'La Cabane des Minous', 'cabane_minous.jpg', 'Refuge indépendant spécialisé dans le placement de chats sociables et craintifs.', 'https://cabanedesminous.fr', '9 Bis Rue du Port, 17000 La Rochelle', 1),
-- (10, 'Les Ailes Libres', 'ailes_libres.jpg', 'Sanctuaire recueillant oiseaux exotiques et perruches issues de particuliers.', 'https://ailes-libres.fr', '10 Chemin des Pins, 34000 Montpellier', 1),
-- (11, 'Les Animaux de la Vallée', 'animaux_vallee.jpg', 'Refuge rural multi espèces accueillant chiens, chats, poules et chèvres.', 'https://animauxdelavallee.fr', 'Lieu-dit La Prairie, 88000 Épinal', 1),
-- (12, 'Chevaux Solidaires Ouest', 'chevaux_solidaires.jpg', 'Association spécialisée dans la retraite et la rééducation de chevaux.', 'https://chevaux-solidaires-ouest.fr', 'Route du Haras, 56000 Vannes', 1),
-- (13, 'L’Arche des Chiens du Nord', 'arche_chiens_nord.jpg', 'Petite structure familiale traitant les abandons canins et adoptions responsables.', 'https://archedeschiensnord.fr', 'Rue des Acacias, 59000 Lille', 1),
-- (14, 'SOS NAC Bourgogne', 'sos_nac_bourgogne.jpg', 'Protection et adoption de NAC issus de sauvetages et abandonnés.', 'https://sosnacbourgogne.fr', '18 Rue du Centre, 21000 Dijon', 1),
-- (15, 'Liberté à Plumes', 'liberte_plumes.jpg', 'Sanctuaire recueillant poules de batteries, canards et oies rescapées.', 'https://liberteaplumes.fr', 'Ferme des P’tits Bois, 45000 Orléans', 1),
-- (16, 'Chiens & Coeur', 'chiens_coeur.jpg', 'Association canine œuvrant pour l’adoption, l’éducation positive et la prévention des abandons.', 'https://chiensetcoeur.fr', '14 Avenue du Parc, 33000 Bordeaux', 1),
-- (17, 'Primate Rescue Centre', 'primate_rescue.jpg', 'Basée en Afrique du Sud, cette association se consacre à la réhabilitation et la protection des singes et primates. Vous pouvez soutenir leurs actions en faisant un don ou en devenant bénévole sur place pour participer aux soins et à l’éducation des primates.', 'https://primate-rescue.co.za', 'R448, Franschhoek, Western Cape', 2),
-- (18, 'Koala Haven', 'koala_haven.jpg', 'Située en Australie, Koala Haven protège et soigne les koalas blessés ou orphelins. Les bénévoles aident aux soins des animaux et à la sensibilisation du public sur la conservation des koalas.', 'https://koalahaven.org.au', '12 Koala Street, Queensland', 3),
-- (19, 'Arctic Wildlife Foundation', 'arctic_wildlife.jpg', 'Au Canada, cette fondation travaille à la protection des ours polaires et de la faune arctique. Les actions incluent la recherche, la conservation et l’éducation des communautés locales. Des programmes de volontariat sont ouverts aux passionnés de la nature.', 'https://arcticwildlife.ca', '45 Northern Lights Ave, Nunavut', 4),
-- (20, 'Elephant Nature Park', 'elephant_park.jpg', 'En Thaïlande, cet établissement accueille et soigne les éléphants sauvés de situations difficiles. Les bénévoles participent aux soins quotidiens, à l’entretien des enclos et à la sensibilisation des visiteurs.', 'https://elephantnaturepark.org', '209/2 Sritham, Chiang Mai', 5),
-- (21, 'David Sheldrick Wildlife Trust', 'sheldrick_wildlife.jpg', 'Au Kenya, cette association protège les éléphants et les rhinocéros. Les bénévoles peuvent participer à la surveillance des animaux et soutenir les programmes éducatifs et de réintroduction.', 'https://sheldrickwildlifetrust.org', 'Nairobi, Kenya', 6),
-- (22, 'Instituto de Animais da Amazônia', 'amazonia_animals.jpg', 'Au Brésil, l’association s’occupe de la conservation des espèces menacées de la forêt amazonienne. Bénévoles et donateurs peuvent soutenir la protection des jaguars, singes et oiseaux exotiques.', 'https://iaamazonia.org.br', 'Av. Amazonas 122, Manaus', 7),
-- (23, 'Japan Wildlife Center', 'japan_wildlife.jpg', 'Au Japon, cette association se concentre sur la protection des espèces locales et menacées comme les tanukis et les macaques japonais. Les bénévoles participent à l’entretien, aux soins et à l’éducation environnementale.', 'https://japanwildlife.jp', '3 Chuo, Tokyo', 8),
-- (24, 'Kiwi Conservation Society', 'kiwi_conservation.jpg', 'En Nouvelle-Zélande, la Kiwi Conservation Society veille à la protection des kiwis et autres oiseaux indigènes. Les volontaires aident à la surveillance, au suivi des nids et aux actions pédagogiques auprès des visiteurs.', 'https://kiwiconservation.org.nz', '12 Feather Rd, Wellington', 9),
-- (25, 'Wildlife SOS India', 'wildlife_sos.jpg', 'En Inde, cette association sauve et réhabilite des espèces comme les éléphants, ours et reptiles. Les bénévoles peuvent aider aux soins, à la surveillance et aux programmes éducatifs.', 'https://wildlifesos.org', '13 Conservation Lane, Delhi', 10),
-- (26, 'Fundación Fauna Ibérica', 'fauna_iberica.jpg', 'En Espagne, cette association se concentre sur la conservation des animaux indigènes menacés comme le lynx ibérique et l’aigle royal. Les actions incluent la réintroduction, la surveillance et la sensibilisation du public.', 'https://faunaiberica.es', 'Calle de la Naturaleza 5, Madrid', 11)
-- ;


-- INSERT INTO compawny_dev.action
-- (id, name, image, description, is_active, asso_id) VALUES
-- ( 1 , 'Journée Adoption Chiens', 'a1.jpg', 'Tous les samedis, venez au refuge rencontrer des chiens adorables et peut-être adopter votre futur compagnon ! Des journées pleines de câlins et de rencontres.', 1, 1),
-- ( 2 , 'Randonnée Solidaire', 'a4.jpg', 'Tous les dimanches, l’association  organise une marche conviviale pour soutenir les refuges et sensibiliser autour du bien-être animal. Venez avec vos compagnons ! Départ à 14h.', 1, 2),
-- ( 3 , 'Collecte de Croquettes', 'a2.jpg', 'Aidez les refuges locaux en collectant des croquettes pour les chiens et chats en attente d’adoption. ', 1, 3),
-- ( 4 , 'Sauvetage et Premiers Soins', 'a10.jpg', 'Rejoignez une mission de sauvetage pour animaux blessés ou abandonnés et participez aux premiers soins. Des journées spéciales sont organisées tout au long de l’année.', 1, 4),
-- ( 5 , 'Expo Photos Adoption', 'a15.jpg', 'Participez à l’exposition photos présentant les chevaux, les ânes et les poneys recueillis et leur nouvelle vie.', 1, 5),
-- ( 6 , 'Atelier Découverte pour Enfants', 'a13.jpg', 'Initiez les enfants au monde animal et à l’importance de prendre soin des animaux.', 1, 6),
-- ( 7 , 'Collecte de couvertures', 'a7.jpg', 'Votre refuge à besoin de couvertures chaudes pour les animaux en hiver.', 1, 7),
-- ( 8 , 'Stand Associatif Marché', 'a14.jpg', 'Rejoignez-nous sur le marché local pour présenter les actions du refuge et récolter des dons.', 1, 8),
-- ( 9 , 'Journée Adoptions Chats', 'a11.jpg', 'Tous les samedis, venez rencontrer des chats à adopter et partager un moment de douceur avec eux.', 1, 9),
-- ( 10 , 'Collecte de Matériel', 'a19.jpg', 'Rassemblez des accessoires, couvertures ou paniers pour les animaux en refuge.', 1, 9),
-- ( 11 , 'Soins aux oiseaux exotiques', 'a18.jpg', 'Aidez à nourrir, nettoyer leurs habitats et jouer avec les oiseaux exotiques pour leur bien-être.', 1, 10),
-- ( 12 , 'Formation Bénévoles', 'a8.jpg', 'Participez à une formation pour devenir bénévole efficace au sein d’une association ou d’un refuge.', 1, 11),
-- ( 13 , 'Collecte de Jouets', 'a9.jpg', 'Apportez des jouets pour animaux afin d’égayer le quotidien des chiens, chats et NAC en refuge.', 1, 11),
-- ( 14 , 'Nettoyage des Box', 'a17.jpg', 'Aidez le refuge en nettoyant les box, en préparant les espaces de vie de chevaux et en passant un moment de douceur avec eux.', 1, 12),
-- ( 15 , 'Promenade des Chiens', 'a16.jpg', 'Venez promener les chiens du refuge et leur offrir un moment de liberté et d’attention.', 1, 13),
-- ( 16 , 'Sensibilisation dans les Écoles', 'a20.jpg', 'Participez à des ateliers éducatifs pour sensibiliser les enfants à la protection animale.', 1, 14),
-- ( 17 , 'Portes Ouvertes du Sanctuaire', 'a12.jpg', 'Découvrez le sanctuaire, ses habitants à plumes et les actions quotidiennes menées pour leur bien-être.', 1, 15),
-- ( 18 , 'Atelier Éducation Chiots', 'a5.jpg', 'Initiez-vous à l’éducation canine avec des chiots et découvrez les bonnes pratiques pour les futurs adoptants.', 1, 16)
-- ;



-- INSERT INTO compawny_dev.animal
-- (id, name, picture, arrival, description, asso_id, species_id) VALUES
-- (1, 'Gatsby', 'gatsby.jpg', '2024-01-12', 'Gatsby est un chien senior très doux et affectueux. Il adore les câlins et les moments tranquilles sur le canapé. Il préfère un foyer sans chats pour pouvoir profiter pleinement de l’attention de sa famille adoptive.', 1, 1),
-- (2, 'Lilou', 'lilou.jpg', '2023-05-08', 'Lilou est une jeune chienne pleine d’énergie et de curiosité. Elle adore courir et jouer en extérieur. Elle est très attachante et fera le bonheur d’une famille active et aimante, prête à lui offrir de longues promenades quotidiennes.', 2, 1),
-- (3, 'Mista', 'mista.jpg', '2025-11-20', 'Mista est une chatte âgée avec beaucoup de charme et de douceur. Elle est FIV positive et préfère les environnements calmes et sécurisés. Avec un peu de patience et beaucoup d’amour, elle saura devenir votre fidèle compagne.', 3, 2),
-- (4, 'Simba', 'simba.jpg', '2023-09-15', 'Simba est un chien adulte plein de tendresse, un peu réservé au début mais très loyal une fois en confiance. Il aime les caresses et se promener dans des lieux calmes, parfait pour une famille cherchant un compagnon fidèle et posé.', 4, 1),
-- (5, 'Cookie', 'cookie.jpg', '2025-03-30', 'Cookie est une chatte câline et curieuse. Elle adore observer le monde depuis la fenêtre et a besoin d’un appartement sécurisé. Elle apprécie les moments de tranquillité autant que les câlins, et fera une parfaite compagne pour un foyer attentif.', 5, 2),
-- (6, 'Nemo', 'nemo.jpg', '2024-07-22', 'Nemo est un chien joueur et enthousiaste. Il adore les jeux et les balades en extérieur. Il sera ravi d’intégrer une famille sportive qui pourra lui offrir l’énergie et l’attention dont il a besoin.', 6, 1),
-- (7, 'Nala', 'nala.jpg', '2024-12-10', 'Nala est une chatte douce et affectueuse. Elle aime la compagnie d’autres chats mais préfère éviter les chiens. Avec un peu de patience et beaucoup d’amour, elle saura s’intégrer parfaitement dans votre foyer.', 7, 2),
-- (8, 'Loki', 'loki.jpg', '2023-06-05', 'Loki est un chien senior très attachant. Il aime la compagnie humaine et profite pleinement des moments de calme. Idéal pour un foyer sans autres animaux, il vous offrira fidélité et tendresse chaque jour.', 8, 1),
-- (9, 'Fiona', 'fiona.jpg', '2024-04-18', 'Fiona est une jeune chatte joueuse et curieuse. Elle adore explorer son environnement et s’amuser avec des jouets. Elle s’adaptera parfaitement à une famille patiente qui saura lui offrir un foyer stimulant.', 9, 2),
-- (10, 'Tango', 'tango.jpg', '2024-08-14', 'Tango est un chien actif et plein de vie. Il adore les promenades et les jeux en extérieur. Il attend un foyer dynamique prêt à partager de belles aventures et à lui offrir beaucoup d’amour.', 10, 1),
-- (11, 'Gaston', 'gaston.jpg', '2024-02-11', 'Gaston est un chien adulte plein de tendresse mais il est un peu réservé avec les enfants. Il recherche un foyer calme et patient, où il pourra donner tout son amour à ceux qui sauront le comprendre.', 11, 1),
-- (12, 'Salem', 'salem.jpg', '2025-10-07', 'Salem est un chat senior très affectueux. Il adore la compagnie humaine et aime se reposer sur vos genoux. Il nécessite un foyer patient et attentionné qui saura lui offrir douceur et sécurité.', 12, 2),
-- (13, 'Oscar', 'oscar.jpg', '2025-03-22', 'Oscar est un jeune chien joueur et sociable. Il adore la compagnie d’autres chiens et sera parfait pour une famille aimante et active, prête à partager de nombreux moments de jeux et de complicité.', 13, 1),
-- (14, 'Merlin', 'merlin.jpg', '2024-09-30', 'Merlin est un chat adulte FIV+ très tranquille. Il adore les moments de calme et s’adapte bien aux environnements sans stress. Il sera un compagnon doux et discret pour un foyer patient.', 14, 2),
-- (15, 'Ponpon', 'ponpon.jpg', '2025-10-25', 'Ponpon est un lapin sociable et curieux. Il adore explorer son espace et interagir avec ses humains. Il a besoin d’un environnement sécurisé et d’un compagnon de jeu pour s’épanouir pleinement.', 15, 3),
-- (16, 'Émeraude', 'emeraude.jpg', '2025-11-12', 'Émeraude est une perruche vive et joyeuse. Elle adore chanter et interagir avec ses humains. Elle a besoin de beaucoup de stimulation et de temps d’attention, et sera un vrai rayon de soleil dans votre foyer.', 1, 4),
-- (17, 'Pépito', 'pepito.jpg', '2025-10-08', 'Pépito est un cochon d’Inde adorable mais fragile. Il a besoin d’un environnement calme et sécurisé, et d’attention quotidienne. Très câlin, il fera fondre le cœur de ses adoptants.', 2, 5),
-- (18, 'Roxanne', 'roxanne.jpg', '2024-02-20', 'Roxanne est une chienne pleine de vie et d’amour. Elle adore les enfants et la compagnie canine. Elle attend un foyer dynamique et affectueux pour partager de nombreux moments de joie.', 3, 1),
-- (19, 'Milo', 'milo.jpg', '2024-06-18', 'Milo est un chat adulte très attachant mais il a besoin d’un environnement calme. Il n’est pas recommandé avec les chiens, mais il saura devenir un merveilleux compagnon pour une famille patiente.', 4, 2),
-- (20, 'Charlie', 'charlie.jpg', '2025-12-03', 'Charlie est un chien senior très doux et fidèle. Il adore les moments calmes et la compagnie humaine. Il attend un foyer aimant et patient pour partager toute sa tendresse.', 5, 1)
-- ;



-- INSERT INTO compawny_dev.user_action (user_id, action_id) VALUES
-- (1, 1),
-- (2, 2),
-- (2, 3),
-- (2, 4),
-- (2, 5),
-- (2, 6),
-- (1, 7),
-- (2, 8),
-- (2, 9),
-- (2, 10),
-- (1, 11),
-- (1, 12),
-- (2, 13),
-- (2, 14),
-- (2, 15);



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