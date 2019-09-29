# Définitions
- `XMLHttpRequest` : requêtes HTTP asynchrones (AJAX) pour modifier une page sans actualiser

# APPELER AJAX - METHODE GET FROM FILE
- ajouter `<script src="../js/ajax.js"></script>` fin body avant tout script
- `ajax.js` file :
    ```js
    // Exécute un appel AJAX GET
    // Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
    function ajaxGet(url, callback) {
        var req = new XMLHttpRequest();
        req.open("GET", url);
        req.addEventListener("load", function () {
            if (req.status >= 200 && req.status < 400) {
                // Appelle la fonction callback en lui passant la réponse de la requête
                callback(req.responseText);
            } else {
                console.error(req.status + " " + req.statusText + " " + url);
            }
        });
        req.addEventListener("error", function () {
            console.error("Erreur réseau avec l'URL " + url);
        });
        req.send(null);
    }

    function afficher(reponse) {
        console.log(reponse);
    }

    ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", afficher);
    ```

# APPELER AJAX - METHODE GET FROM SERVER (FILE)
- ajouter `<script src="../js/ajax.js"></script>` fin body avant tout script
- `ajax.js` file :
    ```js
    // Exécute un appel AJAX GET
    // Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
    function ajaxGet(url, callback) {
        var req = new XMLHttpRequest();
        req.open("GET", url);
        req.addEventListener("load", function () {
            if (req.status >= 200 && req.status < 400) {
                // Appelle la fonction callback en lui passant la réponse de la requête
                callback(req.responseText);
            } else {
                console.error(req.status + " " + req.statusText + " " + url);
            }
        });
        req.addEventListener("error", function () {
            console.error("Erreur réseau avec l'URL " + url);
        });
        req.send(null);
    }
    ```
- `scripts.js` file :
    ```js
    ajaxGet("http://localhost/javascript-web-srv/data/films.json", function (reponse) {
        // Transforme la réponse en tableau d'objets JavaScript
        var films = JSON.parse(reponse);
        // Affiche le titre de chaque film
        films.forEach(function (film) {
            console.log(film.titre);
        })
    });
    ```

# APPELER AJAX - METHODE POST (soumission d'un formulaire)
- configurer serveur apache : editer fichier `httpd.conf`
    - modifier balise `<IfModule>` :
    ```
    <IfModule mod_headers.c>
        # Accept cross-domain requests
        Header always set Access-Control-Allow-Origin "*"
        Header always set Access-Control-Allow-Headers "Content-Type"
    </IfModule>

- Dans dossier de code, ajouter `post_form.php`
```php
<?php
if (empty($_POST)) {
    echo "Aucune donnée reçue";
}
else {
    $post = print_r($_POST, true);
    file_put_contents("post_form.log", $post);
}
```
- et fichier `post_json.php`
```php
<?php
$data = print_r(json_decode(file_get_contents('php://input'), true), true);
file_put_contents("post_json.log", $data);
```
- [Vérifier serveur ok](http://localhost/javascript-web-srv/post_form.php) :
message "Aucune donnée reçue"

- fichier `cours.html`
```html
<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Envoyer des données</title>
</head>

<body>
    <h3>Qui est le plus fort ?</h3>
    <form>
        <p>
            <input type="radio" name="plusFort" id="elephant" value="ELE" checked>
            <label for="elephant">L'éléphant</label>
            <br>
            <input type="radio" name="plusFort" id="rhinoceros" value="RHI">
            <label for="rhinoceros">Le rhinocéros</label>
            <br>
            <input type="radio" name="plusFort" id="hippopotame" value="HIP">
            <label for="hippopotame">L'hippopotame</label>
            <br>
        </p>
        <p>
            <label for="nom">Votre nom</label> :
            <input type="text" name="nom" id="nom" required>
        </p>

        <input type="submit" value="Votez">
    </form>

    <script src="../js/ajax.js"></script>
    <script src="../js/cours.js"></script>
</body>

</html>
```

- fichier `ajax.js`
```js
// Exécute un appel AJAX POST
// Prend en paramètres l'URL cible, la donnée à envoyer et la fonction callback appelée en cas de succès
// Le paramètre isJson permet d'indiquer si l'envoi concerne des données JSON
function ajaxPost(url, data, callback, isJson) {
    var req = new XMLHttpRequest();
    req.open("POST", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    if (isJson) {
        // Définit le contenu de la requête comme étant du JSON
        req.setRequestHeader("Content-Type", "application/json");
        // Transforme la donnée du format JSON vers le format texte avant l'envoi
        data = JSON.stringify(data);
    }
    req.send(data);
}
```

- fichier `cours.js
```js

// Création d'un objet FormData
var commande = new FormData();
// Ajout d'information dans l'objet
commande.append("couleur", "rouge");
commande.append("pointure", "43");
// Envoi de l'objet FormData au serveur
ajaxPost("http://localhost/javascript-web-srv/post_form.php", commande,
    function (reponse) {
        // Affichage dans la console en cas de succès
        console.log("Commande envoyée au serveur");
    }
);
// ou
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


// Création d'un objet représentant un film
var film = {
    titre: "Zootopie",
    annee: "2016",
    realisateur: "Byron Howard et Rich Moore"
};
// Envoi de l'objet au serveur
ajaxPost("http://localhost/javascript-web-srv/post_json.php", film,
    function (reponse) {
        // Le film est affiché dans la console en cas de succès
        console.log("Le film " + JSON.stringify(film) + " a été envoyé au serveur");
    },
    true // Valeur du paramètre isJson
);```


-------
# Autres
- [Read APIs better](https://www.getpostman.com/downloads/)
- `JSON.parse`: transformer texte JSON en objet JS
- `JSON.stringify`: transformer objet JS en texte JSON
```js
var avion = {
    marque: "Airbus",
    couleur: "A320"
};

// fonctionne aussi avec
var avions = [
    {
        marque: "Airbus",
        couleur: "A320"
    },
    {
        marque: "Airbus",
        couleur: "A380"
    }
];

console.log(avion);
var texteAvion = JSON.stringify(avion);  // Transforme l'objet JavaScript en chaîne de caractères JSON
console.log(texteAvion);
console.log(JSON.parse(texteAvion));     // Transforme la chaîne de caractères JSON en objet JavaScript
```
