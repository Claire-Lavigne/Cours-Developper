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
header header__content header__tools
logo logo__text logo__baseline
main-nav
search search__form search__label
button-action
main
post post__title post__image post__info post__content
sidebar sidebar__title
archive archive__title archive__content
footer
social-nav sign
copyright copyright__title copyright__text
```

# Variables

```scss
$main-color
$alt-color
$bg-color
$text-color

$font-family: 'Montserrat';
$font-family-fallback: 'Helvetica', Arial, sans-serif;
