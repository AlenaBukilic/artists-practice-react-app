import React from 'react';

const Card = ({ name, img }) => {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='nice pic' src={img} className='w5 h5'/>
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default Card;
