import React from 'react';
import Transit from './Transit';
import f1 from '../Images/f1.png';
import f2 from '../Images/f2.png';
import f3 from '../Images/f3.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DoneIcon from '@mui/icons-material/Done';

const Features = () => {
    return (
        <>
            <section className="features">
                <article className="article1">
                    <div>
                        <Transit content="FEATURES" />
                        <h1>You're not just doing business. You're doing life.</h1>
                        <aside>
                            <p><DoneIcon className="tick" />Responsive Components</p>
                            <p><DoneIcon className="tick" />Over 50 sections</p>
                            <p><DoneIcon className="tick" />Handcrafted Pages</p>
                        </aside>
                    </div>
                    <img src={f1} alt="feature1" />
                </article>
                <article className="article2">
                    <img src={f2} alt="feature2" />
                    <div>
                        <Transit content="OUR KNOWLEDGE" />
                        <h1>A UI Kit that's Modern & Elegant</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque suscipit aliquam ducimus cupiditate ipsa animi.</p>
                    </div>
                </article>
                <article className="article3">
                    <div>
                        <h1>stamps</h1>
                        <h2>The Opus UI Kit lets you showcase your work in style. It's helped take our business online</h2>
                        <h3>ALEXA F.</h3>
                        <p className="text-secondary">DESIGNER <span className="text-primary">@STAMPS</span></p>
                        <div className="d-flex" id="arrow">
                            <p className="arrowFeature"><ArrowBackIcon /></p>
                            <p className="arrowFeature"> <ArrowForwardIcon /></p>
                        </div>
                    </div>
                    <img src={f3} alt="feature3" />
                </article>
            </section>
        </>
    );
};

export default Features;