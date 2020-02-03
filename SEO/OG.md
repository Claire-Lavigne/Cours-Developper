## Open Graph Data (Facebook, LinkedIn, Google) and TWITTER CARDS
- * = required

### Tools (Domain approved required)
- [Facebook Debugger](https://developers.facebook.com/tools/debug)
- [Twitter Validation Tool](https://dev.twitter.com/docs/cards/validation/validator)
- [Google Testing Tool](http://www.google.com/webmasters/tools/richsnippets)
- [Pinterest Rich Pins Validator](http://developers.pinterest.com/rich_pins/validator/)

### OG Cards
#### [More infos](ogp.me/#types)
```html
<meta property="fb:app_id" content="1664866743786891"/>
<meta property="fb:admins" content="1664866743786891"/>
*<meta property="og:type" content="article" />
  blog / website / article
*<meta property="og:title" content="TITLE OF YOUR POST OR PAGE" />
  90 characters max (60-70)
*<meta property="og:description" content="DESCRIPTION OF PAGE CONTENT" />
  200 characters max, call to action word (155)
*<meta property="og:image" content="LINK TO THE IMAGE FILE" />
  other option : video, audio, music, article, book,...
  600*600px
  or 1200*627px
  at least 200x200px
  large images up to 1200x630px wide.
  < 5MB
*<meta property="og:url" content="PERMALINK" />
<meta property="og:site_name" content="SITE NAME" />
<meta property="og:image:type" content="image/jpeg"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:locale" content="fr_FR"/>
  default : en_US
<meta property="og:locale:alternate" content="es_ES"/>
  other languages of page
```

### TWITTER Cards
#### [More infos](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards)
*<meta name="twitter:card" content="summary">
- summary / summary_large_image / 
<meta name="twitter:url" content="URL OF THE CONTENT">
*<meta name="twitter:title" content="TITLE OF POST OR PAGE, MAX 70 chars, headline">
<meta name="twitter:description" content="DESCRIPTION OF PAGE CONTENT, MAX 200 characters">
<meta name="twitter:image" content="LINK TO IMAGE">
  summary : square image 144x144px to 4096x4096px
  summary_large_image :  300x157 to 4096x4096px
  Twitter thumbnail: 120x120px
  Twitter large image: 280x150px
  < 5MB
  JPG, PNG, WEBP and GIF (first frame)
<meta name="twitter:image:alt" content="LINK TO IMAGE">
  max 420 characters
<meta name="twitter:site" content="@USERNAME">
<meta name="twitter:creator" content="@USERNAME">
```
