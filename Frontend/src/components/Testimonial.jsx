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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.{" "}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="cotainer-fluid">
    <div className="row justify-content-center">
      <div className="col-12 col-md-10 col-xs-10 offset-xs-1">
        <div className="client_slides owl-carousel owl-loaded owl-drag">
          {/* Single Testimonial */}
          {/* Single Testimonial */}
          {/* Single Testimonial */}
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              // style={{
              //   transform: "translate3d(-2108px, 0px, 0px)",
              //   transition: "all 0.7s ease 0s",
              //   width: 4743
              // }}
            >
              <div className="owl-item cloned" style={{ width: 527 }}>
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Error nostrum adipisci porro quisquam. Rem, earum,
                        tenetur? Architecto et, earum repudiandae.
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
              <div className="owl-item cloned" style={{ width: 527 }}>
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Error nostrum adipisci porro quisquam. Rem, earum,
                        tenetur? Architecto et, earum repudiandae.
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
              <div className="owl-item cloned" style={{ width: 527 }}>
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Error nostrum adipisci porro quisquam. Rem, earum,
                        tenetur? Architecto et, earum repudiandae.
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
          {/* <div className="owl-nav disabled">
            <div className="owl-prev">prev</div>
            <div className="owl-next">next</div>
          </div>
          <div className="owl-dots disabled">
            <div className="owl-dot active">01</div>
          </div> */}
        </div>
      </div>
    </div>
  </div>
</section>

<Adv/>

</>

  )
}

export default Testimonial