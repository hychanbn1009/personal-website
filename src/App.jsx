import React from 'react';
import Sidebar from './component/Sidebar/Sidebar.jsx';
import Homepage from './component/Homepage/Homepage.jsx';
import './App.css';
import Projects from './component/Projects/Projects.jsx';
import Skills from './component/Skills/Skills.jsx';
import About from './component/About/About.jsx';
import Contact from './component/Contact/Contact.jsx';
function App() {

  return (
    <div className="App">
      <Sidebar/>
      <div className='content'>
          <Homepage/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
      </div>
    </div>
  );
}

export default App;
