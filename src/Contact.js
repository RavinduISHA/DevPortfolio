import React, { useState } from 'react';
import './Contact.css';
import contactImg from "./Assets/Home/prof.jpg"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {
    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_pci3h9i', 'template_3n7vqd5', form.current, 'KgJWy3dN2iclHQyNO')
          .then((result) => {
              console.log(result.text);
              setDone(true);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            
                            <h1 className="hire__text">Get In Touch</h1>
                            <p className="hire__text white">Contact me via phone:<strong> +94 77 435 4216</strong></p>
                           <p className="hire__text white">Email : <strong> rumayanga51@gmail.com</strong></p>
                        </div>
                        <form className="input" ref={form} onSubmit={sendEmail} >
                           <input type="text" name="name" className="contact name" placeholder="Your name *" required/>
                           <input type="email" name="email" className="contact email" placeholder="Your Email *" required/>
                           <input type="text" name="subject" className="contact subject" placeholder="Write a Subject" />
                           <textarea name="message" id="message" placeholder="Write Your message *" required></textarea>
                           <button className="btn contact pointer" type="submit" value='send'>Submit</button><span>{done && "Thanks for contacting me"}</span>
                           
                        </form>
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
