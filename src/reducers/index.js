import { combineReducers } from 'redux';
import topicsReducer from './topicsReducer';
import trendingRepoReducer from './trendingRepoReducer';

export default combineReducers({
    topics: topicsReducer,
    trendingRepos: trendingRepoReducer
});