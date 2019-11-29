# Compiler Sass en css
- `sass --watch scss:css`

# [LESS](https://openclassrooms.com/en/courses/1281906-simplifiez-vous-la-vie-avec-less)

# 7-1 Pattern - Code Base
- Voir `decoupe-site.png` :
  - rouge = layout
  - bleu = components

```shell
mkdir base utils layout components pages themes vendors

# base        = files defining foundation of site (typography, norms (mesures))
# utils       = variables, functions, mixins, % placegholders
# layouts     = BEM blocks reusable (header, form, ...) for large layout
# components  = BEM block self-container (buttons, ...)
# pages       = code for single page only (home, contact..)
# themes      = thematic code (christmas, ...)
# vendors     = libraries
```

# BEM classes

```scss
wrapper
header logo main footer copyright
nav main-nav social-nav sign
search button button-action
intro article post sidebar archive

__title
__content
__image
__item
__info
__text
__baseline
__form
__label
__tools
```

# Variables

```scss
$main-color
$alt-color
$title-color
$bg-color
$text-color

$font-size: 14px;
$font-family: 'Montserrat';
$font-family-fallback: 'Helvetica', Arial, sans-serif;
