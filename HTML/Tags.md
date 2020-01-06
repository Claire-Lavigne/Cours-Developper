## Head infos
```html
<!-- langue du site -->
<html lang="en-US">
<!-- Le titre apparait dans l'onglet, en favori et sur Google (SEO) -->
<title>Titre (company name) | Sous titre (page Home)</title>
<!-- meta datas -->
<meta name="description" content="Description du site">
<meta name="author" content="Site créé par...">
<meta name="keywords" content="mots-clés pour Google">
<!-- External CSS / JS / Ressources -->
<link rel="stylesheet" type="text/css" href="style.css">
<script type="text/javascript" src="style.js"></script>
<noscript>contenu à afficher si le script ne marche pas</noscript>
<script defer src="file.js"></script> (attribut defer ou async)
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
<!-- internal CSS -->
<style>.some-css {}</style>
<!-- set a base URL for all relative URLs contained in the page -->
<base href="https://flaviocopes.com/">

    https://www.freecodecamp.org/news/the-html-handbook/#tags-that-interact-with-text
```

  - script (internal JS)
    - ```<script>..some JS</script>```
    
    
    
## Blocs et leurs sous-éléments
`<header></header>`
  - `<h1>`, `<h2>`, `<img>`(logo)
`<main></main>`
`<section></section>`
`<aside></aside>`
`<div><div>`
`<footer></footer>`      
  - Copyright "Symbol" + Date + Company name
  
## Autres Tags
```html
<p>A paragraph of text</p>
<!-- Table des matière -->
<h1>titre de niveau 1</h1>...<h6>titre de niveau 6</h6>
<!-- sauts de ligne / retours à la ligne -->
<br> <br/>
```

## Attributes (key="value")
```
<p class="a-class" id="an-id">A paragraph of text</p>
```

## Navigation
```html
<nav>
  <ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
  </ul>
</nav>

<!-- ou -->

<nav>
  <a>First item</a>
  <a>Second item</a>
  <a>Third item</a>
</nav>
```

## Barre de recherche
```html
<div class="search">
  <form action="" class="search__form">
    <label for="search" class="search__label">
      <i class="fa fa-search" aria-hidden="true"></i>
    </label>
    <input type="search" id="search" name="search" class="search__field" placeholder="Rechercher">
  </form>
</div>
```

## Intégration vidéo
```html
<video>
  <source src="chemin/nom.mp4" type="video/mp4">
</video>
```
