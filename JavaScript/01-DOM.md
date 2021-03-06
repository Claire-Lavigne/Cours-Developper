# DOM
- make html elements into js objects
:warning: Limiter la manipulation du DOM
- var `window` : navigateur (execution js)
- var `document` : html (dom)
- noeud = element

## ELEMENTS DU DOM
[Complete List](https://www.w3schools.com/jsref/dom_obj_document.asp)
- ```getElementsByTagName```
- ```getElementsByClassName```
- ```getElementById```
- ```querySelector```
- ```querySelectorAll```
- ```createElement```

```js
var x = document.head                            // get its html content
        document.body                            // get its html content
        // ---------------
        document.getElementsByTagName('p');      // get all elements <p>
        document.getElementsByClassName('big');  // get all elements with .big
        document.getElementById('blue');         // get the element with #blue
        // ---------------
        document.querySelector('p');             // get the first <p>
        document.querySelectorAll('p');          // get all <p>
        document.querySelectorAll('.text-white') // get all .text-white
        document.querySelectorAll('#art-001')    // get all #art-001
        document.querySelectorAll('p.dark')      // get all <p> with a .dark
        document.querySelectorAll("#contenu p")  // get all <p> inside a #contenu
        document.querySelectorAll("#id > .dark") // get all .dark child of #id parent
        // ---------------
        document.createElement('li')             // create tag elements
```

## NOEUDS
- ```appendChild```
- ```prepend```
- ```removeChild```
- --------- OTHERS -------------
- ```replaceChild()``` : change child to its parent by another
- ```createTextNode```
- ```beforebegin``` : avant l'élément existant
- ```afterbegin``` : à l'intérieur de l'élément existant, avant son premier enfant
- ```beforeend``` : à l'intérieur de l'élément existant, après son dernier enfant
- ```afterend``` : après l'élément existant
- ```insertAdjacentHTML``` 
- ```insertBefore```

```js
x.appendChild()                 // add element (as last child) to its parent
 .removeChild()                 // remove child to its parent
 .parentElement.removeChild(x)  // cheated syntax
 
// PARCOURIR LES ELEMENTS
x.children                       // HTMLCollection with all childs of element
 .parentElement                  // the parent of the element
 .nextElementSibling             // travel between elements in a given level (ex : list items)
 .previousElementSibling         // same
 .childElementCount              // count how many child elements my element has
```

## MODIFIER LE CONTENU (HTML) D'UN NOEUD
- ```innerHTML```
- ```textContent```

```js
x.innerHTML = '';                // tags included (to modify tags: select the parent element)
 .textContent = '';              // tags excluded
```

## MODIFIER LA VALEUR D'UN ATTRIBUT D'UN NOEUD
```js
x.setAttribute('id', 'bdg');     // add attribute + its value
 .id;                            // get value
 .id = 'bgd';                    // similar syntax (I can do it with a value as well)
 .href = 'https://google.fr';
 .placeholder = 'Nom';
 .type = 'text';
 .checked = true;
 .name = 'inputValue';
 .hasAttribute('href');          // search if element has the attribute selected
 .getAttribute('href');          // see the attributes of the element
```

## MODIFIER LA CLASSE D'UN NOEUD
```js
x.classList;                     // Show all class of the element selected
 .classList.remove('bgd');       // remove class
 .classList.add('bgd ctr');      // add class
 .classList.toggle('bgd');       // if exists remove class, if absent add class
 .classList.contains("big")      // Does my element has a class called "big" ?
 .className;
 .className = 'bgd';
```

## MODIFIER LE STYLE D'UN NOEUD
- ```style``` (in html file)
- fonction ```getComputedStyle``` (in html and css files)

```js
x.style.padding = '1em';
 .style.paddingTop = '2em';
 
console.log(x.color);

getComputedStyle(x).color
```

## FORMULAIRES
```js
x.value = '';                    // access the value entered by user in form input
 .reset();                       // restore element to normal state
 .preventDefault();              // cancel navigator default behaviour
 .returnValue = false;           // same for old IE
```

## EVENTS
```js
// type : mouseover...
// maFonction : fonction exécutée quand l'événement se produit ('handler' = 'callback' = 'eventlistener')
x.addEventListener('type', maFonction);     // add event
 .removeEventListener('type', maFonction);  // remove event
 .currentTarget
 .relatedTarget                  // event on parent but not child
 .target
 .clientX                        // horizontal - récupérer position souris mousemove
 .clientY                        // vertical - récupérer position souris mousemove
```

## ANIMER ÉLÉMENTS AVEC FONCTIONS
- ```setInterval```
- ```setTimeout```
- ```clearInterval```
- ```clearTimeout```
- ```requestAnimationFrame```

```js
function writeOk() {
  var counter = document.createElement('div');
  counter.textContent = 'OK';
}
var timer = setTimeout(writeOk, 3000); // fonction exécutée au bout de 3s
clearTimeout(timer);    // annulation
```

# Examples
## Use DOM
```js
const title = document.createElement('h3');   // create an h3 (after all existing <h3>)
      title.textContent = 'Small Title';      // modify (add) its content
      
const main = document.querySelector('main');  // select <main>
      main.appendChild(title);                // make <main> the parent of <h3>
                                              
const titles = document.querySelectorAll('h3'); // select all <h3>
const secondTitle = titles[1]                   // select the 2nd <h3> (array starts from 0)
```

## Show elements
```js
console.log(x);                               // Affiche le html content
console.log(x.length);                        // Combien il y en a ?

for (var i = 0; i < x.length; i++){           // Affiche-les tous
    console.log(x[i]);
}
```

## Event with called function (can be reused)
```js
// Quand je clique sur le boutton, le texte de ma div change

var button = document.querySelector('button');
button.addEventListener('click', changeDiv);

function changeDiv() {
    var div = document.querySelector('div');
    div.textContent = 'texte dans la div';
}

// La fonction est exécutée après 3 secondes
setTimeout(changeDiv, 3000);
```

## Event with anonymous function (can't be reused)
```js
// when I click the button (anonym function), the header changes color by adding/removing classes
const header = document.querySelector('header');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    header.classList.add('green-background', 'text-white');
    header.classList.remove('brown-background', 'blue-background');
});
```

## Get Input from form
```js
// get submit button + each input + form

submitButton.addEventListener('click', ($event) => {
    // prevent the submit button from refreshing the page
    $event.preventDefault();
    
    console.log(`Hi ${firstNameInput.value} ${lastNameInput.value}`);
    
    // restore the form input
    form.reset();
});
```

### More 
- [OpenClassrooms : create/remove posts](https://openclassrooms.com/en/courses/5493201-write-javascript-for-the-web/5496641-listen-for-events#/id/video_Player_3)
- [OpenClassrooms : more lessons on Events](https://openclassrooms.com/en/courses/3306901-creez-des-pages-web-interactives-avec-javascript/3545746-reagissez-a-des-evenements)
- [OpenClassrooms : relatedTarget](https://openclassrooms.com/en/courses/1916641-dynamisez-vos-sites-web-avec-javascript/1918968-les-evenements#/id/r-1925111)
- [OpenClassrooms : dropdown menu](https://openclassrooms.com/en/courses/1916641-dynamisez-vos-sites-web-avec-javascript/1919022-les-formulaires#/id/r-1925145)
- [OpenClassrooms : obtenir valeurs getcomputedstyle](https://openclassrooms.com/en/courses/1916641-dynamisez-vos-sites-web-avec-javascript/1919235-manipuler-le-css#/id/r-1925306)
