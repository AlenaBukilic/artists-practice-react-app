import React from 'react';
import Card from './Card';

const CardList = ({ artists }) => {
    return(
        <div>
            {
                artists.map((artist) => {
                    return (
                        <Card
                            key={artist.id}
                            id={artist.id}
                            name={artist.author}
                            img={artist.download_url}
                        />
                    );
                })
            }
        </div>
    );
};

export default CardList;
