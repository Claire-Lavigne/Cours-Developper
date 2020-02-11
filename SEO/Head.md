```html
<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Onglet, Favoris et Google (SEO) : 50-70 chars -->
    <title>Brand Name | First Keyword - Second Keyword</title>
    <!-- Description for clients in search results, use different keywords : 130-150 characters -->
    <meta name="description" content="Description du site">
    <meta name="author" content="Site créé par...">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
    <!-- Page indexed + links followed -->
    <meta name="robots" content="index, follow">
    <!-- Identify the indexed page (main page url) -->
    <link rel="canonical" href="https://monsite.com" >
    <!-- Specify languages information -->
    <link rel="alternate" hreflang="en-UK" href="https://your-site.com/en/">
    <link rel="alternate" hreflang="x-default" href="http://www.example.com/">
    <link rel="stylesheet" type="text/css" href="style.css">
    <!-- For JS : Possibility to add 'defer' or 'async' -->
    <script type="text/javascript" src="style.js"></script>
    <!-- Specify a default URL and a default target for all links on a page -->
    <base href="https://monsite.com/">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
    <script>...</script>
</head>
```

### 1 PAGE = 1 THEMATIC (1 MAIN KEYWORD)
#### `<title>`
- Expressions keywords (4 words at least) : inside a sentence
- Example of keywords : how to, review, best, tips, top, find, buy, numbers (9 ways to...)
#### `<meta name="description" content="Description du site">`
- Use [Call to Action verbs](https://www.beacontechnologies.com/blog/2009/12/100-call-to-action-keywords-for-ad-campaigns/) (ex : "comparer, apply today, check out") to make the user wants to clic
- Give a winning situation to the user (discounts, offers) : "gagnez, profitez de, télécharger gratuitement"
- Fast and effective reading (like a slogan)
- Expression keywords used by users
#### `<meta name="keywords">`
- NEVER USE
- Some concurrent use it, so it can be usefull to find their keywords

### ROBOTS META TAG (choose to index or not a webpage)
- FOLLOW –The search engine crawler will follow all the links in that webpage
- NOFOLLOW – The search engine crawler will NOT follow the page and any links in that webpage
- INDEX –The search engine crawler will index the whole webpage
- NOINDEX – The search engine crawler will NOT index that webpage
- NOARCHIVE - Prevents a cached copy of the page to appear in search results
- NOSNIPPET - Prevents a description of the page to appear in search results as well as prevents caching of the page
- NONE - noindex, nofollow

### SCRIPTS EXECUTION (JS + jQuery)
- ONLY IF POSSITIONNED IN HEAD
- ASYNC : `<script asyn type="text/javascript" src="style.js"></ script>`
    - The script execution order is not important
    - It doesn't affect css or dom elements
    - It isn't necessary for user experience (ex : Google Analytics Scripts or Tracking Scripts)
- DEFER : `<script defer type="text/javascript" src="style.js"></script>`
    - Better than ASYNC
    - If the scripts must be executed after the HTML is fully loaded

### SPECIFY REL TAGS
- LANGUAGES INFORMATION (in head OR sitemap)
- [more infos](https://www.singlegrain.com/seo/beginners-guide-properly-using-rel-tags-improve-sites-rankings/)


# Display [sitelinks](https://user.oc-static.com/upload/2019/06/17/15607740164582_Example%20of%20sitelinks%20for%20Netflix.jpg)
- Prioritize Your Content and Create the Corresponding URLs
- Organize information in a hierarchy : [structure simple and logical](https://user.oc-static.com/upload/2019/07/17/15633786828122_Capture%20d%E2%80%99e%CC%81cran%202019-07-17%20a%CC%80%2017.49.54.png)
  - Try to limit the number of categories to 3-7 + the number of subcategories
  - Your URLs should reflect the path users take to access the information.
  - All pages should be accessible in less than three clicks.

# Schema structured data - HEAD
- [What it is and How to use it ?](https://raventools.com/site-auditor/seo-guide/schema-structured-data)
- [Rich Snippets](https://backlinko.com/hub/seo/snippets)
- [Ferramenta de teste de dados estruturados](https://search.google.com/structured-data/testing-tool/u/0/)
    - Para testar a renderização, disponibilidade e indexação de dados estruturados
    
# [Knowledge Graph Google](https://developers.google.com/knowledge-graph/how-tos/search-widget)
