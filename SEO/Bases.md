# ROI "Return on Investment" (mesure de l'efficacité d'un investissement)
The goal is to balance the time and resources needed to grow your site with your users' experience and bottom line.

## Analyse Ressources / Time :
- Keywords (0,5 to 2 days)
  - Searching for good keywords
  - Determine if these topics have good SEO potential, and if there are other variations.
  - Using a keyword search tool (Google's Keyword Planner or KWFinder)
  - Studying your competitors
  - Organize them / Translate them
  - Determine the subject of the page (ex : the main keyword and secondary keywords)
- Website optimization
  - Full audit - (1 to 4 days)
  - Optimizing content on existing pages - (2 hours / page)
  - Technical fixes - With a web developer - (min 1 day - The time needed depends on the website’s technology)
  - Creating content, such as articles - (0,5 to 1 day / article)
- Finding links and partnerships - (2 to 5 days - to be repeated regularly)
  - Spread your content with Social media, advertising and email campaigns
  - Acquire backlinks for the new languages on your site.
- Implementing the reporting - (1 to 2 days)

# KPI (Key Performance Indicators)
- Unique visitors (UV)
- Page views per session
- Conversion rate for sign-up/payment forms
- Returning visitor rate

# Optimize a Website

## Choose the Right Technology for Your Site
- Few Business Functions : Marketing + Customer Acquisition :
  - Standard site HTML/CSS
  - Not based on JS framework
  - Few simple functionalities (ex : reservation or payment form)
- Business Web App + a Place to Showcase Products + Acquire New Customers
  - SaaS platforms, such as OnCrawl.
- Already have a Web-app but not a marketing-oriented yet :
  - Classic site HTML/CSS to get new customers + Link to a user-friendly webapp in JavaScript
- SPA (Single-Page Application)
  - better performance and user experience
  - more difficult to index
  
## Choose between Client-Side Rendering & Server-Side Rendering
- Client-side rendering (CRS) : not ideal for the best SEO :
  - Set-up Pre-rendering : :warning: Users and bots must receive similar content
    - [Prerender.io](https://prerender.io/) (latest version only)
    - [Prerender spa plugin](https://github.com/chrisvfritz/prerender-spa-plugin)
    - [React-snap](https://github.com/stereobooster/react-snap)
- Server-Side Rendering (SRR) : most used
  - Possible when coding in React, Angular, or Vue :
    - With Vue.js : [Nuxt](https://fr.nuxtjs.org/) + [guide](https://vuejs.org/v2/guide/ssr.html)
  - Advantages :
    - Gain in performance: the content is ready to be displayed, so the page displays more quickly.
    - Improved SEO indexing.
  - Disadvantages :
    - The user won’t be able to interact until the JavaScript resources have all properly loaded.
    - Development is longer and more complex
  - With SPA sites : code in Universal JS (also called Isomorphic JS) = the JS will work on bost sides (client + server)

## Multilingual website
Three site architectures :
- One domain name per language (ex : .fr, .com, .cn):
  - When ? The content of your site depends on language and culture
  - Advantages:
    - Google geographically target your website
    - You can use location targeting in the Search Console
    - The content is properly divided at the server level
    - You can adapt your site to the legal requirements in GDPR countries
  - Disadvantages:
    - Maintaining multiple sites is very expensive in terms of time, resources, and budget (one modification must be done in all languages)
    - Domain names have strict legal requirements (where you are really based)
    - SEO must be done in all languages !
    
- One sub-domain per language (ex : .fr.wikipedia.or, .com.wikipedia.or)
  - Benefits:
    - Easier to set up
    - Can use location targeting in the Search Console
    - Can have different server locations
    - Language separation easy to do at the server level
  - Disadvantage: 
    - Subdomains won’t benefit from the full link strength of your main domain
    
- A directory (or subfolder) per language (ex : ibm.com/fr-fr/, ibm.com/uk-en)
  - When ? BEST OPTION IN GENERAL
  - Advantages:
    - Easy to set up
    - Geo-targeting tools available to webmasters
    - Little maintenance
  - Disadvantages:
    - Weak geo-targeting signal for Google = complicate local SEO efforts
    - Difficult to separate languages across the site.
    
- Follow-on pages (choose 1 of 3 methods):
  - ```<link rel = "alternate" hreflang = "en" href = "https://your-site.com/en/" />```
    - hreflang = 'en' or 'en-uk'
  - ```<link rel="alternate" hreflang="de" href="https://www.sncf.com/de/home"><link rel="alternate" hreflang="en" href="https://www.sncf.com/en/home">```
  - ```<html lang="en-us">...</html>```
