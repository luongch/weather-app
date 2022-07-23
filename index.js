const APIKEY = '71423050a90fbe8000f73aa8b4fbe098'

const  getWeather = async (location = "Toronto") => {
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${APIKEY}`, {mode: 'cors'})
    let data = await response.json();

    let container = document.querySelector('.container');
    container.innerHTML = JSON.stringify(data)
} 

const processData = () => {

}

// getWeather();