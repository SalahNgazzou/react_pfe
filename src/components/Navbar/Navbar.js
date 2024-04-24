import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './navbar.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LockIcon from '@mui/icons-material/Lock';
export const Header = () => {
    return (
        <div className='body'>
            <header id="header-wrap">
                <div className="top-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-8 col-xs-12">
                                <ul className="links clearfix">
                                    <li><PhoneIcon /> 24969011</li>
                                    <li><MailIcon /> jasminConsulting@gmail.com</li>
                                    <li><LocationOnIcon /> Sidi BouSaid,Tunis,TN</li>
                                </ul>
                            </div>
                            <div className="col-lg-5 col-md-4 col-xs-12">
                                <div className="roof-social float-right">
                                    <a className="facebook" href="#"><FacebookIcon /> </a>
                                    <a className="twitter" href="#"><TwitterIcon /> </a>
                                    <a className="instagram" href="#"><InstagramIcon /> </a>
                                    <a className="linkedin" href="#"><LinkedInIcon /> </a>
                                </div>
                                <div className="header-top-right float-right">
                                    <a href="login.html" className="header-top-button"><LockIcon /> Log In</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Navbar bg="white" expand="lg" sticky="top">
                    <div className="container">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Brand href="index.html"><img src="/img/" alt="" /></Navbar.Brand>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto w-100 justify-content-center">
                                <Nav.Link href="about.html">About Us</Nav.Link>
                                <Nav.Link href="contact.html">Contact Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </header>
        </div>
    );
}


