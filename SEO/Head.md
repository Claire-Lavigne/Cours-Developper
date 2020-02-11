## Head infos
```html
<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Onglet, Favoris et Google (SEO) : 50-60 chars -->
    <title>Brand Name | First Keyword - Second Keyword</title>
    <!-- Description for clients in search results, use different keywords : 50-130 characters -->
    <meta name="description" content="Description du site">
    <meta name="author" content="Site créé par...">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
    <!-- Page indexed + links followed -->
    <meta name="robots" content="index, follow">
    <!-- Identify the indexed page (main page url) -->
    <link rel="canonical" href="https://monsite.com" >
    <!-- External Ressources -->
    <link rel="stylesheet" type="text/css" href="style.css">
    <!-- For JS : Possibility to add 'defer' or 'async' -->
    <script type="text/javascript" src="style.js"></script>
    <!-- Specify a default URL and a default target for all links on a page -->
    <base href="https://monsite.com/">
</head>
```

## 1 PAGE = 1 THEMATIC (1 MAIN KEYWORD)
### `<title>`
- Expressions keywords (4 words at least) : inside a sentence
- Example of keywords : how to, review, best, tips, top, find, buy, numbers (9 ways to...)
### `<meta name="description" content="Description du site">`
- Use [Call to Action verbs](https://www.beacontechnologies.com/blog/2009/12/100-call-to-action-keywords-for-ad-campaigns/) (ex : "comparer, apply today, check out") to make the user wants to clic
- Give a winning situation to the user (discounts, offers) : "gagnez, profitez de, télécharger gratuitement"
- 150 chars maximum : fast and effective reading (like a slogan)
- Expression keywords used by users
### `<meta name="keywords">`
- NEVER USE
- Some concurrent use it, so it can be usefull to find their keywords

## ROBOTS META TAG (choose to index or not a webpage)
- FOLLOW –The search engine crawler will follow all the links in that webpage
- NOFOLLOW – The search engine crawler will NOT follow the page and any links in that webpage
- INDEX –The search engine crawler will index the whole webpage
- NOINDEX – The search engine crawler will NOT index that webpage
- NOARCHIVE - Prevents a cached copy of the page to appear in search results
- NOSNIPPET - Prevents a description of the page to appear in search results as well as prevents caching of the page
- NONE - noindex, nofollow

## Scripts execution (JS + jQuery)
- ONLY IF POSSITIONNED IN HEAD
- ASYNC : `<script asyn type="text/javascript" src="style.js"></ script>`
    - The script execution order is not important
    - It doesn't affect css or dom elements
    - It isn't necessary for user experience (ex : Google Analytics Scripts or Tracking Scripts)
- DEFER : `<script defer type="text/javascript" src="style.js"></script>`
    - Better than ASYNC
    - If the scripts must be executed after the HTML is fully loaded

# [Schema structured data - HEAD](https://raventools.com/site-auditor/seo-guide/schema-structured-data)
