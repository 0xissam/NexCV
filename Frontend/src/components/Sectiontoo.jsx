import React from 'react'
import firstimg from '../img/icons/d1.png'
import secondimg from '../img/icons/d2.png'
import theardimg from '../img/icons/d3.png'

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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium modi assumenda.
              </div>
            </div>
          </div>
          <div className="services-block-four">
            <div className="inner-box">
              <div className="icon-img-box">
                <img src={secondimg} alt="" />
              </div>
              <h3>
                <a href="#">Step by Step Expert Tips</a>
              </h3>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit skaj
                gjska consectetur adipisicing elit.
              </div>
            </div>
          </div>
          <div className="services-block-four" style={{ marginBottom: 0 }}>
            <div className="inner-box">
              <div className="icon-img-box">
                <img src={theardimg} alt="" />
              </div>
              <h3>
                <a href="#">Recruiter Approved Phrases</a>
              </h3>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium modi.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              dictum risus, non suscipit arcu. Quisque aliquam posuere tortor,
              sit amet convallis nunc scelerisque in.
            </p>
            <p style={{
              color: 'black'
            }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              eius molestiae facere, natus reprehenderit eaque eum, autem ipsam.
              Magni, error. Tempora odit laborum iure inventore possimus
              laboriosam qui nam. Fugit!
            </p>
            <a className="btn dream-btn mt-30" href="templates.html">
              lets build your cv
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default Sectiontoo