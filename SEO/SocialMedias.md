# Be present on Social Medias
- Have a [Localisation on Google Maps](https://www.google.com/business/)
  - A complete street address.
  - A telephone number, if applicable.
  - Business hours, if applicable.
  - A map to indicate your location.
  - Accessibility information.
  - A description of the place.
- Get good reviews
- Be on : Facebook, Twitter, Instagram, LinkedIn, MySpace, Pinterest, Youtube, Google+
- Feeds RSS
- Newsletters

# Had Open Graph Data

## Tools (Domain approved required)
- [Facebook Debugger](https://developers.facebook.com/tools/debug)
- [Twitter Validation Tool](https://dev.twitter.com/docs/cards/validation/validator)
- [Google Testing Tool](http://www.google.com/webmasters/tools/richsnippets)
- [Pinterest Rich Pins Validator](http://developers.pinterest.com/rich_pins/validator/)

## OG Cards (Facebook, LinkedIn, Google, Twitter, Pinterest)
### [More infos](https://ogp.me/)
```html
<!-- Obligatoire -->
<meta property="og:type" content="website" /> <!-- Article / Website / Blog -->
<meta property="og:title" content="POST/PAGE TITLE" /> <!-- 90 characters max (60-70), headline -->
<meta property="og:description" content="DESCRIPTION OF PAGE CONTENT" /> <!-- 155-200 chars, call to action words --> 
<meta property="og:image" content="LINK TO THE IMAGE FILE" /> <!-- Image / Video / Audio / Music / Article / Book... -->
<!-- Sizes : min 200*200px - normal 600*600px - large 1200*630px / < 5 MB -->
<meta property="og:url" content="PERMALINK" />
<!-- Optionnel -->
<meta property="fb:app_id" content="1664866743786891"/>
<meta property="fb:admins" content="1664866743786891"/>
<meta property="og:site_name" content="SITE NAME" />
<meta property="og:image:type" content="image/jpeg"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:locale" content="fr_FR"/> <!-- Default : en_US -->
<meta property="og:locale:alternate" content="es_ES"/> <!-- Other languages of page -->
```

## TWITTER Cards
### [More infos](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards)
```html
<!-- Obligatoire -->
<meta name="twitter:card" content="summary"> <!-- summary / summary_large_image -->
<meta name="twitter:url" content="URL OF THE CONTENT">
*<meta name="twitter:title" content="POST/PAGE TITLE"> <!-- max 70 chars, headline -->
<!-- Optionnel -->
<meta name="twitter:description" content="DESCRIPTION OF PAGE CONTENT, "> <!-- max 200 chars -->
<meta name="twitter:image" content="LINK TO IMAGE"> <!-- JPG, PNG, WEBP and GIF (first frame) -->
<!-- Sizes : summary 144*144px to 4096*4096px - summary large 300*157px to 4096*4096px - thumbnail 120*120px - large thumbnail 280*150px / < 5 MB -->
<meta name="twitter:image:alt" content="LINK TO IMAGE"> <!-- max 420 characters -->
<meta name="twitter:site" content="@USERNAME">
<meta name="twitter:creator" content="@USERNAME">
```
