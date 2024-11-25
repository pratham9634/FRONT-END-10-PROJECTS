const ApiKey = "619d7c921fc095149e21df9b45bc102e";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weatherImage = document.querySelector(".weather-image");
const searchBox = document.querySelector(".search");
const searchBtn = document.querySelector(".search-button");

async function checkWeather(city){
    const response = await fetch(ApiUrl + city +`&appid=${ApiKey}`)
   
if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
}
else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind-speed").innerHTML = data.wind.speed + "KM/HR";
    
        if(data.weather[0].main == "Clouds"){
            weatherImage.src = "./Images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherImage.src = "./Images/clear.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherImage.src = "./Images/mist.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherImage.src = "./Images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherImage.src = "./Images/drizzle.png"
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    
    }
    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});
