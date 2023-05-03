import React from 'react';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';


export default function Clasification({ MarcasProductos }) {

  //let rediret = Enlace.replace(/\s+/g, '');

  return (
    
    <div className='filter__container__Main'>
      <ul style={{paddingLeft:'0rem'}}>
          <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}} >
            <Link 
            className='subtitle__Filter'
            to='' 
            >
              Lo más destacado
            </Link>
            <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
          </li>
          <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
            <Link 
            className='subtitle__Filter'
            to='' 
            >
              Mayor a Menor
            </Link> 
            <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
          </li>
          <li style={{textDecoration:'none', paddingLeft:'0.2rem', paddingRight:'1.7rem', paddingTop:'0.7rem'}}>
            <Link 
            className='subtitle__Filter'
            to='' 
            >
              Menor a Mayor
            </Link> 
            <Divider component="li" style={{marginTop:'0.5rem', opacity:'0.4' }}/> 
          </li>
      </ul>
    </div>
  );
}


