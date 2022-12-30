import React from 'react';
import Button from './Button';
import sideBg from '../Images/sidebg.png';
import Ceo from '../Images/ceo.png';

const Tagline = () => {
    return (
        <>
            <hr className="hrhigh" />
            <section className="text-white tagline">
                <div className="sec1">
                    <h1>Build for enterprise businesses.</h1>
                    <h6>Opus includes everything you need to build a beautiful website for your business. Built to perform and look good doing so.</h6>
                    <Button value="Learn More -> " />
                    <p>Explore Pages</p>
                    <img src={Ceo} alt="ceoImage" className="ceo" />
                </div>
                <img src={sideBg} alt="bgcolor" className="sec2" />
                <div className='bg-white text-black ceothought'>
                    <p>I felt like I couldn't grow until I moved to Opus. Now I am encouraged to sell more with them.</p>
                    <h2>Frand Dublin</h2>
                    <h5 className="text-secondary">CEO<span className="text-primary"> @STAMPS</span></h5>
                </div>
                <div className="bg-primary nxt"></div>
            </section>
            <hr className="hrlow" />
        </>
    );
};

export default Tagline;