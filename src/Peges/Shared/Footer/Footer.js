import React from 'react';

const Footer = () => {
    const today = new Date();
    let year = today.getFullYear();
    return (
        <footer className='text-center bg-primary mt-5'>
            <p><small>copyright @ {year}</small></p>
        </footer>
    );
};

export default Footer;