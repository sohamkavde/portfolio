import React from 'react';
import './project.css';
import Image1 from '../../image/p1.JPG';
import Image2 from '../../image/p2.JPG';
import Image3 from '../../image/p3.JPG'
import Image4 from '../../image/p4.JPG';
import Image5 from '../../img/github.JPG';
// import Image6 from '../../image/p6';
const project = () => {
  return (
    <section id='projects'>
        <div className="project-head" id='projectsHead'>
          Projects
        </div>
      <div className="project-container">
        <div className="project-img">
          <img src={Image1} alt="Projects" width="100%" height="100%" />
        </div>
        <div className="project-name"><p>Pixel perfect</p><p><a href="https://pixel-perfect.vercel.app/">Live</a></p></div>
      </div>

      <div className="project-container">
        <div className="project-img">
          <img src={Image2} alt="Projects" width="100%" height="100%" />
        </div>
        <div className="project-name"><p>OpenSea Clone</p><p><a href="https://opensea-six.vercel.app/">Live</a></p></div>
      </div>


      <div className="project-container">
        <div className="project-img">
          <img src={Image3} alt="Projects" width="100%" height="100%" />
        </div>
        <div className="project-name"><p>ToDo</p><p><a href="https://todo-zeta-cyan.vercel.app/">Live</a></p></div>
      </div>


      <div className="project-container">
        <div className="project-img">
          <img src={Image4} alt="Projects" width="100%" height="100%" />
        </div>
        <div className="project-name"><p>text-transformer</p><p><a href="https://text-work.vercel.app/">Live</a></p></div>
      </div>

      <div className="project-container">
        <div className="project-img">
          <img src={Image5} alt="Projects" width="100%" height="100%" />
        </div>
        <div className="project-name"><p>Github</p><p><a href="https://github.com/sohamkavde/">Live</a></p></div>
      </div>

      {/* 


      <div className="project-container">
        <div className="project-img">
          <img src={Image6} alt="Projects" width="100%" height="100%" />
        </div>
        <div className="project-name"><p>Voice App</p><p><a href="#">Live</a></p></div>
      </div> */}


   


    </section>
  )
}

export default project
