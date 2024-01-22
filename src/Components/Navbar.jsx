import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'

import '../styles/Navbar.css'

const name='<anil kumar />'


function Navbar() {
    const [mystyle, setmystyle] = useState({
        left: '-100%'
    })
  
    const functionclick = () => {
        if (mystyle.left === '-100%')
            setmystyle({ left: 0, transition: '1s' });
        else
            setmystyle({ left: '-100%', transition: '1s' });

        console.log("clicked")
    
    }


    return (
        <div className='navbar'>
            <label htmlFor="" className='logo'>{name}</label>



            <ul style={mystyle} className='list-items'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
                <li><NavLink to="/Skills">Skills</NavLink></li>
                <li><NavLink to="/Projects">Projects</NavLink></li>
                {/* <li><NavLink to="/Education">Education</NavLink></li> */}
            </ul>
          
            <div className="menu" onClick={functionclick}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default Navbar