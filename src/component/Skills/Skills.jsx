import React from "react";
import SkillList from "./SkillList.jsx";
import "./Skill.css"

const Skills =()=>{

    return(
        <div className="skills-container" id="Skills">
            <h1>Skills</h1>
            <div className="cards-container">
                <div className="card-container">
                    <h3>Front End</h3>
                    <div className="icon-container">
                        {SkillList.map((skill)=>{
                            if(skill.area==="front-end"){
                                return(
                                    <div className="icon" key={`front-${skill.name}`}>
                                        <img src={skill.image} alt={skill.name}/>
                                        <p>{skill.name}</p>
                                    </div>
                                )
                            }else{
                                return null
                            }
                        })}
                    </div>
                </div>
                <div className="card-container">
                    <h3>Back End</h3>
                    <div className="icon-container">
                        {SkillList.map((skill)=>{
                            if(skill.area==="back-end"){
                                return(
                                    <div className="icon" key={`front-${skill.name}`}>
                                        <img src={skill.image} alt={skill.name}/>
                                        <p>{skill.name}</p>
                                    </div>
                                )
                            }else{
                                return null
                            }
                        })}
                    </div>
                </div>
                <div className="card-container">
                    <h3>Others</h3>
                    <div className="icon-container">
                        {SkillList.map((skill)=>{
                            if(skill.area==="other"){
                                return(
                                    <div className="icon" key={`front-${skill.name}`}>
                                        <img src={skill.image} alt={skill.name}/>
                                        <p>{skill.name}</p>
                                    </div>
                                )
                            }else{
                                return null
                            }
                        })}
                    </div>
                </div>
                {/* <h2>Front-End</h2>
                    <div className="icon-container">
                        {SkillList.map((skill)=>{
                            if(skill.area==="front-end"){
                                return(
                                    <div className="icon" key={`front-${skill.name}`}>
                                        <img src={skill.image} alt={skill.name}/>
                                        <p>{skill.name}</p>
                                    </div>
                                )
                            }else{
                                return null
                            }
                        })}
                    </div>
                <h2>Back-End</h2>
                    <div className="icon-container">

                    </div>
                <h2>Others</h2>
                <div className="icon-container">
                    {SkillList.map((skill)=>{
                        if(skill.area==="other"){
                            return(
                                <div className="icon">
                                    <img src={skill.image} alt={skill.name}></img>
                                    <p>{skill.name}</p>
                                </div>
                            )
                        }else{
                            return null
                        }
                    })}
                </div> */}
            </div>
        </div>
    )
}

export default Skills