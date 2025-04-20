

const ApiKey = "57aced0002553acaef0e8180c904063b";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".weather-container input");
const searchBtn = document.querySelector(".weather-container button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`);
    var data = await response.json();


    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";


    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/cloud.png"
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.webp"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/img1.webp"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png"
    }
}

searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
})

