import React from 'react';

function CarouselCard(props) {
    return (
        <div className="col md-6">
            <div className="card text-center">
                <img src={props.image.src}></img>
            </div>
        </div>
    );
}

export default CarouselCard;