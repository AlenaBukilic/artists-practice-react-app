import React, { Component } from 'react';
import { connect } from 'react-redux'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            artists: []
        }
    }

    componentDidMount(){
        fetch('https://picsum.photos/v2/list?page=2&limit=30')
        .then(response => response.json())
        .then(artists => {
            this.setState({ artists: artists });
        });
    }

    render() {
        const { artists } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredArtists = artists.filter(artist => {
            return artist.author.toLowerCase().includes(searchField.toLowerCase());
        });
        return !artists.length ?
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
