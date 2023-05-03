import React from 'react';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';


export default function Category() {

  //let rediret = Enlace.replace(/\s+/g, '');

  return (
    
    <div className='filter__container__Main'>
      <ul style={{paddingLeft:'0rem'}}>
          <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}} >
            <Link 
            className='subtitle__Filter'
            to={`/Category/${'Agroindustrial'}`}
            >
              Agroindustrial
            </Link>
            <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
          </li>
          <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
            <Link 
            className='subtitle__Filter'
            to={`/Category/${'Maquinarias'}`}
            >
              Maquinarias
            </Link>
            <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
          </li>
          <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
            <Link 
            className='subtitle__Filter'
            to={`/Category/${'Salud Animal'}`}
            >
              Salud Animal
            </Link>
            <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/>  
          </li>
          <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
            <Link 
            className='subtitle__Filter'
            to={`/Category/${'Ferretería'}`}
            >
              Ferretería
            </Link>
            <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/>  
          </li>
          <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
            <Link 
            className='subtitle__Filter'
            to={`/Category/${'Salud Pública'}`}
            >
              Salud Pública
            </Link>
            <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/>  
          </li>
      </ul>
    </div>
  );
}


