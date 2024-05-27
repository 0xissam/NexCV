import React from 'react'
import firstimg from '../img/test-img/1.jpg'
import secondimg from '../img/test-img/2.jpg'
import theardimg from '../img/test-img/3.jpg'
import Adv from './Adv'

function Testimonial() {
  return (
    <>
      <section className="clients_testimonials_area section-padding-0-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading text-center">
                <div className="dream-dots justify-content-center">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <h2>Your Success, Our Inspiration</h2>
                <p>
                  From crafting standout resumes to navigating the job search process, we're here to support you every step of the way.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-around align-items-center">
            <div className="mx-auto">
              <div className="client_slides owl-carousel owl-loaded owl-drag">
                {/* Single Testimonial */}
                {/* Single Testimonial */}
                {/* Single Testimonial */}
                <div className="owl-stage-outer">
                  <div className='row'>
                    <div className="col-lg-4 col-sm-12 col-md-12 owl-item cloned mb-3" style={{ width: 350 }}>
                      <div className="single-testimonial text-center">
                        <div className="icon_wrapper">
                          <i className="fa fa-quote-right" />
                        </div>
                        {/* Testimonial Image */}
                        <div className="testimonial_image">
                          <img src={firstimg} alt="logo" />
                        </div>
                        {/* Testimonial Feedback Text */}
                        <div className="testimonial-description">
                          <div className="testimonial_text">
                            <p>
                            Using NexCV has been a game-changer for me. The seamless interface and insightful guidance have transformed how I approach resume building and job applications. Thanks to NexCv, I've experienced a new level of professionalism in my job search journey. Highly recommended!
                            </p>
                          </div>
                          {/* Admin Text */}
                          <div className="admin_text">
                            <h5>Sunny Khan</h5>
                            <p>One of our Clients</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item col-lg-4 col-sm-12 col-md-12 cloned mb-3" style={{ width: 350 }}>
                      <div className="single-testimonial text-center">
                        <div className="icon_wrapper">
                          <i className="fa fa-quote-right" />
                        </div>
                        {/* Testimonial Image */}
                        <div className="testimonial_image">
                          <img src={secondimg} alt="" />
                        </div>
                        {/* Testimonial Feedback Text  */}
                        <div className="testimonial-description">
                          <div className="testimonial_text">
                            <p>
                            My experience with NexCv has been nothing short of amazing. The efficient tools and resources provided have made the daunting task of resume building a breeze. The impact of using their templates was immediate—I received more interview callbacks than ever before.
                            </p>
                          </div>
                          {/* Admin Text */}
                          <div className="admin_text">
                            <h5>Ajoy Das</h5>
                            <p>One of our Clients</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item col-lg-4 col-sm-12 col-md-12 cloned mb-3" style={{ width: 350 }}>
                      <div className="single-testimonial text-center">
                        <div className="icon_wrapper">
                          <i className="fa fa-quote-right" />
                        </div>
                        {/* Testimonial Image */}
                        <div className="testimonial_image">
                          <img src={theardimg} alt="" />
                        </div>
                        {/* Testimonial Feedback Text  */}
                        <div className="testimonial-description">
                          <div className="testimonial_text">
                            <p>
                            Choosing NexCv was a gratifying decision in my career journey. The insights and support offered have been invaluable. The professionalism of the templates provided helped me present my skills and experience in a compelling way. With NexCv, I felt empowered and confident.
                            </p>
                          </div>
                          {/* Admin Text */}
                          <div className="admin_text">
                            <h5>Jebin Khan</h5>
                            <p>One of our Clients</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Adv />

    </>

  )
}

export default Testimonial