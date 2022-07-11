import React,{useRef,useState} from "react";
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact =()=>{

    const serviceId=process.env.REACT_APP_serviceIDs;
    const templateID=process.env.REACT_APP_templateID;
    const publicKey=process.env.REACT_APP_publicKey;

    const [errorMessage,setErrorMessage]=useState(null)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateID, form.current, publicKey)
        .then((result) => {
            setErrorMessage("Your Message has been sent out! I will reach you out soon!")
        }, (error) => {
            setErrorMessage("Sorry! Somethings go wrong. Can you send me an email instead?");
        });
    };

    return(
        <div className="contact-container" id="Contact">
            <h1>Contact</h1>
            <div className="contact-card">
                <div className="contact-form">
                    <h2>Leave a Message</h2>
                    <form ref={form} onSubmit={sendEmail}>
                    <label for="contact_name">Name:</label>
                    <input type="text" size="19" name="contact_name" required/>
                    <label for="contact_email">Email:</label>
                    <input type="email" name="contact_email" required/>
                    <label for="contact_message">Message:</label>
                    <div className="textarea-container">
                        <textarea name="contact_message" required></textarea>
                    </div>
                    {errorMessage?<p className="message">{errorMessage}</p>:null}
                    <button type="submit" value="Submit">Send</button>
                    </form> 
                </div>
                <div className="other-contact">
                    <h2>Other Contact Info</h2>
                        <a href="https://github.com/hychanbn1009" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i>https://github.com/hychanbn1009</a>
                        <a href="mailto:hychanbn1009@gmail.com"><i class="far fa-envelope"></i>hychanbn1009@gmail.com</a>
                        <a href="https://www.linkedin.com/in/hychanbn/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i>https://www.linkedin.com/in/hychanbn/</a>
                </div>
            </div>
        </div>
    )
}

export default Contact