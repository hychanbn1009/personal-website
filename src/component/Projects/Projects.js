import React from "react";
import ProjectList from "./ProjectList";
import "./Projects.css"

const Projects =()=>{
    return(
        <div>
            <div>
                <h1>Projects</h1>
                <div className="project-display">
                        {ProjectList.map((project)=>{
                            return(
                                <div className="project-container">
                                    <div>
                                        <img className="project-img" src={project.image}></img>
                                        <div className="demo-btn-group">
                                        <button className="demo-btn"><a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a></button>
                                        <button className="repo-btn"><a href={project.repo} target="_blank" rel="noopener noreferrer">Repo</a></button>
                                    </div>
                                    </div>
                                    <div className="project-details">
                                        <p>{project.name}</p>
                                        <p>{project.description}</p>
                                        {/* {project.technologies.map((technology)=>{
                                            return(
                                            <ul>
                                                <li>{technology}</li>
                                            </ul>
                                            )
                                        })} */}
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default Projects