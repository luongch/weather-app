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
    let container = document.querySelector('.container');
        container.innerHTML = JSON.stringify(data)
}

const processData = (data) => {
    let temps = data.main
    let weather = data.weather[0]

    let processedData =  {
        temps,
        weather
    }
    return processedData

}

getWeather()