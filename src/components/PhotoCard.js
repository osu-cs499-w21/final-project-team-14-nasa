import React from 'react';
import { Link } from 'react-router-dom'

function PhotoCard(props) {
    return (
        <div className="col md-6">
            <div className="card text-center">
                <div className="card-header">
                    {props.image.rover_name} - {props.image.camera}
                </div>
                <img alt_text="hello world" src={props.image.src}></img>
                <div className="row">
                    <p className="col sm-4">Earth Date {props.image.date}</p>
                    <p className="col sm-4">Sol Date {props.image.date}</p>
                </div>
            </div>
        </div>
    );
}

export default PhotoCard;