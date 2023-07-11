import React from 'react';
import uniqid from 'uniqid';
import '../styles/Card.css';

const Card = (name, processClick) => {
    return (
        <div 
            className='card'
            onClick={() => processClick(name)}
            key={uniqid()}
        >
            <img
                src={require('../img/' + name + '.jpeg')}
                alt=''
            />
        </div>
    );
}

export default Card;