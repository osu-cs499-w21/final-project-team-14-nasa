import React, { useState, useEffect } from 'react';
import {useParams, withRouter} from 'react-router-dom';

import PhotoCard from '../components/PhotoCard';

function Search(props) {
    const {rover, date} = useParams();
    const [roverState, setRoverState] = useState("Curiosity");
    const [dateState, setDateState] = useState("");
    const [photosRes, setPhotosRes] = useState([]);

    useEffect(() => {
        async function searchPhotos() {
            let newPhotos = [];
            try {
                let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&api_key=${process.env.REACT_APP_NASA}`;
                let res = await fetch(url);
                let body = await res.json();
                console.log(body.photos);
                for(let i = 0; i < body.photos.length; i++){
                    newPhotos.push({
                        id: body.photos[i].id,
                        src: body.photos[i].img_src,
                        camera: body.photos[i].camera.full_name,
                        earth_date: body.photos[i].earth_date,
                        rover_name: body.photos[i].rover.name
                    })
                }
            }
            catch (e) {
                console.log("Error: " + e);
            }
            setPhotosRes(newPhotos);
        }

        if (rover != null && date != null) {
            searchPhotos();
        }
    }, [rover, date]);

    return (
        <div className="container">
            <h1>Search</h1>
            {
                rover == null && date == null ? (
                    <form action={`/search/${roverState}/${dateState}`}>
                        <div className="form-group">
                            <label for="roverSelector">Rover</label>
                            <select class="form-control" id="roverSelector"
                                value={roverState} 
                                onChange={(e) => setRoverState(e.target.value)}>
                                <option>Curiosity</option>
                                <option>Opportunity</option>
                                <option>Spirit</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="dateSelector">Date taken</label>
                            <input type="date" class="form-control" id="dateSelector" 
                                value={dateState} onChange={(e) => setDateState(e.target.value)} required></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Search</button>
                    </form>
                ) : (
                    photosRes.length === 0 ? (
                        <div className="row justify-content-center">

                            <div className="alert alert-danger col-5" role="alert">
                                Your search query returned no results
                            </div>
                        </div>
                    ) :
                    (
                        <div className="row row-cols-1 row-cols-md-5">
                            {photosRes.map((p) => <PhotoCard key={p.id} image={p}/>)}
                        </div>
                    )
                )
            }
        </div>
        
    )
}

export default withRouter(Search);