// src/components/Testimonial.js
import React from 'react';
import testimonial1 from '../assets/chandung1.png';
import testimonial2 from '../assets/chandung2.png';
import testimonial3 from '../assets/chandung3.png';

const Testimonial = () => {
    return (
        <section className="testimonial" id="testimonial">
            <div className="testimonial-box">
                <h2 className="heading">Testimonial</h2>

                <div className="wrapper">
                    <div className="testimonial-item">
                        <img src={testimonial1} alt="" />
                        <h2>Anthony</h2>
                        <div className="rating">
                            <i className="bx bxs-star" id="star"></i>
                            <i className="bx bxs-star" id="star"></i>
                            <i className="bx bxs-star" id="star"></i>
                            <i className="bx bxs-star" id="star"></i>
                            <i className="bx bxs-star" id="star"></i>
                        </div>
                        <p>You are a person with sharp logical thinking, intelligence, and great perseverance. 
                      The field of microchip design demands high precision and meticulousness, and you possess all the necessary qualities to pursue it. 
                      With your current efforts, you will surely achieve great success.</p>
                    </div>

                    <div className="testimonial-item">
                        <img src={testimonial2} alt="" />
                        <h2>Lucas</h2>
                        <div className="rating">
                            <i className="bx bxs-star" id="star"></i>
                            <i className="bx bxs-star" id="star"></i>
                            <i className="bx bxs-star" id="star"></i>
                            <i className="bx bxs-star" id="star"></i>
                            <i className="bx bxs-star" id="star"></i>
                        </div>
                        <p>You have a logical mind, a passion for technology, and you're not afraid to face complex problems. 
                      Pursuing Robotics and AI shows that you are very persistent. 
                      You might be a bit dry and quiet at times, but that's because you're focused on solving genuinely difficult problems.</p>
                    </div>

                    <div className="testimonial-item">
                        <img src={testimonial3} alt="" />
                        <h2>Marco</h2>
                        <div className="rating">
                            <i className="bx bxs-star" id="star"></i>
                            <i className="bx bxs-star" id="star"></i>
                            <i className="bx bxs-star" id="star"></i>
                            <i className="bx bxs-star" id="star"></i>
                            <i className="bx bxs-star" id="star"></i>
                        </div>
                        <p>You have a practical mind and a knack for problem-solving, turning lines of code into something real and interactive. Your patience for debugging is admirable. 
                      You might be quiet and focused when you're in the zone, but your passion for building and creating things in the digital world is clear.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;