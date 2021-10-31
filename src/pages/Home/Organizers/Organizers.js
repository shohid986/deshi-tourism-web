import React, { useEffect, useState } from 'react';
import './Organizers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import Organizer from '../Organizer/Organizer';

const Organizers = () => {
    const earth = <FontAwesomeIcon icon={faGlobeAmericas} />
    const [organigers , setOrganizers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/organizers')
        .then(res => res.json())
        .then(data => setOrganizers(data));
    }, [])
    console.log(organigers);
    return (
        <div className="my-5 pt-5">
            <div className="my-5 pb-3">
                <h3 className="fw-bolder">MEET OUR TRIP ORGANIZER</h3>
                <h3>{earth}</h3>
                <p className="text-secondary fw-bold">We have the best team in the whole world that organizes the best trips for our clients and make their journeys life remembering.</p>
            </div>
            <div className="organigers-container">
                {
                    organigers.map(provider=><Organizer
                        key={provider.key}
                        provider={provider}
                    ></Organizer>)
                }
            </div>
        </div>
    );
};

export default Organizers;