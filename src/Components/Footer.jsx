import React from 'react';
import logo from '../Images/logo.png';
import Button from './Button';

const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="m-auto" id="logofooter">
                    <img src={logo} alt="" className="logostyle" />
                    <h5>opus</h5>
                </div>
                <div className="footerul d-lg-flex justify-content-between">
                    <ul>
                        <li>Overiew</li>
                        <li>Landings</li>
                        <li>Company</li>
                        <li>Pricing</li>
                        <li>CMS Pages</li>
                        <li>Accounts</li>
                        <li>Buy for Figma</li>
                    </ul>
                    <ul>
                        <li>Pages</li>
                        <li>Landing 1</li>
                        <li>Landing 2</li>
                        <li>Landing 3</li>
                        <li>Company 1</li>
                        <li>Company 2</li>
                        <li>Company 3</li>
                        <li>Blog 1</li>
                        <li>Blog 2</li>
                        <li>Contact 1</li>
                        <li>Contact 2</li>
                        <li>Contact 3</li>
                    </ul>
                    <ul>
                        <li>Pages</li>
                        <li>Case Studies</li>
                        <li>Careers</li>
                        <li>Pricing 1</li>
                        <li>Pricing 2</li>
                        <li>Pricing 3</li>
                        <li>Login</li>
                        <li>Register</li>
                        <li>Fogot Passord</li>
                        <li>Blog post</li>
                        <li>Team Member</li>
                        <li>Case Study</li>
                        <li>Job Post</li>
                    </ul>
                    <div className="sidefooter">
                        <div className="email">
                            <input type="email" placeholder="Email address" />
                            <Button value="Get Started" />
                        </div>
                        <div className="d-lg-flex typefooter">
                            <ul>
                                <li>OPUS FOR WEBFLOW</li>
                                <li>Lorem Ipsum</li>
                            </ul>
                            <ul>
                                <li>OPUS FOR FIGMA</li>
                                <li>Lorem Ipsum</li>
                            </ul>
                        </div>
                        <div>
                            © Template by <span>Lorem</span> - Powered by <span>Ipsum</span>
                        </div>
                    </div>
                </div>
                <hr />
                <ul className="d-flex text-secondary last">
                    <li>Style Guide</li>
                    <li>Licence</li>
                    <li>Changelog</li>
                </ul>
            </section>
        </>
    );
};

export default Footer;