const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '987c7ac032mshbfaa02625c32ee9p109cecjsna545e3b2e016',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const  getweather=(City)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+City, options)
	.then(response => response.json())
	.then(response => {
		
		console.log(response)

		getcity.innerHTML=City
		// cloud_pct.innerHTML =response.cloud_pct
		// var a=temp.innerHTML=response.temp
		temp1.innerHTML=response.temp
		// feels_like.innerHTML =response.feels_like
		humidity.innerHTML =response.humidity
		min_temp.innerHTML =response.min_temp
		max_temp.innerHTML =response.max_temp
		wind_speed1.innerHTML =response.wind_speed
		wind_speed.innerHTML =response.wind_speed
		wind_degrees.innerHTML =response.wind_degrees
		sunrise.innerHTML =response.sunrise
		sunset.innerHTML =response.sunset
		
		
		

		
	})
	.catch(err => console.error(err));
}
const  getweathe=(City)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+City, options)
	.then(response => response.json())
	.then(response => {
		
		console.log(response)

		Cloud_pct2.innerHTML =response.cloud_pct
		
		Temp2.innerHTML=response.temp
		Feels_like2.innerHTML =response.feels_like
		Humidity2.innerHTML =response.humidity
		Min_temp2.innerHTML =response.min_temp
		Max_temp2.innerHTML =response.max_temp
		
		Wind_speed2.innerHTML =response.wind_speed
		Wind_degrees2.innerHTML =response.wind_degrees
		Sunrise2.innerHTML =response.sunrise
		Sunset2.innerHTML =response.sunset
		
		
	})
	.catch(err => console.error(err));
}
const  delhi=(City)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+City, options)
	.then(response => response.json())
	.then(response => {
		
		console.log(response)

		Cloud_pct3.innerHTML =response.cloud_pct
		
		Temp3.innerHTML=response.temp
		Feels_like3.innerHTML =response.feels_like
		Humidity3.innerHTML =response.humidity
		Min_temp3.innerHTML =response.min_temp
		Max_temp3.innerHTML =response.max_temp
		
		Wind_speed3.innerHTML =response.wind_speed
		Wind_degrees3.innerHTML =response.wind_degrees
		Sunrise3.innerHTML =response.sunrise
		Sunset3.innerHTML =response.sunset
		
		
	})
	.catch(err => console.error(err));
}
const  mumbai=(City)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+City, options)
	.then(response => response.json())
	.then(response => {
		
		console.log(response)

		Cloud_pct4.innerHTML =response.cloud_pct
		
		Temp4.innerHTML=response.temp
		Feels_like4.innerHTML =response.feels_like
		Humidity4.innerHTML =response.humidity
		Min_temp4.innerHTML =response.min_temp
		Max_temp4.innerHTML =response.max_temp
		
		Wind_speed4.innerHTML =response.wind_speed
		Wind_degrees4.innerHTML =response.wind_degrees
		Sunrise4.innerHTML =response.sunrise
		Sunset4.innerHTML =response.sunset
		
		
	})
	.catch(err => console.error(err));
}




submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getweather(C.value)
})

getweather("Agartala")
getweathe("kolkata")
mumbai("mumbai")
delhi("Delhi")