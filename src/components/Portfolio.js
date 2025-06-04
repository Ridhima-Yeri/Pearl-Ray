import React from 'react';
//import sampleImg from '../assets/images/sample1.jpg'; 


const projects =[
    {
        id: 1,
        title: 'Modern Living Room',
        description: 'A sleek, modern living room design with minimalist furniture and a neutral color palette.',
        image: '/assets/livingroom.jpeg'
    },
    {
        id: 2,
        title: 'Cozy Bedroom',
        description: 'A cozy bedroom featuring warm tones, soft textiles, and ambient lighting for relaxation.',
        image: '/assets/Bedroom.png'
    },
    {
        id: 3,
        title: 'Elegant Dining Area',
        description: 'An elegant dining area with a contemporary table setting and stylish decor elements.',
        image: '/assets/dinning.jpeg'
    },
    {
        id:4,
        title: 'Contemporary Kitchen',
        description: 'A sleek kitchen space with functional and aesthetic elements.',
        image: '/assets/Kitchen.jpeg'
    },
    {
        id: 5,
        title: 'Stylish Home Office',
        description: 'A modern home office design that balances productivity and comfort.',
        image: '/assets/HomeOffice.jpeg'
    },
    {
        id: 6,
        title: 'Outdoor Patio',
        description: 'A beautiful outdoor patio setup perfect for entertaining and relaxation.',
        image: 'assets/Outdoorpatio.jpeg'
    }
];

const Portfolio =() => {
    return (
        <section className="portfolio-modern" id="portfolio">
            <h2>My Portfolio</h2>
            <div className="portfolio-grid-modern">
                {projects.map((project, idx) =>(
                    <div className="portfolio-card" key ={idx}>
                        <img src={project.image} alt={project.title} className="portfolio-img" />
                        <div className="portfolio-card-body">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            </div>
                            </div>
                            ))}
                            </div>
                            </section>
    );
};

export default Portfolio;