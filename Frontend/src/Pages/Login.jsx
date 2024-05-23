import React, { useState } from 'react'
import PagesStyle from '../components/PagesStyle'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../features/User/user';
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = {
    'email': email,
    'password': password
  }
  
  const handleSubmit =  async (e) => {
    e.preventDefault();
    
    const Proxy = "https://mycoreproxy-74d7d6780461.herokuapp.com/"
    try {
      const response = await axios.post(`${Proxy}https://nexcvapi-4800a18b462c.herokuapp.com/auth/login`, data)
      dispatch(login(response.data))
      navigate('/dashboard');
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <PagesStyle title="Login" main="Home" />
      {/* Login popup form  */}
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
      }} className='form-top wow fadeInUp'>
        <div className="top-form-header mb-4 text-center">
          <h4>Login To Your Account</h4>
        </div>
        <form action='#' onSubmit={handleSubmit} method="post" id="main_login_form" noValidate="">
          <div className="row">
            <div className="col-6 col-md-12">
              <div className="group">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='form-control' name="email" id="name0" required="" />
              </div>
            </div>
            <div className="col-6 col-md-12">
              <div className="group">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='form-control' name="name" id="name1" required="" />
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