import React from 'react';
import Arrow from '@mui/icons-material/NorthWest';
import RocketIcon from '@mui/icons-material/Rocket';
import Transit from './Transit';
import Button from './Button';

const learnMore = () => {
    return (
        <>
            <section className="Learnsec">
                <div className="div1">
                    <Transit content="" />
                    <h1>Make your site better with Opus</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius optio veniam tenetur inventore, nesciunt odit dignissimos rem at est fuga!</p>
                    <Button value="Learn More" />
                </div>
                <div className="moto">
                    <Arrow className="text-primary icon" />
                    <p>Build or Customize a Website in Minutes</p>
                    <RocketIcon className="text-primary icon" />
                    <p>Our UI Kit was made for creativity</p>
                </div>
            </section>
        </>
    );
};

export default learnMore;