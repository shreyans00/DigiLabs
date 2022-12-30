import React from 'react';
import Button from './Button';

const CardRes = (props) => {
    return (
        <>
            <div className="cardfit" id="cardres">
                <img src={props.img} alt="cardResource" />
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus amet excepturi odio corrupti ullam.</p>
                <button>Read Article</button>
            </div>
        </>
    );
};

export default CardRes;