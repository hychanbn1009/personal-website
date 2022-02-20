import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () =>{
    return(
        <div className='sidebar-container'>
            <input type='checkbox' id='sidebar-btn' hidden></input>
            <label htmlFor='sidebar-btn' className='sidebar-toggler'>
                <i className='fa fa-bars'></i>
                <i className="fas fa-times"></i>
            </label>
            <nav id='sidebar'>
                <ul className="list-items">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/skills'>Skills</NavLink></li>
                    <li><NavLink to='/projects'>Projects</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
            </nav>
        </div>
    )
}

export default Sidebar