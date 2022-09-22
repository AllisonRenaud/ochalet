# Projet personnel - O'Chalet

## Projet présenté lors de l'examen du Titre Professionnel Développeur Web et Web Mobile de Niveau V

##### ➔ Contexte

Le dernier mois de ma formation, en vue du *Titre Professionnel Développeur Web et Web Mobile*, j’ai développé un site web avec une équipe composée de quatre camarades de
ma promotion et moi-même. 
<br>
Ce projet était très formateur et j’y ai pris beaucoup de plaisir. Il est d'ailleurs visible ici: https://github.com/AllisonRenaud/projet-fin-formation
<br>
Ou encore ici, en démo vidéo lors de la présentation que nous avons réalisé à la fin de la formation: https://youtu.be/4uRlJYU4224 (à partir de 57:30).
<br>
<br>
Cependant, au moment de préparer le titre professionnel et en revoyant le code produit sur ce dernier mois de formation, j’ai pris la décision de **recoder entièrement le projet, seule**. 
<br>
<br>
Je voulais faire quelque chose qui me ressemble et surtout continuer à apprendre en codant des parties sur lesquelles je n’avais pas pu travailler lors de la réalisation du projet en équipe, notamment la partie back-end.
<br>
<br>
Ici vous pouvez donc découvrir le projet **O’Chalet codé entièrement par mes soins**, une application web de réservations de chalets dans les montagnes françaises.


## Pré-requis

Pour commencer, vous aurez besoin d'installer, si ce n'est pas déjà fait: 

#### ➔ node v16+
#### ➔ yarn ou npm
#### ➔ docker (pour créer la base de données postgres et pgadmin pour visualiser la base de données)

## 1. Installation

Ensuite, il faudra cloner le repository:

```sh
$ git clone git@github.com:AllisonRenaud/ochalet.git
```

## 2. Configuration de la base de données

Pour commencer, il est nécessaire de configurer le fichier *.env*. 
<br>
Dans le dossier *backend* se trouve un fichier *.env.example* qui contient les variables d'environnement à utiliser pour le projet.

```
DATABASE_URL=

TOKEN_SECRET=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

**DATABASE_URL** est l'URL pour la base de données de postgres. Personellement j'ai utilisé celle-ci: **"postgresql://root:root@localhost:5432/ochalet?schema=public"**
<br>
<br>
**TOKEN_SECRET** est une variable pour générer le token secret de Json Web Token.

Ci-dessous, nous avons l'information de la **API de Cloudinary** que vous pouvez trouver ici: https://cloudinary.com/users/register_free

**CLOUDINARY_CLOUD_NAME**
<br>
**CLOUDINARY_API_KEY**
<br>
**CLOUDINARY_API_SECRET**


## 3. Démarrage

Une fois le projet cloné et après avoir configuré les variables d'environement, il faut préparer la base de données.


### Docker

Pour lancer Docker il faut entrer dans le dossier **backend** et ensuite saisir les commandes suivantes:

```sh
cd backend
docker-compose up
```
Cette commande de *docker-compose up* installe **postgres** et **pgadmin**.
<br>
Comme **Docker** utilise le terminal pour voir son Log, nous devons ouvrir un autre terminal pour réaliser les prochaines étapes.


### Back-end

Pour installer les dépendances du projet **backend** nous devons exécuter les commandes suivantes:


```sh
yarn
yarn seed
yarn start

```

**yarn** sert à l'installation
<br>
**yarn start** sert à exécuter le projet backend
<br>
**yarn seed** sert à alimenter la base de données avec des données *random*
<br>

 Le projet **backend** utilise **nodemon** et va montrer le Log de ce projet. Il va donc nous falloir utiliser un autre terminal pour les prochaines étapes.


### Front-end

Pour installer les dépendances du projet **frontend** nous devons nous assurer d'être placé dans le dossier **frontend** pour exécuter les commandes suivantes:


```sh
yarn
yarn start
```


## Technologies utilisées

#### ➔ Front-end
- Javascript
- React
- React Redux 
- React-router-dom 
- Axios
- SASS 
- Ant Design
- React Date Range 
- Date-fns 

#### ➔ Back-end
- Node
- Express
- JSON Web Token 
- Bcrypt 
- Dotenv 
- Prisma 
- PostgreSQL
- Insomnia 
- Cloudinary 
- Formidable 


## Outils utilisés

##### ➔ Google Drive
Pour stocker au sein d’un dossier dédié au projet tous les documents nécessaires à sa réalisation comme par exemple les wireframes , le MCD, le dictionnaire de données…
##### ➔ Google Docs
Pour créer des documents importants pour le projet, comme le dictionnaire de données et le cahier des charges.
##### ➔ Whimsical
C’est un espace de travail collaboratif qui m’a permis de réaliser les wireframes de l’application.
##### ➔ Draw.io
C’est un outil de création de diagrammes en ligne avec lequel j’ai réalisé le MCD de l’application
##### ➔ Tailwind Color Generator
Cet outil permet de générer un nuancier de couleur à partir d’une couleur et d’en extraire le code CSS associé afin de pouvoir utiliser ce nuancier dans le projet.
##### ➔ unDraw
Ce site propose gratuitement des illustrations pour lesquelles on peut choisir la couleur. J’ai donc pu uniformiser les illustrations de O’Chalet tout en respectant
la charte graphique, grâce à ce site.
##### 37➔ Unsplash
De nombreuses photos libres de droits sont disponibles gratuitement sur ce site. Il m’a été très utile pour alimenter O’Chalet en photos de montagnes et de chalets.
##### ➔ Feather
C’est un catalogue d'icônes libres de droits que j’ai utilisé notamment pour illustrer le détail des annonces de chalets proposées sur mon application.
##### ➔ Trello
Cette application de gestion de projet m’a permis d’organiser mon travail et de visualiser le travail qu’il me restait à faire, ce qui était en cours de développement et ce qui avait déjà été fait. J’ai aussi eu la possibilité d’ajouter des étiquettes à chacune des tâches pour savoir si elles étaient à réaliser côté frontend ou côté backend.
##### ➔ Git
Cet outil de versioning m’a permis de réaliser des commits détaillés tout au long de mon projet.
##### ➔ GitHub
Cet outil m’a permis de stocker et publier tout le code que j’ai produit en y incluant les commentaires fait dans les commits réalisés avec Git.
##### ➔ Visual Studio Code
C’est l’éditeur de code que j’ai choisi pour coder tout le projet.
##### ➔ Insomnia
C’est un outil avec lequel j’ai testé tous les endpoints de mon API.

