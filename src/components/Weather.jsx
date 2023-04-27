import React from 'react'
import { useState } from "react";
import axios from 'axios';
function Weather() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=66d1164883159cdd28080ec2ffce48f5`;
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(URL).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  return (
    <div className="weather">
      <div className="search mt-[100px] font-acme">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder='Enter Location'
          type="text"
          size={50} />
      </div>
      <div className="container font-acme text-extrabold">
        <div className="top">
          <div className="location text-[36px]">
            <p>{data.name}</p>
          </div>
          <div className="temp text-[60px]">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description text-[40px]">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom text-[28px]">
            <div className="feels">
              {data.main ? <p>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Weather