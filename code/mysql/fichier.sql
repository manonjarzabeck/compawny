-- Insérer des données
INSERT INTO compawny_dev.role (name)
VALUES
    ('admin')
;

-- admin@admin.fr / admin
-- user@user.fr / user
INSERT INTO compawny_dev.user (email, password, role_id)
VALUES
    ('admin@admin.fr', '$argon2i$v=19$m=16,t=2,p=1$SHhIaUptM256UXBtZjF3VA$0cfqFjyvBxio+CPnUL6wAg', 1)
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

INSERT INTO compawny_dev.department (id, name) VALUES
(1, 'Ain (01)'),
(2, 'Aisne (02)'),
(3, 'Allier (03)'),
(4, 'Alpes-de-Haute-Provence (04)'),
(5, 'Hautes-Alpes (05)'),
(6, 'Alpes-Maritimes (06)'),
(7, 'Ardèche (07)'),
(8, 'Ardennes (08)'),
(9, 'Ariège (09)'),
(10, 'Aube (10)'),
(11, 'Aude (11)'),
(12, 'Aveyron (12)'),
(13, 'Bouches-du-Rhône (13)'),
(14, 'Calvados (14)'),
(15, 'Cantal (15)'),
(16, 'Charente (16)'),
(17, 'Charente-Maritime (17)'),
(18, 'Cher (18)'),
(19, 'Corrèze (19)'),
(20, 'Corse-du-Sud (2A)'),
(21, 'Haute-Corse (2B)'),
(22, 'Côte-d’Or (21)'),
(23, 'Côtes-d’Armor (22)'),
(24, 'Creuse (23)'),
(25, 'Dordogne (24)'),
(26, 'Doubs (25)'),
(27, 'Drôme (26)'),
(28, 'Eure (27)'),
(29, 'Eure-et-Loir (28)'),
(30, 'Finistère (29)'),
(31, 'Gard (30)'),
(32, 'Haute-Garonne (31)'),
(33, 'Gers (32)'),
(34, 'Gironde (33)'),
(35, 'Hérault (34)'),
(36, 'Ille-et-Vilaine (35)'),
(37, 'Indre (36)'),
(38, 'Indre-et-Loire (37)'),
(39, 'Isère (38)'),
(40, 'Jura (39)'),
(41, 'Landes (40)'),
(42, 'Loir-et-Cher (41)'),
(43, 'Loire (42)'),
(44, 'Haute-Loire (43)'),
(45, 'Loire-Atlantique (44)'),
(46, 'Loiret (45)'),
(47, 'Lot (46)'),
(48, 'Lot-et-Garonne (47)'),
(49, 'Lozère (48)'),
(50, 'Maine-et-Loire (49)'),
(51, 'Manche (50)'),
(52, 'Marne (51)'),
(53, 'Haute-Marne (52)'),
(54, 'Mayenne (53)'),
(55, 'Meurthe-et-Moselle (54)'),
(56, 'Meuse (55)'),
(57, 'Morbihan (56)'),
(58, 'Moselle (57)'),
(59, 'Nièvre (58)'),
(60, 'Nord (59)'),
(61, 'Oise (60)'),
(62, 'Orne (61)'),
(63, 'Pas-de-Calais (62)'),
(64, 'Puy-de-Dôme (63)'),
(65, 'Pyrénées-Atlantiques (64)'),
(66, 'Hautes-Pyrénées (65)'),
(67, 'Pyrénées-Orientales (66)'),
(68, 'Bas-Rhin (67)'),
(69, 'Haut-Rhin (68)'),
(70, 'Rhône (69)'),
(71, 'Haute-Saône (70)'),
(72, 'Saône-et-Loire (71)'),
(73, 'Sarthe (72)'),
(74, 'Savoie (73)'),
(75, 'Haute-Savoie (74)'),
(76, 'Paris (75)'),
(77, 'Seine-Maritime (76)'),
(78, 'Seine-et-Marne (77)'),
(79, 'Yvelines (78)'),
(80, 'Deux-Sèvres (79)'),
(81, 'Somme (80)'),
(82, 'Tarn (81)'),
(83, 'Tarn-et-Garonne (82)'),
(84, 'Var (83)'),
(85, 'Vaucluse (84)'),
(86, 'Vendée (85)'),
(87, 'Vienne (86)'),
(88, 'Haute-Vienne (87)'),
(89, 'Vosges (88)'),
(90, 'Territoire de Belfort (89)'),
(91, 'Yonne (90)'),
(92, 'Essonne (91)'),
(93, 'Hauts-de-Seine (92)'),
(94, 'Seine-Saint-Denis (93)'),
(95, 'Val-de-Marne (94)'),
(96, 'Val-d’Oise (95)'),
(97, 'Guadeloupe (971)'),
(98, 'Martinique (972)'),
(99, 'Guyane (973)'),
(100, 'La Réunion (974)'),
(101, 'Mayotte (976)')
;


INSERT INTO compawny_dev.species (id, name) VALUES
( 1 , 'Chien'),
( 2 , 'Chat'),
( 3 , 'NAC')
;

INSERT INTO compawny_dev.association
(id, name, image, description, website, address, email, is_international, country_id, department_id) VALUES
(1, 'Les Pattes du Cœur', 'asso1.jpg', 'Refuge spécialisé dans les chiens abandonnés.', 'https://pattesducoeur.fr', '12 Rue des Animaux, 93100 Montreuil', 'pattes_du_coeur@gmail.com', 0, 1, 94),
(2, 'SPA France', 'spa_france.jpg', 'Organisation de protection animale majeure en France spécialisée dans l’adoption de chiens et chats.', 'https://spa.fr', '39 Boulevard Berthier, 75017 Paris', 'societe_protectrice_animaux@spa.com', 0, 1, 76),
(3, 'Refuge Les Pattes du Sud', 'pattes_du_sud.jpg', 'Refuge accueillant chiens et chats abandonnés et organisant des actions solidaires régionales.', 'https://pattesdusud.fr', '17 Chemin de la Garrigue, 13009 Marseille', 'pattes_du_sud@hotmail.fr', 0, 1, 14),
(4, 'Chats des Monts', 'chats_des_monts.jpg', 'Petite association dédiée au sauvetage, soins et à l’adoption de chats errants.', 'https://chatsdesmonts.fr', '12 Rue des Érables, 63000 Clermont-Ferrand', 'chats_des_monts@gmail.com', 0, 1, 64),
(5, 'L’Écurie des Sans Voix', 'ecurie_sans_voix.jpg', 'Sanctuaire pour chevaux, ânes et poneys issus de maltraitance ou abandonnés.', 'https://ecuriedessansvoix.fr', 'Route de la Ferme, 74000 Annecy', 'ecurie_des_sansvoix@orange.com', 0, 1, 75),
(6, 'NAC & Co', 'nac_co.jpg', 'Association spécialisée dans le sauvetage et en adoption de NAC (lapins, cochons d’Inde, rats, reptiles).', 'https://nacandco.fr', '5 Allée des Tilleuls, 69007 Lyon', 'nacandco@gmail.com', 0, 1, 70),
(7, 'Mil Patitas', 'mil_patitas.jpg', 'Refuge franco-espagnol recevant chiens de chasse et chiens errants.', 'https://milpatitas.fr', '24 Rue de la Gare, 64100 Bayonne', 'milpatitas@hotmail.com', 0, 1, 65),
(8, 'Les Rongeurs Heureux', 'rongeurs_heureux.jpg', 'Association consacrée aux lapins, cochons d’Inde et petits rongeurs abandonnés.', 'https://rongeursheureux.fr', '22 Rue des Jardins, 35000 Rennes', 'rongeurs_heureux@gmail.com', 0, 1, 36),
(9, 'La Cabane des Minous', 'cabane_minous.jpg', 'Refuge indépendant spécialisé dans le placement de chats sociables et craintifs.', 'https://cabanedesminous.fr', '9 Bis Rue du Port, 17000 La Rochelle', 'cabane_desminous@hotmail.fr', 0, 1, 18),
(10, 'Les Ailes Libres', 'ailes_libres.jpg', 'Sanctuaire recueillant oiseaux exotiques et perruches issues de particuliers.', 'https://ailes-libres.fr', '10 Chemin des Pins, 34000 Montpellier', 'aileslibres@gmail.com', 0, 1, 35),
(11, 'Les Animaux de la Vallée', 'animaux_vallee.jpg', 'Refuge rural multi espèces accueillant chiens, chats, poules et chèvres.', 'https://animauxdelavallee.fr', 'Lieu-dit La Prairie, 88000 Épinal', 'animauxdelavalle@hotmail.fr', 0, 1, 89),
(12, 'Chevaux Solidaires Ouest', 'chevaux_solidaires.jpg', 'Association spécialisée dans la retraite et la rééducation de chevaux.', 'https://chevaux-solidaires-ouest.fr', 'Route du Haras, 56000 Vannes', 'chevauxsolidaires_ouest@hotmail.com', 0, 1, 57),
(13, 'L’Arche des Chiens du Nord', 'arche_chiens_nord.jpg', 'Petite structure familiale traitant les abandons canins et adoptions responsables.', 'https://archedeschiensnord.fr', 'Rue des Acacias, 59000 Lille', 'arche_chiens_nord@hotmail.fr', 0, 1, 60),
(14, 'SOS NAC Bourgogne', 'sos_nac_bourgogne.jpg', 'Protection et adoption de NAC issus de sauvetages et abandonnés.', 'https://sosnacbourgogne.fr', '18 Rue du Centre, 21000 Dijon', 'sosnac_bourgogne@gmail.com', 0, 1, 22),
(15, 'Liberté à Plumes', 'liberte_plumes.jpg', 'Sanctuaire recueillant poules de batteries, canards et oies rescapées.', 'https://liberteaplumes.fr', 'Ferme des Petits Bois, 45000 Orléans', 'liberte_a_plumes@gmail.com', 0, 1, 46),
(16, 'Chiens & Coeur', 'chiens_coeur.jpg', 'Association canine œuvrant pour l’adoption, l’éducation positive et la prévention des abandons.', 'https://chiensetcoeur.fr', '14 Avenue du Parc, 33000 Bordeaux', 'chiensetcoeur@hotmail.fr', 0, 1, 34),
(17, 'Primate Rescue Centre', 'primate_rescue.jpg', 'Basée en Afrique du Sud, cette association se consacre à la réhabilitation et la protection des singes et primates. Vous pouvez soutenir leurs actions en faisant un don ou en devenant bénévole sur place pour participer aux soins et à l’éducation des primates.', 'https://primate-rescue.co.za', 'R448, Franschhoek, Western Cape', 'primate_rescuecenter@gmail.com', 1, 2, NULL ),
(18, 'Koala Haven', 'koala_haven.jpg', 'Située en Australie, Koala Haven protège et soigne les koalas blessés ou orphelins. Les bénévoles aident aux soins des animaux et à la sensibilisation du public sur la conservation des koalas.', 'https://koala-haven.org.au', '12 Koala Street, Queensland', 'koalahaven@gmail.com', 1, 3, NULL),
(19, 'Arctic Wildlife Foundation', 'arctic_wildlife.jpg', 'Au Canada, cette fondation travaille à la protection des ours polaires et de la faune arctique. Les actions incluent la recherche, la conservation et l’éducation des communautés locales. Des programmes de volontariat sont ouverts aux passionnés de la nature.', 'https://arcticwildlife.ca', '45 Northern Lights Ave, Nunavut', 'arctic_wildlife@gmail.com', 1, 4, NULL),
(20, 'Elephant Nature Park', 'elephant_park.jpg', 'En Thaïlande, cet établissement accueille et soigne les éléphants sauvés de situations difficiles. Les bénévoles participent aux soins quotidiens, à l’entretien des enclos et à la sensibilisation des visiteurs.', 'https://elephantnaturepark.org', '209/2 Sritham, Chiang Mai', 'elephant_nature_park@gmail.com', 1, 5, NULL),
(21, 'David Sheldrick Wildlife Trust', 'sheldrick_wildlife.jpg', 'Au Kenya, cette association protège les éléphants et les rhinocéros. Les bénévoles peuvent participer à la surveillance des animaux et soutenir les programmes éducatifs et de réintroduction.', 'https://sheldrickwildlifetrust.org', 'Nairobi, Kenya', 'sheldrick_wildlifetrust@gmail.com', 1, 6, NULL),
(22, 'Instituto de Animais da Amazônia', 'amazonia_animals.jpg', 'Au Brésil, l’association s’occupe de la conservation des espèces menacées de la forêt amazonienne. Bénévoles et donateurs peuvent soutenir la protection des jaguars, singes et oiseaux exotiques.', 'https://iaamazonia.org.br', 'Av. Amazonas 122, Manaus', 'amazonia_animais@gmail.com', 1, 7, NULL),
(23, 'Japan Wildlife Center', 'japan_wildlife.jpg', 'Au Japon, cette association se concentre sur la protection des espèces locales et menacées comme les tanukis et les macaques japonais. Les bénévoles participent à l’entretien, aux soins et à l’éducation environnementale.', 'https://japanwildlife.jp', '3 Chuo, Tokyo', 'wildlifecenter_japan@gmail.com', 1, 8, NULL ),
(24, 'Kiwi Conservation Society', 'kiwi_conservation.jpg', 'En Nouvelle-Zélande, la Kiwi Conservation Society veille à la protection des kiwis et autres oiseaux indigènes. Les volontaires aident à la surveillance, au suivi des nids et aux actions pédagogiques auprès des visiteurs.', 'https://kiwiconservation.org.nz', '12 Feather Rd, Wellington', 'kiwi_conservation_society@gmail.com', 1, 9, NULL),
(25, 'Wildlife SOS India', 'wildlife_sos.jpg', 'En Inde, cette association sauve et réhabilite des espèces comme les éléphants, ours et reptiles. Les bénévoles peuvent aider aux soins, à la surveillance et aux programmes éducatifs.', 'https://wildlifesos.org', '13 Conservation Lane, Delhi', 'wildlifesos_india@gmail.com', 1, 10, NULL),
(26, 'Fundación Fauna Ibérica', 'fauna_iberica.jpg', 'En Espagne, cette association se concentre sur la conservation des animaux indigènes menacés comme le lynx ibérique et l’aigle royal. Les actions incluent la réintroduction, la surveillance et la sensibilisation du public.', 'https://faunaiberica.es', 'Calle de la Naturaleza 5, Madrid', 'ff_iberica@gmail.com', 1, 11, NULL)
;

INSERT INTO compawny_dev.action
(id, name, image, description, published, is_active, association_id) VALUES
( 1 , 'Journée Spéciale Adoption Chiens', 'a1.jpg', 'Tous les samedis, venez au refuge rencontrer des chiens adorables et peut-être adopter votre futur compagnon ! Des journées pleines de câlins et de rencontres.', '2025-12-01', 1, 1),
( 2 , 'Randonnées Solidaires', 'a4.jpg', 'Tous les dimanches, l’association  organise une marche conviviale pour soutenir les refuges et sensibiliser autour du bien-être animal. Venez avec vos compagnons ! Départ à 14h.', '2025-06-18', 1, 2),
( 3 , 'Collecte de Croquettes', 'a2.jpg', 'Toute l’année, votre association collecte des croquettes pour les chiens et chats en attente d’adoption. N’hésitez pas à faire un don ou à en parler autour de vous. ', '2025-11-12', 1, 3),
( 4 , 'Sauvetage et Premiers Soins', 'a10.jpg', 'Rejoignez une mission de sauvetage pour animaux blessés ou abandonnés et participez aux premiers soins. Des journées spéciales sont organisées tout au long de l’année.', '2026-02-20', 1, 4),
( 5 , 'Séance Photos Spéciale Adoptions', 'a15.jpg', 'L’association recherche des photographes bénévoles, débutants ou experimentés, pour réaliser une séance photo puis une exposition présentant les chevaux, les ânes et les poneys recueillis et leur nouvelle vie.', '2025-10-25', 1, 5),
( 6 , 'Atelier Découverte pour les Enfants', 'a13.jpg', 'Initiez les enfants au monde animal et à l’importance de prendre soin des animaux. Pour en savoir plus, vous pouvez contacter directement l’association.', '2025-11-12', 1, 6),
( 7 , 'Collecte de couvertures', 'a7.jpg', 'Votre refuge à besoin de couvertures chaudes pour les animaux en hiver. Neuve ou d’occasion, vous pouvez les déposer à tout moment directement dans nos locaux.', '2025-09-30', 1, 7),
( 8 , 'Stand Associatif sur le Marché', 'a14.jpg', 'Rejoignez-nous chaque mercredi sur le marché local pour présenter les actions du refuge et récolter des dons.', '2026-03-22', 1, 8),
( 9 , 'Journée Spéciale Adoptions Chats', 'a11.jpg', 'Tous les samedis, venez rencontrer des chats à adopter et partager un moment de douceur avec eux.', '2025-10-07', 1, 9),
( 10 , 'Collecte de Matériel', 'a19.jpg', 'Rassemblez des accessoires, jouets, gamelles, couvertures ou paniers pour les animaux et venez les déposer directement au refuge.', '2026-02-11', 1, 9),
( 11 , 'Soins aux oiseaux exotiques', 'a18.jpg', 'Aidez à nourrir, nettoyer leurs habitats et jouer avec les oiseaux exotiques pour leur bien-être. Des journées spéciales sont organisées tout au long de l’année pour vous faire découvrir nos merveilleux NAC.', '2026-04-18', 1, 10),
( 12 , 'Formation pour devenir Bénévoles', 'a8.jpg', 'Participez à une formation pour devenir bénévole efficace au sein d’une association ou d’un refuge. Des journées spéciales sont organisées tout au long de l’année.', '2026-01-05', 1, 11),
( 13 , 'Collecte de Jouets', 'a9.jpg', 'Tout au long de l’année, vous pouvez collecter et apporter des jouets pour animaux afin d’égayer le quotidien des chiens, chats et NAC au refuge.', '2025-12-10', 1, 11),
( 14 , 'Nettoyage des Box', 'a17.jpg', 'Tous les samedis, venez aider le refuge en nettoyant les box, en préparant les espaces de vie de chevaux et en passant un moment de douceur avec eux.', '2025-07-22', 1, 12),
( 15 , 'Promenade des Chiens', 'a16.jpg', 'Venez promener les chiens du refuge et leur offrir un moment de liberté et d’attention. Vous pouvez vous rapprocher de l’association pour leur donner vos disponibilités.', '2025-10-30', 1, 13),
( 16 , 'Sensibilisation dans les Écoles', 'a20.jpg', 'Participez à des ateliers éducatifs pour sensibiliser les enfants à la protection animale. Pour plus de détails, vous pouvez contacter directement l’association.', '2025-09-15', 1, 14),
( 17 , 'Portes Ouvertes du Sanctuaire', 'a12.jpg', 'Chaque dimanche,  venez seul ou en famille, découvrir le sanctuaire, ses habitants à plumes et les actions quotidiennes menées pour leur bien-être.', '2025-11-20', 1, 15),
( 18 , 'Atelier Éducation Chiots', 'a5.jpg', 'Initiez-vous à l’éducation canine avec des chiots et découvrez les bonnes pratiques pour les futurs adoptants. Des ateliers sont organisés plusieurs fois par mois.', '2025-05-08', 1, 16)
;

INSERT INTO compawny_dev.animal
(id, name, image, arrival, description, is_adoptable, association_id, species_id) VALUES
(1, 'Gatsby', 'gatsby.jpg', '2025-12-01', 'Gatsby est un chien senior très doux et affectueux. Il adore les câlins et les moments tranquilles sur le canapé. Il préfère un foyer sans chats pour pouvoir profiter pleinement de l’attention de sa famille adoptive.', 1, 1, 1),
(2, 'Lilou', 'lilou.jpg', '2025-05-08', 'Lilou est une jeune chienne pleine d’énergie et de curiosité. Elle adore courir et jouer en extérieur. Elle est très attachante et fera le bonheur d’une famille active et aimante, prête à lui offrir de longues promenades quotidiennes.', 1, 2, 1),
(3, 'Mista', 'mista.jpg', '2025-11-20', 'Mista est une chatte âgée avec beaucoup de charme et de douceur. Elle est FIV positive et préfère les environnements calmes et sécurisés. Avec un peu de patience et beaucoup d’amour, elle saura devenir votre fidèle compagne.', 1, 4, 2),
(4, 'Simba', 'simba.jpg', '2025-09-15', 'Simba est un chien adulte plein de tendresse, un peu réservé au début mais très loyal une fois en confiance. Il aime les caresses et se promener dans des lieux calmes, parfait pour une famille cherchant un compagnon fidèle et posé.', 1, 7, 1),
(5, 'Cookie', 'cookie.jpg', '2025-10-30', 'Cookie est une chatte câline et curieuse. Elle adore observer le monde depuis la fenêtre et a besoin d’un appartement sécurisé. Elle apprécie les moments de tranquillité autant que les câlins, et fera une parfaite compagne pour un foyer attentif.', 1, 9, 2),
(6, 'Nemo', 'nemo.jpg', '2025-07-22', 'Nemo est un chien joueur et enthousiaste. Il adore les jeux et les balades en extérieur. Il sera ravi d’intégrer une famille sportive qui pourra lui offrir l’énergie et l’attention dont il a besoin.', 1, 11, 1),
(7, 'Nala', 'nala.jpg', '2025-12-10', 'Nala est une chatte douce et affectueuse. Elle aime la compagnie d’autres chats mais préfère éviter les chiens. Avec un peu de patience et beaucoup d’amour, elle saura s’intégrer parfaitement dans votre foyer.', 1, 9, 2),
(8, 'Loki', 'loki.jpg', '2026-01-05', 'Loki est un chien senior très attachant. Il aime la compagnie humaine et profite pleinement des moments de calme. Idéal pour un foyer sans autres animaux, il vous offrira fidélité et tendresse chaque jour.', 1, 7, 1),
(9, 'Fiona', 'fiona.jpg', '2026-04-18', 'Fiona est une jeune chatte joueuse et curieuse. Elle adore explorer son environnement et s’amuser avec des jouets. Elle s’adaptera parfaitement à une famille patiente qui saura lui offrir un foyer stimulant.', 1, 4, 2),
(10, 'Tango', 'tango.jpg', '2025-08-14', 'Tango est un chien actif et plein de vie. Il adore les promenades et les jeux en extérieur. Il attend un foyer dynamique prêt à partager de belles aventures et à lui offrir beaucoup d’amour.', 1, 1, 1),
(11, 'Gaston', 'gaston.jpg', '2026-02-11', 'Gaston est un chien adulte plein de tendresse mais il est un peu réservé avec les enfants. Il recherche un foyer calme et patient, où il pourra donner tout son amour à ceux qui sauront le comprendre.', 1, 11, 1),
(12, 'Salem', 'salem.jpg', '2025-10-07', 'Salem est un chat senior très affectueux. Il adore la compagnie humaine et aime se reposer sur vos genoux. Il nécessite un foyer patient et attentionné qui saura lui offrir douceur et sécurité.', 1, 1, 2),
(13, 'Oscar', 'oscar.jpg', '2026-03-22', 'Oscar est un jeune chien joueur et sociable. Il adore la compagnie d’autres chiens et sera parfait pour une famille aimante et active, prête à partager de nombreux moments de jeux et de complicité.', 1, 2, 1),
(14, 'Merlin', 'merlin.jpg', '2025-09-30', 'Merlin est un chat adulte FIV+ très tranquille. Il adore les moments de calme et s’adapte bien aux environnements sans stress. Il sera un compagnon doux et discret pour un foyer patient.', 1, 9, 2),
(15, 'Ponpon', 'ponpon.jpg', '2025-10-25', 'Ponpon est un lapin sociable et curieux. Il adore explorer son espace et interagir avec ses humains. Il a besoin d’un environnement sécurisé et d’un compagnon de jeu pour s’épanouir pleinement.', 1, 6, 3),
(16, 'Émeraude', 'emeraude.jpg', '2025-11-12', 'Émeraude est une perruche vive et joyeuse. Elle adore chanter et interagir avec ses humains. Elle a besoin de beaucoup de stimulation et de temps d’attention, et sera un vrai rayon de soleil dans votre foyer.', 1, 10, 3),
(17, 'Pépito', 'pepito.jpg', '2025-10-08', 'Pépito est un cochon d’Inde adorable mais fragile. Il a besoin d’un environnement calme et sécurisé, et d’attention quotidienne. Très câlin, il fera fondre le cœur de ses adoptants.', 1, 14, 3),
(18, 'Roxanne', 'roxanne.jpg', '2026-02-20', 'Roxanne est une chienne pleine de vie et d’amour. Elle adore les enfants et la compagnie canine. Elle attend un foyer dynamique et affectueux pour partager de nombreux moments de joie.', 1, 7, 1),
(19, 'Milo', 'milo.jpg', '2025-06-18', 'Milo est un chat adulte très attachant mais il a besoin d’un environnement calme. Il n’est pas recommandé avec les chiens, mais il saura devenir un merveilleux compagnon pour une famille patiente.', 1, 4, 2),
(20, 'Charlie', 'charlie.jpg', '2025-12-03', 'Charlie est un chien senior très doux et fidèle. Il adore les moments calmes et la compagnie humaine. Il attend un foyer aimant et patient pour partager toute sa tendresse.', 1, 7, 1)
;



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