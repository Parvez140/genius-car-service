import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});
    useEffect( ()=> {
        fetch(`http://localhost:5000/service/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[]);

    return (
        <div className='text-center'>
            <h1>Name : {service.name}</h1>
            <h1>Price : {service.price}</h1>
            <br /><br />
            <Link to="/checkOut">
            <button className='btn btn-primary'>Proceed CheckOut</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;