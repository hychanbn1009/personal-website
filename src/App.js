import React from 'react';
import Sidebar from './component/Sidebar/Sidebar';
import Homepage from './component/Homepage/Homepage';
import './App.css';
import Projects from './component/Projects/Projects';
import Skills from './component/Skills/Skills';
import About from './component/About/About';
import Contact from './component/Contact/Contact';

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
