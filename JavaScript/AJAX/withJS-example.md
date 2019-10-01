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
