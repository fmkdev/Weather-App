import { useState } from 'react';
import Card from './card'
import axios from 'axios';
import cloud from "../icons/cloudy-rain.png";
import wind from "../icons/cloudy-sun.png";
import rain from "../icons/heavy-rain.png";
import snow from "../icons/little-rain.png";
import clear from "../icons/sunny.png";



const Weather = () => {

    const [data, setData ] = useState({});
    const [wicon, setWicon ] = useState(cloud);
    const [location, setLocation ] = useState('');
    const [unit, setUnit ] = useState('metric');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=055791d3105e605b9342626674dc3c42`
    
    const fetchWeather = () => {
        if(location !== '')
        {
            axios.get(url).then((response) => {
                setData(response.data);
                setLocation('');


                if(data.weather[0].icon==="01d" || data.weather[0].icon === '01n')
            {
                setWicon(clear);
            }
            else if(data.weather[0].icon==="02d" || data.weather[0].icon === '02n')
            {
                setWicon(cloud)
            }
            else if(data.weather[0].icon==="03d" || data.weather[0].icon === '03n')
            {
                setWicon(cloud)
            }
            else if(data.weather[0].icon==="04d" || data.weather[0].icon === '04n')
            {
                setWicon(cloud)
            }
            else if(data.weather[0].icon==="09d" || data.weather[0].icon === '09n')
            {
                setWicon(rain)
            }
            else if(data.weather[0].icon==="10d" || data.weather[0].icon === '10n')
            {
                setWicon(rain)
            }
            else if(data.weather[0].icon==="13d" || data.weather[0].icon === '13n')
            {
                setWicon(snow)
            }
            else
            {
                setWicon(clear);
            }
        

            
            })
        }
    }
    const [array, setArray] = useState([
        {   
            id: 1,
            date :'09/28',
            image :'I Dot Have',
            temp :"32",
            desc :"rain"
        },
        {
            id: 2,
            date :'09/28',
            image :'I Dot Have',
            temp :"32",
          desc :"rain"
        },
        {
            id: 3,
            date :'09/28',
            image :'I Dot Have',
            temp :"32",
          desc :"rain"
        },
        {
            id: 4,
            date :'09/28',
            image :'I Dot Have',
            temp :"32",
          desc :"rain"
        }
    ])    
    
    
    return ( 
    <div className="container">
        <div className="header">
            <input type="search" 
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            
            className="search"  
            placeholder="Enter Location"/>
            <svg onClick={fetchWeather} className="search-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
</svg>
        </div>
        { data.name !== undefined && <div className="body">
            <div className="name">
                <p>{data.name}</p>
            </div>
            <div className="weather-icon">
                 <img id='wicon'
                 src={wicon} 
                 alt="weather icon" />
            </div>
            <div className="temp">
            {data.weather ? <span className="description">{data.weather[0].description}</span> : null}
             {data.main? <p>{Math.floor(data.main.temp)}&deg;C</p> : null}
                
            </div>
        </div>}
        { data.name !== undefined && <div className="footers">
            {array.map((d) => (
                (<Card date={d.date} image={d.image} temp={d.temp} desc={d.desc} />)
            ))}     
            
        </div>}
    </div>
 );
}
 
export default Weather;