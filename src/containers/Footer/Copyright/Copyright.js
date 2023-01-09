import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../../assets/Logo';
import { LogoHorizontal } from '../../../assets/Logo';
import './Copyright.css';



const Copyright = () => {

  return (
    <>
        <div className='Container-Copy' style={{backgroundColor:'#2B2B2B'}} >
            <div className='ContainerEd'>
                <div className='content' style={{color:'white'}} >
                    <span> Copyright 2023 - Casagri Company </span>
                </div>
                <Link to='/' className='Logo'>
                    <Logo />
                </Link>
            </div>            
            
        </div>
    </>
  )
}

export default Copyright;
