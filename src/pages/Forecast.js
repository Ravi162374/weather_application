import React, { useEffect, useState } from 'react';
import '../styles/forecast.css';
import '../index.css';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function Forecast() {
    const [city, setCity] = useState(''); // Initial city state
    const [forecastData, setForecastData] = useState([]);
    const [error, setError] = useState(null); // State to handle errors
    const [searchedCity, setSearchedCity] = useState(''); // State to track searched city
    const [isLoading, setIsLoading] = useState(false); // Loading state

    useEffect(() => {
        if (searchedCity !== '') {
            setIsLoading(true); // Set loading to true before fetch
            fetchWeatherData(searchedCity); // Fetch weather data if searchedCity is set
        }
    }, [searchedCity]);

    const fetchWeatherData = (city) => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=e90ae9103c5e437ebe1170033240807&q=${city}&days=7`)
            .then(response => {
                setIsLoading(false); // Set loading to false after fetch response
                if (!response.ok) {
                    throw new Error('City not found! Please enter a valid city name.');
                }
                return response.json();
            })
            .then(data => {
                setForecastData(data.forecast.forecastday);
                setError(null); // Clear error if data fetched successfully
            })
            .catch(error => {
                setIsLoading(false); // Set loading to false in case of error
                setError(error.message); // Set error message
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        setSearchedCity(city); // Set searchedCity to trigger useEffect
    };

    const handleInputChange = (e) => {
        setCity(e.target.value); // Update city state based on input
    };

    return (
        <div className='forecast'>
            <div className='search'>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={city} onChange={handleInputChange} placeholder='Enter location...' />
                    <button type='submit'>Search</button>
                </form>
            </div>
            {isLoading ? (
                <div className='loading-spinner'>
                    <i className='fa-solid fa-spinner fa-spin'></i> Loading...
                </div>
            ) : (
                <div className='weather-forecast'>
                    {error ? (
                        <div className='error'>{error}</div>
                    ) : (
                        forecastData.map((day, index) => (
                            <div key={index} className='forecast-card'>
                                <div className='day'>{daysOfWeek[new Date(day.date).getDay()]}</div>
                                <div className='location'>{searchedCity}</div> {/* Display searched city name */}
                                <div className='weather-icon'>
                                    <img src={`http:${day.day.condition.icon}`} alt={day.day.condition.text} />
                                </div>
                                <div className='temperature'>{day.day.maxtemp_c}°C / {day.day.maxtemp_f}°F</div>
                                <div className='description'>{day.day.condition.text}</div>
                                <div className='details'>
                                    <p>Humidity: {day.day.avghumidity}%</p>
                                    <p>Pressure: {day.day.totalprecip_mm} mm</p>
                                    <p>Sunrise: {day.astro.sunrise}</p>
                                    <p>Sunset: {day.astro.sunset}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

export default Forecast;
