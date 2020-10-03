# Font Family
```css
$ff-base:      'Helvetica Neue', Helvetica, Arial, sans-serif;
$ff-alt-alpha: 'Open Sans', sans-serif;
$ff-alt-beta:  'Roboto', sans-serif;
$ff-icon:      'My Icon Font';
```
# Font Size
```css
/* base font size - applied at body / html level */
$fs-base: 16px;

/* larger than heading font sizes */
$fs-giga: 80px;
$fs-mega: 70px;
$fs-kilo: 60px;

/* heading font sizes */
$fs-h1: 36px;
$fs-h2: 32px;
$fs-h3: 28px;
$fs-h4: 24px;
$fs-h5: 20px;
$fs-h6: 18px;

/* smaller than heading font sizes */
$fs-milli: 14px;
$fs-micro: 10px;
$fs-nano:  8px;

h1 { font-size: $fs-h1;}
h2 { font-size: $fs-h2;}
h3 { font-size: $fs-h3;}
h4 { font-size: $fs-h4;}
h5 { font-size: $fs-h5;}
h6 { font-size: $fs-h6;}

.title     { font-size: $fs-h1;}
.sub-title { font-size: $fs-h3;}
```
# Color
```css
/* our base color, with one tint, and one shade - body and typogaphry is generally the base colour */
$clr-base:    #666;
$clr-base-lt: #999;
$clr-base-dk: #333;

/* primary brand color - skyblue - with shades and tints via Sass functions */
$clr-primary:     skyblue;
$clr-primary-lt:  lighten($clr-primary, 5%);
$clr-primary-ltr: lighten($clr-primary, 10%);
$clr-primary-dk:  darken($clr-primary, 5%);
$clr-primary-dkr: darken($clr-primary, 10%);

/* secondary brand color - hotpink - with shades and tints via Sass functions */
$clr-secondary:     hotpink;
$clr-secondary-lt:  lighten($clr-secondary, 5%);
$clr-secondary-ltr: lighten($clr-secondary, 10%);
$clr-secondary-dk:  darken($clr-secondary, 5%);
$clr-secondary-dkr: darken($clr-secondary, 10%);

/* neutrals */
$clr-ntrl-min: #fff;
$clr-ntrl-max: #000;
```
