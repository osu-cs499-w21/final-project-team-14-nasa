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
                for(let i = 0; i < 3; i++){
                    newRover.push({
                        id: body.photos[i].id,
                        src: body.photos[i].img_src
                    });
                }

                res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=2004-01-26&api_key=${process.env.REACT_APP_NASA}`);
                body = await res.json();
                for(let i = 0; i < 3; i++){
                    newRover.push({
                        id: body.photos[i].id,
                        src: body.photos[i].img_src
                    });
                }

                res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=2004-01-05&api_key=${process.env.REACT_APP_NASA}`);
                body = await res.json();
                for(let i = 0; i < 3; i++){
                    newRover.push({
                        id: body.photos[i].id,
                        src: body.photos[i].img_src
                    });
                }
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
            <div className="row row-cols-1 row-cols-md-8">
                {carouselCards}
            </div>
        </div>
    );
}

export default Home;