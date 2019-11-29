```php
<?php language_attributes(); ?>     // langage head html
<?php bloginfo('charset'); ?>       // meta charset
<?php bloginfo('name'); ?>          // titre du blog
<?php bloginfo('description'); ?>   // description du blog	
<?= get_theme_file_uri('/style.css'); ?>    // access file
<?php wp_head(); ?>                 // meta data
<?php body_class(); ?>              // ajout de classes wordpress pour css/js
<?= home_url(); ?>                  // url page d'accueil/index
<?php the_time('d/m/Y'); ?>         // date d'un post
<?php the_author_posts_link(); ?>   // auteur d'un post
<?php the_excerpt(); ?>             // extrait d'un post
<?php the_post_thumbnail_url(); ?>  // thumbnail d'un post
<?php the_post_thumbnail('post-thumbnail', ['class' => 'post__image']); ?> // avec classe
<?php the_permalink(); ?>           // lien d'un post
<?php the_title(); ?>               // titre d'un post
<?php wp_footer(); ?>

<?php get_header(); ?>              // charger header.php

<?php echo "Je suis index.php"; ?>  // retrouver page

if (have_posts()): while(have_posts()): the_post();
  <?php get_template_part('template-parts/dossier/fichier');  // charger template custom
endwhile; endif;

<?php get_footer(); ?>              // charger footer.php


// DIFFERENCE ENTRE TAGS AVEC ET SANS GET
<?php the_title(); ?>               // affiche le titre d'un post
<?php get_the_title(); ?>           // récupère le titre

```

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
