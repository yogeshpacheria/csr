import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchTrendingRepos } from 'actions';

const HomePage = props => {
    useEffect(() => {
        props.fetchTrendingRepos();
    }, []);

    return (
        <div className='cards'>
            <Repo repos={props.trendingRepos} />
        </div>
    );
};

const Repo = props => {
    return props.repos.map((repo, index) => {
        return <div className='card' key={index}>
            <h1>{repo.name}</h1>
            <a href={repo.homepage}>{repo.homepage}</a>
            <p>{repo.description}</p>
            <div className='meta'>
                <span>Stars: {repo.stargazers_count}</span>
                <span>Forks: {repo.forks_count}</span>
            </div>
        </div>
    })
}

const mapStateToProps = state => {
    return {
        trendingRepos: state.trendingRepos
    };
};

export default connect(
    mapStateToProps,
    { fetchTrendingRepos }
)(HomePage);