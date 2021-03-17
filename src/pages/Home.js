import fetch from 'isomorphic-unfetch';
import React, { useState, useEffect } from 'react';

import CarouselCard from '../components/CarouselCard';

function Home() {
    const [rover, setImgRover] = useState([]);
    // const rover_list = [
    //     "curiosity",
    //     "opportunity",
    //     "spirit",
    // ]

    useEffect(() => {
        async function getImgRover() {
            let newRover = []
            try {
                let res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2012-08-06&api_key=${process.env.REACT_APP_NASA}`);
                let body = await res.json();
                for(let i = 1; i < 5; i++){
                    newRover.push({
                        id: body.photos[i].id,
                        src: body.photos[i].img_src,
                        active: i == 1
                    });
                }

                // res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=2004-01-26&api_key=${process.env.REACT_APP_NASA}`);
                // body = await res.json();
                // for(let i = 0; i < 3; i++){
                //     newRover.push({
                //         id: body.photos[i].id,
                //         src: body.photos[i].img_src
                //     });
                // }

                // res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=2004-01-05&api_key=${process.env.REACT_APP_NASA}`);
                // body = await res.json();
                // for(let i = 0; i < 3; i++){
                //     newRover.push({
                //         id: body.photos[i].id,
                //         src: body.photos[i].img_src
                //     });
                // }
            }
            catch (e) {
                console.log("error - " + e);
            }
            setImgRover(newRover)
        }
        if (rover.length === 0) {
            getImgRover();
        }
    }, []);

    const carouselCards = rover.map((m) => <CarouselCard key={m.id} image={m}></CarouselCard>)
    return (
        <div className="container">
            <h1 className="text-center">Find out what the rover has been up to!</h1>
            {/* <div className="row row-cols-1 row-cols-md-8"> */}
            <div id="carouselExampleControls" className="carousel slide bg-secondary" data-interval="false">
                <div className="carousel-inner">
                    {carouselCards}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Home;