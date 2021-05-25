import { FETCH_TOPICS } from 'actions/index';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_TOPICS:
            return action.payload;

        default:
            return state;
    }
};