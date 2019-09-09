- `XMLHttpRequest` : requêtes HTTP asynchrones (AJAX) pour modifier une page sans actualiser


# APPELER AJAX - METHODE GET FROM FILE
- ajouter `<script src="../js/ajax.js"></script>` fin body avant tout script
- copier dans `function.js`
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
- copier dans `ajax.js`
```js
function afficher(reponse) {
    console.log(reponse);
}

ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", afficher);
```

# APPELER AJAX - METHODE GET FROM SERVER (FILE)
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

-------
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
---------
- [Read APIs better](https://www.getpostman.com/downloads/)
