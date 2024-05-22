import React from 'react'
import fimg from '../img/demos/demo-1.png'
import simg from '../img/demos/demo-2.png'
import timg from '../img/demos/demo-3.png'

function Oct() {
  return (
    <section className="demo section-padding-100 ring-bg">
  <div className="container">
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
      <h2 className="bold">Our Creative Templates</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="demo-item">
          <a href="template-preview.html">
            <img
              src={fimg}
              alt="demo"
              className="img-responsive"
            />
          </a>
          <div className="preview-btn-wrapper text-center">
            <a className="preview-demo" href="template-preview.html">
              See template <i className="fa fa-long-arrow-right" />
            </a>
            <a className="preview-demo v2" href="template-edit.html">
              Use template <i className="fa fa-long-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="demo-item">
          <a href="template-preview.html">
            <img
              src={simg}
              alt="demo"
              className="img-responsive"
            />
          </a>
          <div className="preview-btn-wrapper text-center">
            <a className="preview-demo" href="template-preview.html">
              See template <i className="fa fa-long-arrow-right" />
            </a>
            <a className="preview-demo v2" href="template-edit.html">
              Use template <i className="fa fa-long-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="demo-item">
          <a href="template-preview.html">
            <img
              src={timg}
              alt="demo"
              className="img-responsive"
            />
          </a>
          <div className="preview-btn-wrapper text-center">
            <a className="preview-demo" href="template-preview.html">
              See template <i className="fa fa-long-arrow-right" />
            </a>
            <a className="preview-demo v2" href="template-edit.html">
              Use template <i className="fa fa-long-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Oct