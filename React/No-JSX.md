# Function returning string
```js
const helloWorld = (data) => {
  console.log(data);

  return (
    `<div id="hello-world">
      <h1>Ce HTML a été généré par ${data.lang}</h1>
      <h2>Et affiché avec ${data.method}</h2>
    </div>`
  );
};

render(helloWorld({ lang: 'ES2015', method: 'innerHTML' }));
```
Or
```js
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
