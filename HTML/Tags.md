# [More Tags](https://www.freecodecamp.org/news/the-html-handbook/#tags-that-interact-with-text)

# Some usefull links :
- [List all tags](https://openclassrooms.com/en/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3/1608357-memento-des-balises-html)
- [Fonctionnalités HTML/CSS/JS... et usage par navigateurs](https://caniuse.com/)

# Bases
- créer fichiers : ex `index.html` (homepage)
- écrire le texte de mon site
- HTML5 : organiser/hiearchiser contenu (texte + médias) avec tags
- CCS3 : Mise en forme des éléments (ex : couleurs)
- `head` : informations on website => doesn't appear on the page but helps the browser (bots) to display properly
- `body`: visible content of the page
- `html` contenu textuel et media, `css` mise en forme

## VS Code basic HTML
- <kbd>!</kbd> + <kbd>enter</kbd>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
	
</body>
</html>
```

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
<!-- Table des matière -->
From <h1>Title Nivel 1</h1> to... <h6>Title Niveau 6</h6>
<!-- Text -->
<p>A paragraph of text</p>
<!-- sauts de ligne / retours à la ligne -->
<br> or <br/>
```

## Attributes (key="value")
```
<p class="a-class" id="an-id">A paragraph of text</p>
<p contenteditable="true">Edit this content</p>
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
<!-- ou Embed (ex : Youtube) -->
<video>
  <source src="chemin/nom.mp4" type="video/mp4">
</video>
```

## Forms
### Secure Code With OWASP
Secure all HTML form and text field

### Regex
[Regex](https://openclassrooms.com/en/courses/918836-concevez-votre-site-web-avec-php-et-mysql/918834-memento-des-expressions-regulieres)  
Regex email : `#^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$#`  

```html
<form action="cible.php" method="post">
    <p>
        <input type="text" name="prenom" />
        <input type="submit" value="Valider" />
    </p>
    <textarea name="message" rows="8" cols="45">
        Votre message ici.
    </textarea>
    <select name="choix">
        <option value="choix1" selected="selected">Choix 1</option>
        <option value="choix2">Choix 2</option>
        <option value="choix3">Choix 3</option>
        <option value="choix4">Choix 4</option>
    </select>
    <input type="checkbox" name="case" id="case" checked="checked"/> <label for="case">Ma case à cocher</label>
    Aimez-vous les frites ?
        <input type="radio" name="frites" value="oui" id="oui" checked="checked" /> <label for="oui">Oui</label>
        <input type="radio" name="frites" value="non" id="non" /> <label for="non">Non</label>
</form>
```
