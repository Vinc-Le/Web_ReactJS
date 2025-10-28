// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social">
                <a href="#"><i className='bx bxs-phone-call'></i></a>
                <a href="https://github.com/Vinc-Le"><i className='bx bxl-github'></i></a>
                <a href="https://www.facebook.com/vicente.nhat"><i className='bx bxl-facebook-circle'></i></a>
                <a href="#"><i className='bx bxl-instagram'></i></a>
            </div>
            <p className="copyright">
                &copy; Nhat Le - All Rights Reserved
            </p>
        </footer>
    );
};

export default Footer;