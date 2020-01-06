# 2 possibilités
- Installation de Plugins : Traduction du contenu personnalisable par l'utilisateur (langue au choix)
- Thème : 
  - i18n **Internationalisation informatique** : Rendre traduisible le contenu figé (html) du thème
  - l10n **Localisation informatique** : Traduction du thème
  
# Etapes i18n
## `style.css`
```css
/*
Theme Name: NomDuTheme
...
Text Domain: nomdutheme
*/
```
## création dossier `languages`
à la racine du thème pour y ajouter les fichiers de traduction

## dans `inc/theme-setup.php`
indiquer à WP où trouver les fichiers de langue :
```php
function theme_setup() {
  ...
  load_theme_textdomain('nomdutheme', get_theme_file_path('/languages'));
}
```

## je peux aussi créer dans mes propres plugins, un dossier `lang` à la racine
  
## Dans mes templates
```php
// traduction du contenu
<?php _e('contenu à traduire', 'nomdutheme') ?>
```
```php
// traduction du contenu en précisant le sens du mot si doubles sens
<?php _ex('les avocats', 'fruit', 'nomdutheme') ?>
<?php _ex('les avocats', 'profession', 'nomdutheme') ?>
```
```php
// si besoin de concaténer + traduire
// %s représente ma $variable (string), %u (variable nombre entier positif)
// Liste des formats ici : https://www.w3schools.com/php/func_string_printf.asp
printf(__('contenu à traduire %s contenu à traduire', 'nomdutheme'), $variable);
// si j'ai plusieurs $variables, je créé un tableau
printf(__('contenu %s à %s traduire', 'nomdutheme'), [$variable1, $variable2]);
// si je dois traduire au singulier et pluriel
printf(_n('Un post', '%s posts'), $variable, 'nomdutheme'), $variable);
```
```php
// pour traduire un contenu dans un attribut
<a title="<?php esc_attr_e('Visiter le site de l\'auteur du thème', 'nomdutheme'); ?>"
```
```php
// pour traduire un contenu dans une balise
<a title="<?php esc_html_e('Visiter le site de l\'auteur du thème', 'nomdutheme'); ?>"
```

## Dans mon `inc/theme-setup.php`
```php
function theme_setup() {
  register_nav_menus([
    'menu_header' => __('Menu de navigation en haut de la page', 'nomdutheme'),
    'menu_lateral' => __('Menu de navigation qui apparait au clic à droite de la page', 'nomdutheme'),
  ]);
}
```

## Si j'ai des CPT, dans mon `inc/theme-template-tags.php`
```php
// Fonction spécifique à chaque taxonomie
function get_prix($post_id)
{
  return sprintf(
    __('%s € / pers.', 
    get_meta($post_id, 'prix')
  );
}
```

# Etapes l10n
