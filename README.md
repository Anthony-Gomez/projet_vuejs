# Projet VueJS

Serveur custom

Partie client et partie serveur

# FEATURES AVAILABLE

- Accueil : lien sur la liste des restaurants
- Liste des restaurants : nom et image des restaurants
- Infos des restaurants : nom, image, horaires, géolocalisation du restaurant
- Choix du menu : 
    - affichage de 4 plats avec leur prix, leur description et leur image. lLic sur un plat pour l'ajouter à la commande
    - affichage de la commande dynamique : plats, quantités, prix des plats * leur quantité, prix total, suppression de plats en cliquant sur le (-)

# Groupe : 

- Anthony GOMEZ (sans binôme)

# Remarque : 
Suite à un problème lors du build client, j'ai downgrade la dépendance webpack serveur vers 3.0.0 (solution vu sur stack overflow) qui résout le problème (mais entraine une "vulnérabilité" mineure puisque la dépendance n'est pas à jour. Mais aucune autre alternative fonctionnelle trouvée).