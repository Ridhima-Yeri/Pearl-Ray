import React from 'react';


const testimonial =[
    {
        name: "Sarah Johnson",
        role: "Homeowner",
        image: "/assets/Sarah.jpeg",
        quote: "PearlRay transformed my living room into a modern oasis! Their attention to detail and understanding of my style was exceptional. Highly recommend!"
    },
    {
        name: "Michael Smith",
        role: "Business Owner",
        image: "/assets/Michael.jpeg",
        quote: "Working with PearlRay was a game-changer for my office space. They created a functional yet stylish environment that my team loves!"
    },
    {
        name: "Emily Davis",
        role: "Interior Design Enthusiast",
        image: "/assets/Emily.jpeg",
        quote: "I was blown away by the creativity and professionalism of PearlRay. They truly listened to my needs and delivered beyond my expectations!"
    },
    {
        name: "David Lee",
        role: "Real Estate Agent",
        image: "/assets/David.jpeg",
        quote: "PearlRay's designs have helped me sell multiple properties quickly. Their modern approach and attention to detail make all the difference!"
    },
    {
        name: "Laura Wilson",
        role: "Homeowner",
        image: "/assets/Laura.jpeg",
        quote: "I can't thank PearlRay enough for their amazing work on my home. They turned my vision into reality with stunning results!"
    }
];

const Testimonials =() => {
    return (
        <section className="testimonials-modern">
            <h2>What Clients Say</h2>
            <div className="testimonials-grid">
                {testimonial.map((t, idx) => (
                    <div className="testimonial-card" key={idx}>
                        <img src ={t.image} alt ={t.name} className= "testimonial-avtar" />
                        <blockquote>"{t.quote}"</blockquote>
                        <cite>{t.name}</cite>
                        </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;