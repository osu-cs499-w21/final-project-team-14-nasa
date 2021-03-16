import React from 'react';

function WeatherCard(props) {
    return (
        <div className="col mb-3">
            <div className="card text-center">
                <div className="card-header">
                    Sol { props.weather.day }
                </div>
                {/* <div className="card-body">
                    <h5 className="card-title">Sol { props.weather.day }</h5>
                </div> */}
                <ul className="list-group list-group-flush">
                    {
                        props.weather.data.PRE ? (
                            <li className="list-group-item">
                                <strong className="card-text">Pressure</strong>  
                                <p className="card-text mb-0">Avg: {props.weather.data.PRE.av.toFixed(2)} Pa</p>
                                <p className="card-text mb-0">High: {props.weather.data.PRE.mx.toFixed(2)} Pa</p>
                                <p className="card-text">Low: {props.weather.data.PRE.mn.toFixed(2)} Pa</p>
                            </li>
                        ) : (null)
                    }
                    {
                        props.weather.data.AT ? (
                            <li className="list-group-item">
                                <strong className="card-text">Temperature</strong>  
                                <p className="card-text mb-0">Avg: {props.weather.data.PRE.av.toFixed(2)} Pa</p>
                                <p className="card-text mb-0">High: {props.weather.data.PRE.mx.toFixed(2)} Pa</p>
                                <p className="card-text">Low: {props.weather.data.PRE.mn.toFixed(2)} Pa</p>
                            </li>
                        ) : (null)
                    }
                    {
                        <li className="list-group-item">
                            <strong className="card-text">Season</strong>  
                            <p className="card-text mb-0">North: {props.weather.data.Northern_season}</p>
                            <p className="card-text mb-0">South: {props.weather.data.Southern_season}</p>
                        </li>
                    }
                </ul>
            </div>
        </div>
    );
} 

export default WeatherCard;