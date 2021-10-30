import React from 'react';
import AboutBanner from '../AboutBanner/AboutBanner';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Organizers from '../Organizers/Organizers';
import Services from '../Services/Services';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <AboutBanner></AboutBanner>
            <Organizers></Organizers>
        </div>
    );
};

export default Home;