# Export
```js
// const non exportée
const coucou = function () {
 return 'coucou';
}
 
// export nommé :
// plusieurs par fichier ; exporte la variable entière
export const salut = () => 'salut';
 
// export par défaut :
// 1 seul par fichier (le principal) ; exporte le contenu de la variable
const hello = () => 'hello';
export default hello;
```
 
# Import
```js
// import const par défaut et { nommée } from js file
import name, { coucou, salut } from './hello';

// import const nommée from index.js
import { render } from '.';

// import npm
import React from 'react';
import { render } from 'react-dom';
import PropTypes from  'prop-types';

// import local css and js files
import './app.scss';
import Header from 'src/components/Header';
```
