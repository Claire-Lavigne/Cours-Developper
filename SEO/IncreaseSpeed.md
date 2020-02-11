# SEO - Increase the Speed of Your Website

## Verify what must be optimized
- Developper Tools (inpector website) => Network => Refresh page => See files, time, etc ...

## Test website speed
- [WebPageTest](https://www.webpagetest.org/)
- [Pages Speed Insights](https://developers.google.com/speed/pagespeed/insights/)

## Speed-up pages
- Check server response time (quantity of traffic, ressources used, software used, hosting)
- Check CDNs
- 404 page not found exists ?

### Scripts execution
- load dom before scripts

**HTML**
- Respect the normal order (css in head, js at body bottom)
- [Resource prefetching](https://css-tricks.com/prefetching-preloading-prebrowsing/)

**JS + jQuery**
- ASYNC / DEFER if used in head
  
### IMG optimization
- extension adapted : 
  - jpg (photographs), 
  - jpeg (photos compressed), 
  - svg (forms), 
  - png (transparence) in 8bits (few colors) or 24 bits (many colors), 
  - gif (animation)
- resize img to displayed size, in css put size to auto
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
- GZIP configuration : Apache 2 Server - see .htaccess file below
- Or Brotli (more efficient)

### Eliminate unnecessary resources
- Libraries unused / poorly used (ex : bootstrap, foundation, [jQuery](youmightnotneedjquery.com)...)
- Number of css and scripts files

**CSS**
- Reduce specificity
- Use Media Queries

**JS**
- Minimize DOM manipulation

### Browser caching
- browser caching for a year if content doesn't change : Yslow check expiration date set by cache
- Don't cache files that change often or force them to periodically update
- Database caches :
  - If your application or website is making a lot of queries to a database
    --> install a query cache for information that doesn’t change often
    --> involves storing the results to some common queries to decrease database use and increase performance
- Web application caches : 
  - Install a cache on the server ([nginx](https://www.nginx.com/) or [varnish](https://varnish-cache.org/))
- Inform the browser what files to cache and for how long : Apache HTTP Server - see .htaccess file below
  - Cache-Control header (max seconds time a ressource is valid)
  - Expires header (specific date a ressource is no more valid)
- Test cache : Cache Checker allows you to check that everything is being cached correctly and for the right duration
 
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

## .htaccess file
- [Check if the .htaccess file is valid](http://www.htaccesscheck.com/)
```
# GZIP Apache 2.0
# BEGIN GZIP COMPRESSION
SetOutputFilter DEFLATE
AddOutputFilterByType DEFLATE text/html text/css text/plain text/xml application/x-javascript

BrowserMatch ^Mozilla/4 gzip-only-text/html
BrowserMatch ^Mozilla/4\.0[678] no-gzip
BrowserMatch \bMSIE !no-gzip !gzip-only-text/html
BrowserMatch \bMSI[E] !no-gzip !gzip-only-text/html
# END GZIP

# CACHE NAVIGATION
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
# Removes the cache for dynamic resources
<FilesMatch "\.(pl|php|cgi|spl|scgi|fcgi)$">
Header unset Cache-Control
</FilesMatch>
</IfModule>
# END Cache-Control Headers

# BEGIN Expires Headers
<IfModule mod_expires.c>
ExpiresActive On
ExpiresByType image/jpg "access plus 1 month"
ExpiresByType image/jpeg "access plus 1 month"
ExpiresByType image/gif "access plus 1 month"
ExpiresByType image/png "access plus 1 month"
ExpiresByType text/css "access plus 1 month"
ExpiresByType application/pdf "access plus 1 month"
ExpiresByType text/x-javascript "access plus 1 month"
ExpiresByType application/x-shockwave-flash "access plus 1 year"
ExpiresByType image/x-icon "access plus 1 year"
ExpiresDefault "access plus 2 days"
</IfModule>
# END Expires Headers

# ADD REDIRECTIONS RULES
```
