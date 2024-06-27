
import React, { useEffect, useState } from 'react';

const Skills = () => {

  const [skills, setSKills] = useState({
    frontend : [],
    backend : [],
    Others:[]
  });

  useEffect(()=>{
    const fetchSkills = () => {
      const skilldata = {
        frontend :[<box-icon type='logo' name='html5' ></box-icon>,
        <box-icon type='logo' name='css3'></box-icon>,
        <box-icon name='javascript' type='logo' ></box-icon>,
        <box-icon type='logo' name='bootstrap'></box-icon>,
        <box-icon type='logo' name='react'></box-icon>,
        <box-icon type='logo' name='redux'></box-icon>],
        backend : [
          <box-icon type='logo' name='nodejs'></box-icon>,
          <box-icon type='logo' name='python'></box-icon>,
          <box-icon type='logo' name='mongodb'></box-icon>,
          <box-icon type='logo' name='django'></box-icon>,
          'SQL',
        ],
        Others : [
          <box-icon type='logo' name='git'></box-icon>,
          <box-icon type='logo' name='visual-studio'></box-icon>,
  
        ]
      }
      setSKills(skilldata)
    }
    fetchSkills()
  },[])
  
    return (
        <div className='skills' id='skills'>
          <h2>Skills</h2>
          <div className='skill-list'>
            <div className='skill-f'>
              <h3>Frontend</h3>
              <ul>
                {skills.frontend.map((skill,index) => {
                  return(
                  <li  key={index} className='skill-index'>{skill}</li>
                  )
                })}
              </ul>
            </div>

            <div className='skill-f'>
                <h3>Backend</h3>
                <ul>
                  {skills.backend.map((skill,index)=>{
                    return(
                      <li key={index} className='skill-index'>{skill}</li>
                    )
                  })}
                </ul>
            </div>
            
            <div className='skill-f'>
                <h3>Others</h3>
                <ul>
                  {skills.Others.map((skill,index)=>{
                    return(
                      <li key={index} className='skill-index'>{skill}</li>
                    )
                  })}
                </ul>
            </div>
          </div>
        </div>
    );
};

export default Skills;