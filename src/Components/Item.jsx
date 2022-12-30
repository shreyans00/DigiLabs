import React from 'react';
import NearMeIcon from '@mui/icons-material/NearMe';

const Item = (props) => {
    return (
        <>
            <div>
                <h3>{props.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fuga recusandae illum quis voluptate sint.</p>
            </div>
        </>
    );
};

export default Item;