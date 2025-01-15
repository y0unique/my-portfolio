import React from 'react';
//components
import NavLinks from './NavLinks';

function Nav() {
  
  //to make it back to top when the logo is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <nav className='navbar'>
          {}
          <NavLinks navLinks='web'/>
          <NavLinks navLinks='phone'/>
      </nav>
    </>
  )
}

export default Nav