- DOM = make html elements into js objects
- Permet de vite parcourir un fichier html sans lire le contenu

# Objects in the DOM
## Access & Show
```js
var x = document.head                            // get the <head>
        document.body                            // get the <body>

console.log(x);
```

# Elements in the DOM
## Access & Show
```js
// get elements existing in html file
var x = document.getElementsByTagName('p');      // get all elements <p>
        document.getElementsByClassName('big');  // get all elements with .big
        document.getElementById('blue');         // get the element with #blue
        document.getElementById("contenu").innerHTML;   // get all html content of the element, tags included
        document.getElementById("contenu").textContent; // get all html content of the element, tags excluded
// get elements existing in css file
        document.querySelector('p');             // get the first <p>
        document.querySelectorAll('p');          // get all <p>
        document.querySelectorAll('.text-white') // get all .text-white
        document.querySelectorAll('#art-001')    // get all #art-001
        document.querySelectorAll('p.text-white')// get all <p> with a .text-white
        document.querySelectorAll("#contenu p")  // get all <p> inside a #contenu
        document.querySelectorAll("#antiques > .existe") // get all .existe child with a #antiques parent
// get value of attribute's element
        document.querySelector("a").getAttribute("href");
        document.querySelector("a").href;
        document.querySelector("ul").id;

// Combien il y en a ?
console.log(x.length);

// Affiche-les tous (big = class)
for (var i = 0; i < big.length; i++) {
    console.log(big[i]);
}

// Afficher la liste de toutes les classes de l'élément 'antiques'
var classes = document.getElementById('antiques').classList;
// donne le nombre de classes
console.log(classes.length);
// affiche les classes
console.log(classes[0]);
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
