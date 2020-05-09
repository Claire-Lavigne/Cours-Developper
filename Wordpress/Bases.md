# Pour quels projets ?
- Besoin d'un back office
- Blog et Médias
- Personnalisation simple en back

# Documentation
- [Codex](https://codex.wordpress.org/)
- [WP](https://developer.wordpress.org/reference/)
- [Dashicons](https://developer.wordpress.org/resource/dashicons/#media-video)
- [SEO](https://www.wpbeginner.com/wordpress-seo/)
- [Installer packs pour Composer](https://packagist.org/)
- [Wordpress Packagist](https://wpackagist.org/)
- [Unsplash Random](https://source.unsplash.com/daily/1600x900/?nature,water) (url indique : new img daily big size and 2 tags)

# Tools
- [Starter Theme](https://underscores.me/)
- [Generate Shortcodes / CPT / Taxonomies](https://generatewp.com/)

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
<?= date('Y'); ?>                   // indication année automatique
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
<?php echo get_permalink( get_page_by_path( 'parole' ) ) ?> // lien du post avec chemin https://nomdusite/parole
<?php the_title(); ?>               // titre d'un post
<?php the_title( '<h3>', '</h3>' ); ?>   // titre d'un post dans balise <h3>
<?php the_content(); ?>             // contenu entier d'un post
<?php get_template_part('template-parts/dossier/nomdufichieravanttiret', 'nomdufichieraprestiret'); ?>       // contenu d'un fichier dans dossier indiqué dans dossier template-parts

<?= get_theme_file_uri('/style.css'); ?>    // echo to access file
// file from navigator
<?php get_template_part('template-parts/dossier/fichier'); ?>  // charger template custom
// file from paste
<?php echo "Je suis index.php"; ?>  // retrouver page

<?php echo date('Y'); ?>  // current Year
<?php echo date("Y", strtotime("-1 year")); ?> // last Year
<?php echo home_url('/predications/'); ?>
<?php echo get_template_directory_uri() . '/public/images/predications/preach.jpg' ?>
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

// DEBUG : show values of each arg
// echo '<pre>';
// print_r($args);
// echo '</pre>';
// die;

$wp_query = new WP_Query($args);

if ($wp_query->have_posts()): while($wp_query->have_posts()): $wp_query->the_post();
  // content
endwhile; endif;

wp_reset_postdata();
```

## DIFFERENCE ENTRE TAGS
- SANS GET
```php
// affiche le titre d'un post
// mostly used inside loop, without parameters
the_title();
```
- AVEC GET
```php
// récupère le titre d'un post
// used outside or inside loop with parameters (ids)
get_the_title();
```

## Posts / Pages = hiérarchies
## Catégories = hiérarchies (sous-catégories)
## Etiquettes (= tags = taxonomies) = tout au meme niveau

## Navigation
```php
// code de départ en html
<nav class="main-nav">
  <a href="#">Catégories</a>
  <a href="#">A propos</a>
  <a href="#">Contact</a>
</nav>
<!-- remplacé par -->
<?php get_template_part('template-parts/nav/nav', 'top'); ?>
```
```php
// dans fichier `template-parts/nav/nav-top` par exemple
$menu = wp_nav_menu([
  'theme_location' => 'top',
  'container' => 'nav',
  'container_class' => 'main-nav',
  'echo' => false
]);

// Je ne veux que des éléments de type nav et a (pas de ul, li)str
$menu = strip_tags($menu, '<nav><a>');

// Je veux une classe sur mes a (wp les ajoute sur li)
$menu = str_replace('a href', 'a class="maclasse" href', $menu);

echo $menu;
```

## Shortcodes
Option 1
```php
// functions.php
require('inc/shortcodes.php');

// shortcodes.php
<?php
if (!function_exists('lvg_arquivos_adm')) :

  function lvg_arquivos_adm($attributs)
  {
    $attributs = shortcode_atts([
      'name' => 'file name',
    ], $attributs);

    $arquivoLink = '<a href="https://google.fr" target="blank">';
    $arquivoLink .= $attributs['name'];
    $arquivoLink .= '</a>';
    return $arquivoLink;
  }

endif;

add_shortcode('arquivo_adm', 'lvg_arquivos_adm');

// file.php
<?php echo do_shortcode( '[arquivo_adm name="nom du fichier"]' ) ?>
```

Option 2
```php
// functions.php
require('inc/shortcodes.php');

// shortcodes.php
<?php
if (!function_exists('lvg_arquivos_adm')) :

  function lvg_arquivos_adm($content = null)
  {
    $arquivoLink = '<a href="https://google.fr" target="blank">';
    $arquivoLink .= $content;
    $arquivoLink .= '</a>';
    return $arquivoLink;
  }

endif;

add_shortcode('arquivo_adm', 'lvg_arquivos_adm');

// file.php
<?php echo do_shortcode( '[arquivo_adm]Mon contenu[/arquivo_adm]' ) ?>
```
