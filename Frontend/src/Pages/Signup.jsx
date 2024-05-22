import React from 'react'
import { Link } from 'react-router-dom'
import PagesStyle from '../components/PagesStyle'

function Signup() {
  return (
    <>
    <PagesStyle title="SignUP" main="Home"/>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
      }} className='form-top wow fadeInUp'>
        <div className="top-form-header mb-4 text-center">
          <h4>Create An Account</h4>
        </div>
        <form action="#" method="post" noValidate="">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="group">
                <input type="text" name="name" id="name3" className='form-control' required placeholder='Name' />
              </div>
            </div>
            <div className="col-12 col-md-12">
              <div className="group">
                <input type="email" name="email" id="name4" className='form-control' required placeholder='Email'/>
              </div>
            </div>
            <div className="col-12 col-md-12">
              <div className="group">
                <input type="password" name="name" id="name5" className='form-control' required placeholder='Password'/>
              </div>
            </div>
            <div className="col-12 col-md-12">
              <div className="group">
                <input type="password" name="name" id="name6" className='form-control' required placeholder='Confirm Password'/>
              </div>
            </div>
            <div className="col-12 col-sm-5 text-left ">
              <button type="submit" className="btn dream-btn">
                Create An Account
              </button>
            </div>
            <div className="col-12 col-sm-7 text-left">
              <p className="mb-0 mt-10">
                Do you have an account? <Link to={'/login'}>Login</Link>
              </p>
            </div>
          </div>
        </form>
        <div className="other-accounts text-center">
          <p className="w-text">Login with other account</p>
          <div className="footer-social-info">
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
    </>

  )
}

export default Signup