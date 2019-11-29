```php
<?php language_attributes(); ?>     // langage head html
<?php bloginfo('charset'); ?>       // meta charset
<?php bloginfo('name'); ?>          // titre du blog
<?php bloginfo('description'); ?>   // description du blog	
<?= get_theme_file_uri('public/css/style.css'); ?>    // access file
<?php wp_head(); ?>                 // meta data
<?php body_class(); ?>              // ajout de classes wordpress pour css/js
<?= home_url(); ?>                  // url page d'accueil/index
  
## Navigation
```html
<nav class="main-nav">
  <a href="#">Catégories</a>
  <a href="#">A propos</a>
  <a href="#">Contact</a>
</nav>
```
```php
<?php
  $menu = wp_nav_menu([
    'theme_location' => 'top',
    'container' => 'nav',
    'container_class' => 'main-nav',
    'echo' => false
  ]);
  $menu = strip_tags($menu, '<nav><a>');
  echo $menu;
?>
```
