# Fichier index.js
```js
import './hello.css';

const helloWorld = () => {
  console.log('Je suis dans index.js');
  return (
    `<div id="hello-world">
      <h1>Ce HTML a été généré par JS</h1>
      <h2>Et affiché avec HTML</h2>
    </div>`
  );
};

export const render = (stringHTML) => {
  const target = document.getElementById('root');
  target.innerHTML = stringHTML;
};
```

# Fichier exo.js
```js
import { render } from './index';  
// from '.' doit aussi marcher (uniquement pour les fichiers index.js)

const helloWorld = (data) => {
  console.log(data);

  return (
    `<div id="hello-world">
      <h1>Ce HTML a été généré par ${data.lang}</h1>
      <h2>Et affiché avec ${data.method}</h2>
    </div>`
  );
};

// ou
const helloWorld = ({ lang, method }) => {
  console.log(data);

  return (
    `<div id="hello-world">
      <h1>Ce HTML a été généré par ${lang}</h1>
      <h2>Et affiché avec ${method}</h2>
    </div>`
  );
};

render(helloWorld({ lang: 'ES2015', method: 'innerHTML' }));
```

# Fichier hello.css
```css
#root {
  text-align: center;
}
```
