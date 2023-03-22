import React, {useEffect, useState} from 'react'
import { useLocation, Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

//components
import  SearchNavbar  from "../../Search/SearchNavbar";

//logo
import LogoCasagri from "static/casagri-logo-01.svg"

//Estilos
import './Top_header.css'

//icons
import { BsCart3,  BsSearch } from "react-icons/bs"




const Top_header = () => {

    //Constantes de todas las categorias
    const allCategories = 'buscar';

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
                        <Link to='/' className='Link-Top-Header'>
                            <div className='navbar-logo' >
                                {
                                    LogoCasagri != null ? 
                                    (<img src={ LogoCasagri } alt="Casagri" />):
                                    (<Skeleton variant="rectangular" width={64} height={64} />)
                                } 
                            </div> 
                        </Link> 
                </div>
                <div className='content-Top-Op'>
                    <div className='content-Top-options'>
                        <div className='content-Top-options-list'>
                            <div className='content-Top-options-list-link'>
                                <Link to='/' className='content-Top-options-list-link' style={{ textDecoration: 'none'}}>
                                    Inicio
                                </Link> 
                            </div>  
                        </div>
                        <div className='content-Top-options-list'>
                            <div className='content-Top-options-list-link'>
                                <Link  to='/company' className='content-Top-options-list-link' style={{ textDecoration: 'none'}}>
                                    Empresa
                                </Link> 
                            </div>
                        </div>
                        <div className='content-Top-options-list'>
                            <div className='content-Top-options-list-link'>
                                <Link to="/contact" className='content-Top-options-list-link' style={{ textDecoration: 'none'}}>
                                    Contacto
                                </Link>  
                            </div>        
                        </div>
                        

                        {/* Opcones de Icons 
                        <div className='content-Top-options-list-icons-set'>
                            <div className='content-Top-options-list-link' style={{ textDecoration: 'none', fontSize: '18.6px'}}>
                                <Link to='/'>
                                    <BsCart3 className='content-top__icon' />
                                </Link> 
                            </div>
                        </div>
                        */}
                        <div className='content-Top-options-list-icons' >
                            <div className='content-Top-options-list-link' style={{ textDecoration: 'none', fontSize: '18px'}}>
                                <Link to={`/Category/${allCategories}`}>
                                    <BsSearch className='content-top__icon' />
                                </Link>
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