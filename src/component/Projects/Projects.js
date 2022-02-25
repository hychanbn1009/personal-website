import React from "react";
import ProjectList from "./ProjectList";
import "./Projects.css"
import SkillList from "../Skills/SkillList";

const Projects =()=>{

    return(
        <div>
            <h1>Projects</h1>
            <div className="project-display">
                    {ProjectList.map((project)=>{
                        return(
                            <div className="project-container">
                                <div>
                                    <img className="project-img" src={project.image} alt={project.name}></img>
                                    <h3>{project.name}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <div className="demo-btn-group">
                                    <button className="demo-btn"><a href={project.liveDemo} target="_blank" rel="noopener noreferrer"><i class="far fa-eye"></i> Live Demo</a></button>
                                    <button className="repo-btn"><a href={project.repo} target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> Repo</a></button>
                                </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Projects