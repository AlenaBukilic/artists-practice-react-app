import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            artists: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://picsum.photos/v2/list?page=2&limit=30')
        .then(response => response.json())
        .then(artists => {
            this.setState({ artists: artists });
        });
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value});
    }

    render() {
        const { artists, searchfield } = this.state;
        const filteredArtists = artists.filter(artist => {
            return artist.author.toLowerCase().includes(searchfield.toLowerCase());
        });
        return !artists.length ?
        <h1>Loading...</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>Artists</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList artists={filteredArtists}/>
                </Scroll>
            </div>
        );
    }
};

export default App;
