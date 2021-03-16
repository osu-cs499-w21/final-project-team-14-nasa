import React, { useState, useEffect } from 'react';
import {useParams, withRouter} from 'react-router-dom';
// function ImageDetails(props) {
//     return (
//         <div>
//             <img src={props.photo.img_src}/>
//             <ul>
//                 <li>
//                     Rover: {props.photo.rover.name}
//                 </li>
//                 <li>
//                     Date taken: {props.photo.earth_date}
//                 </li>
//                 <li>
//                     Camera: {props.photo.camera.full_name}
//                 </li>
//             </ul>
//         </div>
//     );
// }

function Search(props) {
    const {rover, date} = useParams();
    const [roverState, setRoverState] = useState("Spirit");
    const [dateState, setDateState] = useState("");

    useEffect(() => {
        async function searchPhotos() {
            let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&api_key=${process.env.REACT_APP_NASA}`;
            let res = await fetch(url);
            let body = await res.json();
            
        }

        if (rover != null && date != null) {
            searchPhotos();
        }
    }, [rover, date]);
    //onSubmit={props.history.push(`/search/${roverState}/${dateState}`)}>
    return (
        <div className="container">
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
                    <div>
                        <h1>Testing23</h1>
                    </div>
                )
            }
        </div>
        
    )
}

export default withRouter(Search);