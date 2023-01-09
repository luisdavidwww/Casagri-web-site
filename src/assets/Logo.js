import React from 'react'
import { Link } from 'react-router-dom';
import LogoCasagri from "static/casagri-logo-01.svg";
import LogoCasagriHorizontal from "static/casagri-logo-02.svg";

const Logo = () => {

  return (
    <>
    <div>
      <Link to='/' className='Link-Top-Header'>
        <img src={ LogoCasagri } alt="Logo-Casagri"  style={{marginTop: '10px', height:'70px', width:'175px'}} />
      </Link>   
    </div>
    </>
  )
}

const LogoHorizontal = () => {

  return (
    <>
    <div>
      <Link to='/' className='Link-Top-Header'>
        <img src={ LogoCasagriHorizontal } alt="Logo-Casagri"  style={{marginTop: '10px', height:'70px', width:'175px'}} />
      </Link>   
    </div>
    </>
  )
}
export {Logo, LogoHorizontal};
