import React from 'react'
import cv from '../img/core-img/cv.png'
import check from '../img/icons/check.png'

function Aboutus() {
  return (
    <>
  {/* ##### About Us Area Start ##### */}
  <section className="about-us-area section-padding-100 clearfix mt-5">
    <div className="container">
    <div className="section-heading text-center">
  <div
    className="dream-dots justify-content-center wow fadeInUp"
    data-wow-delay="0.2s"
    style={{
      visibility: "visible",
      animationDelay: "0.2s",
      animationName: "fadeInUp"
    }}
  >
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
  </div>
  <h2
    className="wow fadeInUp"
    data-wow-delay="0.3s"
    style={{
      visibility: "visible",
      animationDelay: "0.3s",
      animationName: "fadeInUp"
    }}
  >
    About us
  </h2>
  {/* <p
    className="wow fadeInUp"
    data-wow-delay="0.4s"
    style={{
      visibility: "visible",
      animationDelay: "0.4s",
      animationName: "fadeInUp"
    }}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan
    nisi Ut ut felis congue nisl hendrerit commodo.
  </p> */}
</div>
      {/* <h2 className='bold text-center h2-color-black'>About Us</h2> */}
      <div className="row align-items-center">
        <div className="col-12 col-lg-6">
          <div className="who-we-contant">
            <div className="dream-dots">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <h4 className="bold">We Deliver The Best</h4>
            <div className="list-wrap align-items-center">
              <div className="row">
                <div className="col-md-12">
                  <div className="side-feature-list-item">
                    <img
                      src={check}
                      className="check-mark-icon"
                      alt=""
                    />
                    <div className="foot-c-info">
                      Proven CV Templates to increase Hiring Chance
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="side-feature-list-item">
                    <img
                      src={check}
                      className="check-mark-icon"
                      alt=""
                    />
                    <div className="foot-c-info">
                      Creative and Clean Templates Design
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="side-feature-list-item">
                    <img
                      src={check}
                      className="check-mark-icon"
                      alt=""
                    />
                    <div className="foot-c-info">
                      Easy and Intuitive Online CV Builder
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="side-feature-list-item">
                    <img
                      src={check}
                      className="check-mark-icon"
                      alt=""
                    />
                    <div className="foot-c-info">
                      Free to use. Developed by hiring professionals.
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="side-feature-list-item">
                    <img
                      src={check}
                      className="check-mark-icon"
                      alt=""
                    />
                    <div className="foot-c-info">
                      Fast Easy CV and Resume Formatting
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="side-feature-list-item">
                    <img
                      src={check}
                      className="check-mark-icon"
                      alt=""
                    />
                    <div className="foot-c-info">
                      Recruiter Approved Phrases.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div
            className="welcome-meter wow fadeInUp mt-s"
            data-wow-delay="0.3s"
          >
            <img src={cv} className="center-block" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ##### About Us Area End ##### */}
</>

  )
}

export default Aboutus