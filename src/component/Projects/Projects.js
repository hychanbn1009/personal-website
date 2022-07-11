import React from "react";
import ProjectList from "./ProjectList";
import SkillList from "../Skills/SkillList";
import "./Projects.css"


const Projects =()=>{

    return(
        <div className="projectlist-container" id="Projects">
            <h1>Projects</h1>
                <section className="projects-container">
                    {ProjectList.map((project)=>{
                        return(
                            <div className="project-container">
                                <img src={project.image} alt={project.name}/>
                                <div className="project-detail-container">
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                    <div className="button-group">
                                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                            <button className="live-button">Demo</button>
                                        </a>
                                        <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                            <button className="code-button">Code</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </section>
        </div>
    )
}

export default Projects