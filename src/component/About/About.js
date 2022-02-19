import React from "react";

const About =()=>{
    return(
        <div className="about-container">
            <div>
                <h1>About Me</h1>
                <p>My name is Hei Yuen Chan. I graduated in university with a Chemistry degree. I am a self taught web developer from Hong Kong!
                    I am currently looking for a opportunity as a junior developer. I learned web development through The Odin Project curriculum and build different projects.
                </p>
                <p>
                    I developed:
                </p>
                <ul>
                    <li>
                        Static Webistes(Frontend) with HTML,CSS,JavaScript,React
                    </li>
                    <li>
                        RESTful Web API(Backend) with Node.js and Express
                    </li>
                    <li>
                        Managed Databases(Backend) with MongoDB database
                    </li>
                    <li>
                        MERN(MongoDB,Express,React,NodeJS) Stack
                    </li>
                </ul>
                <button>Projects</button>
            </div>
        </div>
    )
}

export default About