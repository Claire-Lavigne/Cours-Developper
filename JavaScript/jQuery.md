# jQuery
## Link html to jQuery
- [jQuery Lastest Version](https://code.jquery.com/)
- [jQuery CDN](https://cdnjs.com/libraries/jquery)
# jQueryUI : [exemples de fonctionnalités](https://jqueryui.com/sortable/)

## Emplacement
- En fin de `</body>`, devant les autres scripts
```html
<!--cdn-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

<!--jQuery-->
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<!--jQuery UI-->
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
```

## NPM
`npm install jquery`
```html
<script src="../node_modules/jquery/dist/jquery.min.js"></script>
```

## Load DOM
```javascript
$(app.init);

$(function() {
$(document).ready(function(){
jQuery(document).ready(function(){
  // write code here
})
```

## General Syntax
```javascript
$('selector').method(parameter1, parameter2);
```
Example
```javascript
// define element
var $element = $('p');
// change all the paragraphs' background colors to yellow
$element.css('background-color', 'yellow');
$element.text('Hello');
$element.html('<h1>Hello</h1>');
$('p').attr('href', 'https://google.com');
```

## Création d'un élément et ajout d'attributs
```javascript
$('<img>', {
  src: 'images/eiffel.jpg',
  alt: 'Photo de la Tour Eiffel'
});
```

## Récupération d'un élément et ajout d'attributs
```javascript
var proprietes = {
  color: '#F3900A',
  backgroundColor: '#C5C5C5'
};
$('.contenu').css(proprietes);
```

## Selectors
```javascript
$('p')          // select all p elements
$('.round')     // select all classes round
$('#contact')   // select all id contact
$("li#first")   // select all li with id first
$("ol li")      // select all descendants li that have an ol anscestor
$("ol > li")    // select all direct children li of ol parent
$("ol + li")    // select all li that are just next to ol (only li index(0))
$("ol ~ li")    // select all descendants li just after an ol anscestor
$("p:first")    // select the first p
$("p:last")     // select the last p
$("li:eq(0)")   // select the first li (index(0)) = nth-child(1)
$("li:gt(0)")   // select all li that come after the index specified (here 0) = starting from the 2nd one
$("li:lt(2)")   // select all li that come before the index specified (here 2) = only the 1st and 2nd one
$("li:not('.vegetable')")     // select all li that don't have the class vegetable
```
### Most used special selectors
```javascript
:hidden
:visible
:contains("text")
:has("element")
[attribute]
[attribute="value"]   // $('ol[type="A"]')
[attribute!="value"]
:input
:password
:text
:checkbox
:radio
:submit
```

## Methods
- ```.html()``` : remplace le contenu HTML de la page
- ```.text()``` : remplace le texte de la page
- ```.val()``` : récupérer la valeur d'un élément de formulaire
- ```.replaceWith()``` : remplace l'élément lui-même
- ```.remove()``` : supprime les éléments de la page
- ```.before()``` : insère du contenu avant le(s) élément(s) sélectionné(s)
- ```.after()``` : insère du contenu après le(s) élément(s) sélectionné(s)
- ```.prepend()``` : insère du contenu à l'intérieur du/des élément(s) sélectionné(s) (après la balise HTML ouvrante)
- ```.append()``` : insère du contenu à l'intérieur du/des élément(s) sélectionné(s) (avant la balise HTML fermante)
- ```.attr()``` : définit un attribut et sa valeur ou simplement récupère sa valeur
- ```.removeAttr()``` : supprime un attribut, RIP
- ```.addClass()``` : ajoute une nouvelle classe à/aux élément(s) sélectionné(s) (sans remplacer sa classe actuelle)
- ```.removeClass()``` : supprime une classe du/des élément(s) sélectionné(s)
- ```.css()``` : récupère ou définit les propriétés CSS d'un élément, même plusieurs propriétés à la fois.
- ```.delay()```
________________
- ```.find()``` : trouve un/des élément(s) correspondant au paramètre dans la sélection actuelle
- ```.closest()``` : trouve l'élément le plus proche
- ```.parent()``` : accède au parent direct d'un/des élément(s) ou à ses parents si on utilise .parents()
- ```.children()``` : accède aux enfants de(s) élément(s)
- ```.siblings()``` : accède aux frères
- ```.first()``` : premier item
- ```.last()``` : dernier item
- ```.next()``` : item suivant
- ```.prev()``` : item précédant
- ```.eq()``` : item n°X de l'index
- ```.index()``` : n° de l'index d'un élément
________________
- ```.height()``` : hauteur d'un cadre sans les marges intérieures, extérieurs ni les bords
- ```.width ()```: largeur d'un cadre sans les marges intérieures, extérieurs ni les bords
________________
- ```.innerHeight()``` : hauteur en comptant les marges intérieures
- ```.innerWidth()``` : largeur en comptant les marges intérieures
- ```.outerHeight()``` : hauteur en comptant les marges intérieures et les bords
- ```.outerWidth()``` : largeur en comptant les marges intérieures et les bords
- ```.outerHeight(true)``` : idem + avec les marges extérieures.
- ```.outerWidth(true)``` : idem + avec les marges extérieures.
________________
- ```.offset()``` : définit les coordonnées d'un élément relativement au coin en haut à gauche de l'objet document
- ```.position()``` : définit les coordonnées d'un élément relativement à son parent direct
________________
- ```.appendTo(target)``` inserts an item at the end of the target; (same closing tag)
- ```.prependTo(target)``` inserts an item to the top of the target; (same closing tag)
- ```.insertBefore(target)``` inserts an item before the target; (tag before)
- ```.insertAfter(target)``` inserts an element after the target. (tag after)
- ```.wrap()``` surround an element with another
- ```.wrapInner()``` wraps the interior of an element;
- ```.wrapAll()``` wraps the exterior of an element.
________________
- ```.fadeIn()``` :
- ```.fadeOut()``` :
- ```.animate()``` :
- ```.hide()``` :

### DATA
Il est possible d'utiliser l'attribut data dans une balise HTML pour stocker des informations
```javascript
<p id="chapeau" data-width="250">Lorem ipsum dolor sit amet...</p>
var dataWidth = $('#chapeau').data('width');
//ou
var dataWidth = $('#chapeau').attr('data-width');
```

### Example : add/remove strings
```javascript
$(function() {
    $('h2').append('***');        // Add three asterisks after each <h2>
    $('h2').prepend('***');       // Added three asterisks before each <h2>
    $('#three').before('<hr>');   // Adding a horizontal line before <h2> #three
    $('#three').after('<hr>');    // Adding a horizontal line after <h2> #three
    
    $('img').replaceWith(':)');   // Replacing all img with the string :)

    // Replacing an h2 by an h3
    $('h2').each(function() {
      var elemH2 = $(this);
      elemH2.replaceWith('<h3>' + elemH2.text() + '</h3>');
    })
});
```
### Example : add/remove elements
```javascript
$(function() {
    $('<hr>').appendTo($('h2'));    // Add hr after each h2
    $('<hr>').prependTo($('h2'));   // Add hr before each h2
    
    $('<li>item</li>').insertBefore($('li:nth-child(2)'));   // insert list item before 2nd list item
    $('<li>item</li>').insertAfter($('li:nth-child(2)'));    // insert list item after 2nd list item
    
    $('li').wrap('<i></i>');                      // wrap all li in italic
    $('li').wrap('<font color="red"></font>');    // wrap all li with red font color
    
    $('h2').remove();               // remove all h2
});
```

## Events 
```javascript
$('selection').on('event', function() {
    // jQuery here that you want to run when the event happens
});
```
```javascript
// css change on scroll of windows
$(window).on('scroll', function() {
  $('html').css('background-color', 'yellow');
});

// remove all event Listener of 'window'
$(window).off();
// remove all 'scroll' events of 'window'
$(window).off('scroll');
```

## Animate()
```javascript
// la largeur sera modifiée sur 2000ms soit 2 secondes
$('.contenu').animate({width: '70%'}, 2000);
```
```javascript
// Les proprietes CSS affectées et une liste d'options configurant l'animation
var proprietes = {
  color: '#8457D1',
  width: '70%'
};

var options = {
  //durée de l'animation
  duration: 2000,
  // mode de transition
  easing: 'easein',
  // callback appelé lorsque l'animation sera terminée
  complete: function(){
    console.log('Animation terminée');
  }
};

$('.contenu').animate(proprietes, options);
```

- [One example of click event on image](https://codepen.io/eclairereese/pen/rLxMjb)
- [One example of scroll event on image](https://codepen.io/eclairereese/pen/QEyKpx)
- [One example of keyboard event in textarea](https://codepen.io/eclairereese/pen/GqoZze)
- [One example of form event in textarea](https://codepen.io/eclairereese/pen/jrWreG)
- [One example of resize window event](https://codepen.io/eclairereese/pen/xOZExo)
- [One example of dropdown menu event](https://codepen.io/eclairereese/pen/qNbaYZ)

## Animations & effects
- ```$($this).next('element').show()``` // enchaîner les éléments pour créer une suite d'actions      
- ```$('element').show(2000)```         // 2000ms = 2s ; time in ms can be replaced by : 'slow' 'fast'
- ```$('element').hide(2000)```
- ```$('element').fadeIn(2000)```
- ```$('element').fadeOut(2000)```
- ```$('element').fadeTo(2000)```
- ```$('element').slideDown(2000)```
- ```$('element').slideUp(2000)```
- ```$('element').slideToggle(2000)```
- ```$('element').animate(2000)```

```javascript
$('#show').on('click', function() {     // when click button "show"
  $('tr:even').show('slow');            // even lines appear
    $('img').first().show('slow', function showNextOne() {        // first img reappear
        $(this).next('img').show('slow', showNextOne);            // and then the next ones, one by one
    } ); 
} ); 
$('#hide').click(function() {           // when click button "hide"
  $('tr:even').hide(1000);              // even lines disappear
    $('img').first().hide('slow', function hideNextOne() {        // first img disappear
        $(this).next('img').hide('slow', hideNextOne);            // and then the next ones, one by one
    }); 
});

$('#message').fadeIn('slow').delay(2000).fadeOut('slow');
```
