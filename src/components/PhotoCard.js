import React from 'react';
import { Link } from 'react-router-dom'

function PhotoCard(props) {
    return (
        <div className="col md-6 p-3">
            <div className="card text-center">
                <div className="card-header">
                    {props.image.rover_name} - {props.image.camera}
                </div>
                <img alt_text="hello world" src={props.image.src}></img>
                <div className="row">
                    <p className="col sm-4">Earth Date {props.image.earth_date}</p>
                </div>
            </div>
        </div>
    );
}

export default PhotoCard;