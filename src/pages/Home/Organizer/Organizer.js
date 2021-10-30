import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { facebook,  } from '@fortawesome/free-solid-svg-icons';

const Organizer = ({provider}) => {
    const {name, serviceProvide, image} = provider;
    // const facebookIcon = <FontAwesomeIcon icon={facebook} />
    return (
        <div>
            <div>
            <img width="350" height="350" src={image} alt="organizer" />
            </div>
            <div className="my-2">
                <h4>{name} (<p className="d-inline fs-6">{serviceProvide}</p>)</h4>
                
                {/* <div>
                    <span>{facebookIcon}</span>
                    <span><i class="fab fa-twitter-square"></i></span>
                </div> */}
            </div>
        </div>
    );
};

export default Organizer;