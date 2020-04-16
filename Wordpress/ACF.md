# ACF Repeater

## Appel de mon repeater
```php
<?php if (have_rows('informations_de_laudio')) : while (have_rows('informations_de_laudio')) : the_row();
    $titre = get_sub_field('titre_de_la_predication');
    $video = get_sub_field('video_youtube');
    $audio = get_sub_field('audio');
    $pasteur = get_sub_field('pasteur');
    $versets = get_sub_field('versets');
    $date = get_sub_field('date');
?>

<?php if ($date) : ?>
  <?php echo $date; ?>
<?php endif ?>

<?php endwhile;
endif; ?>
```

## Dernière publication de mon repeater
```php
<?php
$args = [
  'post_type' => 'predications',
  'category_name'  => 'Actuel',
  'posts_per_page' => 1,
  'post_status'    => 'publish',
  'order' => 'DESC'
];
$query = new WP_Query($args);

if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post();

    $repeater = get_field('informations_de_laudio');
    $last_row = ($repeater)[0];
    $titre = 'titre_de_la_predication';
    $video = 'video_youtube';
    $audio = 'audio';
    $pasteur = 'pasteur';
    $versets = 'versets';
    $date = 'date';
?>

<?php if ($last_row[$date]) : ?>
  <div class="slider-nav">
    <div><?php echo $last_row[$date]; ?></div>
  </div>
<?php endif ?>

<?php if ($last_row[$audio]) : ?>
  <audio controls controlsList="nodownload">
    <source src="<?php echo $last_row[$audio['url']]; ?>" type="audio/mpeg">
    Votre navigateur ne prend pas en charge l'audio HTML. Voici un
    un <a href="<?php echo $last_row[$audio['url']]; ?>">lien vers le fichier audio</a> pour le
    télécharger.
  </audio>
<?php endif ?>
          
<?php endwhile;
endif;
wp_reset_postdata(); ?>
```
