import React from 'react';
import Sidebar from './component/Sidebar/Sidebar';
import Homepage from './component/Homepage/Homepage';
import './App.css';
import { Routes,Route,Navigate } from 'react-router-dom';
import Projects from './component/Projects/Projects';
import Skills from './component/Skills/Skills';
import About from './component/About/About';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className='content'>
        <Routes>
            <Route path='/personal-website' element={<Navigate to="/"/>}/>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;