import React from 'react';
import notfound from '../../images/404/404-pikabu.gif';
const NotFound = () => {
    return (
        <div>
            <img style={{'width':'100%'}} src={notfound} alt="" />
        </div>
    );
};

export default NotFound;