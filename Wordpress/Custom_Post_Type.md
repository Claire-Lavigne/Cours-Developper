# Fichier `front-page.php` par exemple
```php
<?php

$args = [
  'post_type' => 'nomdupost',
  'posts_per_page' => 1
];

$wp_query = new WP_Query($args);

if ($wp_query->have_posts()): while($wp_query->have_posts()): $wp_query->the_post();
  // content
endwhile; endif;

wp_reset_postdata();

?>
```

# Fichier `inc/nomdupost_cpt.php`
```php
<?php
class Nomdupost_cpt
{
    public function __construct()
    {
        add_action('init', [$this, 'create_cpt']);
        add_action('init', [$this, 'create_taxo']);
    }
    public function create_cpt()
    {
        $labels = [
            'name'                  => 'Recettes',
            'singular_name'         => 'Recette',
            'menu_name'             => 'Recettes',
            'name_admin_bar'        => 'Recettes',
            'archives'              => 'Archives des recettes',
            'attributes'            => 'Attributs des recettes',
            'parent_item_colon'     => 'Element parent',
            'all_items'             => 'Toutes les recettes',
            'add_new_item'          => 'Ajouter une nouvelle recette',
            'add_new'               => 'Ajouter une nouvelle recette',
            'new_item'              => 'Nouvelle recette',
            'edit_item'             => 'Editer la recette',
            'update_item'           => 'Mettre à jour la recette',
            'view_item'             => 'Voir la recette',
            'view_items'            => 'Voir les recettes',
            'search_items'          => 'Rechercher les recettes',
            'not_found'             => 'Aucune recette trouvée',
            'not_found_in_trash'    => 'Aucune recette trouvée dans la corbeille',
            'featured_image'        => 'Image de la recette',
            'set_featured_image'    => 'Ajouter une image à la recette',
            'remove_featured_image' => 'Supprimer l\'image de la recette',
            'use_featured_image'    => 'Utiliser une image pour la recette',
            'insert_into_item'      => 'Inserer dans la recette',
            'uploaded_to_this_item' => 'Televerser dans la recette',
            'items_list'            => 'Liste des recettes',
            'items_list_navigation' => 'Liste des recettes',
            'filter_items_list'     => 'Filtrer la liste des recettes',
        ];
        $args = [
            'labels'                => $labels,
            'description'           => 'Recettes de cuisines',
            'supports'              => [
                'title',
                'editor',
                'author',
                'thumbnail',
                'excerpt',
                'custom-fields',
                'revisions',
            ],
            'hierarchical'          => false,
            'public'                => true,
            'menu_position'         => 4,
            'menu_icon'             => 'dashicons-carrot',
            'has_archive'           => true,
            'rewrite'               => [
                'slug'              => 'recette',
                'with_front'        => true,
                // Exemple d'url avec with_front:
                // http://ocooking.fr/recette/burger-bien-fat
                // Exemple d'url sans with_front:
                // http://ocooking.fr/burger-bien-fat
            ]
        ];
        register_post_type('nomdupost', $args);
    }
    public function create_taxo()
    {
        $labels = [
            'name'                       => 'Ingrédients',
            'singular_name'              => 'Ingrédient',
            'menu_name'                  => 'Ingrédients',
            'all_items'                  => 'Tous les ingrédients',
            'new_item_name'              => 'Nouvel ingrédient',
            'add_new_item'               => 'Ajouter un ingrédient',
            'update_item'                => 'Mettre à jour un ingrédient',
            'edit_item'                  => 'Editer un ingrédient',
            'view_item'                  => 'Voir tous les ingrédients',
            'separate_items_with_commas' => 'Séparer les ingrédient avec une virgule',
            'add_or_remove_items'        => 'Ajouter une supprimer un ingrédient',
            'choose_from_most_used'      => 'Choisir parmis les ingrédients les plus utilisés',
            'popular_items'              => 'Ingrédients populaires',
            'search_items'               => 'Rechercher un ingrédient',
            'not_found'                  => 'Aucun ingrédient trouvé',
            'items_list'                 => 'Lister les ingrédients',
        ];
        $args = [
            'labels'        => $labels,
            'hierarchical'  => false,
            'public'        => true,
        ];
        register_taxonomy('nomtaxonomie', 'nomdupost', $args);
        $labels = [
            'name'                       => 'Types',
            'singular_name'              => 'Type',
            'menu_name'                  => 'Types',
            'all_items'                  => 'Tous les types',
            'new_item_name'              => 'Nouveau type',
            'add_new_item'               => 'Ajouter un type',
            'update_item'                => 'Mettre à jour un type',
            'edit_item'                  => 'Editer un type',
            'view_item'                  => 'Voir tous les types',
            'separate_items_with_commas' => 'Séparer les type avec une virgule',
            'add_or_remove_items'        => 'Ajouter une supprimer un type',
            'choose_from_most_used'      => 'Choisir parmis les types les plus utilisés',
            'popular_items'              => 'Types populaires',
            'search_items'               => 'Rechercher un type',
            'not_found'                  => 'Aucun type trouvé',
            'items_list'                 => 'Lister les types',
            'items_list_navigation'      => 'Lister les types',
        ];
        $args = [
            'labels'            => $labels,
            'hierarchical'      => true,
            'public'            => true,
        ];
        register_taxonomy('type', 'nomdupost', $args);
    }
    public function activation()
    {
        $this->create_cpt();
        $this->create_taxo();
        flush_rewrite_rules();
    }
    public function deactivation()
    {
        flush_rewrite_rules();
    }
```

# Fichier `plugins/nomdutheme-settings/nomduteme-settings.php`
```php
<?php
/*
Plugin Name: nomDuTheme Settings
Description: Réglages pour le thème nomDuTheme
Author: ...
Version: 1.0.0
*/

// Sécurisation du plugin
if (!defined('WPINC')) {die();}

// Inclusion des différentes classes necessaire au plugin
require plugin_dir_path(__FILE__) . 'inc/nomdupost_cpt.php';

// CPT RECIPE + TAXO
$nomdupost_cpt = new Recipe_cpt();

register_activation_hook(__FILE__, [$nomdupost_cpt, 'activation']);
register_deactivation_hook(__FILE__, [$nomdupost_cpt, 'deactivation']); 
```

## Fonctions pour faire ses propres métadonnées pour un post
### Fichier 'inc/theme-template-tags.php'
```php
// Création des taxonomies
// Fonction globale
function get_meta($post_id, $meta_name)
{
  return get_post_meta($post_id, $meta_name, true);
}
// Fonction spécifique à chaque taxonomie (return la fonction globale)
function get_prix($post_id)
{
  return get_meta($post_id, 'prix'). ' € / pers.';
}

// Je crée une fonction pour récupérer mes taxonomies
function get_ingredients($post_id)
{
  $html = '';
  
  $array_ingredients = wp_get_post_terms($post_id, 'nomTaxonomieCfRegisterTaxonomy');
  
  // Je retiens le nombre de termes que j'affiche
  // pour le moment 0
  // $nbr_terms = 0;
  
  foreach ($array_ingredients as $wp_term) {
  
    // A chaque iteration dans ma boucle,
    // j'augmente le nombre de terme ajouté
    // $nbr_terms++;
    // Si j'en ai déjà 10...
    // if ($nbr_terms > 10) {
        // Je force une sortie de ma boucle
        // break;
    // }
  
    // Afficher les erreurs/infos
    echo '<pre>';
    var_dump($wp_term);
    die();
  
    // lien vers la page d'archives de la taxonomie
    $html .= '<a href="'.get_term_link($wp_term).'" class="nom">';
    // ucfirst ajoute une majuscule
    $html .= ucfirst($wp_term->name);
    $html .= '</a> ';
  }
  
  return $html;
}

// Récupérer et lister toutes mes taxonomies nommées "type"
function get_types_list()
{
    $html = '<ul>';
    $list = get_terms([
        'taxonomy' => 'type',
        'parent' => 0,         // pas les enfants
        'hide_empty' => false,
    ]);
    foreach ($list as $wp_term) {
        $html .= '<li><a href="'.get_term_link($wp_term).'"">';
        $html .= ucfirst($wp_term->name);
        $html .= '</a></li>';
    }
    $html .= '</ul>';
    return $html;
}
```

### Je les réutilise dans le fichier voulu
```php
<?= get_prix(get_the_ID()); ?>
...
```

### Fichier 'functions.php', j'indique que j'ai créé des fonctions
```php
require('inc/theme-template-tags.php');
```

### Si besoin, je peux retrouver mes taxonomies dans phpmyadmin : 
- `wp_terms_taxonomy` : nom des taxonomies
- `wp_terms` : valeurs des taxonomies (sous-taxonomies)
- `wp_terms_relationships` : relations entre posts et taxonomies
