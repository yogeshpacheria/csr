import React from 'react';

import {NavLink} from 'react-router-dom';

const Avatar = props => { // eslint-disable-line

    return (
        <div className='header'>
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to={`/topics`}>
                Topics
            </NavLink>
        </div>
    );
};

export default React.memo(Avatar);
