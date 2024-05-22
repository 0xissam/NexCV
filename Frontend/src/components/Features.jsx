import React from 'react'
import firstimg from '../img/icons/f1.png'
import secondimg from '../img/icons/f2.png'
import therdimg from '../img/icons/f3.png'
import forthimg from '../img/icons/f4.png'
import fifthimg from '../img/icons/f5.png'
import sixthimg from '../img/icons/f6.png'

function Features() {
  return (
    <>
  {/* ##### Our features Area Start ##### */}
  <section className="our_services_area section-padding-100-70" id="services">
    <div className="container">
      <div className="section-heading text-center">
        {/* Dream Dots */}
        <div
          className="dream-dots justify-content-center wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <h2 className="wow fadeInUp" data-wow-delay="0.3s">
          Our Main Features
        </h2>
        <p className="wow fadeInUp" style={{
              color: 'black'
            }} data-wow-delay="0.4s">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </p>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 col-lg-4">
          {/* Content */}
          <div
            className="service_single_content text-center mb-100 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            {/* Icon */}
            <div className="service_icon">
              <img src={firstimg} alt="" />
            </div>
            <h6>Proven CV Templates to increase Hiring Chance</h6>
            <p style={{
              color: 'black'
            }}>
              Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque
              quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing
              elit.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          {/* Content */}
          <div
            className="service_single_content text-center mb-100 wow wow fadeInUp"
            data-wow-delay="0.3s"
          >
            {/* Icon */}
            <div className="service_icon">
              <img src={secondimg} alt="" />
            </div>
            <h6>Creative, Modern and Clean Templates Design</h6>
            <p style={{
              color: 'black'
            }}>
              Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque
              quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing
              elit.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          {/* Content */}
          <div
            className="service_single_content text-center mb-100 wow fadeInUp"
            data-wow-delay="0.4s"
          >
            {/* Icon */}
            <div className="service_icon">
              <img src={therdimg} alt="" />
            </div>
            <h6>Easy and Intuitive Online CV and Resume Builder </h6>
            <p style={{
              color: 'black'
            }}>
              Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque
              quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing
              elit.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          {/* Content */}
          <div
            className="service_single_content text-center mb-100 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            {/* Icon */}
            <div className="service_icon">
              <img src={forthimg} alt="" />
            </div>
            <h6>Free to use. Developed by hiring professionals.</h6>
            <p style={{
              color: 'black'
            }}>
              Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque
              quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing
              elit.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          {/* Content */}
          <div
            className="service_single_content text-center mb-100 wow fadeInUp"
            data-wow-delay="0.6s"
          >
            {/* Icon */}
            <div className="service_icon">
              <img src={fifthimg} alt="" />
            </div>
            <h6>Recruiter Approved Phrases with Module Notification</h6>
            <p style={{
              color: 'black'
            }}>
              Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque
              quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing
              elit.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          {/* Content */}
          <div
            className="service_single_content text-center mb-100 wow fadeInUp"
            data-wow-delay="0.7s"
          >
            {/* Icon */}
            <div className="service_icon">
              <img src={sixthimg} alt="" />
            </div>
            <h6>Fast Easy CV and Resume Formatting</h6>
            <p style={{
              color: 'black'
            }}>
              Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque
              quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing
              elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ##### Our features Area End ##### */}
</>

  )
}

export default Features