## About animations
### Where make animations ?
```css
:hover
:active
:focus
:valid
:invalid
:not()
:checked
:enabled
:disabled
```
### Get some knowledge
- [Principes de bases](https://openclassrooms.com/en/courses/5625816-create-modern-css-animations/5794716-apply-the-12-principles-of-animation-to-the-web)

### Values
- ```animation``` = 
- ```animation-name``` : nom de l’animation
- ```animation-duration``` : durée de l’animation (en s ou ms)
- ```animation-delay``` : délai de démarrage de l'animation (valeur négative possible)
- ```animation-timing-function``` : accélération/vitesse de l'animation
  - ```ease, linear, ease-in, ease-out, ease-in-out```
  - ```cubic-bezier(a, b, c, d)``` [Exemple](https://cubic-bezier.com/#.17,.67,.83,.67)
  - ```step-start``` : l'objet va en position 100% dès que l'animation commence
  - ```step-end``` : idem mais après la fin du délai de l'animation
  - ```steps(X)``` : l'objet fait X paliers à chaque étape (saccadé)
- ```animation-iteration-count``` : nombre de répétitions de l’animation
  - ```infinite``` : en continu
  - ```1``` (per defaut)
- ```animation-direction``` : comment l'animation revient une fois terminée
  - ```alternate``` : l'animation revient en sens inverse
  - ```reverse``` : l'animation revient 1 fois en sens inverse
  - ```normal``` (per default) : l'animation revient d'un coup à sa position initiale
- ```animation-fill-mode``` : indiquer comment l'objet doit s'afficher avant et après l'animation
  - ```none``` (par défaut)
  - ```forwards``` : l'élément reste à sa position finale
  - ```backwards``` : l'élément revienne à sa position initiale

### Transform values
- ```translate(x, y)``` : move object (values in px / vh / %)
    - ```translateX(x)```
    - ```translateY(y)```
    - ```translateZ(z)``` => profondeur
    - ```translate3d(x, y, z)```
- ```rotate(x, y)``` : turn object (values in deg or turn)
    - ```rotateX(x)```
    - ```rotateY(y)```
    - ```rotateZ(z)``` => 2D, same as fonctionrotate()
    - ```rotate3d(x, y, z)```
- ```scale(x, y)``` : zoom +/- object (values between 0 => 0% and 1 => 100%)
    - ```scaleX()```
    - ```scaleY()```
    - ```scaleZ()``` => profondeur
    - ```scale3d(x, y, z)```
- ```skew(50deg, 15deg)``` : distortion
    - ```skewX(x)```
    - ```shewY(y)```
    - ```shew3d()```
- ```matrix()``` : configuration personnalisée de la transformation
    - ```matrix3d()```

### Exemples de superbes animations
- [divers objets](https://openclassrooms.com/en/courses/5625816-create-modern-css-animations/5792421-use-pseudo-selectors-to-trigger-css-transitions)
- [formulaires](https://openclassrooms.com/en/courses/5625816-create-modern-css-animations/6155531-manipulate-and-reuse-css-animations)
- [menu](https://openclassrooms.com/en/courses/5625816-create-modern-css-animations/6155536-refine-your-animations-with-chromes-animation-tool)

## Exemples codés
### Transformation 2D
```css
.btn {
    /* indicate the state before */
    background: #011c37;
    border: 4px solid #15DEA5;
    border-radius: 10rem;
    color: #15DEA5;
    cursor: pointer;
    font-size: 3rem;
    overflow: hidden;
    padding: 1.85rem 3rem;
    position: relative;
    transform: scale(1);
    /* call effets indicated on hover */
        /* call 1 transition only */
        transition: transform 400ms linear;
        /* call all transitions */
        transition: all 450ms;
        /* call all transitions with diferent timer */
        transition: transform 450ms, background-color 300ms 150ms;
    /* add more options */
        /* delay the start of the 2nd transition */
        transition-delay: 0, 150ms;
        transition-timing-function: linear;
    /* indicate all new states on hover */
    &:hover {
        transform: scale(1.13);
        background-color: #15DEA5;
    }
}
```

### Transformation 3D
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

### Keyframe
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
