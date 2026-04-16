# Compawny
![title](code/public/img/icons_logo/logo-readme.png)

## Auteur

Manon Jarzabeck – Projet réalisé dans le cadre de la formation Développeur Web et Web Mobile (Simplon.co)

## Description 

Compawny est une application web qui permet de faciliter l’engagement citoyen pour la cause animale.
Elle propose un accès à des actions locales, des associations internationales et des animaux à adopter, tout en offrant la possibilité aux utilisateurs de participer activement via différentes fonctionnalités.

L’objectif est de centraliser les initiatives solidaires et de rendre l’engagement plus accessible, intuitif et concret.

## Fonctionnalités 

### 🤎 Visiteurs
* 📱 Consultation des contenus — accès aux associations, actions locales et animaux à adopter
* 🔎 Système de filtrage — recherche par département (actions) ou par espèce (adoptions)
* 🗺️ Localisation — visualisation des associations via une carte interactive
* 📢 Proposition d’actions — suggestion d’initiatives avec modération
* 💬 Partage d’expériences — publication de témoignages

### 👤 Utilisateurs
* 👤 Création de compte — inscription et connexion
* 🤎 Mise en favoris — sauvegarde des actions
* ⭐ Espace utilisateur — gestion des actions enregistrées

### 🔐 Administrateurs
* 👨🏻‍💻 Gestion des contenus — CRUD associations, actions, adoptions
* ⛔️ Modération — validation des propositions et contenus 
 

## Langages & technologies 

### 🎨 Front-end
* HTML / CSS — structure et mise en forme
* JavaScript / TypeScript — logique côté client
* React — création d’interfaces dynamiques
* Vite — environnement de développement rapide

### ⚙️ Back-end
* Node.js — environnement serveur
* Express — framework API REST
* MySQL — base de données relationnelle
* MongoDB — base de données NoSQL

### 🛠️ Outils & Environnement
* Git / GitHub — versioning
* Docker / Dev Containers — environnement isolé
* VS Code — IDE
* Figma — conception UI/UX

### ✅ Tests & Qualité
* Vitest — tests
* Biome — qualité du code


## Installation

### Pré-requis 

> Installer [Docker](https://www.docker.com) 
> Installer [Visual Studio Code](https://code.visualstudio.com/download)
> Installer [Node.js](https://nodejs.org/fr/download)

📦 Cloner le projet 
```bash
git clone <https://github.com/manonjarzabeck/compawny>
cd compawny
```

🐳 Créer le conteneur Docker 
```bash
docker compose up -d
```

📥 Installer les dépendances
```bash
npm install
````

▶️ Lancer le projet

Front-end
```bash
npm run dev
````

Back-end 
```bash
npm run server
```

🌐 Accès à l’application

* Front : http://localhost:5173
* API : http://localhost:3000


## Points d'accès de l'API REST 

### Actions 

Méthode HTTP    | Route      | Description
----------------|------------|-------------
GET            | /api/action     | Récupérer toutes les actions
GET            | /api/action/:id    | Récupérer une action
POST         | /api/action    | Créer une action (admin)
PUT            | /api/action/:id | Modifier une action 
DELETE         | /api/action/:id     | Supprimer une action

### Associations

Méthode HTTP    | Route      | Description
----------------|------------|-------------
GET            | /api/association     | Récupérer toutes les associations
GET            | /api/association/:id    | Récupérer une association
POST         | /api/association    | Créer une association (admin)
PUT            | /api/association/:id | Modifier une association 
DELETE         | /api/association/:id     | Supprimer une association

### Country

Méthode HTTP    | Route      | Description
----------------|------------|-------------
GET            | /api/country     | Récupérer les pays
GET            | /api/country/:id    | Récupérer un pays

### Départment

Méthode HTTP    | Route      | Description
----------------|------------|-------------
GET            | /api/department    | Récupérer les départements
GET            | /api/department/:id    | Récupérer un département 

### Adoptions (animaux)

Méthode HTTP    | Route      | Description
----------------|------------|-------------
GET            | /api/animal     | Récupérer tous les animaux
GET            | /api/animal/:id    | Récupérer un animal
POST         | /api/animal    | Créer un animal (admin)
PUT            | /api/animal/:id | Modifier un animal 
DELETE         | /api/animal/:id     | Supprimer un animal

### Species

Méthode HTTP    | Route      | Description
----------------|------------|-------------
GET            | /api/species    | Récupérer les espèces
GET            | /api/species/:id    | Récupérer une espèce

### Favoris

Méthode HTTP    | Route      | Description
----------------|------------|-------------
GET            | /api/user-action/:id    | Récupérer les favoris
POST         | /api/user-action    | Ajouter un favori
DELETE         | /api/user-action/:id     | Supprimer un favori

### Homepage

Méthode HTTP    | Route      | Description
----------------|------------|-------------
GET            | /api/homepage    | Récupérer les données de la homepage

### User

Méthode HTTP    | Route      | Description
----------------|------------|-------------
GET            | /api/user   | Récupérer les utilisateurs
GET            | /api/user/:id    | Récupérer un utilisateur

### Rôle

Méthode HTTP    | Route      | Description
----------------|------------|-------------
GET            | /api/role    | Récupérer les rôles
GET            | /api/role/:id    | Récupérer un rôle

### Authentification

Méthode HTTP    | Route      | Description
----------------|------------|-------------
POST         | /api/register     | Enregistrer un utilisateur
POST           | /api/login    | Connecter un utilisateur 

### Contact

Méthode HTTP    | Route      | Description
----------------|------------|-------------
GET            | /api/contact    | Récupérer les messages
POST         | /api/contact    | Envoyer un message



### Documents 

[Cahier des charges](/code/public/)
[Présentation](/code/public/)
[Dossier professionnel](/code/public)
[Résumé projet](/code/public)
[Figma](/code/public)
