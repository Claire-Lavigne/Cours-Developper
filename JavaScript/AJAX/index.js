// Création d'un objet FormData
var identite = new FormData();
// Ajout d'information dans l'objet
identite.append("login", "Bob");
identite.append("password", "azerty");
// Création et configuration d'une requête HTTP POST vers le fichier post_form.php
var req = new XMLHttpRequest();
req.open("POST", "http://localhost/javascript-web-srv/post_form.php");
// Envoi de la requête en y incluant l'objet
req.send(identite);


var form = document.querySelector("form");
// Gestion de la soumission du formulaire
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Récupération des champs du formulaire dans l'objet FormData
    var data = new FormData(form);
    // Envoi des données du formulaire au serveur
    // La fonction callback est ici vide
    ajaxPost("http://localhost/javascript-web-srv/post_form.php", data, function () {});
});
