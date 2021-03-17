import React from 'react';
import { Link } from 'react-router-dom'

function CarouselCard(props) {
    return (
        <div className="col md-6">
            <div className="card text-center">
                <p>hello</p>
                <img src={props.image.src}></img>
            </div>
        </div>
    );
}

export default CarouselCard;