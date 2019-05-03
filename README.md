Projet node.js : CAMBERT Killian, JOULY Antonin, DROUET Djimy, REILLON Antonin

# Lancement de l'API
- Lancer son invité de commande (cmd)
- Se rendre dans le dossier du projet (commande cd)
- Taper "npm install" puis une fois l'installation terminée, taper "node server.js", un message va s'afficher : "API was launched on port 3000"
**L'API est maintenant fonctionnelle**

Ensuite :
- Se rendre sur internet avec l'adresse URL : localhost:3000

Vous voila sur le site web, connectez-vous avec l'identifiant et mot de passe suivant : test / test.


# Commandes
***Lancer l'invite de commande (cmd)***

Si vous n'êtes pas déjà dans le dossier du projet : 
- **Étape 1** : `cd E:\wamp64\www\projetDevNode `
À adapter selon l'emplacement de votre dossier.

- **Étape 2** : `npm install`
- **Étape 3** : `node server.js`

# Les demandes
## Connexion 
- Pouvoir se connecter au SRM à l'aide d'identifiants
- Identifiants non administrable 
- Ajouter/modifier dans la base de données

## Gestion des fournisseurs
- Pouvoir accéder à la liste des fournisseurs
- Pouvoir en ajouter, modifier et supprimer

Les informations d'un fournisseur seront les suivantes : Nom, Description, Adresse, Téléphone et E-mail.

# Les tâches du projet
Après avoir pris connaissances du projet node.js, nous en avons sortie plusieurs grandes lignes de direction : réalisation d'un site web, réalisation d'une application mobile, réalisation d'une API et enfin, la mise en place d'une base de données. 
Avant de commencer à développer les différents supports/outils, nous avons réfléchi et travaillé sur le design des différents écrans (*voir maquettes*).
Une fois que nous étions d'accord sur le design, nous nous sommes réparti les différentes tâches importantes du projet.

## Répartition des rôles

- Antonin Jouly : Réalisation de l'API
- Killian Cambert : Réalisation de l'application mobile et des maquettes
- Djimy Drouet : Réalisation du site web
- Antonin Reillon : Réalisation de certains points sur le site web et de la documentation.

Bien évidemment, cela concerne la répartition des tâches importantes et cela ne nous a pas empêché de nous entre aider quand un des membres du groupe était bloqué ou pour effectuer des recherches.

# Nos choix

Pour réaliser cette API, nous avons décidé d'utiliser les extensions suivantes : Express, Mongoose, Request, Yargs, Body-Parser et enfin EJS.

## Présentation des extensions

- **Express** : micro-framework pour Node.js. Cette extension fournit des outils basiques pour simplifier la création d'une application web et mobile. Elle permet également de gérer nos URL et d'utiliser des templates par exemple.

- **Mongoose** : permet de faire la passerelle entre le serveur Node.js et le serveur MongoDB (base de données).

- **Request** : permet de faire des requêtes HTTP et d'être redirigé. (prend également en charge HTTPS)

- **Yargs** : c'est une bibliothèque Node.js. Cela permet de créer des outils de ligne de commande interactifs et de générer une meilleure interface utilisateur. 

- **Body-Parser** : permet de récupérer et d'analyser le corps des demandes entrantes dans un middleware et de les exposer. 

- **EJS** : c'est un modèle JavaScript intégrés. Il permet de générer un balisage HTML avec JS.