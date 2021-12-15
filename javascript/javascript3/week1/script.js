
//Weather app
const kelvin = 273;
let key = "d8250b0f123f50d5752fda1d9329fa9b";
const inputCity = document.getElementById("inputCity");
const weatherCity = document.getElementById("weatherCity");
const myForm = document.getElementById("myForm");
const weatherPicture = document.getElementById("weatherPicture");
const time = document.getElementById("time");
let city;
myForm.addEventListener("submit", searchedCity)
function searchedCity(event) {
    //remember input
    event.preventDefault();
    // judge the inputvalue
    if (inputCity.value === "") {
        alert("please enter the city first")
    } else {
        navigator.geolocation.getCurrentPosition(success);
    }
}
function success(city) {
    city = inputCity.value;//input city
    key = "d8250b0f123f50d5752fda1d9329fa9b";// weather api key
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=d8250b0f123f50d5752fda1d9329fa9b&units=metric')// get the exact city we want
        .then(response => response.json())
        .then(weather => {
            console.log(weather);
            // the date
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();
            let seconds = today.getSeconds();
            let minutes = today.getMinutes();
            let hour = today.getHours();
            today = dd + '/' + mm + '/' + yyyy + "   " + hour + ": " + minutes + ": " + seconds;
            time.innerText = today
            //The chosen city
            city = weather.name;
            const weatherlocation = document.querySelector(".location");
            weatherlocation.innerHTML = city;
            // Temperature
            const tempreture = Math.floor(weather.main.temp);
            const temp_min = weather.main.temp_min
            const temp_max = weather.main.temp_max
            const tempretureValue = document.querySelector(".tempreture-value");
            const tempretureDiscription = document.querySelector(".tempreture-discription")
            tempretureValue.innerText = `${tempreture}°`
            tempretureDiscription.innerText = Math.round(temp_max) + "°" + " /" + parseInt(temp_min) + "°";
            // more infomation 
            const weatherInfo = document.querySelector(".info")
            // Icon for the weather type
            const weatherIcon = weather.weather[0].icon;
            console.log(weatherIcon);
            weatherPicture.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
            weatherPicture.alert = `weather.weather[0].description`
            // Wind speed
            const weatherSpeed = weather.wind.speed;
            // How clowdy it is
            const weatherState = weather.weather[0].description.toUpperCase();
            const weatherStatus = document.querySelector(".weatherStatus")
            weatherStatus.innerHTML = weatherState;
            // When sunrise 
            const sunrise = weather.sys.sunrise
            let date = new Date(sunrise * 1000);
            let timestr = date.toLocaleTimeString();
            //sunset is
            const sunset = weather.sys.sunset
            date = new Date(sunset * 1000);
            timestr = date.toLocaleTimeString();
            weatherInfo.innerHTML = "Wind Speed : " + weatherSpeed + " m/s .    " + "sunrise : " + timestr + "     . " + "sunset : " + timestr + " . ";
            // Optional a map showing where the city is located
            const lat = weather.coord.lat;
            const long = weather.coord.lon;
            const mapLink = document.querySelector(".mapLink");
            console.log(lat);
            mapLink.href = `https://maps.google.com/maps?q=${lat},${long}&hl=es;z=14&amp;output=embed`;
            mapLink.innerText = `Map location`;
            //  window.location.reload(true);
        })

}

//get the current city name
let latitude;
let longitude;
const currentLocation = document.querySelector("#currentLocation")
currentLocation.addEventListener("click", current)
function current() {
    navigator.geolocation.getCurrentPosition(success);
    function success(pos) {
        let crd = pos.coords;
        console.log(crd);
        latitude = crd.latitude;
        longitude = crd.longitude;
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=d8250b0f123f50d5752fda1d9329fa9b&units=metric')
            .then(response => response.json())
            .then(weather => {
                console.log(weather);
                // the date
                let today = new Date();
                let dd = String(today.getDate()).padStart(2, '0');
                let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                let yyyy = today.getFullYear();
                let seconds = today.getSeconds();
                let minutes = today.getMinutes();
                let hour = today.getHours();
                today = dd + '/' + mm + '/' + yyyy + "   " + hour + ": " + minutes + ": " + seconds;
                time.innerText = today
                // city name
                city = weather.name;
                const weatherlocation = document.querySelector(".location");
                weatherlocation.innerHTML = city;
                console.log(city);
                // Temperature
                const tempreture = Math.floor(weather.main.temp);
                const temp_min = weather.main.temp_min
                const temp_max = weather.main.temp_max
                const tempretureValue = document.querySelector(".tempreture-value");
                const tempretureDiscription = document.querySelector(".tempreture-discription")
                tempretureValue.innerText = `${tempreture}°`
                tempretureDiscription.innerText = Math.round(temp_max) + "°" + " /" + parseInt(temp_min) + "°";
                // more infomation 
                const weatherInfo = document.querySelector(".info")
                // Icon for the weather type
                const weatherIcon = weather.weather[0].icon;
                weatherPicture.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
                weatherPicture.alert = `weather.weather[0].description`
                // Wind speed
                const weatherSpeed = weather.wind.speed;
                // How clowdy it is
                const weatherState = weather.weather[0].description.toUpperCase();
                const weatherStatus = document.querySelector(".weatherStatus")
                weatherStatus.innerHTML = weatherState;
                // When sunrise 
                const sunrise = weather.sys.sunrise
                let date = new Date(sunrise * 1000);
                let timestr = date.toLocaleTimeString();
                //sunset is
                const sunset = weather.sys.sunset
                date = new Date(sunset * 1000);
                timestr = date.toLocaleTimeString();
                weatherInfo.innerHTML = "Wind Speed : " + weatherSpeed + " m/s.      " + "sunrise : " + timestr + " .     " + "sunset : " + timestr + " .";
                // Optional a map showing where the city is located
                // const lat = weather.coord.lat;
                // const long = weather.coord.lon;
                const mapLink = document.querySelector(".mapLink");
                console.log(latitude);
                mapLink.href = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&amp;output=embed`;
                mapLink.innerText = `Map location`;
                inputCity.value = "";
            });

    }
}













