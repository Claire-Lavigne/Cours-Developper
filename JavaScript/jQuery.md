# jQuery
## Link html to jQuery
- [jQuery Lastest Version](https://code.jquery.com/)
```html
<script src="//code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="jquery.js"></script>
````

## Load DOM
```javascript
$(function() {
  // write code here
})
```
Autres écritures possibles :
```javascript
$(document).ready(function(){})
jQuery(document).ready(function(){})
```

## General Syntax
```javascript
$('selector').method(parameter1, parameter2);
```
Example
```javascript
// change all the paragraphs' background colors to yellow
$('p').css('background-color', 'yellow');
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

- ```.find()``` : trouve un/des élément(s) correspondant au paramètre dans la sélection actuelle
- ```.parent()``` : accède au parent direct d'un/des élément(s) ou à ses parents si on utilise .parents()
- ```.children()``` : accède aux enfants de(s) élément(s)

- ```.height()``` : hauteur d'un cadre sans les marges intérieures, extérieurs ni les bords
- ```.width ()```: largeur d'un cadre sans les marges intérieures, extérieurs ni les bords

- ```.innerHeight()``` : hauteur en comptant les marges intérieures
- ```.innerWidth()``` : largeur en comptant les marges intérieures
- ```.outerHeight()``` : hauteur en comptant les marges intérieures et les bords
- ```.outerWidth()``` : largeur en comptant les marges intérieures et les bords
- ```.outerHeight(true)``` : idem + avec les marges extérieures.
- ```.outerWidth(true)``` : idem + avec les marges extérieures.

- ```.offset()``` : définit les coordonnées d'un élément relativement au coin en haut à gauche de l'objet document
- ```.position()``` : définit les coordonnées d'un élément relativement à son parent direct

- ```.appendTo(target)``` inserts an item at the end of the target; (same closing tag)
- ```.prependTo(target)``` inserts an item to the top of the target; (same closing tag)
- ```.insertBefore(target)``` inserts an item before the target; (tag before)
- ```.insertAfter(target)``` inserts an element after the target. (tag after)
- ```.wrap()``` surround an element with another
- ```.wrapInner()``` wraps the interior of an element;
- ```.wrapAll()``` wraps the exterior of an element.

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

### Examples
```javascript
// css change on scroll of windows
$(window).on('scroll', function() {
  $('html').css('background-color', 'yellow');
});
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
