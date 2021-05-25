import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchTopics } from 'actions';

const TrendingTopics = props => {
    useEffect(() => {
        props.fetchTopics();
    }, []);

    return (
        <div className='cards'>
            <Topics topics={props.topics} />
        </div>
    );
};

const Topics = props => {
    return props.topics.map((topic, index) => {
        return <div className='card' key={index}>
            <h1>{topic.display_name}</h1>
            <p>{topic.description}</p>
            <div className='meta'>
                <span>Created By: {topic.created_by}</span>
                <span>Released: {topic.released}</span>
            </div>
        </div>
    })
}

const mapStateToProps = state => {
    return {
        topics: state.topics
    };
};

export default connect(
    mapStateToProps,
    { fetchTopics }
)(TrendingTopics);
