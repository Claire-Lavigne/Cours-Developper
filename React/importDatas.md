# recipe.js
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
import recipeData from 'src/data/recipe';

// == Composant
const App = () => (
  <div id="app">
    <Header />
    <Main name="Coucou" />
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

// == Import : local
import './main.scss';

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
