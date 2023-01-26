import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';

//logo
import LogoCasagri from "static/casagri-logo-01.svg"

//Estilos
import './Top_header.css'

//icons
import { BsCart3,  BsSearch } from "react-icons/bs"




const Top_header = () => {

    //Constantes de todas las categorias
    const allCategories = 'All';

    //hook que utilizo para llevar el scroll a la parte superior en cada Router
    let location = useLocation();
    useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);


  return (
    <>
        <div className='Top_header-Container-Copy'>
            <div className='ContainerHeader'>
                <div className='content-Top'>
                    <div>
                        <a href='/' className='Link-Top-Header'>
                            <div className='navbar-logo' >
                                <img src={ LogoCasagri } alt="Casagri" />
                            </div> 
                        </a> 
                    </div>
                </div>
                <div className='content-Top-Op'>
                    <div className='content-Top-options'>
                        <div className='content-Top-options-list'>
                            <div className='content-Top-options-list-link'>
                                <a href='/' className='content-Top-options-list-link' style={{ textDecoration: 'none'}}>
                                    Inicio
                                </a> 
                            </div>  
                        </div>
                        <div className='content-Top-options-list'>
                            <div className='content-Top-options-list-link'>
                                <a  href='/company' className='content-Top-options-list-link' style={{ textDecoration: 'none'}}>
                                    Empresa
                                </a> 
                            </div>
                        </div>
                        <div className='content-Top-options-list'>
                            <div className='content-Top-options-list-link'>
                                <a href="/contact" className='content-Top-options-list-link' style={{ textDecoration: 'none'}}>
                                    Contacto
                                </a>  
                            </div>        
                        </div>

                        {/* Opcones de Icons */}
                        <div className='content-Top-options-list-icons-set'>
                            <div className='content-Top-options-list-link' style={{ textDecoration: 'none', fontSize: '18.6px'}}>
                                <a href='/'>
                                    <BsCart3 className='content-top__icon' />
                                </a> 
                            </div>
                        </div>
                        <div className='content-Top-options-list-icons' >
                            <div className='content-Top-options-list-link' style={{ textDecoration: 'none', fontSize: '18px'}}>
                                <a href={`/Category/${allCategories}`}>
                                    <BsSearch className='content-top__icon' />
                                </a>
                            </div> 
                        </div>
                    </div>
                </div> 
            </div>    
        </div>
        
    </>
  )
}

export default Top_header;