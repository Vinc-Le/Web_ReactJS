// src/components/Services.js
import React from 'react';

const Services = () => {
    return (
        <section className="services" id="services">
            <h2 className="heading">My <span>Field of Study</span></h2>

            <div className="services-container">
                <div className="services-box">
                    <i className="bx bx-palette"></i>
                    <h3>IC Design</h3>
                    <p>IC design is the process of creating microchips that power modern electronic devices. It combines physics, electronics, and computer engineering to build compact, high-performance circuits. This field plays a vital role in advancing technology, enabling faster processors, smarter systems, and more energy-efficient electronic products worldwide.</p>
                    <a href="#" className="btn">Read More</a>
                </div>

                <div className="services-box">
                    <i className='bx bxl-steam'></i>
                    <h3>Robot AI</h3>
                    <p>AI robots are intelligent machines that combine robotics and artificial intelligence to sense, think, and act autonomously. They use sensors, algorithms, and machine learning to perceive environments, make decisions, and perform tasks efficiently. This technology is advancing automation, healthcare, manufacturing, and daily life with precision and adaptability.</p>
                    <a href="#" className="btn">Read More</a>
                </div>

                <div className="services-box">
                    <i className='bx bx-code-alt'></i>
                    <h3>Web Development</h3>
                    <p>Web development is the process of building and maintaining websites. It includes front-end design for user interaction and back-end programming for data handling. Using HTML, CSS, JavaScript, and other tools, developers create functional, responsive, and secure web platforms that support communication, business, and digital innovation.</p>
                    <a href="#" className="btn">Read More</a>
                </div>
            </div>
        </section>
    );
};

export default Services;