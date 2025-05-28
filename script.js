const inputbox = document.querySelector(".input-box");
const searchbtn = document.getElementById("searchbtn");
const temprature = document.querySelector(".temprature");
const temprature1 = document.querySelector(".temprature1");
const long = document.querySelector(".long");
const lat = document.querySelector(".lat");
const weatherid = document.querySelector(".weatherid");
const main = document.querySelector(".weather-main");
const main1 = document.querySelector(".weather-main1");
const description = document.querySelector(".description");
const icon = document.querySelector(".icon");
const feels_like = document.querySelector(".feels_like");
const temp_min = document.querySelector(".temp_min");
const temp_max = document.querySelector(".temp_max");
const pressure = document.querySelector(".pressure");
const grnd_level = document.querySelector(".grnd_level");
const sea_level = document.querySelector(".sea_level");
const humidity = document.querySelector(".humidity");
const humidity1 = document.querySelector(".humidity1");
const visibility = document.querySelector(".visibility");
const speed = document.querySelector(".speed");
const deg = document.querySelector(".deg");
const gust = document.querySelector(".gust");
const all = document.querySelector(".all");
const dt = document.querySelector(".dt");
const type = document.querySelector(".type");
const sys_id = document.querySelector(".sys_id");
const country = document.querySelector(".country");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const timezone = document.querySelector(".timezone");
const id = document.querySelector(".id");
const names = document.querySelector(".name");
const names1 = document.querySelector(".name1");
const cod = document.querySelector(".cod");
const rain1h = document.querySelector(".rain1h");
const weatherImg = document.querySelector(".weather-img");
const weatherImg1 = document.querySelector(".weather-img1");

async function checkweather(city) {
  const api_key = "d6297a0a96c9589eed96ba0f8eae9d31";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  try {
    const response = await fetch(url);
    const weather_data = await response.json();

    if (weather_data.cod !== 200) {
      alert("City not found!");
      return;
    }

    temprature.innerHTML = `${(weather_data.main.temp - 273.15).toFixed(
      0
    )} <sup>°</sup>C`;
    temprature1.innerHTML = `${(weather_data.main.temp - 273.15).toFixed(
      0
    )} <sup>°</sup>C`;
    long.innerHTML = `${weather_data.coord.lon}`;
    lat.innerHTML = `${weather_data.coord.lat}`;
    weatherid.innerHTML = `${weather_data.weather[0].id}`;
    main.innerHTML = `${weather_data.weather[0].main}`;
    main1.innerHTML = `${weather_data.weather[0].main}`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    icon.innerHTML = `${weather_data.weather[0].icon}`;
    feels_like.innerHTML = `${(weather_data.main.feels_like - 273.15).toFixed(
      0
    )} <sup>°</sup>C`;
    temp_min.innerHTML = `${(weather_data.main.temp_min - 273.15).toFixed(
      0
    )} <sup>°</sup>C`;
    temp_max.innerHTML = `${(weather_data.main.temp_max - 273.15).toFixed(
      0
    )} <sup>°</sup>C`;
    pressure.innerHTML = `${weather_data.main.pressure}`;
    humidity.innerHTML = `${weather_data.main.humidity}`;
    humidity1.innerHTML = `${weather_data.main.humidity}`;
    sea_level.innerHTML = `${weather_data.main.sea_level || "N/A"}`;
    grnd_level.innerHTML = `${weather_data.main.grnd_level || "N/A"}`;
    visibility.innerHTML = `${weather_data.visibility}`;
    speed.innerHTML = `${weather_data.wind.speed}`;
    deg.innerHTML = `${weather_data.wind.deg}`;
    gust.innerHTML = `${weather_data.wind.gust || "N/A"}`;
    rain1h.innerHTML = `${weather_data.rain?.["1h"] ?? "N/A"}`;
    all.innerHTML = `${weather_data.clouds.all}`;
    type.innerHTML = `${weather_data.sys?.type || "N/A"}`;
    sys_id.innerHTML = `${weather_data.sys.id}`;
    country.innerHTML = `${weather_data.sys.country}`;

    const convertUnixToTime = (timestamp) => {
      const date = new Date(timestamp * 1000);
      return date.toLocaleTimeString();
    };

    dt.innerHTML = convertUnixToTime(weather_data.dt);
    sunrise.innerHTML = convertUnixToTime(weather_data.sys.sunrise);
    sunset.innerHTML = convertUnixToTime(weather_data.sys.sunset);
    timezone.innerHTML = `${weather_data.timezone}`;
    id.innerHTML = `${weather_data.id}`;
    names.innerHTML = `${weather_data.name}`;
    names1.innerHTML = `${weather_data.name}`;
    cod.innerHTML = `${weather_data.cod}`;

    switch (weather_data.weather[0].main) {
      case "Clouds":
        weatherImg.src = "images/clod.jpeg";
        break;
      case "Rain":
        weatherImg.src = "images/rain.gif";
        break;
      case "Clear":
        weatherImg.src = "images/sun.gif";
        break;
      case "Wind":
        weatherImg.src = "images/wind.gif";
        break;
      default:
        weatherImg.src = "images/default.gif";
    }
    switch (weather_data.weather[0].main) {
      case "Clouds":
        weatherImg1.src = "images/clod.jpeg";
        break;
      case "Rain":
        weatherImg1.src = "images/rain.gif";
        break;
      case "Clear":
        weatherImg1.src = "images/sun.gif";
        break;
      case "Wind":
        weatherImg1.src = "images/wind.gif";
        break;
      default:
        weatherImg1.src = "images/default.gif";
    }

    console.log("Weather Main:", weather_data.weather[0].main);
    console.log("Image Path:", weatherImg.src);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Failed to fetch weather data.");
  }
}

searchbtn.addEventListener("click", () => {
  const city = inputbox.value.trim();
  if (city) checkweather(city);
});
