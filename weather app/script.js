const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

async function getdata(cityname){

   const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=95b9cd53f6dd4001be544703230110&q=${cityname}&aqi=yes`);

   return await promise.json()
}

button.addEventListener("click", async() =>{
    const value = input.value;
    const result = await getdata(value);
    cityName.innerText = `${result.location.name},${result.location.region}`
    cityTime.innerText = `${"Time in " + value +  " is " + result.location.localtime}`
    cityTemp.innerText = `${"temp in celcius is - " + result.current.temp_f} , ${"temp in celcius is - " + result.current.temp_c}`
})