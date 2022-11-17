import React from 'react';
import useServices from '../hooks/useServices';

const ManageService = () => {
    const [services, setServices] = useServices();
    const handleDelete = id =>{
        const proced = window.confirm('Are you sure?'); 
        if(proced){
            const url = `http://localhost:5000/service/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(data => {
        console.log(data)
      const remaining = services.filter(service => service._id !== id);
      setServices(remaining)
      });
        }
    } 
        return (
<div className='w-50 mx-auto'>
    <h2>ManageService</h2>
    {
        services.map(service => <div key={services._id}>
            <h4>{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h4>
        </div>)
    }
</div>
    );
};

export default ManageService;