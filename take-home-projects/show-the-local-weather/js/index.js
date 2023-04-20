function render(temperature, local, weather, icon) {
  const root = document.getElementById("root");

  const content = `
    <span class="flex flex-wrap gap-4">
      <h1 id="temperature" class="text-6xl font-semibold">${temperature}</h1>
      <button
        id="typeTemperature"
        class="text-6xl text-sky-600 font-semibold"
      >
        °C
      </button>
    </span>

    <h2 class="text-3xl font-medium">The Local Weather</h2>

    <section class="flex flex-wrap gap-x-4 w-full justify-between">
      <p id="local" class="text-2xl font-normal">${local}</p>
      <p id="weather" class="text-2xl font-normal">${weather}</p>
    </section>

    <img id="weatherIcon" class="w-24 h-auto" src="${icon}" />
  `;

  root.innerHTML = content;

  document
    .getElementById("typeTemperature")
    .addEventListener("click", function () {
      const temperatureDOM = document.getElementById("temperature");
      const temperatureTypes = {
        celsius: temperature,
        fahrenheit: (9 * temperature) / 5 + 32,
      };

      if (this.innerText === "°C") {
        this.innerText = "°F";
        temperatureDOM.innerText = temperatureTypes.fahrenheit.toFixed(2);
      } else {
        this.innerText = "°C";
        temperatureDOM.innerText = temperatureTypes.celsius;
      }
    });
}

async function success(pos) {
  const localWeather = await getLocalWeather(
    pos.coords.latitude,
    pos.coords.longitude
  );

  const { main, name, sys, weather } = localWeather;

  const temperature = main.temp;
  const local = `${name}, ${sys.country}`;
  const weatherDescription = weather[0].main;
  const weatherIcon = weather[0].icon;

  render(temperature, local, weatherDescription, weatherIcon);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
  document.getElementById("root").innerHTML =
    "<h1 class='text-2xl'><strong>Please</strong>, make sure location permission is enabled.</h1>";
}

async function getLocalWeather(lat, lon) {
  const response = await fetch(
    `https://weather-proxy.freecodecamp.rocks/api/current?lat=${lat}&lon=${lon}`
  );

  return response.json();
}

navigator.geolocation.getCurrentPosition(success, error);
