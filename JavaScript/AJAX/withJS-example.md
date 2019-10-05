# Get request
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossorigin="anonymous">
  <title>WeatherCheck</title>
</head>
<body>
  <div class="container" id="page-container">
    <header class="text-center">
      <h1>WeatherCheck</h1>
    </header>
    <main>
      <div class="row">
        <form class="col-sm-8 offset-sm-2" id="city-form">
          <div class="form-group">
            <label for="city">Enter your city here</label>
            <input type="text" id="city" class="form-control" required>
          </div>
          <button class="btn btn-success" type="submit">Check the weather!</button>
        </form>
      </div>
      <div class="row">
        <p id="weather-report" class="col-sm-8 offset-sm-2 text-center">
        </p>
      </div>
    </main>
  </div>
  <script src="scripts.js"></script>
</body>
</html>
```

```js
// Access DOM elements
const reportSection = document.getElementById('weather-report');
const cityForm = document.getElementById('city-form');
const cityInput = document.getElementById('city');

// Prepare openweathermap.org request
let apiRequest = new XMLHttpRequest();
apiRequest.onreadystatechange = () => {
  if (apiRequest.status === 404) {
      reportSection.textContent = `Erreur, la ville est inconnue du système.`;
  } else if (apiRequest.readyState === 4) {
      const response = JSON.parse(apiRequest.response);
      reportSection.textContent = `The weather in ${response.name} is ${response.weather[0].main}.`;
  }
};

/* 
 * Capture and handle form submit event
 * Prevent default behaviour, prepare and send API request
*/
cityForm.addEventListener('submit', ($event) => {
  $event.preventDefault();
  const chosenCity = cityInput.value;
  apiRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + chosenCity + '&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e');
  apiRequest.send();
});
```

# Post request
- [intro à js async](https://openclassrooms.com/en/courses/5493201-write-javascript-for-the-web/5496671-understand-asynchronous-programming) : callbacks, promises, async, await

```html
<html>
  <head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <title>Sending a POST request</title>
  </head>
  <body>
    <div class="container">
      <header id="page-header" class="bg-dark text-white col-sm-12">
        <h1 id="main-heading" class="text-center">Sending a POST request</h1>
      </header>
      <div class="row">
        <main class="col-sm-10 offset-sm-1">
          <form>
            <div class="form-group">
              <label for="title">Title</label>
              <input type="text" id="title" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="content">Content</label>
              <textarea id="content" class="form-control" rows="4" required></textarea>
            </div>
            <button id="submit-button" type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </main>
      </div>
      <div class="row">
        <section class="col-sm-10 offset-sm-1">
          <p id="response-message"></p>
          <h2 id="response-title"></h2>
          <small id="response-id"></small>
          <p id="response-content"></p>
        </section>
      </div>
    </div>
    <script src="scripts.js"></script>
  </body>
</html>
```

```js
// Get form elements
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitButton = document.getElementById('submit-button');

const url = 'https://us-central1-open-classrooms-js-for-the-web.cloudfunctions.net/widgets';

// Get DOM elements for showing response
const responseMessage = document.getElementById('response-message');
const responseTitle = document.getElementById('response-title');
const responseId = document.getElementById('response-id');
const responseContent = document.getElementById('response-content');

submitButton.addEventListener('click', ($event) => {
  $event.preventDefault();
  const post = {
    title: titleInput.value,
    content: contentInput.value
  };
  submitFormData(post);
});

function makeRequest(data) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open('POST', url + '/create-post');
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status === 201) {
          resolve(JSON.parse(request.response));
        } else {
          reject(JSON.parse(request.response));
        }
      }
    };
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(data));
  });
}

async function submitFormData(post) {
  try {
    const requestPromise = makeRequest(post);
    const response = await requestPromise;
    responseMessage.textContent = response.message;
    responseTitle.textContent = response.post.title;
    responseId.textContent = response.post.id;
    responseContent.textContent = response.post.content;
  } catch (errorResponse) {
    responseMessage.textContent = errorResponse.error;
  }
}
```

# Multiple requests (promises, async/await)
```html
<html>
  <head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <title>Chaining requests</title>
  </head>
  <body>
    <div class="container">
      <header id="page-header" class="bg-dark text-white col-sm-12">
        <h1 id="main-heading" class="text-center">Chaining requests</h1>
      </header>
      <div class="row">
        <section class="col-sm-10 offset-sm-1 text-center">
          <button type="button" id="generate-button" class="btn btn-primary btn-lg">Generate Post!</button>
        </section>
      </div>
      <div class="row">
        <article class="col-sm-10 offset-sm-1">
          <h2 id="post-title"></h2>
          <small id="post-id"></small>
          <p id="post-content"></p>
        </article>
      </div>
    </div>
    <script src="scripts.js"></script>
  </body>
</html>
```

```js
// Get DOM elements
const generateButton = document.getElementById('generate-button');
const postTitle = document.getElementById('post-title');
const postId = document.getElementById('post-id');
const postContent = document.getElementById('post-content');

// API URL
const api = 'https://us-central1-open-classrooms-js-for-the-web.cloudfunctions.net/widgets';

function makeRequest(verb, url, data) {
  return new Promise((resolve, reject) => {
    if (verb === 'POST' && !data) {
      reject({error: 'No data object provided for POST request!'});
    }
    if (verb !== 'POST' && verb !== 'GET') {
      reject({error: 'Invalid request verb!'});
    }
    let request = new XMLHttpRequest();
    request.open(verb, url);
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status === 200 || request.status === 201) {
          resolve(JSON.parse(request.response));
        } else {
          reject(JSON.parse(request.response));
        }
      }
    };
    if (verb === 'POST') {
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify(data));
    } else {
      request.send();
    }
  });
}

async function createPost() {
  const uidPromise = makeRequest('GET', api + '/generate-uid');
  const titlePromise = makeRequest('GET', api + '/generate-title');
  const loremPromise = makeRequest('GET', api + '/generate-lorem');
  
  try {
    const [uidResponse, titleResponse, loremResponse] = await Promise.all([uidPromise, titlePromise, loremPromise]);
  
    const postPromise = makeRequest('POST', api + '/create-post-with-uid', {
      uid: uidResponse.uid,
      title: titleResponse.title,
      content: loremResponse.lorem
    });
    try {
      const postResponse = await postPromise;

      postTitle.textContent = postResponse.post.title;
      postId.textContent = postResponse.post.id;
      postContent.textContent = postResponse.post.content;
    } catch (error) {
      postTitle.textContent = error.error;
    }
  } catch (error) {
    postTitle.textContent = error.error;
  }
}

generateButton.addEventListener('click', () => {
  createPost();
});
```
