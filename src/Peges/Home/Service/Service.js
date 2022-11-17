import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {_id, name, img, price,description } = service;
    const nevigate = useNavigate();
    const handleServiceDetail = id => {
        nevigate(`/service/${id}`);
    }
    return (
        <div>
            <div className='service'>
                <img src={img} className="w-100" alt="" />
                <h4>{name}</h4>
                <h6>{price}</h6>
                <p>{description}</p>
                <button onClick={()=> handleServiceDetail(_id)} className="btn btn-primary">Book: {name}</button>
            </div>
        </div>
    );
};

export default Service;