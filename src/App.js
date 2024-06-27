import React from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Nav from './Components/Nav';
import Projects from './Components/Projects';
import { useMemo, useState } from 'react';


const App = () => {

 
  const[dark,setDark] = useState(false)

  const changetheme = useMemo(() => {
    return{
      background : dark ? "#DCCFED" : "#FFFF" ,
      color : dark ? "#291C3A" : "#331C52"
    }
  },[dark])

  return (
    <div className='app' style={changetheme}>
    <Nav/>
      <label>
              <input type='checkbox' onClick={()=> setDark(!dark)} />
              <span className='slider round'></span>
      </label>
      
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    
    </div>
  );
};

export default App;