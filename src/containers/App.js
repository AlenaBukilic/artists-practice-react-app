import React, { Component } from 'react';
import { connect } from 'react-redux'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField, requestArtists } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchArtists.searchField,
        artists: state.requestArtists.artists,
        isPending: state.requestArtists.isPending,
        error: state.requestArtists.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestArtists: () => dispatch(requestArtists())
    }
}

class App extends Component {

    componentDidMount(){
        this.props.onRequestArtists();
    }

    render() {
        const { searchField, onSearchChange, artists, isPending } = this.props;
        const filteredArtists = artists.filter(artist => {
            return artist.author.toLowerCase().includes(searchField.toLowerCase());
        });
        return isPending ?
        <h1>Loading...</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>Artists</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList artists={filteredArtists}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
