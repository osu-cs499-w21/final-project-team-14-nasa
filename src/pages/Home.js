import fetch from 'isomorphic-unfetch';
import React, { useState, useEffect } from 'react';

import CarouselCard from '../components/CarouselCard';

function Home() {
    const [rover, setImgRover] = useState([]);
    const rover_list = [
        "curiosity",
        "opportunity",
        "spirit",
    ]

    useEffect(() => {
        async function getImgRover() {
            let newRover = []
            try {
                for (let i = 0; i < rover_list.length; i++) {
                    let res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover_list[i]}?api_key=${process.env.REACT_APP_NASA}`);
                    let body = await res.json();

                    let rover_date = body.photo_manifest.landing_date;

                    res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover_list[i]}/photos?earth_date=${rover_date}&api_key=${process.env.REACT_APP_NASA}`);
                    body = await res.json()
                    
                    for(let i = 0; i < 10; i++){
                        newRover.push({
                            id: body.photos[i].id,
                            src: body.photos[i].img_src
                        });
                        console.log("rover: " + body.photos[i].img_src);
                    }
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
            <h1 className="text-center">Home</h1>
            <div className="row row-cols-1 row-cols-md-8">
                {carouselCards}
            </div>
        </div>
    );
}

export default Home;