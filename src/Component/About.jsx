import React from 'react';
import aboutImage from '../assets/chandung.png';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <h3>I'm a <span>Student</span></h3>
                <p>I was born in 2004 and began my journey at the University of Science in 2022. Majoring in Electronic Physics and Informatics, I’m driven by curiosity about how technology and physics shape our world. I value precision, creativity, and continuous learning, believing that innovation begins with understanding both the fundamentals of science and the possibilities of the digital age.</p>
                <a href="#" className="btn">Read More</a>
            </div>
            <div className="about-img">
                <img src={aboutImage} alt="About" />
            </div>
        </section>
    );
};

export default About;