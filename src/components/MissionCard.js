import React from 'react';

function MissionCard(props) {
    return (
        <div className="col lg-8 mb-3">
            <div className="card text-center">
                <div className="card-header">
                    {props.mission.name}
                </div>
                {/* <div className="card-body">
                    <h5 className="card-title">Sol { props.weather.day }</h5>
                </div> */}
                <ul className="list-group list-group-flush">
                    {
                        <li className="list-group-item">
                            <strong className="card-text">Dates</strong>
                            <p className="card-text mb-0">Launch: {props.mission.launch_date}</p>
                            <p className="card-text mb-0">Landing: {props.mission.landing_date}</p>
                            <p className="card-text">End: {props.mission.max_date}</p>
                            <p className="card-text">Status: {props.mission.status}</p>
                        </li>
                    }
                    {
                        <li className="list-group list-group-flush">
                            <strong className="card-text">Photos</strong>
                            {/* TODO: add link to photos */}
                            {/* <Link to={``}>Photos</Link> */}
                            <p className="card-text">Total Photo Count: {props.mission.total_photos}</p>
                        </li>
                    }
                </ul>
            </div>
        </div>
    );
}

export default MissionCard;