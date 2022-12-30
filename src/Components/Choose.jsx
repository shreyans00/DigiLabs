import React from 'react';
import NearMeIcon from '@mui/icons-material/NearMe';
import PermMediaIcon from '@mui/icons-material/PermMedia';

const Choose = () => {
    return (
        <>
            <section className="choose">
                <div className="leftpart">
                    <div className="d-flex leftpartdiv">
                        <NearMeIcon className="text-white bg-primary iconEnlarge" />
                        <div>
                            <h3>Choose your sections</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fuga recusandae illum quis voluptate sint.</p>
                        </div>
                    </div>
                    <div className="d-flex leftpartdiv">
                        <PermMediaIcon className="text-primary iconEnlarge" />
                        <div>
                            <h3>Add the images and text you need</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fuga recusandae illum quis voluptate sint.</p>
                        </div>
                    </div>
                </div>
                <div className="rightpart">
                    <h1>Create pages using beautiful components</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptate nobis maiores quasi blanditiis quis digni ssmios, eveniet perspiciatis quia reprehenderit!</p>
                    <button>Learn More</button>
                </div>
            </section>
        </>
    );
};

export default Choose;