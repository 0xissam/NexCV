import React from 'react'
import '../style.css'
import logo from '../img/logo.svg'

function Footer() {
  return (
    <footer className="footer-area bg-img">
  <div className="footer-content-area spec">
    <div className="container">
      <div className="row ">
        <div className="col-12 col-lg-4 col-md-6">
          <div className="footer-copywrite-info">
            {/* Copywrite */}
            <div className="copywrite_text fadeInUp" data-wow-delay="0.2s">
              <div className="footer-logo">
                <img src={logo} alt="logo" />
                {/* <a href="#">
                  <h3>NexCV</h3>
                </a> */}
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                ducimus voluptatibus neque illo id repellat quisquam? Autem
                expedita earum quae laborum ipsum ad.
              </p>
            </div>
            {/* Social Icon */}
            <div className="footer-social-info fadeInUp" data-wow-delay="0.4s">
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
              <a href="#">
                {" "}
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
              <a href="#">
                <i className="fa fa-google-plus" aria-hidden="true" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
              <a href="#">
                <i className="fa fa-linkedin" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-6">
          <div className="contact_info_area d-sm-flex justify-content-between">
            {/* Content Info */}
            <div
              className="contact_info mt-x text-center fadeInUp"
              data-wow-delay="0.3s"
            >
              <h5>PRIVACY &amp; TOS</h5>
              <a href="#">
                <p>Advertiser Agreement</p>
              </a>
              <a href="#">
                <p>Acceptable Use Policy</p>
              </a>
              <a href="#">
                <p>Privacy Policy</p>
              </a>
              <a href="#">
                <p>Technology Privacy</p>
              </a>
              <a href="#">
                <p>Developer Agreement</p>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-2 col-md-6 ">
          {/* Content Info */}
          <div className="contact_info_area d-sm-flex justify-content-between">
            <div
              className="contact_info mt-s text-center fadeInUp"
              data-wow-delay="0.2s"
            >
              <h5>NAVIGATE</h5>
              <a href="#">
                <p>Advertisers</p>
              </a>
              <a href="#">
                <p>Developers</p>
              </a>
              <a href="#">
                <p>Resources</p>
              </a>
              <a href="#">
                <p>Company</p>
              </a>
              <a href="#">
                <p>Connect</p>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-6 ">
          <div className="contact_info_area d-sm-flex justify-content-between">
            {/* Content Info */}
            <div
              className="contact_info mt-s text-center fadeInUp"
              data-wow-delay="0.4s"
            >
              <h5>CONTACT US</h5>
              <p>Mailing Address:xx00 E. Union Ave</p>
              <p>Suite 1100. Denver, CO 80237</p>
              <p>+999 90932 627</p>
              <p>support@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer