import React from 'react';
import './Services.css';
import { useState ,useEffect} from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])

    return (
        <div id='services' className='container'>
            <div className="row">
            <h1 className='text-primary text-center mt-5'> Our Services</h1>
            <div className="services-container">
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                >
                </Service>)
            }
            </div>
            </div>
        </div>
    );
};

export default Services;