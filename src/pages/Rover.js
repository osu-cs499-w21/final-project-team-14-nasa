import fetch from 'isomorphic-unfetch';
import React, { useState, useEffect } from 'react';

import MissionCard from '../components/MissionCard'

function Missions() {
    const [missions, setMissions] = useState([]);
    const missions_list = [
        "curiosity",
        "opportunity",
        "spirit",
    ]

    useEffect(() => {
        async function getMissions() {
            let newMission = []
            for (let i = 0; i < missions_list.length; i++) {
                try {
                    const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${missions_list[i]}?api_key=${process.env.REACT_APP_NASA}`)
                    let body = await res.json()
                    newMission.push(body.photo_manifest)
                }
                catch (e) {
                    console.log("error - " + e)
                }
            }
            setMissions(newMission)
        }
        if (missions.length === 0) {
            getMissions();
        }
    }, [])

    const missionCards = missions.map((m) => <MissionCard key={m.name} mission={m}></MissionCard>)
    return (
        <div className="container">
            <h1 className="text-center">Mission Manifests</h1>
            <div className="row row-cols-1 row-cols-md-8">
                {missionCards}
            </div>
        </div>
    );
}

export default Missions;