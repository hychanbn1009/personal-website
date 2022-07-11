import React from 'react';
import { Link } from "react-scroll";
import './Sidebar.css';

const Sidebar = (props) =>{

    return(
        <div>
            <div className='sidebar-container'>
            <input type='checkbox' id='sidebar-btn' hidden></input>
            <label htmlFor='sidebar-btn' className='sidebar-toggler'>
                <i className='fa fa-bars'></i>
                <i className="fas fa-times"></i>
            </label>
            <nav id='sidebar'>
                <ul className="list-items">
                    <li><Link to="Home" spy={true} smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="About" spy={true} smooth={true} duration={500}>About</Link></li>
                    <li><Link to="Skills" spy={true} smooth={true} duration={500}>Skills</Link></li>
                    <li><Link to="Projects" spy={true} smooth={true} duration={500}>Projects</Link></li>
                    <li><Link to="Contact" spy={true} smooth={true} duration={500}>Contact</Link></li>   
                    {/* <span class="iconify" data-icon="bxs:sun"></span>
                    <label class="switch">
                        <input type="checkbox" onChange={()=>props.setDark(!props.dark)}/>
                        {console.log(props.dark)}
                        <span class="slider"></span>
                    </label>   
                    <span class="iconify" data-icon="bxs:moon"></span>      */}
                </ul>
            </nav>
            </div>
        </div>

    )
}

export default Sidebar;