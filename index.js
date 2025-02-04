// Wheather Api>>is basically an APi which can call from the server to fetch the wheather of the
//current city from using the latitude.... and longitude....
console.log("Hello jee!!");
//lets start
const API_KEY="d1845658f92b31c64bd94f06f7188c9c";
//this API key is basically the api key which is used for the key security and it will tell the browser
//wheather the API...

//fxn to call the both the fxn and making print in the ui
function renderWeatherInfo(data){
    let newPara=document.createElement('p');
    newPara.textContent=`${data?.main?.temp.toFixed(2) } *C`
    document.body.appendChild(newPara);

  
}

  





async function showWeather() {
    try {
      let city = "mandsaur";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
  
      const data = await response.json();
      console.log("Weather -> ", data);

      renderWeatherInfo(data);
  
      
    } catch (err) {
      console.warn(err);
    }
    
  }
  
  async function getCustomWeather() {
    try {
      let latitude = 24.0667;
      let longitude = 75.0667;
  
      let result =
        await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}
        `);
        //api call baSED ON THE longitude and latitude....
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
      let data = await result.json();
      console.log("Weather -> ", data);
      
    } catch (err) {
      console.log(err);
    }
  }
  
//but generally a good practice is >>make a fxn whihc can fetch the response using the api 
//make another fxn which can manage to out the data at right place using the data in the APi


//for my current location....
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("No geolocation Support available");
    }
  }
  
  function showPosition(position) {
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;
  
    console.log(lat);
    console.log(longi);
  }
  