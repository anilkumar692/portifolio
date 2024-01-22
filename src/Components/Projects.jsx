import React from 'react'
import '../styles/projects.css'
import snip from '../styles/snip.PNG'
import todopphoto2 from '../styles/todopphoto2.PNG'
import weatherpphoto from '../styles/weatherpphoto.PNG'

function Projects() {
  return (
    <div className="projectcontainer">


      <div className="projectheading">
        <h3>Projects</h3>
      </div>

      <div className="projectnamebox">

        <div className="project">
        <h3>Restaurent Page</h3>
          <div className="project-detail">
            <img src={snip} alt="notfount" />
            <ul className='projectdescription'>
              <li>Book App is a library catalog, that was developed with the help of Open Library API, with the goal of making all the published works of humankind are available to everyone in the world.</li>
              <li>Tech Stack Used: JavaScript, React Js, Node Js, MongoDB, Express Js, Bootstrap</li>
            </ul>

          </div>


          <div className="project-link">
            <button><a href="https://anilkumar692.github.io/restaurentsite/">live-link</a></button>
            <button><a href="/">Github-link</a></button>
          </div>


        </div>

         
        <div className="project">
        <h3>Weather App</h3>
        <div className="project-detail">
          <img src={weatherpphoto} alt="notfount" />
          <ul className='projectdescription'>
            <li>Book App is a library catalog, that was developed with the help of Open Librar.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, molestiae.</li>
          </ul>

        </div>


        <div className="project-link">
          <button><a href="/">live-link</a></button>
          <button><a href="/">Github-link</a></button>
        </div>


      
    </div>





        <div className="project">
         <h3>To-Do List App </h3>
        
            <div className="project-detail">
              <img src={todopphoto2} alt="notfount" />
              <ul className='projectdescription'>
                <li>Book App is a library catalog, that was developed with the help of Open Librar.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, molestiae.</li>
              </ul>

            </div>


            <div className="project-link">
              <button><a href="https://anilkumar692.github.io/ToDoList/">live-linkkk</a></button>
              <button><a href="/">Github-link</a></button>
            </div>


          
        </div>



        <div className="project">
        <h3>Restaurent Page</h3>
          
            <div className="project-detail">
              <img src={snip} alt="notfount" />
              <ul className='projectdescription'>
                <li>Book App is a library catalog, that was developed with the help of Open Librar.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, molestiae.</li>
              </ul>

            </div>


            <div className="project-link">
              <button><a href="/">live-link</a></button>
              <button><a href="/">Github-link</a></button>
            </div>


         
        </div>



        <div className="project">
        <h3>Restaurent Pagee</h3>
         
            <div className="project-detail">
              <img src={snip} alt="notfount" />
              <ul className='projectdescription'>
                <li>Book App is a library catalog, that was developed with the help of Open Librar.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, molestiae.</li>
              </ul>

            </div>


            <div className="project-link">
              <button className='btn'><a href="/">live-link</a></button>
              <button className='btn'><a href="/">Github-link</a></button>
            </div>


         
        </div>



        <div className="project">
        <h3>Restaurent Page</h3>
         
            <div className="project-detail">
              <img src={snip} alt="notfount" />
              <ul className='projectdescription'>
                <li>Book App is a library catalog, that was developed with the help of Open Librar.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, molestiae.</li>
              </ul>

            </div>


            <div className="project-link">
              <button><a href="/">live-link</a></button>
              <button><a href="/">Github-link</a></button>
            </div>


         
        </div>


      </div>
    </div>









  )
}


export default Projects