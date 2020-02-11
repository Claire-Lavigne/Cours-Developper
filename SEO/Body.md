# Recapitulatif d'un bon contenu textuel (quantité, qualité et organisation des textes)
![Mots-clés bien placés](https://github.com/Claire-Lavigne/Cours-Developper/blob/master/SEO/Images/bon-contenu.jpg)

## Où intégrer des expressions-clés dans le texte ?
- One `<h1>`, at least 3 `<h2>` et more `<h3>` + 1er `<p>` qui suit chaque titre
- `<strong>` mots importants (instead of `<b>`)
  - `<em>` pour insister, mettre l'accent sur le contenu (instead of `<i>`)
  - `<mark>` contenu pertinent
  - `<cite>` nom d'une œuvre telle qu'un livre, une pièce ou une chanson.
  - `<dfn>` pour souligner l'occurence d'un mot utilisée pour sa définition
- liens internes et externes
  - `<a> texte du lien </a>`
  - url avec mots-clés et tirets : http://monsite.com/category-keyword/subcategory-keyword/primary-keyword.html
  - l'url doit indiquer le nom de la page
  - toutes les pages doivent être liées ! Don't let orphaned pages
- `<img alt="man wearing backpack walking down escalator">`
  - at least one image per page
  - pour les images qui ont du sens pour le site (products, processes, logo, infographics, diagrams...)
  - pas pour les images qui ont un but décoratif or entertaining
  - real description with keywords around 50-55 chars (16words)
- `<button role=""><i></i></button>` : to describe the function of a button (ex : search, sign up…) and its icon
- `<table><caption>The legend of the table</caption></table>`
- aria attributes :
  - aria-label : describe the element
  - aria-labelledby : id
  - aria-hidden="true" : tell screen readers to ignore that element.
- general tags
  - `<header></header>`
  - `<main></main> `
  - `<nav></nav>`
  - `<section></section>`
  - `<aside></aside>`
  - `<div role="navigation"><div>`
    - Possible roles to add : alert, application, **article**, **banner**, button, cell, checkbox, **complementary**, **contentinfo**, dialog, document, feed, figure, form, grid, gridcell, heading, img, list, listbox, listitem, **main**, **navigation**, region, row, rowgroup, **search**, switch, tab, table, tabpanel, textbox, timer
  - `<footer></footer>`
  
## Où intégrer des expressions-clés dans un CMS ?
- Taxonomies
- Categories
- Tags
