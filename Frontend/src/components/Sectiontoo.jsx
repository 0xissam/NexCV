import React from 'react'
import firstimg from '../img/icons/d1.png'
import secondimg from '../img/icons/d2.png'
import theardimg from '../img/icons/d3.png'
import { Link } from 'react-router-dom'

function Sectiontoo() {
  return (
    <>
      <div className="clearfix" />
      <section className="demo-video feat section-padding-100 bub-left">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="services-block-four">
                <div className="inner-box">
                  <div className="icon-img-box">
                    <img src={firstimg} alt="" />
                  </div>
                  <h3>
                    <a href="#">Easy Online Resume Builder</a>
                  </h3>
                  <div className="text">
                    Crafting a professional resume has never been easier with our intuitive online resume builder. Say goodbye to the hassle of formatting and design challenges.
                  </div>
                </div>
              </div>
              <div className="services-block-four">
                <div className="inner-box">
                  <div className="icon-img-box">
                    <img src={secondimg} alt="" />
                  </div>
                  <h3>
                    <a href="#">Expert Guidance, Every Step of the Way</a>
                  </h3>
                  <div className="text">
                    Crafting a compelling resume can be daunting, but with our step-by-step expert tips, you'll navigate the process with ease.
                  </div>
                </div>
              </div>
              <div className="services-block-four" style={{ marginBottom: 0 }}>
                <div className="inner-box">
                  <div className="icon-img-box">
                    <img src={theardimg} alt="" />
                  </div>
                  <h3>
                    <a href="#">Recruiter-Approved Language for Your Resume</a>
                  </h3>
                  <div className="text">
                    Elevate your resume with phrases that recruiters love. Our platform provides a curated selection of recruiter-approved language to help you stand out from the crowd.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="who-we-contant mt-s">
                <div className="dream-dots">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <h4>Why Choose Our Platform?</h4>
                <p style={{
                  color: 'black'
                }}>
                  We understand the importance of first impressions in the competitive job market. That's why our platform provides meticulously designed templates and expert guidance to help you craft a polished and professional resume that captures the attention of employers.
                  With our platform, you can trust that your resume will stand out for all the right reasons, helping you land your dream job. Join us today and take the first step towards a successful career journey!
                </p>
                <p style={{
                  color: 'black'
                }}>
                  Crafting a professional resume is essential for advancing your career. At our platform, we prioritize your success by offering a seamless CV building experience. Our user-friendly interface empowers you to create standout resumes effortlessly, showcasing your skills and achievements effectively.
                </p>
                <Link className="btn dream-btn mt-30" to="/login">
                  lets build your cv
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>


  )
}

export default Sectiontoo