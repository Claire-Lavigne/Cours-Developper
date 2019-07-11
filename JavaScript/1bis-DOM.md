- DOM = make html elements into js objects
- Permet de vite parcourir un fichier html sans lire le contenu
- La manipulation du DOM en JavaScript doit se faire de manière raisonnée afin de ne pas dégrader les performances !!

// ---------------------- PART 1 ----------------------
// Les propriétés "innerHTML","textContent", "classList" et la méthode "setAttribute"
// permettent de modifier les informations d'un élément du DOM.

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
// get value of attribute's element
        document.querySelector("a").
        document.querySelector("a")
        document.querySelector("ul")


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
