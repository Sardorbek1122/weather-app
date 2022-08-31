import React, { useState } from 'react';
import './App.scss';
import axios from 'axios';
import WeatherNews from './Components/WelcomeBar/WelcomeBar';
import Clock from './Components/Clock/Clock';
import DateFormat from './Components/DateFormat/DateFormat';

function App() {

  const [location, setLocation] = useState('');
  const [data, setData] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=994aa102a37b0cc8077390ae8c3e54cc`;

  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }
  }

  let emoji = null; 
  
  if (typeof data.main !== "undefined") {
    if(data.weather[0].main === "Clouds") {
      emoji = "fa-cloud"
    } else if(data.weather[0].main === "Thunderstorm") {
      emoji = "fa-bolt"
    } else if(data.weather[0].main === "Drizzle") {
      emoji = "fa-cloud-rain"
    } else if(data.weather[0].main === "Rain") {
      emoji = "fa-cloud-rain-shower-heavy"
    } else if(data.weather[0].main === "Snow") {
      emoji = "fa-snow-flake"
    } else if(data.weather[0].main === "Clear") {
      emoji = "fa-sun"
    } else {
      emoji = "fa-smog"
    }
  }
  
  return (
    <div className="app">
      <div className='app__container'>
        <div className="app__search-bar">
          <input 
            className='app__search-input'
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            type="text"
            placeholder="Enter City..."
          />
        </div>

        <h1 className="app__location-header">
          What's The Weather Today?
        </h1>

        {
          data.name !== undefined ?
          <div className="app__main">
          <div className="app__main-wrapper">
            <img 
              src={`https://source.unsplash.com/600x600/?${data.weather[0].main}`} 
              alt="/" 
              className='app__location-img'
            />
            <div className='app__location-wrapper'>
            <div className="app__location">
              <div className="app__location-info">
                <div className="app__location-city">
                  <h1>{data.name},</h1>&nbsp; &nbsp;
                  {data.weather ? 
                    <h1>{data.sys.country}</h1> : 
                    null}
                  </div>
                <div className="app__location-temp">
                  {
                    data.main ?
                      <h1>{Math.round(data.main.temp - 273.15)}°C</h1> :
                        null
                  }
                </div>
                <div className="app__location-clock"><Clock/></div>
                <div className="app__location-date"><DateFormat/></div>
              </div>
            </div>

            <div className="app__details">
              <div className="app__details-icon">
                  <i className={`fas ${emoji} fa-5x`}></i>
              </div>
              <div className="info app__details__sky">
                <p>SKY </p>
                <div>{data.weather ? <p>{data.weather[0].main}</p> : null}</div>
              </div>
              <div className="info app__details__max-temp">
                <div>Max-Temp</div>
                <div>{data.main ? <p>{Math.round(data.main.temp_max - 273.15)}°C</p> : null}</div>
              </div>
              <div className="info app__details__min-temp">
                <div>Min-Temp</div>
                <div>
                  {
                    data.main ?
                      <p>{Math.round(data.main.temp_min - 273.15)}°C</p> :
                        null
                  }
                </div>
              </div>
              <div className="info app__details__wind-speed">
                <div>Wind-Speed</div>
                <div>
                  {
                    data.wind ? <p>{data.wind.speed}km/hr</p> : null
                  }
                </div>
              </div>
              <div className="info app__details__feeling">
                <div>Feels Like</div>
                <div>
                  {
                    data.main ? <p>{Math.round(data.main.feels_like - 273.15)}°C</p> : null
                  }
                </div>
              </div>
              <div className="info app__details__pressure">
                <div>Pressure</div>
                <div>
                  {
                    data.main ? <p>{data.main.pressure}hPa</p> : null
                  }
                </div>
              </div>
            </div>
            </div>
          </div>
          </div> : 
          <WeatherNews />
        }

      </div>
    </div>
  );
} 

export default App;
