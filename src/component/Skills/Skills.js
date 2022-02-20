import React from "react";
import SkillList from "./SkillList";
import "./Skill.css"

const Skills =()=>{

    return(
        <div className="skills-container">
            <div>
                <h1>Skills</h1>
                <h2>Front-End</h2>
                    <div className="icon-container">
                        {SkillList.map((skill)=>{
                            if(skill.area==="front-end"){
                                return(
                                    <div>
                                        <p>{skill.name}</p>
                                        <img src={skill.image} alt={skill.name}/>
                                    </div>
                                )
                            }else{
                                return ''
                            }
                        })}
                    </div>
                <h2>Back-End</h2>
                    <div className="icon-container">
                        {SkillList.map((skill)=>{
                            if(skill.area==="back-end"){
                                return(
                                    <div>
                                        <p>{skill.name}</p>
                                        <img src={skill.image} alt={skill.name}/>
                                    </div>
                                )
                            }else{
                                return ''
                            }
                        })}
                    </div>
                <h2>Others</h2>
                <div className="icon-container">
                    {SkillList.map((skill)=>{
                        if(skill.area==="other"){
                            return(
                                <div>
                                    <p>{skill.name}</p>
                                    <img src={skill.image} alt={skill.name}/>
                                </div>
                            )
                        }else{
                            return ''
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills