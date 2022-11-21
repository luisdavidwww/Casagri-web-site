import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';

import './Top_header.css';

const Top_header = () => {
  return (
    <>
        <div className='Top_header-Container-Copy'>
            <div className='ContainerHeader'>
                <div className='content-Top'>
                    <div>
                        <Link to='/' className='Link-Top-Header'>
                            <Logo/>
                        </Link> 
                    </div>
                    <Link to='#' className='Link-Top-Header'>
                        <span >0251 - 8149220 </span>
                    </Link>    
                </div>
                <div className='content-Top'>
                    <Link to='#' className='Link-Top-Header'>
                        <span>info@agromaxgroup.com</span>
                    </Link>   
                </div>
            </div>     
        </div>
        <div className='Linea'></div> 
    </>
  )
}

export default Top_header;
