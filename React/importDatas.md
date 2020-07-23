# data/index.js
```js
export default {
  name: 'Angular',
  author: 'React',
  difficulty: 5,
  instructions: ['un', 'deux', 'Autre'],
};
```

# Fichier app
```js
// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import Header from 'src/components/Header';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';

// Data
import recipeData from 'src/data/index';

// == Composant
const App = () => (
  <div id="app">
    <Header />
    <Main name={recipeData.name} />
    <Footer />
  </div>
);

// == Export
export default App;
```

# Fichier main
```js
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant
const Main = ({ name }) => (
  <div id="main">
    Main : {name}
  </div>
);

Main.propTypes = {
  name: PropTypes.string.isRequired,
};

// == Export
export default Main;
```
