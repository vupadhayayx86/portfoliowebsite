import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from "emailjs-com"


const Contact = () => {

  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Hello")
    emailjs.sendForm('service_ruu0htw', 'template_ijt8qgd', form.current, 'd9UzSuRCTR8H8Qf-Z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>vupadhayayx86@gmail.com</h5>
            <a href="mailto:vupadhayayx86@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option_icon'/>
            <h4>Messenger</h4>
            <h5>Vishal Upadhayay</h5>
            <a href="https://m.me/vishal.upadhayay" target="_blank">Send a Message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option_icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 9870663296</h5>
            <a href="https://api.whatsapp.com/send?pbone=+919870663296" target="_blank">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact