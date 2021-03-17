import fetch from 'isomorphic-unfetch';
import React, { useState, useEffect } from 'react';

import PhotoCard from '../components/PhotoCard'

import {
    Route,
    Switch,
    Link,
    NavLink,
    Redirect,
    useParams,
    useRouteMatch
} from 'react-router-dom';

function Rover() {
    const { roverName } = useParams();
    const match = useRouteMatch();
    const { url, path } = match;

    const [rover, setRover] = useState([]);
    const rover_list = [
        "curiosity",
        "opportunity",
        "spirit",
    ]

    useEffect(() => {
        async function getRover() {
            let newRover = []
            try {
                let res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?api_key=${process.env.REACT_APP_NASA}`)
                let body = await res.json()
                let rover_date = body.photo_manifest.max_date
                res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?earth_date=${rover_date}&api_key=${process.env.REACT_APP_NASA}`)
                body = await res.json()
                
                for(let i = 0; i < body.photos.length; i++){
                    console.log(body.photos[i])
                    newRover.push({
                        id: body.photos[i].id,
                        src: body.photos[i].img_src,
                        camera: body.photos[i].camera.full_name,
                        earth_date: body.photos[i].earth_date,
                        rover_name: roverName
                    })
                }
            }
            catch (e) {
                console.log("error - " + e)
            }
            setRover(newRover)
        }
        if (rover.length === 0) {
            getRover();
        }
    }, [])

    const photoCards = rover.map((m) => <PhotoCard key={m.id} image={m}></PhotoCard>)
    return (
        <div className="container">
            <h1 className="text-center">{roverName.toUpperCase()}</h1>
            <div className="row row-cols-1 row-cols-md-5">
                {photoCards}
            </div>
        </div>
    );
}

export default Rover;