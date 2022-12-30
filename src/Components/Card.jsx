import React from 'react';

const Card = (props) => {
    return (
        <>
            <div className="d-flex flex-column cardfit">
                <img src={props.img} alt="" />
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni alias architecto corporis eius soluta vero!</p>
            </div>
        </>
    );
};

export default Card;