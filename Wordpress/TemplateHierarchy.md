- [The WP Template Hierarchy](https://wphierarchy.com/)
- [More infos](https://developer.wordpress.org/themes/basics/template-hierarchy/)


- index.php: fallback for all website pages
- home.php: latest posts (blog)
- front-page.php: custom front page
- page.php: single pages
- single.php: single posts
- header.php and footer.php



# Which template files are used by ... ?
## home page
1. `front-page.php` – If you are using a static front page, then WordPress will first look for this template file and use it to display front page.
2. `home.php` – If you are using static front page, and you don’t have front-page.php template in your theme, then WordPress will look for home.php template. It is also used to display default blog posts on homepage.
3. `index.php` – If front-page.php or home.php do not exist, then WordPress falls back to index.php template to display homepage. This template is the default fallback template in WordPress to display any page.
  
## single post
1. `single-{post-type}-{slug}.php` – Use this template to modify the display of a specific individual post in any post type. For example, if post type is ‘review’ and the post slug is acme-phone, then WordPress would look for single-review-acme-phone.php.
2. `single-{post-type}.php` – WordPress will then check if there is a template to display this specific post type. For example, if the post type is review, then WordPress would look for single-review.php.
3. `single.php` – WordPress will then fall back to single.php.
4. `singular.php` – This template adds another fallback to display a single item from any post type.
5. `index.php` – Finally, as mentioned above, WordPress ultimately falls back to index.php.
  
## single page
1. `Custom Page Template` – The page template assigned to the page. See how to create a custom page template in WordPress.
2. `page-{slug}.php` – If the page slug is contact-us, WordPress will look to use page-contact-us.php.
3. `page-{id}.php` – If the page ID is 17, then WordPress will look for a template file named page-17.php.
4. `page.php` – The template to display all static pages.
5. `singular.php` – This template is a default fallback to all single post type items.
6. `index.php` – The default fallback template

## category archives
1. `category-{slug}.php` – This template is used to display category archive page for a specific category. For example, if category slug is reviews, then WordPress will look for category-reviews.php template.
2. `category-{id}.php` – WordPress then looks for a template with category ID. For example, if category ID is 17, then WordPress will look for category-17.php.
3. `category.php` – This is the default template to display all category archive pages in WordPress.
4. `archive.php` – This is the default template used by WordPress to display any archive pages.
5. `index.php` – The default fallback template.

## tag archives
1. `tag-{slug}.php` – If the tag’s slug is fruits, WordPress will look for tag-fruits.php.
2. `tag-{id}.php` – If the tag’s ID is 17, WordPress will look for tag-17.php template.
3. `tag.php` – The default template for tag archives.
4. `archive.php` – The default template for any achive page.
5. `index.php` – The default fallback template.

## custom taxonomy archives
1. `taxonomy-{taxonomy}-{term}.php` – If you have a custom taxonomy called genre, and there is a term ‘thriller’, then WordPress will look for taxonomy-genre-thriller.php.
2. `taxonomy-{taxonomy}.php` – If the taxonomy were genre, WordPress would look for taxonomy-genre.php.
3. `taxonomy.php` – The default template to display any custom taxonomy archives.
4. `archive.php` – The default fallback for all archive pages in WordPress.
5. `index.php`– The default fallback template in WordPress.

## custom post types
1. `archive-{post_type}.php` – If you have a post type is review, WordPress will look for archive-review.php.
2. `archive.php` – The default template to display all archive pages in WordPress.
3. `index.php` – The default fallback template in WordPress.

## author archives
1. `author-{nicename}.php` – If the author’s nice name is matt, WordPress will look for author-matt.php.
2. `author-{id}.php` – If the author’s user ID is 6, then WordPress will look for author-6.php.
3. `author.php` – The default template used to display author archive pages in WordPress.
4. `archive.php` – The default template to display all archive pages in WordPress.
5. `index.php` – The default fallback template in WordPress

## date based archives
1. `date.php` – The default template for date based archives.
2. `archive.php` – The default template used to display author archive pages in WordPress.
3. `index.php` – The default fallback template in WordPress.

## search pages
1. `search.php` – The default page to display search results in WordPress.
2. `searchform.php` – The template to display a search form in WordPress.
3. `index.php` – The default fallback template in WordPress.

## 404 error pages
1. `404.php` – The default template to display 404 error page in WordPress.
2. `index.php` – The default fallback template in WordPress.

## attachment pages
1. `MIME_type.php` – Mime_type stands for file type. For example, image.php, video.php, application.php.
2. `attachment.php` – The default template to display attachment pages.
3. `single-attachment.php – To display a single attachment.
4. `single.php` – The default template to display single post type items.
5. `index.php` – The default fallback template in WordPress.

## embeds
1. `embed-{post-type}-{post_format}.php` – WordPress will look for a post type and post format template first. For example, if you have a review with video, then WordPress will look for embed-review-video.php.
2. `embed-{post-type}.php` – If the post type is review, WordPress would look for embed-review.php.
3. `embed.php` – The default fallback for all embeds.

# Diference Post/Page
|**Posts**|**Pages**|
|--|--|
|blog|contact, ...|
|timely|timeless|
|social|not social|
|organized with tags/categories|hierarchical, organized as parent/child pages|
|author + published date|no author/published page|
