import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://gruesome-witch-85056.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="container my-5 py-5">
            <div className="mx-auto mb-4 text-center">
                <p className="text-info fw-bolder">FEATURED TOURS</p>
                <h2 className="fw-bolder">OUR OUTSTANDING TOURS</h2>
            </div>
            <div className="w-25 mx-auto border border-2 mb-5"><hr className="m-0 text-secondary" /></div>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;