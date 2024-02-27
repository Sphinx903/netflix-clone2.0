import React, { useEffect, useState } from 'react';
import './app/Nav.css';

function Nav () {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY> 100) {
      handleShow (true);

    }else{
      handleShow(false);
    }
  }


useEffect(() => {
  window.addEventListener("scroll", transitionNavBar);
  return () => window.removeEventListener('scroll', transitionNavBar);
}, []);

  return (
    <div className= {`nav ${show && "nav_black"}`}>
      <div className='nav_contents'>
      <img 
        className='nav_logo'
        src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' 
        alt=""/>
        <img 
          className='nav_avator'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVnnH3JTon1kHctGnKQwu3TOdoNCLKbJ6D1VuGMxqZiA&s' 
        alt=""
        />
      </div>
        
       

    </div>
  );
}

export default Nav;