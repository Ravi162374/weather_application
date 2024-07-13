import React, { useState, useEffect } from 'react';
import '../styles/home.css';

import temp from '../assets/temp.jpeg';
import humid from '../assets/humidity.jpeg';
import speed from '../assets/speed.jpeg';
import direction from '../assets/winddirection.jpeg';
import pressureimage from '../assets/pressure.jpeg';

function Home() {
    let [location, setLocation] = useState("Hyderabad");
    let [day_condition_text, setDayCondition] = useState("");
    let [day_icon, setDayConditionIcon] = useState("");
    let [tempc, setTempc] = useState("");
    let [tempf, setTempf] = useState("");
    let [humidity, setHumidity] = useState("");
    let [pressure, setPressure] = useState("");
    let [winddirection, setDirection] = useState("");
    let [windspeed, setWindSpeed] = useState("");

    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=e90ae9103c5e437ebe1170033240807&q=Hyderabad&days=5`)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                setDayCondition(data.current.condition.text);
                let completeUrl = `http:${data.current.condition.icon}`;
                setDayConditionIcon(completeUrl);
                setLocation(data.location.name);
                setTempc(data.current.temp_c);
                setTempf(data.current.temp_f);
                setHumidity(data.current.humidity);
                setPressure(data.current.pressure_in);
                setDirection(data.current.wind_dir);
                setWindSpeed(data.current.wind_kph);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className='localWeatherReport'>
            <div className='currentReport'>
                <div className='col1'>
                    <div className='location_details'>
                        <span className='location'>{location}</span>
                        <div className='city_image'>
                            <img className="cityImage" src={'https://media.istockphoto.com/id/1194408155/photo/charminar-hyderabad-background-with-copy-space.jpg?s=612x612&w=0&k=20&c=t2Hic0I2WxaJuIy4X8pazyzaLVPhQQ7Vsn3Oad-YPck='} alt="cityimage" />
                            <div className='city_information'>
                                <img className="icon" src={day_icon} alt="Weather Icon" />
                                <span className='location_condition'>{day_condition_text}</span>
                            </div>
                            <span className='location1'>Location: {location}</span>
                        </div>
                    </div>
                </div>

                <div className='col2'>
                    <span className='highlights'>Today's Highlights</span><br />
                    <div className='weather_information'>
                        <div className='frame'>
                            <span className='temp_c'>Temperature (C)</span><br />
                            <img src={temp} alt="Temperature" />
                            <i className="fa-solid fa-temperature-three-quarters"></i>
                            <span>{tempc}°C</span>
                        </div>
                        <div className='frame'>
                            <span className='temp_f'>Temperature (F)</span><br />
                            <img src={temp} alt="Temperature" />
                            <i className="fa-solid fa-temperature-three-quarters"></i>
                            <span className='tf'>{tempf}°F</span>
                        </div>
                        <div className='frame'>
                            <span className='humidity'>Humidity</span><br />
                            <img src={humid} alt="Humidity" />
                            <i className="fa-solid fa-droplet"></i>
                            <span>{humidity}%</span>
                        </div>
                        <div className='frame'>
                            <span className='wind_direction'>Wind Direction</span><br />
                            <img src={direction} alt="Wind Direction" />
                            <i className="fa-solid fa-compass"></i>
                            <span>{winddirection}</span>
                        </div>
                        <div className='frame'>
                            <span className='windspeed'>Wind Speed</span><br />
                            <img src={speed} alt="Wind Speed" />
                            <i className="fa-solid fa-wind"></i>
                            <span>{windspeed} km/h</span>
                        </div>
                        <div className='frame'>
                            <span className='pressure'>Pressure</span><br />
                            <img src={pressureimage} alt="Pressure" />
                            <i className="fa-solid fa-wind"></i>
                            <span>{pressure} in</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
