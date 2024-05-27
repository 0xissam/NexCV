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
              Explore our platform's standout attributes, designed to enhance your experience.
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
                  Increase your chances of landing your dream job with our proven CV templates. Our carefully crafted templates are designed to impress hiring managers and showcase your skills and experience.
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
                  Elevate your resume with our collection of creative, modern, and clean template designs. Our templates are meticulously crafted to provide a fresh and stylish presentation that captures attention.
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
                  Create your professional CV or resume effortlessly with our easy and intuitive online builder. Our platform simplifies the process, guiding you through each step with clarity and ease.
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
                  Our platform is both free to use and developed by hiring professionals, ensuring that you have access to top-quality tools without any financial burden.
                  Created by experts who understand the intricacies of the hiring process.
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
                  Utilize recruiter-approved phrases seamlessly integrated with module notifications.
                  Our platform ensures that your resume shines with language that resonates with hiring professionals.
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
                  Quickly format your CV and resume with ease using our platform. We understand the importance of efficiency when it comes to job applications, which is why we've designed our tool to streamline the formatting process. Don't let formatting headaches slow you down.
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