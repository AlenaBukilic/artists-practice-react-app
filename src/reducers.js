import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ARTISTS_PENDING,
    REQUEST_ARTISTS_SUCCESS,
    REQUEST_ARTISTS_FAILED
} from './constants';

const initialStateSearch = {
    searchField: ''
}

export const searchArtists = (state=initialStateSearch, action={}) => {

    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}

const initialStateArtists = {
    isPending: false,
    artists: [],
    error: ''
}

export const requestArtists = (state=initialStateArtists, action={}) => {

    switch(action.type) {
        case REQUEST_ARTISTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_ARTISTS_SUCCESS:
            return Object.assign({}, state, { artists: action.payload, isPending: false })
        case REQUEST_ARTISTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state;
    }
}