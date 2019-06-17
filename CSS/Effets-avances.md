## Transformations 2D
```css

```

- translate()
- rotate()
- scale()
- skew()
- matrix()

## Animations

On défini une "super animation"
```css
@keyframes masuperanimation {
/* @-webkit-keyframes pour Safari, Chrome et Opera */
    0% {
        transform: translateX(0px);
    }

    50% {
        transform: translateX(150px);
    }

    100% {
        transform: translateX(150px) rotate(30deg);
    }
}
```

On utilise la "super animation" définie plus tôt
```css
div {
    margin: 100px;
    width: 200px;
    height: 150px;
    background-color: #008;
}

div:hover {
    animation: masuperanimation 2s;
    /* -webkit-animation pour Safari, Chrome et Opera */
}
```

- animation-name : nom de l’animation
- animation-duration : durée de l’animation (en s ou ms)
- animation-delay : délai de démarrage de l'animation (valeur négative possible)
- animation-timing-function : accélération/vitesse de l'animation
  - ease, linear, ease-in, ease-out, ease-in-out
  - cubic-bezier(val1, val2, val3, val4)
  - step-start : l'objet va en position 100% dès que l'animation commence
  - step-end : idem mais après la fin du délai de l'animation
  - steps(X) : l'objet fait X paliers à chaque étape (saccadé)
- animation-iteration-count : nombre de répétitions de l’animation
  - infinite : en continu
  - défaut : 1
- animation-direction : comment l'animation revient une fois terminée
  - alternate : l'animation revient en sens inverse
  - reverse : l'animation revient 1 fois en sens inverse
  - par défaut : normal : l'animation revient d'un coup à sa position initiale
- animation-fill-mode : indiquer comment l'objet doit s'afficher avant et après l'animation
  - none : par défaut
  - forwards : l'élément reste à sa position finale
  - backwards : l'élément revienne à sa position initiale
  
### Exemples de superbes animations
[formulaires](https://openclassrooms.com/en/courses/5625816-create-modern-css-animations/6155531-manipulate-and-reuse-css-animations) 
[menu](https://openclassrooms.com/en/courses/5625816-create-modern-css-animations/6155536-refine-your-animations-with-chromes-animation-tool)

## Transformations 3D
```css
body {
    perspective: 800px;     /* valeur faible = profondeur augmentée / valeur élevée = profondeur diminuée */
    perspective-origin: 20px 70px;    /* Point de fuite placé aux coordonnées (20 x, 70 y)
                                      /* Ou : top left center bottom right */
}

div {
    transform: translateZ(200px);
    transform: scale3d(1, 2, 2);
    transform: rotateX(20deg);
    backface-visibility: hidden;    /* pour cacher la face cachée des blocs (non cachée par défaut) */
}
```

- translate3d() : déplacement de l'objet en 3D
  - translate3d(x, y, z) : positionne l'objet dans l'espace en 3D aux coordonnées (X, Y, Z)
  - translateZ(z) : positionne l'objet dans l'espace en 3D aux coordonnées (0, 0, Z) = impression de profondeur, l'objet reste au centre
- rotate3d() : rotation de l'objet en 3D
  - rotateX(x) : une rotation sur l'axe X
  - rotateY(y) : une rotation sur l'axe Y
  - rotateZ(z) : une rotation sur l'axe Z => rotation en 2D, same as fonctionrotate()
  - rotate3d(x, y, z) : une rotation sur plusieurs axes en même temps
- scale3d() : mise à l'échelle de l'objet (agrandissement, rétrécissement) en 3D
  - scale3d(sx, sy, sz) : agrandit l'objet selon un facteur sx, sy, sz sur les différents axes
    (facteur 2 : taille doublée / facteur 0.5 : taille divisée par 2)
  - scaleZ(sz) : agrandit l'objet selon un facteur de sz sur l'axe des Z (profondeur).
- matrix3d() : configuration personnalisée de la transformation en 3D
