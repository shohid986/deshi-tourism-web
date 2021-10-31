import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <div className="mx-auto mb-4 text-center">
                <p className="text-info fw-bolder">Know</p>
                <h2 className="fw-bolder mb-4">About Us</h2>
                <div className="w-25 mx-auto border border-2 mb-5"><hr className="m-0 text-secondary" /></div>
            </div>
            <div className="d-flex about-offer-flex container my-5 py-5">
                <div className="me-2 mt-3">
                    <p className="fs-1 fw-light mb-0">We Offer</p>
                    <p className="fs-1 fw-bold mb-1">Special Deals And</p>
                    <p className="fs-1 fw-bolder mb-0 header-style">Last Minute Amazing Offers</p>
                    <p>Book a memorable tour at great price! Grab our last minute offer and pack the things for the journey you dream about. See our recommendations.The JCI Gold Seal of Approval is a globally recognized and reflects an organization’s commitment to best practices in quality and patient safety..</p>
                    <div className="w-25 mx-auto border border-2 mb-5"><hr className="m-0 text-secondary" /></div>
                </div>
                <div>
                    <img className="about-offer-banner image-fluid" width="670" height="375" src="https://www.talaviation.com/Talaviation/UploadFiles/pgallery/201612711253290.jpg" alt="hospital" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;