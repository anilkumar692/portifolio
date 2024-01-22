import React from 'react'
import '../styles/phomestyle.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'











function Home() {
  return (
    <div className='home'>
      <div className="home1">
        <div className='intro'>
          <h6>Hi,I'm <span>Anil kumar</span></h6>
         <h6>Web Devloper</h6>
          <div className="buttons">
            <a href="/"> <button className="button-Hire" >Hire Me</button></a>
            <a href="https://drive.google.com/file/d/1EEefKb1ebameIR4mD43_XM8ViVhOpnS1/view?usp=drivesdk"><button className="button-Hire">Resume</button></a>
           
           
           </div>
          <div className="icons">
            <div className='iconbox'><a href="/"><FontAwesomeIcon icon={faGithub} className='iconstyle'/></a></div>
            <div className='iconbox'><a href="/"><FontAwesomeIcon icon={faLinkedin} className='iconstyle'/></a></div>
            {/* <div className='iconbox'><a href="/"><FontAwesomeIcon icon={faFacebook} className='iconstyle'/></a></div> */}
            <div className='iconbox'><a href="/"><FontAwesomeIcon icon={faInstagram} className='iconstyle'/></a></div>
            <div className='iconbox'><a href="/"><FontAwesomeIcon icon={faTwitter} className='iconstyle'/></a></div>
         `</div>
          <div>

          </div>
        </div>

      </div>
      <div className="home2">

        

      </div>
    </div>
  )
}

export default Home