import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FiLinkedin} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qj49hjo', 'template_yx790op', form.current, 'Yu3nAxaXtYq5FtHpK')

    e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>parthsolanki1498@gmail.com</h5>
            <a href="mailto:parthsolanki1498@gmail.com">Send a Message</a>
          </article>

          <article className="contact__option">
            <FiLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5></h5>
            <a href="https://www.linkedin.com/in/parthsolanki1498/" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+1 (226) 978-2954</h5>
            <a href="https://api.whatsapp.com/send?phone+12269782954" target='_blank'>Send a Message</a>
          </article>
        </div>
        {/* End of Contact Options  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact