import fetch from 'isomorphic-unfetch';
import React, { useState, useEffect } from 'react';

import WeatherCard from '../components/WeatherCard';

function Weather() {
    const [report, setReport] = useState([]);

    useEffect(() => {
        async function getWeather() {
            let newReport = [];
            try {
                const res = await fetch(`https://api.nasa.gov/insight_weather/?api_key=${process.env.REACT_APP_NASA}&feedtype=json&ver=1.0`);
                let body = await res.json();
                
                for (let i = 0; i < body.sol_keys.length; i++) {
                    newReport.push( {
                        day: body.sol_keys[i],
                        data: body[body.sol_keys[i]]
                    });
                }
                console.log(newReport);
            } catch (e) {
                console.log("Error: " + e);
            }
            setReport(newReport);
        }
        getWeather();
    }, []);

    const weatherCards = report.map((w) => <WeatherCard key={w.day} weather={w}/>);
    return (
        <div className="container">
            <h1 className="text-center">Weather Reports</h1>
            <div className="row row-cols-1 row-cols-md-5">
                {
                    weatherCards
                }
            </div>
        </div>
    )
}

export default Weather;
