import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';
import LogoCasagri from "static/casagri-logo-01.svg";

import './Top_header.css';

const Top_header = () => {
  return (
    <>
        <div className='Top_header-Container-Copy'>
            <div className='ContainerHeader'>
                <div className='content-Top'>
                    <div>
                        <Link to='/' className='Link-Top-Header'>
                            <div className='navbar-logo' >
                                { /*<Logo/>*/ }
                                <img src={ LogoCasagri } alt="Casagri"  />
                            </div> 
                        </Link> 
                    </div>
                </div>
            </div>     
        </div>
    </>
  )
}

export default Top_header;
