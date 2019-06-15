## Link html to jQuery cloud (header) and my jQuery files (end of body)
```html
<script src="//code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="../js/jquery.js"></script>
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
// exemple : change all the paragraphs' background colors to yellow
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
[attribute="value"]     // exemple : $('ol[type="A"]')
[attribute!="value"]
:input
:password
:text
:checkbox
:radio
:submit
```
### More infos about ...
[Basic selectors](https://api.jquery.com/category/selectors/hierarchy-selectors/)
[Filter selectors](https://api.jquery.com/category/selectors/basic-filter-selectors/)
[Form selectors](https://api.jquery.com/category/selectors/form-selectors/)


## DOM modification methods

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
    $('li').wrap('<i></i>');        // wrap all li in italic
    $('li').wrap('<font color="red"></font>');               // wrap all li with red font color
    $('h2').remove();               // remove all h2
});
```
