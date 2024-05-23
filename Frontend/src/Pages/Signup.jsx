import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PagesStyle from '../components/PagesStyle'
import axios from 'axios'
import { toast, Toaster } from 'react-hot-toast';

function Signup() {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [name, setName] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null);

  const data = {
    'name': name,
    'email': email,
    'password': password,
    'confirmPassword': confirmPassword
  }


  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (name == null) {
      toast.error('Provide your Name')
    } else if (email == null) {
      toast.error('Provided your Email Address')
    } else if (password == null) {
      toast.error('Provided Your Password')
    } else if (confirmPassword == null) {
      toast.error('Confirm Your password')
    } else if (password !== confirmPassword) {
      toast.error('Passwords does not match')
    } else {
      toast.success('Account Created Successfully')
    }

    const Proxy = "https://mycoreproxy-74d7d6780461.herokuapp.com/"

    try {
      const response = await axios.post(`${Proxy}https://nexcvapi-4800a18b462c.herokuapp.com/auth/register/`, data)
      console.log(response.data);
      if (response.data) {
        toast.success(response.data.message)
      }
      navigate('/login');
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <Toaster />
      <PagesStyle title="Sign Up" main="Home" />
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
      }} className='form-top wow fadeInUp'>
        <div className="top-form-header mb-4 text-center">
          <h4>Create An Account</h4>
        </div>
        <form onSubmit={handleSubmit} method="post" noValidate="">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="group">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" id="name3" className='form-control' placeholder='Name' />
              </div>
            </div>
            <div className="col-12 col-md-12">
              <div className="group">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="name4" className='form-control' placeholder='Email' />
              </div>
            </div>
            <div className="col-12 col-md-12">
              <div className="group">
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="password" id="name5" className='form-control' placeholder='Password' />
              </div >
            </div >
            <div className="col-12 col-md-12">
              <div className="group">
                <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} name="confirmPassword" id="name6" className='form-control' placeholder='Confirm Password' />
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
          </div >
        </form >
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
      </div >
    </>

  )
}

export default Signup