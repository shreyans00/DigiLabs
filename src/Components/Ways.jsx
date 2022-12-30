import React from 'react';
import Card from './Card';
import Button from './Button';
import img1 from '../Images/img1.png';
import img2 from '../Images/img2.png';
import img3 from '../Images/img3.png';

const Ways = () => {
    return (
        <>
            <section className="ways">
                <div className="waysinner">
                    <h1>Ways to work with us</h1>
                    <Button value="Get Started" />
                    <div className="d-lg-flex">
                        <Card title="Project Management" img={img1} />
                        <Card title="Advanced Analytics" img={img2} />
                        <Card title="Marketing & Dashboard" img={img3} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Ways;