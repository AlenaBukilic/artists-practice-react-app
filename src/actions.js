import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ARTISTS_PENDING,
    REQUEST_ARTISTS_SUCCESS,
    REQUEST_ARTISTS_FAILED
} from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestArtists = () => (dispatch) => {
    dispatch({ type: REQUEST_ARTISTS_PENDING});
    fetch('https://picsum.photos/v2/list?page=2&limit=30')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ARTISTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ARTISTS_FAILED, payload: error }))
}