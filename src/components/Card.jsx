import React from 'react';

const Topics = props => {
    return <div className='card' key={index}>
        <h1>{topic.display_name}</h1>
        <p>{topic.description}</p>
        <div className='meta'>
            <span>Created By: {topic.created_by}</span>
            <span>Released: {topic.released}</span>
        </div>
    </div>
}

export default Topics;
