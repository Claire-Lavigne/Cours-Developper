 # Fichier hello.js
 ```js
 const coucou = function () {
  return 'coucou';
 }
 
 export const salut = () => 'salut';
 
 const hello = () => 'hello';
 
 export default hello;
 
 /*
 export nommé (export const name) : plusieurs par fichier ; exporte la variable entière
 export par défaut (export default name) : 1 seul par fichier (le principal) ; exporte le contenu de la variable
 */
 ```
 
 # Fichier index.js
 ```js
 // import js file
 import test from './test';
 // importer l'export par défault
 import name from './hello';
 // importer l'export nommé
 import { coucou, salut } from '.hello';
 // importer en 1 ligne
 import name, { coucou, salut } from './hello';
 ```
