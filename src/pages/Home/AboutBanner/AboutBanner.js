import React from 'react';
import './AboutBanner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

const AboutBanner = () => {
    const playButton = <FontAwesomeIcon icon={faPlayCircle} />
    return (
        <div className="about-banner py-5">
            <div className="my-5">
                <span>{playButton}</span>
                <h3 className="text-white">Take a Tour of Our Travel Agency</h3>
                <p className="text-white mb-3">Take a tour of our travel agency where you will find people who will guide you about how you can have the best trips of your life.</p>
            </div>

        </div>
    );
};

export default AboutBanner;