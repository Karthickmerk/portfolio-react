import React from 'react';
import image01 from '../img/project/project-image01.png'
import image02 from '../img/project/project-image02.png'
import image03 from '../img/project/project-image03.png'
import image04 from '../img/project/project-image04.png'
import image05 from '../img/project/project-image05.png'
const Projects = () => {
  return (
    <section className="project py-5" id="project">
    <div className="container">
            
            <div className="row">
              <div className="col-lg-11 text-center mx-auto col-12">

                  <div className="col-lg-8 mx-auto">
                    <h2>Things I have designed for digital media agencies</h2>
                  </div>

                  <div className="owl-carousel owl-theme">
                    <div className="item">
                      <div className="project-info">
                        <img src={image01} className="img-fluid" alt="project"/>
                      </div>
                    </div>

                    <div className="item">
                      <div className="project-info">
                        <img src={image02} className="img-fluid" alt="project"/>
                      </div>
                    </div>

                    <div className="item">
                      <div className="project-info">
                        <img src={image03} className="img-fluid" alt="project"/>
                      </div>
                    </div>

                    <div className="item">
                      <div className="project-info">
                        <img src={image04} className="img-fluid" alt="project"/>
                      </div>
                    </div>

                    <div className="item">
                      <div className="project-info">
                        <img src={image05} className="img-fluid" alt="project"/>
                      </div>
                    </div>
                  </div>

              </div>
            </div>
    </div>
</section>
  );
};

export default Projects;
