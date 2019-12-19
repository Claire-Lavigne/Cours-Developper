# Fichier `index.php`
```php
<?php
// Silence is golden
```

# Fichier `functions.php`
```php
<?php
require('inc/theme-setup.php');
require('inc/theme-enqueue.php');
```

# Fichier `inc/theme-enqueue.php`
```php
<?php
if (!function_exists('nomdutheme_scripts')):
    function nomdutheme_scripts()
    {
        wp_enqueue_style(
            'nomdutheme-style',
            get_theme_file_uri('/public/css/style.css'),
            [],
            '1.0.0'
        );
        wp_enqueue_script(
            'nomdutheme-app',
            get_theme_file_uri('/public/js/app.js'),
            [],
            '0.0.1',
            true
        );
    }
endif;
add_action('wp_enqueue_scripts', 'nomdutheme'); 
```

# Fichier `inc/theme-setup.php`
```php
<?php
if (!function_exists('nomdutheme_setup')):
    function nomdutheme_setup()
    {
        add_theme_support('title-tag');
        add_theme_support('post-thumbnails');
        register_nav_menus([
            'menu_header' => 'Menu de navigation en haut de la page',
            'menu_lateral' => 'Menu de navigation qui apparait au clic à droite de la page',
        ]);
    }
endif;
add_action('after_setup_theme', 'nomdutheme_setup'); 
```

# Fichier `style.css`
```css
/*
Theme Name: NomDuTheme
Version: 1.0.0
Description: ...
Author: ...
*/ 
```
