# Analyse website
A good website = Good Google ranking
- [mobile first](https://search.google.com/test/mobile-friendly)
- efficient and optimized
- easy and intuitive design
- fast responsive version
- light pages

## Outils en ligne
- [Check Errors & Optimization](https://en.ryte.com/lp/yoast/)
- [Audit SEO](https://www.outiref.fr/)
- [Audit référencement](https://blog.axe-net.fr/seorapido/)
- [Analysis & Optimization](https://moz.com/free-seo-tools)

## Detect site issues
- Check the [conversion rate optimization (CRO)](https://backlinko.com/conversion-rate-optimization)
- Check that researches of the brand name return the website
- Check if the website has a primary address :
  - with or without "www" ?
  - with "www" redirect to without “www” ?
  - pages are in HTTPS ?
  - HTTP redirects to HTTPS ?
- [Check for duplicate content / plagia](http://www.siteliner.com/)
- Check for indexing issues by robots :
  - tap “site: mysite.com,” in Google search bar, and look through the results
    - the website should appears. If not, search issues in : 
      - robots.txt file (allow access to search engines)
      - meta robots
      - website’s architecture
- Check for crawling issues by robots :
  - Get the server log file from hosting provider
  - Use tools to read it : 
    - [Oncrawl](https://www.oncrawl.com/): a free and open source log analyzer.
    - [Seolyzer](https://seolyzer.io/): free and easy to install.
    - Search Console gives the analyse without log file (menu : crawl) but not 100% accurate
- Check if the website loads relatively quickly
  - if loads in more than 4s = slow (visitors leave + possible indexing problems)
  - mesure load speed : [GTmetrics](https://gtmetrix.com/) or [Pingdom](https://tools.pingdom.com/)
- Check if the website is responsive
- Check the HTTP Codes returned by pages
- Check (In)Active Pages : pages that received or not a visitor from search results
- Check the quality of existing links :
  - the URLs are comprehensible and include the subject of the page (ex : https://mysite.com/primary-keyword) ?
  - Search Console (or Majestic, SEMRush, Moz Explorer...)
  - Make sure that a majority of your traffic does not originate from spammy links (low-quality, foreign language websites, content completely different from yours)
  - Check if social media accounts have been created and linked to the website
  - Redirect if the URL has changed or the page no longer exists : 301 redirect (permanent redirect)

## Check Accessibility & Legibility
- Use [Screen Reader](https://chrome.google.com/webstore/detail/chromevox-classic-extensi/kgejglhpjiefppelpmljglcjbhoiplfn) (Chrome extension)
- Check if it is easy to select elements :
  - only links and forms are selectable by default
  - `<div tabindex="0">` forces an element to be selectable
- Check if it is easy to navigate through the pages
  - Most important pages are accessible from homepage ?
- Textual content easily readable ?
  - Sentences size / words complexity
  - CSS colors, contrast and fonts

## Analyse SEO
- From Homepage : 
  - there are two secondary pages accessible through the menu + a blog article
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

# Analyse content of pages

## Good practices
- [head + body](https://openclassrooms.com/en/courses/3594061-boost-traffic-to-your-website-with-search-engine-optimization/5838156-optimize-the-content-of-your-web-pages)
- [type of content](https://openclassrooms.com/en/courses/3594061-boost-traffic-to-your-website-with-search-engine-optimization/5838228-build-your-content-machine)
  
## Robots meta tags
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

# KPI (Key Performance Indicators)
- Unique visitors (UV)
- Page views per session
- Conversion rate for sign-up/payment forms
- Returning visitor rate

# [Google Search Console](https://search.google.com/search-console/welcome)
Gather information about what the visitors searched for in Google to find you

Track changes in your positions and examine keywords ranking in Google search results
- [Installation](https://search.google.com/search-console/about?hl=en&utm_source=wmx&utm_medium=wmx-welcome)
  - => Select "Add Property" => Enter the URL for your website.
  - [Help steps](https://support.google.com/webmasters/answer/34592?hl=en)
  - Which keywords are driving your website traffic ?

# [Google Analytics](https://www.google.com/analytics/)
Gather information on visitors (how many, devices, pages browsed...)
-  [Set up Analytics Tags](https://support.google.com/analytics/answer/1008080?hl=en)
  - Disable your own visits to yr website :
    - get your [IP addresses](https://www.whatismyip.com/)
    - exclude it => Administration => Filters => Add Filter => Enter a name => "Exclude" => "Traffic" from IP addresses that are equal to => enter your IP addresses

After having Google Analytics for 1 month
- Analyse source of traffic : Menu → Acquisition → All traffic → Channels
- Check that the organic traffic on your website is increasing, or at least stable : Menu → Acquisition → All traffic → Channels → Organic Search
- Analyse searched keywords : Menu → Behavior → Site Search report
- Analyse [taux de rebond](https://support.google.com/analytics/answer/1009409?hl=fr) : doit être faible
  - taux de rebond = visiteurs qui cliquent et partent de suite
