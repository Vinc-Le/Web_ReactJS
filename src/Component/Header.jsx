
import React, { useState, useEffect } from 'react';

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    useEffect(() => {
        const handleScroll = () => {
            setMenuActive(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <a href="#home" className="logo">Nhat Le</a>
            <i className={`bx ${menuActive ? 'bx-x' : 'bx-menu'}`} id="menu-icon" onClick={toggleMenu}></i>
            <nav className={`navbar ${menuActive ? 'active' : ''}`}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Specialization</a>
                <a href="#testimonial">Testimonial</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;