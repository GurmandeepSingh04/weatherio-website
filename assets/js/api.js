/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 */

'use strict';

const api_key = "7b2245c1ec90a3911aea177ec456ae66";

/** 
 * Fetch data from server
 * @param {string} URL Api URL
 * @param {function} callback callback
*/



export const fetchData = function(URL , callback){
    fetch(`${URL}&appid=${api_key}`)
        .then(res => res.json())
        .then(data => callback(data));
}

export const url = {
    currentWeather(lat,lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric&appid=7b2245c1ec90a3911aea177ec456ae66`
    },

    forecast(lat,lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric&appid=7b2245c1ec90a3911aea177ec456ae66`
    },

    airPollution(lat,lon) {
        return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },

    reverseGeo(lat,lon) {
        return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },
    /**
     * @param {string} query Search query eg: "London", "New York"
     */
    geo(query){
        return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
     
}