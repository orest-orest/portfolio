import React, {Component, useState, useEffect} from "react";
import ShowWeather from './showWeather.js'

function Weather() {

    const [city, setCity] = useState(localStorage.cityHash);
    const [cityInfo, setCityInfo] = useState(null);

    useEffect(async () => {
        try {
            let api_key = 'c35684ca22b136eac156e9ea6d05997e';
            if (city) {

                const api_url = await
                    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`);
                const data = await api_url.json();
                setCityInfo(data);
            }
        } catch (e) {
            console.log(e);
        }


    }, [city]);

    const submitCity = (e) => {
        e.preventDefault();
        setCity(localStorage.cityHash)
    };

    const handleChange = (evt) => {
        localStorage.cityHash = evt.target.value
    };

    const showWeather = () => {
        if (cityInfo == null) {
            return null
        } else {
            return <p>{Object.keys(cityInfo.name)}</p>
        }
    };

    if (city == undefined && cityInfo == null) {
        return <form
            onSubmit={submitCity}
        >
            <input
                type="text"
                onChange={handleChange}
                defaultValue='Введите ваш город'
            />
            <button  className="weather-button" onClick={submitCity}>Узнать погоду</button>
        </form>

    } else {
        return <div>
            <div>
                <ShowWeather {...cityInfo} />
            </div>
            <form onSubmit={submitCity}>
                <input className="weather-input"
                    type="text"
                    onChange={handleChange}
                />
                <button className="weather-button"
                    onClick={submitCity}>Узнать погоду</button>
            </form>
        </div>
    }
}

export default Weather