https://openclassrooms.com/en/courses/3594061-drive-traffic-to-your-website-with-search-engine-optimization-seo/5837564-recognize-the-various-types-of-keywords
# ROI "Return on Investment" (mesure de l'efficacité d'un investissement)
The goal is to balance the time and resources needed to grow your site with your users' experience and bottom line.

## Analyse Ressources / Time :
- Searching for keywords (0,5 to 2 days)
- Website optimization
  - Full audit - (1 to 4 days)
  - Optimizing content on existing pages - (2 hours / page)
  - Technical fixes - With a web developer - (min 1 day - The time needed depends on the website’s technology)
  - Creating content, such as articles - (0,5 to 1 day / article)
- Finding links and partnerships - (2 to 5 days - to be repeated regularly)
- Implementing the reporting - (1 to 2 days)

# KPI (Key Performance Indicators)
- Unique visitors (UV)
- Page views per session
- Conversion rate for sign-up/payment forms
- Returning visitor rate

# Analyse website

## Detect site issues
- Check that searches of the brand name return the website
- Check if the website has a primary address (with or without "www" => with "www" redirect to without “www”)
- [Check for duplicate content / plagia](http://www.siteliner.com/)
- Check for indexing or crawling issues :
  - tap “site: mysite.com,” in Google search bar, and look through the results
    - the website should appears. If not, search issues in : 
      - robots.txt file (allow access to search engines)
      - meta robots
      - website’s architecture
- Check if the website loads relatively quickly
  - if loads in more than 4s = slow (visitors leave + possible indexing problems)
  - mesure load speed : [GTmetrics](https://gtmetrix.com/) or [Pingdom](https://tools.pingdom.com/)
- Check if the website is responsive

## Analyse SEO
- From Homepage : 
  - there are two secondary pages accessible through the menu + a blog article
  - the URLs are comprehensible and include the subject of the page (https://mysite.com/primary-keyword)
  - open the console in your browser (F12 in Google Chrome) and use CTRL+F to search for the information :
    - Meta tags "title" + "description" indicate the topic of the page to search engines and target keyword
      - They appear in the results and make visitors want to click and read the page
      - Title: 70 characters.
      - Description: Google displays between 132 and 160 characters, but write a little more
    - Meta tag "Robots" : set to “index, follow.”
    - Titles : only one h1 in page containing keyword, multiple h2 containing the keyword or a synonym
    - Images : small size, size adapted to final size, let the code adapt the size automatically, "alt" tags completed
- Content length in each page :
  - min 400 words for pages on your website (when it makes sense)
  - 600 words for blog posts, news or expert content

## Examine keyword rankings
- After having Google Analytics for 1 month : 
  - Check that the organic traffic on your website is increasing, or at least stable
    - Menu => “Acquisition” => “All Traffic” => “Channel” => “Organic Search”
- Get results from Google Search Console installed + Check issues again
  - Figure out which keywords are driving your website traffic before making any SEO changes

## Check the quality of existing links
- Check if social media accounts have been created and linked to the website = share and distribute the website content
- Make partnerships
- Use the Search Console (or Majestic, SEMRush, Moz Explorer...) and study the existing links
- Make sure that a majority of your traffic does not originate from spammy links (low-quality, foreign language websites, content completely different from yours)

# Analyse content of pages

## Good practices
- [head + body](https://openclassrooms.com/en/courses/3594061-boost-traffic-to-your-website-with-search-engine-optimization/5838156-optimize-the-content-of-your-web-pages)
- [type of content](https://openclassrooms.com/en/courses/3594061-boost-traffic-to-your-website-with-search-engine-optimization/5838228-build-your-content-machine)

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

# Improve the indexing of a website

It may be necessary to redirect your visitors from one page to another if the URL has changed or the page no longer exists : put in a 301 redirect (permanent redirect)
  
## Robots meta tags
```<code><meta name="robots" content="index, follow"></code>``` for each page indexed
```<link rel="canonical" href="https://monsite.com/page" />``` to index to main page

Be careful :
- Check that the URL is written correctly (no typos, with or without final slash).
- Check that there are no successive canonical tags (page A points to B points to C).
- Check that you don’t have a loop: A to B and B to A.
- Check that the URL in the tag is accessible (no 404 error).
- Do not use a canonical tag if you can eliminate duplicate content or use redirect.

## Display [sitelinks](https://user.oc-static.com/upload/2019/06/17/15607740164582_Example%20of%20sitelinks%20for%20Netflix.jpg)
- Prioritize Your Content and Create the Corresponding URLs
- Organize information in a hierarchy : [structure simple and logical](https://user.oc-static.com/upload/2019/07/17/15633786828122_Capture%20d%E2%80%99e%CC%81cran%202019-07-17%20a%CC%80%2017.49.54.png)
  - Try to limit the number of categories to 3-7 + the number of subcategories
  - Your URLs should reflect the path users take to access the information.
  - All pages should be accessible in less than three clicks.
