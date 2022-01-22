import undraw_software_engineer_lvl5 from '../img/undraw/undraw_software_engineer_lvl5.svg'
import Button  from './Button';
const About = ({my_name,role_1,role_2}) => {
  return (
    <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
        <div className="container">
            <div className="row">
                
                <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                    <div className="about-text">
                        <small className="small-text">Welcome to <span className="mobile-block">my portfolio website!</span></small>
                        <h1 className="animated animated-text">
                            <span className="mr-2">Hey folks, I'm</span>
                                <div className="animated-info">
                                    <span className="animated-item">{my_name}</span>
                                    <span className="animated-item">{role_1}</span>
                                    <span className="animated-item">{role_2}</span>
                                </div>
                        </h1>

                        <p>Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.</p>
                        
                        <div className="custom-btn-group mt-4">
                         <Button/>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5 col-md-12 col-12">
                    <div className="about-image svg">
                        <img src={undraw_software_engineer_lvl5} className="img-fluid" alt="svg_image"/>
                    </div>
                </div>

            </div>
        </div>
    </section>

  );
};

export default About;
