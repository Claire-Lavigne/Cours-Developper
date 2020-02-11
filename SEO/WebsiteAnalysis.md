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
- [Analysis & Optimization](https://moz.com/free-seo-tools) + [CheatSheet](https://d2eeipcrcdle6.cloudfront.net/seo-cheat-sheet.pdf)

## Detect site issues
- Vrai nom de domaine ? Bon hébergeur ?
- Check the [conversion rate optimization (CRO)](https://backlinko.com/conversion-rate-optimization)
- Check that researches of the brand name return the website
- Check if the website has a primary address :
  - with or without "www" ?
  - with "www" redirect to without “www” ?
  - pages are in HTTPS ?
  - HTTP redirects to HTTPS ?
- [Check for duplicate content / plagia](http://www.siteliner.com/)
- Check for indexing issues by robots :
  - tap “site: mysite.com,” in Google search bar
    - if the website appears : ok
    - if not, search issues in : 
      - robots.txt file (allow access to search engines)
      - meta robots : set to “index, follow” ?
      - website’s architecture
- Check for crawling issues by robots :
  - Get the server log file from hosting provider
  - Use tools to read it : 
    - [Oncrawl](https://www.oncrawl.com/): a free and open source log analyzer.
    - [Seolyzer](https://seolyzer.io/): free and easy to install.
    - Search Console gives the analyse without log file (menu : crawl) but not 100% accurate
-Check Robots meta tags
  - Check that there are no successive canonical tags (page A points to B points to C).
  - Check that you don’t have a loop: A to B and B to A.
  - Check that the URL in the tag is accessible (no 404 error).
  - Do not use a canonical tag if you can eliminate duplicate content or use redirect.
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
