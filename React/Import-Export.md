
# Import
```js
// import const par défaut et { nommée } from js file
import name, { coucou, salut } from './hello';

// import const nommée from index.js
import { render } from '.';
```

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
 
# Exemple Component/index.js
```js
// Besoin JSX
import React from 'react';

// Besoin css
import './component.scss';

// Besoin Subcomponent
import Subcomponent from 'src/components/Subcomponent';

// Création Composant
const Component = () => (
 <div id="component">
   <Subcomponent />
 </div>
);

// Exportation Composant
export default Component;
```
 
# Exemple Subcomponent/index.js
```js
// Besoin JSX
import React from 'react';

// Besoin css
import './subcomponent.scss';

// Création Subcomposant
const Subcomponent = () => (
 <div id="subcomponent">
   Blabla
 </div>
);

// Exportation Subcomposant
export default Subcomponent;
```
