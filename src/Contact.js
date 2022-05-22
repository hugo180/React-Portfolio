import React from 'react';
import './Contact.css';
import contactImg from "./img/contact.jpg"
function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contact Me.</h1>
                            <p className="hire__text white">Connect with me via email:</p>
                           <p className="hire__text white"> <strong>hugorubio180@gmail.com</strong></p>
                        </div>
                        <div className="input__box">
                           <input type="text" className="contact name" placeholder="name *" />
                           <input type="text" className="contact email" placeholder="Email *" />
                           <input type="text" className="contact subject" placeholder="Subject" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact
