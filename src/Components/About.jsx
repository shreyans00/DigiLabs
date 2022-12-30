import React from 'react';

const About = () => {
    return (
        <>
            <section className="About">
                <h2 className="abouth2">Trusted and loved by the world's best teams</h2>
                <ul className="text-secondary d-flex justify-content-between aboutul1">
                    <li>wetransfer</li>
                    <li>stamps</li>
                    <li>manter</li>
                    <li>sugarcane</li>
                </ul>
                <ul className="d-flex justify-content-between aboutul2">
                    <li>
                        <div>
                            <h2>99.95%</h2>
                            <p>Accuracy rate</p>
                            <span className="text-secondary">in fulfilling orders</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2>5,000+</h2>
                            <p>Ecommerce business</p>
                            <span className="text-secondary">partner with Opus</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2>99.96%</h2>
                            <p>Of orders ship on time</p>
                            <span className="text-secondary">within SLA</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2><span className="text-secondary">#</span>1</h2>
                            <p>Best Fulfillment Technology</p>
                            <span className="text-secondary">by AdWeek's Retail Awards</span>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    );
};

export default About;