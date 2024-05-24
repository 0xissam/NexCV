import React, { useState, useEffect } from 'react';
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [togeld, setTogeld] = useState(false);
  const userStorage = localStorage.getItem('user');
  const localUser = JSON.parse(userStorage);
  const user = useSelector((state) => state.user.value ? state.user.value : null) ?? localUser ? localUser.token : null;

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function toggleFunc() {
    setTogeld(!togeld);
  }

  return (
    <header className={`header-area ${isSticky ? 'sticky' : ''}`}>
      <div className="classy-nav-container bg-primary text-light dark breakpoint-off left">
        <div className="container">
          <nav className="classy-navbar justify-content-between" id="dreamNav">
            <Link className="nav-brand text-light" to="/">
              <img src={logo} alt="logo" />
            </Link>
            <div onClick={toggleFunc} className="classy-navbar-toggler">
              <span className={`navbarToggler ${togeld ? 'active' : ''}`}>
                <span />
                <span />
                <span />
              </span>
            </div>
            <div className={`classy-menu ${togeld ? 'menu-on' : ''}`}>
              <div onClick={toggleFunc} className="classycloseIcon">
                <div className="cross-wrap">
                  <span className="top" />
                  <span className="bottom" />
                </div>
              </div>
              <div className="classynav">
                <ul id="nav">
                  <li>
                    <Link className='text-light' to="/">Home</Link>
                  </li>
                  <li>
                    <Link className='text-light' to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link className='text-light' to="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link className='text-light' to="/contact">Contact</Link>
                  </li>
                </ul>
                {user ? (
                  <Link to="/dashboard" className="btn login-btn" style={{ marginLeft: '8px' }}>
                    Dashboard
                  </Link>
                ) : (
                  <>
                    <Link to="/login" className="btn login-btn">
                      Log in
                    </Link>
                    <Link to="/register" className="btn login-btn" style={{ marginLeft: '8px' }}>
                      Signup
                    </Link>
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
