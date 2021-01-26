import React, {Component, useState, useEffect} from "react";

const ShowWeather = props => {
    if (Object.keys(props).length == 0 || props.cod == 404) {
        return <h4 className="weather-error">Такой город не был найден</h4>
    } else {
        const name = props.name;
        const temperature = props.main.temp;
        const weather = props.weather[0].description;
        const icon = props.weather[0].icon;


        const urlIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`

        return <div className="show-weather-wrapper">
            <img src={urlIcon} className="weather-icon"/>
            <h2>{name}</h2>
            <h3>{temperature}°C</h3>
            <h4>{weather}</h4>
        </div>
    }
};

export default ShowWeather