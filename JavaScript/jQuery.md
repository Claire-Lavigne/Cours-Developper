[jQuery Lastest Version](https://code.jquery.com/)

## Link html to jQuery
```html
<script src="//code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="jquery.js"></script>
````

### Load DOM
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

### General syntax of jQuery statement
```javascript
$('selector').method(parameter1, parameter2);
```
Exemple : 
```javascript
// change all the paragraphs' background colors to yellow
$('p').css('background-color', 'yellow');
```

## Select elements with selectors
```javascript
$('p')          // select all p elements
$('.round')     // select all classes round
$('#contact')   // select all id contact
$("li#first")   // select all li with id first
$("ol li")      // select all li that are part of ol
$("ol > li")    // select all li that are child (only) of ol (direct descendant)
$("p:first")    // select the first p
$("p:last")     // select the last p
$("li:eq(1)")   // select the li that comes as index(1) = the 2nd li
$("li:gt(0)")   // select all li that come after the index specified (here 0) = starting from the 2nd one
$("li:lt(2)")   // select all li that come before the index specified (here 2) = only the 1st and 2nd one
$("li:not('.vegetable')")     // select all li that don't have the class vegetable
```
### A list of most used selectors
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
### More infos about ...
- [Basic selectors](https://api.jquery.com/category/selectors/hierarchy-selectors/)
- [Filter selectors](https://api.jquery.com/category/selectors/basic-filter-selectors/)
- [Form selectors](https://api.jquery.com/category/selectors/form-selectors/)


## DOM modification methods
- [others](https://openclassrooms.com/en/courses/3504441-introduction-a-jquery/3639666-utilisez-des-methodes-jquery#/id/r-3654651)

### Insert content (strings) to elements
- ```append()``` inserts the contents at the end of the selection; (same line)
- ```prepend()``` inserts the contents at the beginning of the selection; (same line)
- ```before()``` inserts the contents prior to the selection; (line before)
- ```after()``` inserts the contents after the selection. (line after)
- ```replaceWith()``` replace element selected by string.

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

### Insert/remove elements in the DOM
element = content to be inserted

target = element target of the insertion

element + target => jQuery selector, element name, html string or jQuery object

- ```element.appendTo(target)``` inserts an item at the end of the target; (same closing tag)
- ```element.prependTo(target)``` inserts an item to the top of the target; (same closing tag)
- ```element.insertBefore(target)``` inserts an item before the target; (tag before)
- ```element.insertAfter(target)``` inserts an element after the target. (tag after)
- ```wrap()``` surround an element with another
- ```wrapInner()``` wraps the interior of an element;
- ```wrapAll()``` wraps the exterior of an element.

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
### Lesson
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
