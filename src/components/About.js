import React from 'react';


const About = () => {
     return(
        <section className="about-modern">
            <div className="about-card">
                <img
                src="/assets/designer.jpeg"
                alt="Designer"
                className="about-img"
                />
                <div className="about-info">
                    <h2>Maya James</h2>
                    <p><strong>About the designer</strong> <br/>Hi, I’m an interior designer with <strong>10+ years</strong> of experience in modern and traditional home design.
                       My passion is transforming spaces into functional works of art that reflect your unique style and needs.
                       Let’s work together to create a home you’ll love!</p>
                </div>
            </div>
        </section>
     );
};

export default About;