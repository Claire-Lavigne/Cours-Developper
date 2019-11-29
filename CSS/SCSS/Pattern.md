# [LESS](https://openclassrooms.com/en/courses/1281906-simplifiez-vous-la-vie-avec-less)

# 7-1 Pattern - Code Base

```shell
mkdir base utils layout components pages themes vendors

# base        = files defining foundation of site (typography, norms (mesures))
# utils       = variables, functions, mixins, % placegholders
# layouts     = BEM blocks reusable (header, form, ...) for large layout
# components  = BEM block self-container (buttons, ...)
# pages       = code for single page only
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
```
