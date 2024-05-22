import React from 'react'
import sideimage from '../img/svg/img-dollar.svg'
import banner from '../img/core-img/banner2.png'

function Welcome() {
  return (
    <>
  {/* ##### Welcome Area Start ##### */}
  <section className="welcome_area demo2 flex align-items-center">
    <div className="container">
      <div className="row align-items-center">
        {/* Welcome Content */}
        <div className="col-12 col-lg-6 col-md-12">
          <div className="welcome-content v2">
            <div className="promo-section">
              <div className="integration-link light">
                <span className="integration-icon">
                  <img
                    src={sideimage}
                    width={24}
                    height={24}
                    alt=""
                  />
                </span>
                <span className="integration-text">
                  Discover The Easiest ways to Build Your CV!
                </span>
              </div>
            </div>
            <h1 className="wow fadeInUp" data-wow-delay="0.2s">
              Online CV Builder With Creative Templates.
            </h1>
            <p className="wow fadeInUp mb-3" style={{
              color: 'black'
            }} data-wow-delay="0.2s">
              Our Perfect resume builder takes the hassle out of resume writing.
              Choose from several templates and follow easy prompts to create
              the perfect job-ready resume.
            </p>
            <div className="dream-btn-group wow fadeInUp" data-wow-delay="0.4s">
              <a href="#" className="btn dream-btn green-btn mr-3">
                Choose Template
              </a>
              <a href="#" className="btn dream-btn green-btn">
                {" "}
                contact us
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-12">
          <div className="banner-box">
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ##### Welcome Area End ##### */}
</>

  )
}

export default Welcome