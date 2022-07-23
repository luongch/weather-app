const APIKEY = '71423050a90fbe8000f73aa8b4fbe098'

const  getWeather = async () => {
    try {
        let form = document.getElementById('locationForm')
        let location = form.elements['location'].value ? form.elements['location'].value : "Toronto"

        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${APIKEY}`, {mode: 'cors'})
        let data = await response.json();

        let processedData = processData(data)
        displayWeather(processedData);
        
    } catch (error) {
        console.log(error)
    }
    
    
} 

function displayWeather(data) {
    let city = document.querySelector('.city');
    city.innerHTML = data.city

    let temp = document.querySelector('.temp');
    temp.innerHTML = data.temps.temp + "&#8451";

    let feelsLike = document.querySelector('.feelsLike');
    feelsLike.innerHTML += data.temps.feels_like  + "&#8451";

    let sun = document.querySelector('.sun');
    sun.innerHTML = data.weather.description

    let wind = document.querySelector('.wind');
    wind.innerHTML += data.wind.speed + "KM/H"
    
    let humidity = document.querySelector('.humidity')
    humidity.innerHTML += data.temps.humidity
    
    
}

const processData = (data) => {
    let temps = data.main;
    let weather = data.weather[0];
    let city = data.name;
    let wind = data.wind;

    let processedData =  {
        temps,
        weather,
        city,
        wind
    }
    return processedData

}

getWeather()