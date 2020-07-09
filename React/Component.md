# Composant = fonction qui retourne du JSX
```js
import React from 'react';
// si juste besoin de render
import { render } from 'react-dom'; 
// si besoin de + de choses
// import ReactDOM from 'react-dom'; 
// et en fin de fichier : ReactDOM.render(rootComponent, target);

const helloWorld = (props) => {
  // on peut ajouter des props (propriétés) en paramètre
  // à définir dans le rootComponent
  console.log('Je suis dans index.js');
  return (
    `<div id="hello-world">
      <h1>Ce HTML a été généré par {props.lang}</h1>
      // objet
      <h2>Et affiché avec {props.method}</h2>
    </div>`
  );
};

render(helloWorld()); 
// ou
render (<HelloWorld />, document.getElementById('root')); // add composant racine dans la cible du DOM
// ou
const rootComponent = <HelloWorld />; 
// on peut rajouter les propriétés pour le props donné en paramètre : <HelloWorld lang="React" method="ReactDOM" />
// retranscries telles qu'un objet dans une fonction : HelloWorld({lang: "React, method:" ReactDOM"})
const target = document.getElementById('root');
render (rootComponent, target);
```
