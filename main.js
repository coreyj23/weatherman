const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '57671f2ce6mshb7b6eebb6a753e4p1d1b78jsn1f6104d738e0',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};

//																							  Enter Key User Submit Start //

let input = document.getElementById("userInput");

input.addEventListener("keypress", function(enter) {

if (enter.key === "Enter") {

fetch("https://yahoo-weather5.p.rapidapi.com/weather?location=" + input.value + "&format=json&u=f", options)
.then(response => response.json())
.then(response => {
	console.log(response)

//																							   	Enter Key User Submit End //

//																														     City Start //

    const textParentcityName = document.getElementById('cityName');
    const h2cityName = document.createElement('h2');
    const cityText = document.createTextNode(response.location.city + ", ");

    textParentcityName.appendChild(h2cityName);
    h2cityName.appendChild(cityText);

//																													    	   City End //


//																														  Country Start //

		const textParentcountryName = document.getElementById('countryName');
		const h2countryName = document.createElement('h2');
		const countryText = document.createTextNode(response.location.country);

		textParentcountryName.appendChild(h2countryName);
		h2countryName.appendChild(countryText);

//																													    	Country End //

//																									    Horizontal Rule Start //

		const textParentlocationHR = document.getElementById('locationHR');
		const hrseparate = document.createElement('hr');

		textParentlocationHR.appendChild(hrseparate);

//																												Horizontal Rule End //

//																														Temp-Misc Start //
		//Get Today's Date //
    let d = new Date();
		let tD = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
		const textParentcurrentDay= document.getElementById('currentDay');
		const h3currentDay = document.createElement('h3');
		const currentDayText = document.createTextNode(response.forecasts[0].day + ", " + tD);

		textParentcurrentDay.appendChild(h3currentDay);
		h3currentDay.appendChild(currentDayText);

    //Get The Current Temperature //
		const textParenttempDegrees= document.getElementById('tempDegrees');
		const h3tempDegrees = document.createElement('h3');
		const tempText = document.createTextNode(response.current_observation.condition.temperature + "º");

		textParenttempDegrees.appendChild(h3tempDegrees);
		h3tempDegrees.appendChild(tempText);

		//Get The Current Condition //
		const textParentcurrentCondition = document.getElementById('currentCondition');
		const h3currentCondition = document.createElement('h3');
		let currentConditionText = document.createTextNode(response.current_observation.condition.text);

		textParentcurrentCondition.appendChild(h3currentCondition);
		h3currentCondition.appendChild(currentConditionText);

		//Get The Current Humidity //
		const textParentcurrentHumidity = document.getElementById('currentHumidity');
		const h3currentHumidity = document.createElement('h3');
		const currentHumidityText = document.createTextNode("Humidity: " + response.current_observation.atmosphere.humidity + "%");

		textParentcurrentHumidity.appendChild(h3currentHumidity);
		h3currentHumidity.appendChild(currentHumidityText);

		//Get The Low Temperature //
		const textParentlowTemp = document.getElementById('lowTemp');
		const h3lowTemp = document.createElement('h3');
		const lowTempText = document.createTextNode("Low: " + response.forecasts[0].low + "º");

		textParentlowTemp.appendChild(h3lowTemp);
		h3lowTemp.appendChild(lowTempText);

		//Get The High Temperature //
		const textParenthighTemp = document.getElementById('highTemp');
		const h3highTemp = document.createElement('h3');
		const highTempText = document.createTextNode("High: " + response.forecasts[0].high + "º");

		textParenthighTemp.appendChild(h3highTemp);
		h3highTemp.appendChild(highTempText);

//																													    Temp-Misc End //
})

    //Clear Input After Submission//
document.getElementById("userInput").value = "";

}
})

	.catch(err => console.error(err));
