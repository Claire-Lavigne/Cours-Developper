# Modules d'un programme

- Un module = une thématique (ex : gérer un compte utilisateur, afficher des notifications à l'écran, calculer le score d'un jeu...) = un objet (clés <-> valeurs)
  - quand les valeurs sont des fonctions, ce sont des "méthodes" de l'objet
  - quand les valeurs sont des variables, ce sont des "propriétés" de l'objet

## Exemple de module
``` js
var module = {
  propriete: 'valeur',
  methode: function() {}
};
```
## Module souvent rencontré
```js
// Exemple d'application :
var app = {
  // init = entrée dans le module (lancement de l'application JS)
  init: function() {
    console.info('Initialisation');
    app.name = 'Big Brother';
    app.ecouterEvenements();
  },
  
  ecouterEvenements: function() {
    window.addEventListener('click', app.reagir);
  },
  
  reagir: function() {
    console.log(app.name + ' > ' + 'un clic est survenu');
  }
};

// On lance l'application :
app.init(); 
// dans l'objet app, on exécute la fonction (méthode) stockée dans la clé init

// init est souvent associée à l'écouteur d'évènement sur le chargement du DOM
// Une fois le DOM chargé, la méthode init de l'objet app est exécutée :
document.addEventListener('DOMContentLoaded', app.init);
// pas nécessaire si on charge le <script> en bas du <body>
```
