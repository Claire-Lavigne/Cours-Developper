# AJAX (Asynchronous JavaScript and XML)
- Update a page without reloading it
- Used with jQuery ```$.ajax()``` (or variants : ```$.get()```, ```$.post()```, ```$.getJSON```)

## Load external HTML into a document via AJAX
```js
$('p').on('click', function() {
  $('description').load('https://www.google.com');
```

##
- ```$.get()``` uses the HTTP GET method to load data that you request.
- ```$.getJSON()```uses the HTTP GET method to load JSON data that you request.
- ```$.post()``` uses the HTTP POST method to sends data to a server.

To all of these methods, you can pass a url,data, callback, andtype in the parentheses as parameters.

url specifies where you want the data from.data represents additional information sent to the server.callbackrepresents the function that should kick off when the data comes back.typeindicates the type of data expected from the server. 

In this last course example, we'll look at the $.getJSON()method, because JSON is likely to be the most common data format you receive via AJAX (maybe behind HTML)!
