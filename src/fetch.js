const apikey = "5fae8a7ed0c237a3e251ad74fdf8f595";
const api = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector(".weather-search input")
const searchbtn = document.querySelector(".searchbtn")
const weathericon = document.querySelector(".weather-icon")


async function checkweather(city) {
    const response = await fetch(api + city + `&appid=${apikey}`)
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temprature").innerHTML = Math.floor(data.main.temp )+ "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + "Km/h";
    if (data.weather[0].main == "Clouds") {
        weathericon.src = "public/images/clouds.png"
    }else if (data.weather[0].main == "Clear") {
        weathericon.src = "public/images/clear.png"
    }else if (data.weather[0].main == "Rain") {
        weathericon.src = "public/images/rain.png"
    }else if (data.weather[0].main == "Drizzle") {
        weathericon.src = "public/images/drizzle.png"
    }else if (data.weather[0].main == "Mist") {
        weathericon.src = "public/images/mist.png"
    }

    document.querySelector(".weather").style.display = "block";
    
}

searchbtn.addEventListener("click", () =>{
checkweather(searchbox.value);
})
searchbox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkweather(searchbox.value);
    }
});

