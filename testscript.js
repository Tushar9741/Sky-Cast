const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '521fe9b960msh6211a10ecfae77bp1be2f7jsn99cdb0dc91ee',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=> {
	
	cityName.innerHTML = city

		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
			.then(response => response.json())
			.then((response) => {
				console.log(response)

				cloud_pct.innerHTML= response.cloud_pct
				temp.innerHTML=response.temp
				temp2.innerHTML=response.temp
				feels_like.innerHTML=response.feels_like
				humidity.innerHTML=response.humidity
				humidity2.innerHTML=response.humidity
				min_temp.innerHTML=response.min_temp
				max_temp.innerHTML=response.max_temp
				wind_speed.innerHTML=((response.wind_speed*3.6).toFixed(2))
				wind_speed2.innerHTML=((response.wind_speed*3.6).toFixed(2))
				wind_degrees.innerHTML=response.wind_degrees
				sunrise.innerHTML=response.sunrise
				sunset.innerHTML=response.sunset
			})
			
			.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")

const kolkataWeather = (city)=> {
	
		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
			.then(response => response.json())
			.then((response) => {
				console.log(response)
                cloud_pct1.innerHTML= response.cloud_pct
                temp1.innerHTML = response.temp
				feels_like1.innerHTML=response.feels_like
				humidity1.innerHTML=response.humidity
				min_temp1.innerHTML=response.min_temp
				max_temp1.innerHTML=response.max_temp
				wind_speed1.innerHTML=((response.wind_speed*3.6).toFixed(2))
				wind_degrees1.innerHTML=response.wind_degrees
				sunrise1.innerHTML=response.sunrise
				sunset1.innerHTML=response.sunset
			})
			
			.catch(err => console.error(err));
}
const shanghaiWeather = (city)=> {
	
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct3.innerHTML= response.cloud_pct
            temp3.innerHTML = response.temp
            feels_like3.innerHTML=response.feels_like
            humidity3.innerHTML=response.humidity
            min_temp3.innerHTML=response.min_temp
            max_temp3.innerHTML=response.max_temp
            wind_speed3.innerHTML=((response.wind_speed*3.6).toFixed(2))
            wind_degrees3.innerHTML=response.wind_degrees
            sunrise3.innerHTML=response.sunrise
            sunset3.innerHTML=response.sunset
        })
        
        .catch(err => console.error(err));
}

const mumbaiWeather = (city)=> {
	
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct3.innerHTML= response.cloud_pct
            temp3.innerHTML = response.temp
            feels_like3.innerHTML=response.feels_like
            humidity3.innerHTML=response.humidity
            min_temp3.innerHTML=response.min_temp
            max_temp3.innerHTML=response.max_temp
            wind_speed3.innerHTML=((response.wind_speed*3.6).toFixed(2))
            wind_degrees3.innerHTML=response.wind_degrees
            sunrise3.innerHTML=response.sunrise
            sunset3.innerHTML=response.sunset
        })
        
        .catch(err => console.error(err));
}

const newYorkWeather = (city)=> {
	
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct4.innerHTML= response.cloud_pct
            temp4.innerHTML = response.temp
            feels_like4.innerHTML=response.feels_like
            humidity4.innerHTML=response.humidity
            min_temp4.innerHTML=response.min_temp
            max_temp4.innerHTML=response.max_temp
            wind_speed4.innerHTML=((response.wind_speed*4.6).toFixed(2))
            wind_degrees4.innerHTML=response.wind_degrees
            sunrise4.innerHTML=response.sunrise
            sunset4.innerHTML=response.sunset
        })
        
        .catch(err => console.error(err));
}

const londonWeather = (city)=> {
	
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct5.innerHTML= response.cloud_pct
            temp5.innerHTML = response.temp
            feels_like5.innerHTML=response.feels_like
            humidity5.innerHTML=response.humidity
            min_temp5.innerHTML=response.min_temp
            max_temp5.innerHTML=response.max_temp
            wind_speed5.innerHTML=((response.wind_speed*5.6).toFixed(2))
            wind_degrees5.innerHTML=response.wind_degrees
            sunrise5.innerHTML=response.sunrise
            sunset5.innerHTML=response.sunset
        })
        
        .catch(err => console.error(err));
}


kolkataWeather("Kolkata")
mumbaiWeather("Mumbai")
newYorkWeather("New York")
londonWeather("London")

// Get the toggle switch element
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// Listen for the toggle switch change event
toggleSwitch.addEventListener('change', function(e) {
  if (e.target.checked) {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
  } else {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
  }    
});
