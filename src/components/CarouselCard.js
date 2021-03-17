import React from 'react';

function CarouselCard(props) {
    return (
        <div className={props.image.active ? "carousel-item active text-center" : "carousel-item text-center"}>
            <img className="h-50 w-50" src={props.image.src}></img>
        </div>
    );
}

export default CarouselCard;