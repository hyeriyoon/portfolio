import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';
import Nav from './Nav';
import NavDesktop from './NavDesktop';
import Logo from '../images/logo.png';


export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  function hamburgerFunc (){
    setNavOpen(!navOpen);
    console.log(navOpen); 

  }
 

  return (
    <header>
    <Link className="logo" to="/"><img src={Logo} alt="website logo" /></Link>
    <Hamburger hamburgerFunc = {hamburgerFunc}/>
    <Nav navOpen={navOpen}/>
    <NavDesktop />
    </header>
  )
}

