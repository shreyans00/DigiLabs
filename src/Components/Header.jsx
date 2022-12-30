import React from 'react';
import logo from '../Images/logo.png';
import Button from './Button';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="d-flex flex-row m-auto logoName">
                    <img src={logo} alt="" className="logostyle" />
                    <h5>opus</h5>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="d-lg-flex m-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link" aria-current="page">Overview</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Pages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Template</a>
                        </li>
                    </ul>
                    <button className="btnContact">
                        <Button value="Contact Us" />
                    </button>

                </div>
            </nav>
        </>
    );
};

export default Header;