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
                        I'm a self-taught web developer from Hong Kong! I love solving difficult problems and exploring the solutions.
                        I started my coding journey since October 2021. I learnt web development from 
                        <a href="https://www.theodinproject.com/" target="blank" rel="noopener"> The Odin Project</a> and
                        <a href="https://www.udemy.com/" target="blank" rel="noopener"> Udemy</a>. I'm constantly seeking opportunities to learn more new technologies. 
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