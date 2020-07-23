- [react typechecking](https://fr.reactjs.org/docs/typechecking-with-proptypes.html)

# Function returning JSX = "Component"
```js
import React from 'react';
import { render } from 'react-dom'; // besoin de render

// import ReactDOM from 'react-dom'; // si besoin de + de choses
// et en fin de fichier : ReactDOM.render(rootComponent, target);

const helloWorld = (props) => {
  // on peut ajouter des props (propriétés) en paramètre
  // à définir dans le rootComponent
  console.log(props);
  return (
    `<div id="hello-world">
      <h1>Ce HTML a été généré par {props.lang}</h1>
      // objet
      <h2>Et affiché avec {props.method}</h2>
    </div>`
  );
};

// composant racine
const rootComponent = <HelloWorld />; 
  // = helloWorld() 
  // add pros : <HelloWorld lang="React" method="ReactDOM" />
  // = HelloWorld({lang: "React, method:" ReactDOM"})

// cible du DOM
const target = document.getElementById('root');

render (rootComponent, target);
```
# + clean
```js
import React from 'react';
import { render } from 'react-dom'; 

const helloWorld = ({ lang, method }) => {
  return (
    `<div id="hello-world">
      <h1>Ce HTML a été généré par {lang}</h1>
      // objet
      <h2>Et affiché avec {method}</h2>
    </div>`
  );
};

const rootComponent = <HelloWorld lang="React" method="ReactDOM" />;
// add js code : lang="{ // js ici}"
// lang = lang={true}
const target = document.getElementById('root');

render (rootComponent, target);
```

# Composant child
```js
import React from 'react';
import { render } from 'react-dom'; 

const helloWorld = (props) => {
  return (
    <div id="hello-world">
      <h1>Ce HTML a été généré par {props.lang}</h1>
      <h2>Et affiché avec {props.method}</h2>
      {props.children}
    </div>
  );
};

const rootComponent = (
  <HelloWorld lang="React" method="ReactDOM">
    <p>un paragraphe</p>
    <p>un paragraphe</p>
  </HelloWorld>
);

const target = document.getElementById('root');

render (rootComponent, target);
```

# + clean
```js
import React from 'react';
import { render } from 'react-dom';
import PropTypes from  'prop-types';

const helloWorld = ({ lang, method, children }) => {
  return (
    <div id="hello-world">
      <h1>Ce HTML a été généré par {lang}</h1>
      <h2>Et affiché avec {method}</h2>
      {children}
    </div>
  );
};

HelloWorld.propTypes = {
  lang: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  // children: 'PropTypes.node.isRequired' // noeud JSX
  // string, number, array, bool, func, object => react typechecking
};

const rootComponent = (
  <HelloWorld lang="React" method="ReactDOM">
    <p>un paragraphe</p> // children est ici
    <p>un paragraphe</p> // children est ici
  </HelloWorld>
);

const target = document.getElementById('root');

render (rootComponent, target);
```

