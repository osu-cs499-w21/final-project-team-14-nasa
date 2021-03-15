import React from 'react';

function WeatherCard(props) {
    return (
        <div className="col mb-3">
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">Sol { props.weather.day }</h5>
                    {/* {
                        props.weather.data.PRE ? (
                            <p className="card-text">Pressure: {props.weather.data.PRE.av} Pa</p>
                        ) : (null)
                    } */}
                </div>
                <ul className="list-group list-group-flush">
                    {
                        props.weather.data.PRE ? (
                            <li className="list-group-item">Pressure: {props.weather.data.PRE.av} Pa</li>
                        ) : (null)
                    }
                </ul>
            </div>
        </div>
    );
} 

export default WeatherCard;