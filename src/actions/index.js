export const FETCH_TOPICS = 'FETCH_TOPICS';
export const FETCH_REPOS = 'FETCH_REPOS';

export function fetchTrendingRepos() {
    return dispatch => {
        const url = 'https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc';
        fetch(url, {
            method: 'GET',
            headers: {
                'accept': 'application/vnd.github.v3+json'
            }
        }).then(res => {
            return res.json();
        }).then(data => {
            dispatch({
                type: FETCH_REPOS,
                payload: data.items
            });
        });
    }
}

export function fetchTopics() {
    return dispatch => {
        const url = 'https://api.github.com/search/topics?q=javascript+is:featured';
        fetch(url, {
            method: 'GET',
            headers: {
                'accept': 'application/vnd.github.mercy-preview+json'
            }
        }).then(res => {
            return res.json();
        }).then(data => {
            dispatch({
                type: FETCH_TOPICS,
                payload: data.items
            });
        });
    }
}
