import React from "react";
import { Link } from "react-scroll";
import my_image2 from "../../assets/images/my_image2.jpg";
import './About.css';

const About =()=>{
    return(
        <div className="about-container" id="About">
            <h1>About Me</h1>
            <section className="introduction_container">
                <div className="image-holder">
                    <img src={my_image2} id="my-image" alt="My Face"/>
                </div>
                <div className="greeting">
                    <h3>Hi, I'm Hei Yuen Chan.</h3>
                    <p>
                        I'm a software engineer with experience in building websites and APIs using TypeScript, ReactJS, NodeJS, and AWS services. Passionate about crafting robust and scalable web applications.
                        Drop me a message!
                    </p>
                    <button><Link to="Contact" spy={true} smooth={true} duration={300}>Contact Me</Link></button>
                </div>
                <hr/>
            </section>
        </div>
    )
}

export default About