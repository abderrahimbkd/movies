import React, { useEffect, useState } from 'react';
import './Nav.css';
import { useNavigate } from 'react-router';
const Nav = () => {
  const [show, handleShow] = useState(false);
  const history = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav && ${show && 'nav_black'}`}>
      <div className="nav_contents">
        <img
          onClick={() => history('/')}
          className="nav_logo"
          src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
          alt="logo"
        />
        <img
          onClick={() => history('/profile')}
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Nav;
