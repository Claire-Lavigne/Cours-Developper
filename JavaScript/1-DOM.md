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


# Elements in the DOM
## Access & Show
```js
// get the html content of objects
var x = document.head
        document.body
// get the html content of elements identified
        document.get...().innerHTML;             // tags included
        document.get...().textContent;           // tags excluded
// get the value of attribute's element
        document.get...().hasAttribute("href");  // Does the element have the attribute ?
        document.get...().getAttribute("href");  // What is its attribute ?
        document.get...().href;                  // similar syntax
        document.get...().id;                    // I can do it with a value as well
        document.get...().classList.contains("big")     // Does my element has a class called "big" ?
        document.get...().className;
// get elements existing in html file
        document.getElementsByTagName('p');      // get all elements <p>
        document.getElementsByClassName('big');  // get all elements with .big
        document.getElementById('blue');         // get the element with #blue
// get elements existing in css file
        document.querySelector('p');             // get the first <p>
        document.querySelectorAll('p');          // get all <p>
        document.querySelectorAll('.text-white') // get all .text-white
        document.querySelectorAll('#art-001')    // get all #art-001
        document.querySelectorAll('p.text-white')// get all <p> with a .text-white
        document.querySelectorAll("#contenu p")  // get all <p> inside a #contenu
        document.querySelectorAll("#antiques > .existe") // get all .existe child with a #antiques parent
// create element
        document.createElement('li')
        createTextNode
        appendChild


console.log(x);                                  // Affiche le html content
console.log(x.length);                           // Combien il y en a ?


for (var i = 0; i < big.length; i++){            // Affiche-les tous (big = class)
    console.log(big[i]);
}

// Afficher la liste de toutes les classes de l'élément 'antiques'
var classes = document.getElementById('antiques').classList;
```

## Modify
```js
// get element and modify its content
const mainHeading = document.getElementById('main-heading');
      mainHeading.textContent = 'Modify the DOM';
// get element and modify its tag (get parent to modify child)
const header = document.getElementById('page-header');
      header.innerHTML = '<h2>Modify the DOM</h2>';
// add and remove class to element
      header.classList.remove('bg-info');
      header.classList.add('bg-primary');
// add style to element (property with " - " : remove symbol and use camelCase) 
      header.style.padding = '1em';
      header.style.backgroundColor = ('#B54135');
```



## Exécuter quelque chose suite à un événement

Lors d'un clic, d'un envoi de formulaire, d'une pression sur une touche du clavier...

```js
// event : 'click', 'submit', 'keyup', 'DOMContentLoaded'...
// handler : fonction exécutée quand l'événement survient
element.addEventListener(type, handler);
```

En prenant la situation suivante

```html
<button id="change">Change le résultat</button>
<div id="resultat">aucun</div>
```

```js
// fonction exécutée lorsque l'événement se produira - communément appelée 'handler'
function changeResultat() {
  var resultat = document.querySelector('#resultat');
  resultat.textContent = 'nouveau résultat';
}

var boutonAjouter = document.querySelector('#ajouter');

// on ajoute un écouteur d'événement à notre bouton, il écoute le clic
boutonAjouter.addEventListener('click', changeResultat);
```

## Exécuter quelque chose après un certain temps

```html
<div id="resultat">aucun</div>
```

```js
function changeResultat() {
  var resultat = document.querySelector('#resultat');
  resultat.textContent = 'nouveau résultat';
}

// la fonction 'changeResultat' sera exécutée au bout 3000ms ou 3 secondes
setTimeout(changeResultat, 3000);
```
