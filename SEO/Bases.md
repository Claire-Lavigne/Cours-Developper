# ROI :
- the goal is to balance the time and resources needed to grow your site with your users' experience and bottom line.

# Keywords / Key phrases
Know what are good keywords, how to find and organize them [follow chapters 1-2-3](https://openclassrooms.com/en/courses/3594061-boost-traffic-to-your-website-with-search-engine-optimization/5837564-recognize-the-various-types-of-keywords)
- Determine the subject of the page (ex : the main keyword and secondary keywords)
- Translate them.
- Using a keyword search tool (Google's Keyword Planner or KWFinder)
- Determine if these topics have good SEO potential, and if there are other variations.
- If the keywords exist in the new language, you can translate the text using them.
- If not, look for an appropriate alternative (ex : studying your competitors)
- Spread the word ! (social media, advertising, and email campaigns)
- Acquire backlinks for the new languages on your site.

# Tools needed

## Google Analytics
**Gather information on visitors (how many, devices, pages browsed...)**
- [Set up Analytics Tags](https://support.google.com/analytics/answer/1008080?hl=en)
- Disable your own visits to yr website :
  - get your [IP addresses](https://www.whatismyip.com/)
  - excluse it => Administration => Filters => Add Filter => Enter a name 
    => "Exclude" => "Traffic" from IP addresses that are equal to => enter your IP addresses

## Google Search Console
**Gather information about what the visitors searched for in Google to find you**
** Track changes in your positions and keywords in Google search results**
- [Installation](https://search.google.com/search-console/about?hl=en&utm_source=wmx&utm_medium=wmx-welcome)
  - => Select "Add Property" => Enter the URL for your website.
  - [Help steps](https://support.google.com/webmasters/answer/34592?hl=en)
- Add a site map = a map of all the pages on your website you want indexed (added to appear in search engine results) :
  - if site made by developer : create a sitemap that updates automatically
  - if site made via CMS : use plug-ins to create and automatically update your sitemap (ex : "Yoast" WordPress)
    - => Use the newer version of Google Search Console => menu “Sitemaps” => Enter the URL to your sitemap => "Send"

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
[head + body](https://openclassrooms.com/en/courses/3594061-boost-traffic-to-your-website-with-search-engine-optimization/5838156-optimize-the-content-of-your-web-pages)
[type of content](https://openclassrooms.com/en/courses/3594061-boost-traffic-to-your-website-with-search-engine-optimization/5838228-build-your-content-machine)

# Choose the Right Technology for Your Site
- Your Site has Few Business Functions and Is Mainly Used for Marketing (Customer Acquisition):
  - Standard site, not based on a JavaScript framework + few simple functionalities (ex : reservation or payment form)
- Your Site Is a Web App With Important Business Functions. You also need a Place to Showcase Products and Acquire New Customers
  - This is the case for most SaaS platforms, such as OnCrawl.
  - If you already have a web-app, but not a marketing-oriented site, you are better off coding it in HTML/CSS and then linking to your web app = a more user-friendly web app in JavaScript, and a classic site for acquiring new customers, which is easier to maintain.
- You Want an SPA (Single-Page Application)
  - better performance and user experience
  - more difficult to index
  
# Choose between Client-Side Rendering & Server-Side Rendering
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

# Multilingual website
- Three site architectures :
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
