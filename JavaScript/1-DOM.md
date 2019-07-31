- DOM = make html elements into js objects
- Permet de vite parcourir un fichier html sans lire le contenu
- La manipulation du DOM en JavaScript doit se faire de manière raisonnée afin de ne pas dégrader les performances !!

- var window : navigateur (execution js)
- var document : html (dom)

PARCOURIR LE DOM
- ```getElementsByTagName```
- ```getElementsByClassName```
- ```getElementById```
- ```querySelector```
- ```querySelectorAll```

MODIFIER LE CONTENU D'UN NOEUD
- ```innerHTML```
- ```textContent```

CREER NOUVEAU NOEUD
- ```createElement```
- ```createTextNode``````
- ```appendChild```

INTÉRAGIR AVEC LE STYLE DES ÉLÉMENTS
- propriété ```style```
- fonction ```getComputedStyle```

ÉVÈNEMENTS INTÉRACTIFS (PAGE & UTILISATEUR)
- ```click```
- ```keypress```
- ```load```
- ```submit```
- (more)[https://openclassrooms.com/en/courses/1916641-dynamisez-vos-sites-web-avec-javascript/1918968-les-evenements]

ANIMER ÉLÉMENTS PAGE AVEC FONCTIONS OU CSS
- ```setInterval```
- ```setTimeout```
- ```requestAnimationFrame```

On peut utiliser JavaScript pour valider les données d'un formulaire, pendant la saisie ou au moment de sa soumission. L'objet ```FormData``` simplifie leur envoi au serveur.

- objet ```XMLHttpRequest``` : requêtes HTTP asynchrones (AJAX) --> modifier dynamiquement des parties de la page sans actualiser

JSON souvent utilisé pour échanger des informations structurées avec les serveurs web.

API
