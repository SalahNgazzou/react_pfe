import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { nav } from '../Data/data';
import { FaBars, FaSignInAlt } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import {Log_in} from '../../pages/Login/Login'
export const Header = () => {
    const [navlist,setnavlist]=useState(false)
    const [showModal, setShowModal] = useState(false);


    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    return (
        <>
            <header>
                <div className='container flex'>
                    <div className='logo'>
                        <img src='./img/logo5.png' alt='logo' />
                    </div>
                    <div className='nav'>
                        <ul className={navlist ? "small":'flex'}>
                            {
                                nav.map((list, index) => (
                                    <li key={index}>
                                        <Link to={list.path}>{list.text}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='button flex'>
                        <button className='btn1' onClick={handleShow}>
                            <FaSignInAlt /> Log In
                        </button>
                    </div>
                  <div className='toggle'>
                        <button onClick={()=> setnavlist(!navlist)}>
                            { navlist?  <FaTimes />:<FaBars />}
                        </button>
                    </div>
                </div>

            </header>
            <Log_in showModal={showModal} handleClose={handleClose}/>
        </>
    );
}

