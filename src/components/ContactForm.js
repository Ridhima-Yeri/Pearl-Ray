import React from 'react';


const ContactForm =() => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thanks for Contacting, We will reach out to you soon!');
        e.target.reset(); // Reset the form after submission
    };
        return(
        <section className= "contact-modern">
            <div className="contact-card">
                <h2>Contact Me</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input type= "text" placeholder="Your Name" required />
                    </div>
                    <div className="input-group">
                        <input type= "email" placeholder="Your Email" required />
                    </div>
                    <div className="input-group">
                        <textarea placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="contact-btn">Send Message</button>
                      </form>
            </div>
        </section>

    );
};

export default ContactForm;