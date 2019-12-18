# Documentation
- [Codex](https://codex.wordpress.org/)
- [WP](https://developer.wordpress.org/reference/)
- [Dashicons](https://developer.wordpress.org/resource/dashicons/#media-video)
- [Hierarchy WP Interactive](https://wphierarchy.com/)
- [Installer packs pour Composer](https://packagist.org/)
- [Wordpress Packagist](https://wpackagist.org/)
- [Unsplash Random](https://source.unsplash.com/daily/1600x900/?nature,water) (url indique : new img daily big size and 2 tags)

# PHP OPEN/CLOSE TAGS
```php
<?php //content ?>
```

# Template-Tags
```php
<?php language_attributes(); ?>     // langage head html
<?php bloginfo('charset'); ?>       // meta charset
<?php bloginfo('name'); ?>          // titre du blog
<?php bloginfo('description'); ?>   // description du blog	
<?php wp_head(); ?>                 // meta data
<?php wp_footer(); ?>
<?php get_header(); ?>              // charger header.php
<?php get_footer(); ?>              // charger footer.php
<?php body_class(); ?>              // ajout de classes wordpress au body pour css/js
<?php post_class(); ?>              // ajout de classes wordpress dans un post
<?php the_ID(); ?>                  // ajout de l'id wordpress dans un post

<?= home_url(); ?>                  // echo l'url page d'accueil/index

<?php the_time('d/m/Y'); ?>         // date d'un post
<?php the_author(); ?>              // auteur d'un post
<?php the_author_posts_link(); ?>   // auteur d'un post avec lien renvoyant vers tous les posts de l'auteur
<?php the_excerpt(); ?>             // extrait d'un post (si défini)
<?php get_the_excerpt(); ?>         // extrait d'un post généré automatiquement si aucun défini et si dans wp loop
<?php get_sidebar(); ?>             // récupère contenu du fichier sidebar.php
<?php the_post_thumbnail_url(); ?>  // thumbnail d'un post
<?php the_post_thumbnail('post-thumbnail', ['class' => 'post__image']); ?> // avec classe
<?php the_permalink(); ?>           // lien d'un post
<?php the_title(); ?>               // titre d'un post
<?php the_content(); ?>             // contenu entier d'un post
<?php get_template_part('template-parts/dossier/nomdufichieravanttiret', 'nomdufichieraprestiret'); ?>       // contenu d'un fichier dans dossier indiqué dans dossier template-parts

<?= get_theme_file_uri('/style.css'); ?>    // echo to access file
// file from navigator
<?php get_template_part('template-parts/dossier/fichier'); ?>  // charger template custom
// file from paste
<?php echo "Je suis index.php"; ?>  // retrouver page
```

## Boucle de wordpress
### Par défaut
```php
if (have_posts()): while(have_posts()): the_post();
  // content
endwhile; endif;
```
###
```php
$args = [
  'post_type' => 'name',
  'posts_per_page' => number
];

$wp_query = new WP_Query($args);

if ($wp_query->have_posts()): while($wp_query->have_posts()): $wp_query->the_post();
  // content
endwhile; endif;

wp_reset_postdata();
```

## DIFFERENCE ENTRE TAGS AVEC ET SANS GET
```php
// affiche le titre d'un post
// mostly used inside loop, without parameters
the_title();
// récupère le titre d'un post
// used outside or inside loop with parameters (ids)
get_the_title();
```

## Navigation
```html
<!-- en html -->
<nav class="main-nav">
  <a href="#">Catégories</a>
  <a href="#">A propos</a>
  <a href="#">Contact</a>
</nav>
```
```php
// en php
$menu = wp_nav_menu([
  'theme_location' => 'top',
  'container' => 'nav',
  'container_class' => 'main-nav',
  'echo' => false
]);
$menu = strip_tags($menu, '<nav><a>');
echo $menu;
```

## Fonctions
```php
// je crée dans 'inc/theme-template-tags.php' mes propres métadonnées pour un post
function get_meta($post_id, $meta_name)
{
  return get_post_meta($post_id, $meta_name, true);
}
function get_prix($post_id)
{
  return get_meta($post_id, 'prix'). ' € / pers.';
}
```
```php
// et je les réutilise dans le fichier voulu
<?= get_prix(get_the_ID()); ?>
```
```php
// j'indique dans 'functions.php' que j'ai créé des fonctions
require('inc/theme-template-tags.php');
```
