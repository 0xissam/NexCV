import React from 'react'
import fimg from '../img/core-img/custom.png'
import { Link } from 'react-router-dom'

function Adv() {
  return (
    <section className="container section-padding-100-0">
  <div className="subscribe">
    <div className="row align-items-center relative">
      <img src={fimg} alt="" className="custom" />
      <div className="col-lg-5 col-lg-offset-3 col-md-9 col-xs-12">
        <h2 className="bold mb-0">
          Do you Need a Complete Custom CV Template?
        </h2>
      </div>
      <div className="col-lg-3 col-lg-offset-1 col-md-3 col-sm-12 text-center">
        <Link className="button mt-s" to="/contact">
          Send a Request
        </Link>
      </div>
    </div>
  </div>
</section>

  )
}

export default Adv