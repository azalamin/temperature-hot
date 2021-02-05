const apiKey = "1c6e3d800ea0ed275a48fec7e349e3fd";
const apiBase = "https://api.openweathermap.org/data/2.5/weather";

const getWhetherData = (city) => {
  const URL = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("city").innerText =
        data.name || "Unknown Location!";
      document.getElementById("show-temperature").innerText = data.main.temp;
      document.getElementById("clouds").innerText = data.weather[0].main;
      document
        .getElementById("icon")
        .setAttribute(
          "src",
          `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        );
    });
};

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", function () {
  const cityName = document.getElementById("search-inp").value;
  getWhetherData(cityName);
});

// Default Location
getWhetherData('Dhaka');
