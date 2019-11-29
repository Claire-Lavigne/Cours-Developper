# Bases
- file index.html (homepage)
- content organized with tags

# Some usefull links :
- [Facebook - HEAD](https://developers.facebook.com/tools/debug/)
- [Test data - HEAD](https://search.google.com/structured-data/testing-tool/u/0/)
- [Schema structured data - HEAD](https://raventools.com/site-auditor/seo-guide/schema-structured-data)
- [List all tags](https://openclassrooms.com/en/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3/1608357-memento-des-balises-html)

# Basic structure
- ```head``` : 
  - tags essential to creating a web page :
    - title : page title (shown in browser + SEO)
    - noscript
    - link (external CSS & JS or resource) : 
      - ```<script defer src="file.js"></script>```
      - ```<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">```
    - style (internal CSS)
      - ```<style>.some-css {}</style>```
    - script (internal JS)
      - ```<script>..some JS</script>```
    - base : set a base URL for all relative URLs contained in the page
      - ```<base href="https://flaviocopes.com/">```
    - metadata : 
      - ```<meta name="description" content="A nice page">```
      - ```<meta charset="utf-8">```
      - ``` ```
      https://www.freecodecamp.org/news/the-html-handbook/#tags-that-interact-with-text
      - ``` ```
      - ``` ```
      - ``` ```
  - doesn't appear on the page but helps the browser (bots) to display properly
- ```body``` : visible content of the page

```html
<!DOCTYPE html>
<html>
    <head>
    ...
    </head>
    <body>
    ...
    </body>
</html>
```

# Tags
```html
<p>A paragraph of text</p>
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```
# Attributes (key="value")
```
<p class="a-class" id="an-id">A paragraph of text</p>
```

# Exemple de formulaire pour barre de recherche
```html
<div class="search">
  <form action="" class="search__form">
    <label for="search" class="search__label">
      <i class="fa fa-search" aria-hidden="true"></i>
    </label>
    <input type="search" id="search" name="search" class="search__field" placeholder="Rechercher">
  </form>
</div>
