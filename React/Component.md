# Composant = fonction qui retourne du JSX
```js
import React from 'react';
// si juste besoin de render
import { render } from 'react-dom'; 
// si besoin de + de choses
// import ReactDOM from 'react-dom'; 
// et en fin de fichier : ReactDOM.render(rootComponent, target);

const helloWorld = () => {
  console.log('Je suis dans index.js');
  return (
    `<div id="hello-world">
      <h1>Ce HTML a été généré par JS</h1>
      <h2>Et affiché avec HTML</h2>
    </div>`
  );
};

render(helloWorld()); 
// ou
render (<HelloWorld />, document.getElementById('root')); 
// ou
const rootComponent = <HelloWorld />;
const target = document.getElementById('root');
render (rootComponent, target);
```
