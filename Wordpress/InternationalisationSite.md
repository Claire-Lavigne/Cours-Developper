# 2 possibilités
- Installation de Plugins : Traduction du contenu personnalisable par l'utilisateur (langue au choix)
- Thème : 
  - i18n **Internationalisation informatique** : Rendre traduisible le contenu figé (html) du thème
  - l10n **Localisation informatique** : Traduction du thème
  
# Etapes l10n
- `style.css` : `/* Text Domain : nomdutheme */`
- création dossier `languages` à la racine du thème
- indiquer dans `theme-setup.php` où trouver les fichiers de langue :
  ```php
  function theme_setup() {
    ...
    load_theme_textdomain('nomdutheme', get_theme_file_path('/languages'));
  }
  ```
- je peux aussi créer dans mes propres plugins, un dossier `lang` à la racine
  
# Etapes i19n
```php
// traduction du contenu
<?php _e('contenu à traduire', 'nomdutheme') ?>
```
```php
// si besoin de concaténer + traduire
// %s représente ma $variable
printf(__('contenu à traduire %s contenu à traduire', 'nomdutheme'), $variable);
// si j'ai plusieurs $variables, je créé un tableau
printf(__('contenu %s à %s traduire', 'nomdutheme'), [$variable1, $variable2]);
```
```php
// pour traduire un attribut
<a title="<?php esc_attr_e('Visiter le site de l\'auteur du thème', 'nomdutheme'); ?>"
```
