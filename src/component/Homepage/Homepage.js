import React from "react";
import './Homepage.css'
import backgroundPhoto from "../../assets/images/background.jpg"

const Homepage =()=>{
    return(
        <div className="homepage-container">
            <div className="self-intro-block">
                <h1>Hei Yuen Chan</h1>
                <h4>Self Taught Fullstack Web Developer</h4>
                <div class="contact-container">
                    <a href="https://github.com/hychanbn1009" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                    <a href="mailto:hychanbn1009@gmail.com"><i class="far fa-envelope"></i></a>
                    <a href="https://www.linkedin.com/in/hychanbn/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Homepage