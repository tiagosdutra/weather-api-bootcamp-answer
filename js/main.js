https://api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}
document.querySelector('button').addEventListener('click', getWeather)
https://api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={5514ff0d31be5bd903abe8f50c69a608}


function getWeather(){
    let dateVal = document.querySelector('input').value
    console.log(dateVal)
    let url =   `http://api.weatherapi.com/v1/current.json?key=be4ecb46bb4442f0b62185247220305&q=${dateVal}&aqi=no`
    fetch(url)     
    .then(res => res.json()) 
// parse response as JSON     
    .then(data => {       
    console.log(data)     
    document.querySelector('h2').innerText = data.current.temp_f
    // document.querySelector('img').src = data.url
    // document.querySelector('h3').innerText = data.explanation
    })     
    .catch(err => {         
    console.log(`error ${err}`)     
    }); 
}


// http://api.weatherapi.com/v1/current.json?key=be4ecb46bb4442f0b62185247220305&q=${dateVal}&aqi=no
