import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import ProfileImage from '../assets/canhan.png'

const Home = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['At University of Sciences', 'In the Department of Physics', 'Of Electronic Physics Technology and Informatics'],
            typeSpeed: 80,
            backSpeed: 80,
            backDelay: 1200,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="home" id="home">
            <div className="home-img">
                <img src={ProfileImage} alt="Profile image" />
            </div>
            <div className="home-content">
                <h3>Hello, Myself</h3>
                <h1>Nhat Le</h1>
                <h3>And I'm a Student <span className="multiple-text" ref={el}></span></h3>
                <p>I’m a fourth-year student at the University of Science, Ho Chi Minh City, specializing in Electronic Physics and Informatics.</p>
                <div className="social-media">
                    <a href="#"><i className='bx bxs-phone-call'></i></a>
                    <a href="https://github.com/Vinc-Le"><i className='bx bxl-github'></i></a>
                    <a href="#"><i className='bx bxl-facebook-circle'></i></a>
                    <a href="#"><i className='bx bxl-instagram'></i></a>
                </div>
                <a href="#" className="btn">Download CV</a>
            </div>
        </section>
    );
};

export default Home;