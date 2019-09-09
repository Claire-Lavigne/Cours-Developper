# AJAX (Asynchronous JavaScript and XML)
- Update a page without reloading it
- Used with jQuery ```$.ajax()``` or variants :
  - ```$.get()``` uses the HTTP GET method to load data that you request.
  - ```$.getJSON()```uses the HTTP GET method to load JSON data that you request (most common)
  - ```$.post()``` uses the HTTP POST method to sends data to a server.
- To all of these methods, you can pass a url, data, callback, and type in the parentheses as parameters :
  - url : where you want the data from
  - data : additional information sent to the server
  - callback : the function that should kick off when the data comes back
  - type : the type of data expected from the server.


# Load external HTML into a document via AJAX
```js
$('p').on('click', function() {
  $('description').load('https://www.google.com');
```

# Load external JSON into a document via AJAX
Here's what we want to accomplish:
1. Transform the JSON (basically a giant string) into a jQuery object
2. Create a list to hold the candies
3. Create a list item for each candy.
  - If the candy has a quantity greater than 0, mark it as available.
  - If the candy has a quantity less than 0, mark it as sold out.
4. Add a non-functional "Buy" button just for appearances.
5. Insert that new HTML into our page.
```html
<body>
    <h1 class="header">Candy store</h1>
  <div class="products">
  	<div id="candyListing">
		</div>
  </div>
</body>
```

```css
body {
  font-family: Helvetica;
  background-image: url(https://farm4.staticflickr.com/3769/9234009120_21d69eacee_o_d.jpg);
}

.header {
  text-align: center;
  background-color: rgba(255,255,255,0.9);
  padding: 20px;
  width: 90%;
  margin: 20px auto;
  border-radius: 3px;
}
.candies {
  text-align: center;
  margin: 0px auto;
  padding: 0px;
  width: 100%;
  list-style: none;
}

.item {
  display: inline-block;
  vertical-align: top;
/*   height: 100px; */
  background-color: rgba(255,255,255,0.9);
  border-radius: 3px;
  width: 20%;
  height: 200px;
  padding: 50px 20px;
  text-align: center;
  margin: 10px;
}

.available {
  color: black;
}

.sold-out {
  color: red;
  text-decoration: line-through;
}

button {
  display: block;
  margin: 20px auto 0px auto;
}
```

```js
$(document).ready(function () {
  $.getJSON('http://codepen.io/eclairereese/pen/OXRjWV.js') // external JSON file online
    .done( function(response) {
    var candyList = '<ul class="candies">';
    $.each(response, function(index, candy) {
      if (candy.quantity > 0) {
        candyList += '<li class="item available">';
      } else {
        candyList += '<li class="item sold-out">'
      }
      candyList += candy.name + '<br>' + "Brand: " + candy.brand;
      candyList += '<button class="btn btn-default">Buy</button>';
      candyList += '</li>';
    });
    candyList += "</ul>";
    $('#candyListing').html(candyList);
  })
  
})
```
