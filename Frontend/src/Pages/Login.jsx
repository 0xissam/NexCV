import React, { useState } from 'react';
import PagesStyle from '../components/PagesStyle';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../features/User/user';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = {
    'email': email,
    'password': password
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email && !password) {
      toast.error('Provide all the required Information');
      return;
    } else if (!email) {
      toast.error('Provide your email to login');
      return;
    } else if (!password) {
      toast.error('Provide your password to login');
      return;
    }

    const Proxy = "https://mycoreproxy-74d7d6780461.herokuapp.com/";
    try {
      const response = await axios.post(`${Proxy}https://nexapi-2e84832bb07e.herokuapp.com/auth/login`, data);
      dispatch(login(response.data));
      localStorage.setItem('user', JSON.stringify(response.data));
      if (response.data) {
        toast.success('Login Successful');
      }
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
        toast.error(error.response.data.message);
      } else {
        console.error(error);
        toast.error('An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <>
      <Toaster />
      <PagesStyle title="Login" main="Home" />
      <div style={{ maxWidth: '600px', margin: '0 auto' }} className='form-top wow fadeInUp'>
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
              <div className="group" style={{ position: 'relative' }}>
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='form-control' name="password" id="name1" required="" />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer'
          
                  }}>
                  <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                </span>
              </div>
            </div>
            <div className="col-12 col-sm-5 text-left">
              <button type="submit" className="btn dream-btn">Login</button>
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
            <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
            <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
            <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
            <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
            <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
