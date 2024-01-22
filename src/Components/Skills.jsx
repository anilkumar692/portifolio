import React from 'react'
import '../styles/skills.css'

function Skills() {
  return (
    <div className='skillbox'>
      <div className="skillheading">
      <h1>Skills</h1>
      </div>
        <div className="skillcontainer">
         
            <div className="skilllogo html">
              <img src="https://img.icons8.com/color/144/html-5--v1.png" alt="html-5--v1"/>
              <h2><a href="/">html</a></h2>
              
              </div>
            <div className="skilllogo css">
            <img src="https://img.icons8.com/color/144/css3.png" alt="css3"/>
              <h2><a href="/">CSS</a></h2>
             
            </div>
            <div className="skilllogo javascript">
            <img src="https://img.icons8.com/color/144/javascript.png" alt="javascript"/>
              <h2><a href="/">Javascript</a></h2>
             
            </div>
            <div className="skilllogo reactjs">
            <img src="https://img.icons8.com/deco/144/jquery.png" alt="jquery"/>
              <h2><a href="/">Jquery</a></h2>
             
            </div>
            <div className="skilllogo jquery">
            <img src="https://img.icons8.com/color-glass/144/bootstrap.png" alt="bootstrap"/>
              <h2><a href="/">Bootstrap</a></h2>
              
            </div>
            <div className="skilllogo bootstrap">
            <img width="144" height="144" src="https://img.icons8.com/plasticine/200/react.png" alt="react"/>
              <h2><a href="/">React.js</a></h2>
             
            </div>
            <div className="skilllogo python">
            <img width="144" height="144" src="https://img.icons8.com/color/144/python--v1.png" alt="python--v1"/>
              <h2><a href="/">python</a></h2>
             
            </div>
            <div className="skilllogo mui ">
            <img width="144" height="144" src="https://img.icons8.com/color/144/material-ui.png" alt="material-ui"/>
              <h2><a href="/">Material-ui</a></h2>
             
            </div>
        </div>
    </div>
  )
}

export default Skills