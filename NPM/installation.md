# NPM INSTALLATION
```bash
npm init
# press enter various times (add metadata later in package.json)
npm install
```
# NPM PACKAGES INSTALLATION (3 options)
```bash
# install on machine, useful for command line interface tools
npm install -g <package>
# install locally to project, save as production dependency, useful for making code work in production environment
npm install <package> --save
# install locally to project, save as development dependency, useful if no longer required after project launched
npm install <package> --save-dev
```
- when packages installed locally, ```node_modules``` is created
- add ```node_modules``` to ignored files in ```.gitignore```
- run ```npm install``` when cloning git repo

# BABEL PACKAGE : transform JS ES6/ES7/ES8 into older ES
```bash
npm install babel-cli babel-preset-env --save-dev
```
- create the file ```.babelrc``` in project to configure babel, with this content :
```
{
  "presets": ["env"]
}
```
- use babel scripts instead of normal scripts :
``` bash
npx babel scripts.js --out-file scripts.babel.js
```
- replace in ```index.html``` <script src="scripts.js"></script> by :
```
<script src="./node_modules/babel-polyfill/browser.js"></script>
<script src="scripts.babel.js"></script>
```

# GULP PACKAGES : tasks automatizor
```bash
npm install -g gulp-cli
# if installation not working because of permissions :
sudo npm install -g gulp-cli
# quit sudo mode :
sudo -k
npm install --save-dev gulp
```
- create the file ```gulpfile.js``` in project and add :
```
const gulp = require('gulp');
const jshint = require('gulp-jshint');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync').create();

gulp.task('processHTML', () => {
    gulp.src('*.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('processJS', () => {
  gulp.src('scripts.js')
    .pipe(jshint({
      esversion: 6
    }))
    .pipe(jshint.reporter('default'))
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('babelPolyfill', () => {
  gulp.src('node_modules/babel-polyfill/browser.js')
    .pipe(gulp.dest('dist/node_modules/babel-polyfill'));
});

gulp.task('browserSync', () => {
  browserSync.init({
    server: './dist',
    port: 8080,
    ui: {
      port: 8081
    }
  });
});

gulp.task('watch', ['browserSync'], () => {
  gulp.watch('*.js', ['processJS']);
  gulp.watch('*.html', ['processHTML']);
  
  gulp.watch('dist/*.js', browserSync.reload);
  gulp.watch('dist/*.html', browserSync.reload);
});

gulp.task('default', (callback) => {
  runSequence(['processHTML', 'processJS', 'babelPolyfill'], 'watch', callback);
});
```
```bash
gulp processHTML
gulp processJS
gulp babelPolyfill

npm install --save-dev jshint gulp-jshint gulp-uglify babel-core babel-preset-env gulp-babel @babel/core @babel/preset-env run-sequence browser-sync

# if not working, see version of gulp. If version 4.0 :
npm install --save-dev gulp@3.9.1

gulp
```
- ```dist``` folder created with a copy of all files
