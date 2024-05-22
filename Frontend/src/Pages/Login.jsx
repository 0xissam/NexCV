import React from 'react'
import PagesStyle from '../components/PagesStyle'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <PagesStyle title="Login" main="Home"/>
      {/* Login popup form  */}
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
      }} className='form-top wow fadeInUp'>
        <div className="top-form-header mb-4 text-center">
          <h4>Login To Your Account</h4>
        </div>
        <form action="#" method="post" id="main_login_form" noValidate="">
          <div className="row">
            <div className="col-6 col-md-12">
              <div className="group">
                <input type="text" placeholder='Name' className='form-control' name="name" id="name0" required="" />
              </div>
            </div>
            <div className="col-6 col-md-12">
              <div className="group">
                <input type="password" placeholder='Password' className='form-control' name="name" id="name1" required="" />
              </div>
            </div>
            <div className="col-12 col-sm-5 text-left ">
              <button type="submit" className="btn dream-btn">
                Login
              </button>
            </div>
            <div className="col-12 col-sm-7 text-left">
              <p className="mb-0 mt-10">
                Don't have an account? <Link to="/register">Sign up</Link>
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

export default Login