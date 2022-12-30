import React from 'react';
import CardRes from './CardRes';
import Button from './Button';
import img1 from '../Images/r1.png';
import img2 from '../Images/r2.png';
import img3 from '../Images/r3.png';

const Resources = () => {
    return (
        <>
            <section className="resources">
                <h1>Resources</h1>
                <Button value="Get Started" />
                <div className="d-lg-flex">
                    <CardRes img={img1} title="A high-converting, high-performing template" />
                    <CardRes img={img2} title="With a clean, minimal and professional look" />
                    <CardRes img={img3} title="Opus made our journey possible" />
                </div>
            </section>
        </>
    );
};

export default Resources;