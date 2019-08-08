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
