# SEO - Increase the Speed of Your Website

## Verify what must be optimized
- Developper Tools (inpector website) => Network => Refresh page => See files, time, etc ...

## Test website speed
- WebPageTest
- [Pages Speed Insights](https://developers.google.com/speed/pagespeed/insights/)

## Analyse Website
A good website = Good Google ranking
- mobile first
- efficient and optimized
- easy and intuitive design
- fast responsive version
- light pages

## Speed-up pages

### Scripts execution
**HTML**
- Respect the normal order (css in head, js at body bottom)
- [Resource prefetching](https://css-tricks.com/prefetching-preloading-prebrowsing/)

**JS + jQuery**
- ```<script async src = ""> </ script>``` (only in head): 
  - if the script execution order is not important
  - if it doesn't affect css or dom elements
  - if isn't necessary for user experience
  - ex : Google Analytics Scripts or Tracking Scripts
- ```<script defer src="script.js"></script>``` (only in head, better than async) :
  - if the scripts must be executed after the HTML is fully loaded
  
### IMG optimization
- extension adapted : jpg (photographs), svg (forms), png (transparence), gif(animation)
- resize img to displayed size
- choose simple illustrations over highly detailed photographs
- keep best resolution with compressed size : 
  - for quality pics : keeps the quality intact (possible to lower jpg quality from 30% to 60 %)
  - for not important pics : no need to keep the best quality
  - some sites : 
    - [ImageOptim](https://imageoptim.com/fr) or JPEG-optimizer
    - [PNGgauntlet](https://pnggauntlet.com/) or TinyPNG
    - [Compressor](https://compressor.io/)
  - use CDN like imgIX.com (library optimizing our images)
  - remove all metadata of images (ex : camera and private informations...) : [verexif](https://www.verexif.com/en/)
  - [convert images to WebP](https://www.xnview.com/en/xnconvert/)

### Minify files (html, css, js, ...)
- tools online
- webpack

### Compress all files into zip 
- [Gzip](https://www.gzip.org/) => site faster
- GZIP configuration : Apache 2 Server - .htaccess file
```
SetOutputFilter DEFLATE
AddOutputFilterByType DEFLATE text/html text/css text/plain text/xml application/x-javascript
BrowserMatch ^Mozilla/4 gzip-only-text/html
BrowserMatch ^Mozilla/4\.0[678] no-gzip
BrowserMatch \bMSIE !no-gzip !gzip-only-text/html
BrowserMatch \bMSI[E] !no-gzip !gzip-only-text/html
```
- Or Brotli (more efficient)

### Eliminate unnecessary resources
- Libraries unused / poorly used (ex : bootstrap, foundation, [jQuery](youmightnotneedjquery.com)...)
- Number of css and scripts files

**CSS**
- Reduce specificity
- Use Media Queries

**JS**
- Minimize DOM manipulation

### Choose Frameworks/Libraries for their speciality
- Angular (Framework) : large company, massive code
- React (most used) : strong developer team that needs to be flexible and evolve with different libraries and tools
- ViewJS : simple and friendly for junior developers

### Database Scaling
- Identify inefficient queries
   - Am I using SQL efficiently ?
   - Use indexes
   - Make only necessary requests
- Increase memory
- Vertical scaling (Redis, Memchached)
- Sharding
- More databases
- Database type

### JS Frameworks
- Indexable URLs : 
  - Pages real, with unique, distinct, and indexable URLs.
  - Pages with a server response of 200 OK for each individual page to index.
  - The SPA must provide server-side URLs for each category, article, or product.
- Do not use # in URLs to indicate separate pages.
  - Pages always need titles, meta descriptions, meta robots, their own URLs (that contains the keyword), textual content, images, alt attributes, etc.
- JavaScript site content must be audited just like a website in HTML/CSS.
- Don't forget href for attributes, src for images
- Duplicate content
  - JavaScript rendering can create multiple versions of the same page (pre-DOM and post-DOM). Be sure to minimize differences and don’t forget the canonical tag.

### Browser caching
- Don't cache files that change often or force them to periodically update
- Database caches :
  - If your application or website is making a lot of queries to a database
    --> install a query cache for information that doesn’t change often
    --> involves storing the results to some common queries to decrease database use and increase performance
- Web application caches : 
  - Install a cache on the server ([nginx](https://www.nginx.com/) or [varnish](https://varnish-cache.org/))
- Inform the browser what files to cache and for how long : Apache HTTP Server - .htaccess file
  - Cache-Control header (max seconds time a ressource is valid) : 
  ```
  # BEGIN Cache-Control Headers
  <IfModule mod_headers.c>
  <FilesMatch "\.(ico|jpe?g|png|gif|swf|css|gz)$">
  Header set Cache-Control "max-age=2592000, public"
  </FilesMatch>
  <FilesMatch "\.(js)$">
  Header set Cache-Control "max-age=2592000, private"
  </FilesMatch>
  <filesMatch "\.(html|htm)$">
  Header set Cache-Control "max-age=7200, public"
  </filesMatch>
  # Enleve le cache pour les ressources dynamiques
  <FilesMatch "\.(pl|php|cgi|spl|scgi|fcgi)$">
  Header unset Cache-Control
  </FilesMatch>
  </IfModule>
  # END Cache-Control Headers
  ```
  - Expires header (specific date a ressource is no more valid) :
  ```
  # BEGIN Expires Headers
  <IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType text/x-javascript "access plus 1 month"
  ExpiresByType application/x-shockwave-flash "access plus 1 month"
  ExpiresByType image/x-icon "access plus 1 year"
  ExpiresDefault "access plus 2 days"
  </IfModule>
  # END Expires Headers
  ```
- Test cache : Cache Checker allows you to check that everything is being cached correctly and for the right duration

### Installing a CDN server (network of servers) : 
- Advantages :
  - Improved page load speed and improved website crawlability.
  - More traffic without crashing your server.
  - Block spam.
  - Improved server coverage, and thus website speed.
- If answer "yes" to those questions :
  - Do you have traffic from around the world and need better coverage?
  - Do you see a lot of traffic on your site (over 50,000 visitors per month)?
  - Do you often have spikes in traffic (media campaigns, for example)?
  - Is your site the target of spam or frequent attacks?
  - Do you have many static resources: images/videos/PDF?
- CDN Providers possible :
  - [Cloudflare](https://www.cloudflare.com/) : the most popular providers and free!
  - [MaxCDN / Stackpath](https://www.stackpath.com/maxcdn/)
  - [Amazon Cloudfront](https://aws.amazon.com/pt/cloudfront/)
- [Installation](https://openclassrooms.com/en/courses/1306056-ensure-your-website-meets-technical-seo-requirements/6200916-use-a-content-delivery-network#/id/r-6200906)
 
### With CMS - Pick a Fast Theme (and Builder)
- Content Management System = create, edit, and publish content
- Test speed of demos
- See if doesn't have too many CSS animations or JavaScript blocking content from being displayed
- Eliminate Unnecessary plugins/modules/extensions :
  - Is this a high-quality plugin (good reviews, updated frequently by developers)?
  - Is the plugin compatible with your CMS?
  - Is the plugin essential?
- Effective translation plugins if CMS in various languages
- Optimize images (after resizing) :
  - [reSmush.it](https://resmush.it/)
  - [EWWW Image Optimizer](https://ewww.io/)
  - [ShortPixel Image Optimizer](https://shortpixel.com/)
- Install Cache plugin :
  - [WP Super Cache](https://wordpress.org/plugins/wp-super-cache/): freemium with paid support.
  - [W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/): freemium with paid support.
  - [WP-Rocket](https://wp-rocket.me/): very high quality paid plugin.
- Good SEO practices (ex : no multiple H1's on a page)
- Shouldn't slow loading time for own pages (compare my website with and without theme)
- :warning: Many builders add a lot of extraneous HTML code to pages
- List of good themes : Elementor (free + builder), Beaver (paid + builder), GeneratePress, OceanWP, Astra
- Elements to check when picking a theme :
  - Is it responsive?
  - It is optimized for SEO?
  - Does it load quickly and is light in terms of data usage?
  - Is it compatible with the plugins you require?
  - User reviews and ratings ?
