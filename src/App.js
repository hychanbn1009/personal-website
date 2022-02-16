import React from 'react';
import Sidebar from './component/Sidebar/Sidebar';
import Homepage from './component/Homepage/Homepage';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Contact from './component/Contact/Contact';
import Projects from './component/Projects/Projects';
import Skills from './component/Skills/Skills';
import About from './component/About/About';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className='content'>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
