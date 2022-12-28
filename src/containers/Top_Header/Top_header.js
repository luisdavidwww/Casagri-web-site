import React from 'react';
import { Link } from 'react-router-dom';
import LogoCasagri from "static/casagri-logo-01.svg";


/*Icons*/
import { BsCart3 } from "react-icons/bs";
import { SlUser } from "react-icons/sl";

//estilos
import './Top_header.css';
import '../../Styles/GlobalStyles.css'

const Top_header = () => {


  return (
    <>
        <div className='Top_header-Container-Copy'>
            <div className='ContainerHeader'>
                <div className='content-Top'>
                    <div>
                        <Link to='/' className='Link-Top-Header'>
                            <div className='navbar-logo' >
                                <img href='/' src={ LogoCasagri } alt="Casagri" />
                            </div> 
                        </Link> 
                    </div>
                </div>
                <div className='content-Top-Op'>
                <div className='content-Top-options'>
                    <div className='content-Top-options-list'>
                        <Link to='/' className='content-Top-options-list-link' style={{ textDecoration: 'none'}}>
                            Inicio
                        </Link>   
                    </div>
                    <div className='content-Top-options-list'>
                        <Link to='/Company' className='content-Top-options-list-link' style={{ textDecoration: 'none'}}>
                            Empresa
                        </Link> 
                    </div>
                    <div className='content-Top-options-list'>
                        <Link to="/Contact" className='content-Top-options-list-link' style={{ textDecoration: 'none'}}>
                            Contacto
                        </Link> 
                    </div>

                    {/* Opcones de Icons */}
                    <div className='content-Top-options-list-icons-set'>
                        <Link to='/' className='content-Top-options-list-link' style={{ textDecoration: 'none', fontSize: '18.6px'}}>
                            <BsCart3 />
                        </Link> 
                    </div>
                    <div className='content-Top-options-list-icons'>
                        <Link to='/' className='content-Top-options-list-link' style={{ textDecoration: 'none', fontSize: '18px'}}>
                            <SlUser />
                        </Link> 
                    </div>
                </div>
            </div> 
            </div>    
        </div>
        
    </>
  )
}

export default Top_header;
