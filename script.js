$(document).ready(function() {
 let city = $('.weather-city'),
 	 degree = $('.weather-degree'),
 	 wind = $('.weather-wind'),
 	 forecast = $('.weather-forecast'),
 	 input = $('.js-cityId'),
 	 btn = $('.js-search');

	$.getJSON('http://api.openweathermap.org/data/2.5/weather?id=498817&APPID=f8cbc3ace5cb982a519ff23088731dba' , function(result) {
		setWeatherData(result);
	})

	function setWeatherData(result){
		city.text(result.name);
		degree.text(result.main.temp);
		wind.text(result.wind.speed);
		forecast.text(result.weather[0].description)
	}

	btn.click (function() {
		var inputValue = input.val().trim()

		if (inputValue !== '') {
			$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + input.val() + '&APPID=f8cbc3ace5cb982a519ff23088731dba')
			.done(function(result) {
				console.log(result)
				setWeatherData(result)
			})
			.fail(function() {
				alert('Похоже что ты ошибся в написании города, попробуй еще раз!')
			})
		} else {
			alert('Введите город, а то как мы тогда найдем к нему погоду?')
		}
	})

})
