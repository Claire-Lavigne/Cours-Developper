## Syntax
```javascript
$('selection').on('event', function() {
    // jQuery here that you want to run when the event happens
});
```

Exemple :
```javascript
// css change on scroll of windows
$(window).on('scroll', function() {
  $('html').css('background-color', 'yellow');
});
```

## Events

### List of mouse events
Used for select, scroll, click...
- ```click``` : Left (normal) click
- ```dblclick``` : Double click
- ```mousedown``` : Right-click or left-click on an element
- ```mouseenter``` or ```mouseover``` : Cursor enters the element's space
- ```mouseleave``` or ```mouseout``` : Cursor leaves the element's space
- ```mousemove``` : Cursor moves within the element's space
- ```mouseup``` : Releasing the left or right click while the cursor is over the element
- ```scroll``` : User scrolls while within the element (often used on an entire ```window```)

[One example of click event on image](https://codepen.io/eclairereese/pen/rLxMjb)
[One example of scroll event on image](https://codepen.io/eclairereese/pen/QEyKpx)

### List of keyboard events
Used when taping text
- ```keydown``` : Pressing a key
- ```keyup``` : Releasing a key
- ```keypress``` : Keeping a key pressed down

[One example of keyboard event in textarea](https://codepen.io/eclairereese/pen/GqoZze)

### List of form elements/window events
Used in a form at : focus, select, change size and content
- ```focus``` : Element has focus
- ```blur``` : Element loses focus
- ```focusin``` : Element or one of its children has focus
- ```focusout``` : Element or one of its children loses focus
- ```resize``` : Element is resized
- ```change``` : Element is modified (used on input, textarea and select tags)

[One example of form event in textarea](https://codepen.io/eclairereese/pen/jrWreG)
[One example of resize window event](https://codepen.io/eclairereese/pen/xOZExo)
[One example of dropdown menu event](https://codepen.io/eclairereese/pen/qNbaYZ)

## Animations & effects

